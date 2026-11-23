import { NextRequest, NextResponse } from 'next/server'
import { emailLead } from '@/lib/lead-email'
import { rateLimit, getIP } from '@/lib/rate-limit'

// Newsletter signup. Emails the address to us first, because the portal's database
// pauses when idle and a signup sent only there is lost. The portal is still tried
// afterwards as a backup, with a short timeout so a paused database can't hang the form.

const PORTAL_SUBSCRIBE_URL =
  process.env.PORTAL_SUBSCRIBE_URL || 'https://portal.gulflineai.com/api/public/subscribe'

export async function POST(req: NextRequest) {
  const ip = getIP(req)
  const { allowed } = rateLimit(ip, { limit: 5, windowMs: 10 * 60 * 1000 })
  if (!allowed) {
    return NextResponse.json({ ok: false }, { status: 429, headers: { 'Retry-After': '600' } })
  }

  let body: { email?: unknown; companyWebsite?: unknown }
  try {
    const raw = await req.text()
    if (raw.length > 2000) return NextResponse.json({ ok: false }, { status: 413 })
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  // Honeypot: a bot filled the hidden field. Accept silently, deliver nothing.
  if (body.companyWebsite) return NextResponse.json({ ok: true })

  const email = typeof body.email === 'string' ? body.email.trim().slice(0, 200) : ''
  if (!/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const emailOk = await emailLead('New newsletter signup', [
    ['Email', email],
    ['Consent', 'Signed up through the newsletter form'],
    ['Source', 'gulflineai.com footer'],
    ['When', new Date().toISOString()],
  ])

  let portalOk = false
  try {
    const res = await fetch(PORTAL_SUBSCRIBE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-forwarded-for': ip },
      body: JSON.stringify({ email, companyWebsite: '' }),
      signal: AbortSignal.timeout(5000),
    })
    portalOk = res.ok
    if (!portalOk) console.error('Portal subscribe failed:', res.status)
  } catch (err) {
    console.error('Portal subscribe error:', err)
  }

  if (emailOk || portalOk) return NextResponse.json({ ok: true })
  return NextResponse.json({ ok: false }, { status: 500 })
}
