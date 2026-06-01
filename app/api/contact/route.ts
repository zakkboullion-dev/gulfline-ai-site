import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const SHEET_URL = process.env.SHEETS_URL

    if (!SHEET_URL) {
      return NextResponse.json({ ok: false, error: 'SHEETS_URL env var is missing — check Vercel environment variables' }, { status: 500 })
    }

    let res: Response
    try {
      res = await fetch(SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        redirect: 'follow',
      })
    } catch (fetchErr: any) {
      return NextResponse.json({ ok: false, error: `Failed to reach Apps Script: ${fetchErr.message}` }, { status: 500 })
    }

    // Read the Apps Script response
    const text = await res.text()

    let parsed: any = {}
    try { parsed = JSON.parse(text) } catch {}

    if (parsed.ok === false) {
      return NextResponse.json({ ok: false, error: `Apps Script error: ${parsed.error}` }, { status: 500 })
    }

    return NextResponse.json({ ok: true })

  } catch (err: any) {
    console.error('Contact form error:', err)
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}
