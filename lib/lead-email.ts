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
//   LEAD_EMAIL_FROM  defaults to Resend's shared test sender, which can only deliver
//                    to the Resend account owner's own address. Fine while that is
//                    gulflineai@gmail.com; verify gulflineai.com in Resend before
//                    sending anywhere else.

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
    const { error } = await new Resend(key).emails.send({
      from: process.env.LEAD_EMAIL_FROM || 'Gulfline AI Leads <onboarding@resend.dev>',
      to: process.env.LEAD_EMAIL_TO || 'gulflineai@gmail.com',
      subject,
      text,
      html,
      ...(replyTo ? { replyTo } : {}),
    })
    if (error) {
      console.error('Lead email rejected:', error)
      return false
    }
    return true
  } catch (err) {
    console.error('Lead email error:', err)
    return false
  }
}
