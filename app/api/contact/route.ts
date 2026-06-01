import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const SHEET_URL = process.env.SHEETS_URL // server-side only, no NEXT_PUBLIC prefix

    if (!SHEET_URL) {
      return NextResponse.json({ ok: false, error: 'Sheet URL not configured' }, { status: 500 })
    }

    const res = await fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    // Apps Script returns 200 even on redirect, just confirm we got a response
    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Contact form error:', err)
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}
