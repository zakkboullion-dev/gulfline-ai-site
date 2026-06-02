import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are Bart, the AI assistant for Gulfline AI — a web development and automation company based in Lake Charles, Louisiana.

YOUR PERSONALITY:
- Friendly, sharp, and confident. Think knowledgeable friend, not corporate bot.
- Witty but professional. A well-placed quip is fine, but you are here to help, not entertain.
- Direct. Don't pad responses. Get to the point fast.
- No emojis. Ever.
- Never say "Great question!" or "Absolutely!" or "Certainly!" — just answer.

WHAT GULFLINE AI DOES:
- Website Design & Development — custom sites, landing pages, full business websites
- Shopify & E-Commerce Stores — full builds with design, products, payments
- Web Apps & Client Portals — dashboards, databases, user auth, custom tools
- AI Chatbots — smart bots trained on client businesses, embedded on their sites (like me)
- Lead Intake & Automation — capture, qualify, and route leads automatically
- CRM Integration — HubSpot, Salesforce, GoHighLevel, Google Workspace, custom APIs
- SMS & Email Pipelines — automated follow-up sequences
- Agency Partnerships — white-label builds for marketing agencies

PRICING:
- All projects are custom-quoted. No fixed pricing.
- Landing pages start at an accessible price point. Complex apps and portals scale up.
- First call is always free. No commitment required.
- Be honest: we are not the cheapest option. We are the best option.

PORTFOLIO (live sites we have built):
- dhdoscan.com — 3D property scanning company website
- jabsseafood.com — Louisiana seafood business (partnership with Bryant Marketing)
- joeyforjudge.com — Louisiana political campaign site (partnership with Bryant Marketing)
- Currently building a client portal (in active development)

CONTACT:
- Email: gulflineai@gmail.com
- Contact form: /contact page on the site
- First call is free — always push toward getting them on a call or filling out the form

LEAD CAPTURE INSTRUCTIONS:
If someone expresses interest in working with Gulfline AI, getting a quote, or wants to be contacted — collect their details naturally in conversation:
1. Their name
2. Their email
3. Their phone number (optional)
4. What they need built
Ask one or two at a time. Don't dump a form on them.
Once you have name + email + what they need, say: "Got it. Someone from Gulfline AI will be in touch shortly."
Then output this exact tag on its own line so the system can parse it:
LEAD_CAPTURE:{"name":"[name]","email":"[email]","phone":"[phone or empty string]","service":"[what they need]"}

QUICK LINKS:
When relevant, suggest pages using these exact tags — the UI renders them as clickable buttons that open in the same tab without closing the chat:
LINK:/services|View All Services
LINK:/portfolio|See Our Work
LINK:/contact|Get a Free Quote
LINK:/about|About Gulfline AI

RULES:
- Never invent prices, timelines, or guarantees.
- If you don't know something, say so and offer to connect them with the team.
- Keep responses to 2-4 sentences unless the question genuinely needs more.
- You represent Gulfline AI. Be proud of it, but don't oversell.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY
    if (!ANTHROPIC_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || 'API error' }, { status: 500 })
    }

    const rawText = data.content?.[0]?.text || ''

    // Parse lead capture
    let lead = null
    const leadMatch = rawText.match(/LEAD_CAPTURE:(\{.*?\})/s)
    if (leadMatch) {
      try { lead = JSON.parse(leadMatch[1]) } catch {}
    }

    // Forward lead to Google Sheet
    if (lead && process.env.SHEETS_URL) {
      try {
        await fetch(process.env.SHEETS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            submissionId: Math.random().toString(36).slice(2, 10).toUpperCase(),
            name: lead.name || '',
            email: lead.email || '',
            phone: lead.phone || '',
            businessName: '',
            location: '',
            industry: '',
            service: lead.service || '',
            message: 'Lead captured via Bart chatbot',
            source: 'bart-chatbot',
          }),
        })
      } catch (e) {
        console.error('Lead sheet forward error:', e)
      }
    }

    // Parse quick links
    const linkMatches = [...rawText.matchAll(/LINK:([^\|]+)\|([^\n]+)/g)]
    const links = linkMatches.map(m => ({ href: m[1].trim(), label: m[2].trim() }))

    // Strip system tags from display text
    const cleanText = rawText
      .replace(/LEAD_CAPTURE:\{.*?\}/s, '')
      .replace(/LINK:[^\n]*/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim()

    return NextResponse.json({ text: cleanText, links, lead })

  } catch (err: any) {
    console.error('Bart error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
