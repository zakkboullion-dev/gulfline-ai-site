import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getIP } from '@/lib/rate-limit'

// Allowed fields — whitelist only, nothing else passes through
const ALLOWED_FIELDS = ['timestamp', 'submissionId', 'name', 'email', 'phone', 'businessName', 'location', 'industry', 'service', 'message', 'source']
const MAX_FIELD_LENGTH = 1000

function sanitizeString(val: unknown, maxLen = MAX_FIELD_LENGTH): string {
  if (typeof val !== 'string') return ''
  return val
    .replace(/<[^>]*>/g, '')        // strip HTML tags
    .replace(/[<>'"]/g, '')          // strip dangerous chars
    .trim()
    .slice(0, maxLen)
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  // ── Rate limit: 5 submissions per IP per 10 minutes ──
  const ip = getIP(req)
  const { allowed } = rateLimit(ip, { limit: 5, windowMs: 10 * 60 * 1000 })

  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: 'Too many submissions. Please wait before trying again.' },
      { status: 429, headers: { 'Retry-After': '600' } }
    )
  }

  // ── Origin check ──
  const origin = req.headers.get('origin') || ''
  const referer = req.headers.get('referer') || ''
  const isValidOrigin =
    origin.includes('gulflineai.com') ||
    referer.includes('gulflineai.com') ||
    process.env.NODE_ENV === 'development'

  if (!isValidOrigin) {
    return NextResponse.json({ ok: false, error: 'Forbidden' }, { status: 403 })
  }

  // ── Check content type ──
  const contentType = req.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }

  // ── Parse body ──
  let body: any
  try {
    const rawBody = await req.text()
    // Reject oversized payloads (50KB max)
    if (rawBody.length > 50000) {
      return NextResponse.json({ ok: false, error: 'Request too large' }, { status: 413 })
    }
    body = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }

  // ── Honeypot check ──
  if (body.website_url) {
    // Bot filled the honeypot — silently accept but don't forward
    return NextResponse.json({ ok: true })
  }

  // ── Validate required fields ──
  const name = sanitizeString(body.name)
  const email = sanitizeString(body.email, 200)
  const phone = sanitizeString(body.phone, 30)

  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 400 })
  }
  if (!email || !validateEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Valid email is required' }, { status: 400 })
  }

  // ── Build clean whitelist-only payload ──
  const cleanPayload = {
    timestamp: new Date().toISOString(),
    submissionId: Math.random().toString(36).slice(2, 10).toUpperCase(),
    name,
    email,
    phone,
    businessName: sanitizeString(body.businessName),
    location: sanitizeString(body.location, 200),
    industry: sanitizeString(body.industry, 100),
    service: sanitizeString(body.service, 200),
    message: sanitizeString(body.message, 2000),
    source: 'gulflineai.com/contact',
  }

  // ── Deliver to the client portal (primary destination) ──
  // Leads land in call_requests and show up in the portal's admin queue at
  // portal.gulflineai.com/admin/call-requests, where the organizer agent also
  // flags any lead left unanswered past 24h. Server-to-server, so no CORS.
  const PORTAL_INTAKE_URL =
    process.env.PORTAL_INTAKE_URL || 'https://portal.gulflineai.com/api/public/call-request'

  const contextBits = [
    cleanPayload.service && `Service: ${cleanPayload.service}`,
    cleanPayload.businessName && `Business: ${cleanPayload.businessName}`,
    cleanPayload.location && `Location: ${cleanPayload.location}`,
    cleanPayload.industry && `Industry: ${cleanPayload.industry}`,
  ]
    .filter(Boolean)
    .join(' · ')
  const topic = [
    `[gulflineai.com contact]${contextBits ? ' ' + contextBits : ''}`,
    cleanPayload.message || '(no message)',
  ]
    .join('\n\n')
    .slice(0, 2000) // portal-side cap (call_requests.topic CHECK)

  let portalOk = false
  try {
    const portalRes = await fetch(PORTAL_INTAKE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Pass the visitor's IP through so the portal rate-limits real clients,
        // not this server's egress IP.
        'x-forwarded-for': ip,
      },
      body: JSON.stringify({ name, email, phone, topic, companyWebsite: '' }),
    })
    portalOk = portalRes.ok
    if (!portalOk) console.error('Portal intake failed:', portalRes.status)
  } catch (err) {
    console.error('Portal intake error:', err)
  }

  // ── Forward to Google Sheet (best-effort secondary copy, only if configured) ──
  const SHEET_URL = process.env.SHEETS_URL
  let sheetOk = false
  if (SHEET_URL) {
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanPayload),
        redirect: 'follow',
      })
      sheetOk = true
    } catch (err) {
      console.error('Sheet forward error:', err)
    }
  }

  if (portalOk || sheetOk) {
    return NextResponse.json({ ok: true })
  }
  // Don't expose internal error details
  return NextResponse.json(
    { ok: false, error: 'Submission failed. Please email gulflineai@gmail.com directly.' },
    { status: 500 }
  )
}
