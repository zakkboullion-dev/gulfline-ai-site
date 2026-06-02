import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getIP } from '@/lib/rate-limit'

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
When relevant, suggest pages using these exact tags — the UI renders them as clickable buttons:
LINK:/services|View All Services
LINK:/portfolio|See Our Work
LINK:/contact|Get a Free Quote
LINK:/about|About Gulfline AI

RULES:
- Never invent prices, timelines, or guarantees.
- If you don't know something, say so and offer to connect them with the team.
- Keep responses to 2-4 sentences unless the question genuinely needs more.
- You represent Gulfline AI. Be proud of it, but don't oversell.`

// Input validation
const MAX_MESSAGE_LENGTH = 1000      // chars per message
const MAX_MESSAGES = 20             // max conversation history
const MAX_TOTAL_CHARS = 8000        // total conversation size

function validateMessages(messages: any[]): string | null {
  if (!Array.isArray(messages)) return 'Invalid messages format'
  if (messages.length === 0) return 'No messages provided'
  if (messages.length > MAX_MESSAGES) return 'Conversation too long'

  let totalChars = 0
  for (const msg of messages) {
    if (typeof msg.role !== 'string') return 'Invalid message role'
    if (!['user', 'assistant'].includes(msg.role)) return 'Invalid message role'
    if (typeof msg.content !== 'string') return 'Invalid message content'
    if (msg.content.length > MAX_MESSAGE_LENGTH) return 'Message too long'
    totalChars += msg.content.length
    if (totalChars > MAX_TOTAL_CHARS) return 'Conversation exceeds size limit'
  }

  // Last message must be from user
  if (messages[messages.length - 1].role !== 'user') return 'Last message must be from user'

  return null
}

function sanitizeText(text: string): string {
  // Strip any potential script injection from AI response before sending to client
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .trim()
}

export async function POST(req: NextRequest) {
  // ── Rate limiting: 20 requests per IP per minute ──
  const ip = getIP(req)
  const { allowed, remaining } = rateLimit(ip, { limit: 20, windowMs: 60 * 1000 })

  if (!allowed) {
    return NextResponse.json(
      { text: 'Too many messages. Give it a minute and try again.', links: [] },
      {
        status: 429,
        headers: {
          'Retry-After': '60',
          'X-RateLimit-Remaining': '0',
        },
      }
    )
  }

  try {
    // ── Origin check — only accept requests from our domain ──
    const origin = req.headers.get('origin') || ''
    const referer = req.headers.get('referer') || ''
    const isValidOrigin =
      origin.includes('gulflineai.com') ||
      referer.includes('gulflineai.com') ||
      process.env.NODE_ENV === 'development'

    if (!isValidOrigin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // ── Content-type check ──
    const contentType = req.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    // ── Parse + validate body (20KB max) ──
    let body: any
    try {
      const rawBody = await req.text()
      if (rawBody.length > 20000) {
        return NextResponse.json({ text: 'Message too large.', links: [] }, { status: 413 })
      }
      body = JSON.parse(rawBody)
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }

    const { messages } = body
    const validationError = validateMessages(messages)
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    // ── Check API key ──
    const GROQ_KEY = process.env.GROQ_API_KEY
    if (!GROQ_KEY) {
      console.error('GROQ_API_KEY is not set')
      return NextResponse.json({
        text: 'Configuration error — email gulflineai@gmail.com directly.',
        links: [],
      })
    }

    // ── Call Groq ──
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_KEY}`,
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        max_tokens: 512,
        temperature: 0.65,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      const errMsg = data.error?.message || 'Groq API error'
      console.error('Groq API error:', errMsg)
      return NextResponse.json({
        text: 'Bart is having trouble connecting. Email gulflineai@gmail.com directly.',
        links: [],
      })
    }

    const rawText = sanitizeText(data.choices?.[0]?.message?.content || '')

    // ── Parse lead capture ──
    let lead = null
    const leadMatch = rawText.match(/LEAD_CAPTURE:(\{.*?\})/s)
    if (leadMatch) {
      try { lead = JSON.parse(leadMatch[1]) } catch {}
      // Validate lead fields
      if (lead) {
        lead.name = String(lead.name || '').slice(0, 100)
        lead.email = String(lead.email || '').slice(0, 200)
        lead.phone = String(lead.phone || '').slice(0, 30)
        lead.service = String(lead.service || '').slice(0, 200)
      }
    }

    // ── Forward lead to Google Sheet ──
    if (lead?.email && process.env.SHEETS_URL) {
      try {
        await fetch(process.env.SHEETS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            submissionId: Math.random().toString(36).slice(2, 10).toUpperCase(),
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            businessName: '',
            location: '',
            industry: '',
            service: lead.service,
            message: 'Lead captured via Bart chatbot',
            source: 'bart-chatbot',
          }),
        })
      } catch (e) {
        console.error('Lead sheet error:', e)
      }
    }

    // ── Parse quick links ──
    const linkMatches = [...rawText.matchAll(/LINK:([^\|]+)\|([^\n]+)/g)]
    const links = linkMatches
      .map(m => ({ href: m[1].trim(), label: m[2].trim() }))
      .filter(l => l.href.startsWith('/')) // only allow internal links

    // ── Clean display text ──
    const cleanText = rawText
      .replace(/LEAD_CAPTURE:\{.*?\}/s, '')
      .replace(/LINK:[^\n]*/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim()

    return NextResponse.json(
      { text: cleanText, links, lead },
      { headers: { 'X-RateLimit-Remaining': String(remaining) } }
    )

  } catch (err: any) {
    console.error('Bart route error:', err)
    return NextResponse.json({
      text: 'Something went wrong on my end. Email gulflineai@gmail.com directly.',
      links: [],
    })
  }
}
