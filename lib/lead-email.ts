import { Resend } from 'resend'

// Emails a lead straight to Gulfline — the first place a lead should land, because
// it's the one place someone actually looks. The portal and the Google Sheet are
// still tried after this, as backups.
//
// Inert until RESEND_API_KEY is set in Vercel, so shipping this changes nothing on
// its own: it returns false and the other delivery paths run exactly as before.
//
//   RESEND_API_KEY   GulflineAI's own Resend account. Never DHDO's.
//   LEAD_EMAIL_TO    defaults to gulflineai@gmail.com
//   LEAD_EMAIL_FROM  optional. When unset, notifications@gulflineai.com is tried
//                    first and Resend's shared test sender second (see SENDERS).

// Senders to try, in order. The domain sender only works on a Resend account that has
// verified gulflineai.com. Resend's shared test sender works on any account but only
// delivers to that account owner's own address, so it is the fallback: if the key in
// use belongs to an account without the domain, leads still reach the owner's inbox.
const SENDERS = process.env.LEAD_EMAIL_FROM
  ? [process.env.LEAD_EMAIL_FROM]
  : [
      // mail.gulflineai.com is the sending domain verified in Gulfline's own Resend
      // account. The root domain belongs to an older Resend account, so it stays as
      // a second try in case that account's key is ever used here again.
      'Gulfline AI Leads <notifications@mail.gulflineai.com>',
      'Gulfline AI Leads <notifications@gulflineai.com>',
      'Gulfline AI Leads <onboarding@resend.dev>',
    ]

const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)

export async function emailLead(
  subject: string,
  fields: [label: string, value: string | undefined][],
  replyTo?: string,
): Promise<boolean> {
  const key = process.env.RESEND_API_KEY
  if (!key) return false

  const rows = fields.filter(([, v]) => v && String(v).trim())
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')
  const html =
    `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="color:#555;vertical-align:top;white-space:nowrap"><b>${esc(k)}</b></td>` +
          `<td style="white-space:pre-wrap">${esc(String(v))}</td></tr>`,
      )
      .join('') +
    `</table>`

  try {
    const resend = new Resend(key)
    for (const from of SENDERS) {
      const { error } = await resend.emails.send({
      from,
      to: process.env.LEAD_EMAIL_TO || 'gulflineai@gmail.com',
      subject,
      text,
      html,
      ...(replyTo ? { replyTo } : {}),
      })
      if (!error) return true
      console.error(`Lead email rejected from ${from}:`, error)
    }
    return false
  } catch (err) {
    console.error('Lead email error:', err)
    return false
  }
}
