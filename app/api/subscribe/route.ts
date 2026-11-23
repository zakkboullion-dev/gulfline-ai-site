import { NextRequest, NextResponse } from 'next/server'
import { emailLead } from '@/lib/lead-email'
import { rateLimit, getIP } from '@/lib/rate-limit'

// Newsletter signup. Emails the address to us and nothing else. It used to forward to
// the portal as well, but the portal's database pauses when idle, which made every
// signup wait out a timeout. The email is the record.

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

  if (emailOk) return NextResponse.json({ ok: true })
  return NextResponse.json({ ok: false }, { status: 500 })
}
