'use client'

import { useState } from 'react'

// Standalone list signup for the footer — for people who want the writing but
// aren't ready to fill in a five-field contact form.
//
// Posts straight to the portal's public subscribe endpoint, which is rate
// limited, honeypotted, and pins the consent record server-side. The response is
// deliberately uniform, so this component can't tell "added" from "already on
// the list" — and it shouldn't, since that would leak list membership.
export function NewsletterSignup() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const endpoint =
    process.env.NEXT_PUBLIC_SUBSCRIBE_URL ||
    'https://portal.gulflineai.com/api/public/subscribe'

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const email = String(fd.get('email') || '').trim()
    if (!email) return

    setState('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          companyWebsite: String(fd.get('companyWebsite') || ''),
        }),
      })
      // 429 is the one failure worth distinguishing — otherwise a rate-limited
      // visitor gets a cheerful "you're in" and never hears from us.
      setState(res.ok ? 'done' : 'error')
      if (res.ok) e.currentTarget.reset()
    } catch {
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <p className="text-sm leading-relaxed text-white/60">
        You&rsquo;re on the list. We&rsquo;ll send something worth reading, or nothing
        at all.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2.5">
      <label htmlFor="footer-email" className="block text-sm text-white/50">
        Occasional notes on using AI in a small business. No more than monthly.
      </label>

      {/* Honeypot */}
      <input
        name="companyWebsite"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          placeholder="you@yourbusiness.com"
          disabled={state === 'sending'}
          style={{
            flex: '1 1 12rem',
            minWidth: 0,
            padding: '0.55rem 0.75rem',
            fontSize: '0.875rem',
            color: '#F0F4FF',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '8px',
          }}
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          style={{
            padding: '0.55rem 1rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#0B1220',
            background: '#22D3EE',
            border: 0,
            borderRadius: '8px',
            cursor: state === 'sending' ? 'default' : 'pointer',
            opacity: state === 'sending' ? 0.7 : 1,
            whiteSpace: 'nowrap',
          }}
        >
          {state === 'sending' ? 'Adding…' : 'Sign up'}
        </button>
      </div>

      {state === 'error' && (
        <p className="text-sm text-white/50">
          That didn&rsquo;t go through. Email{' '}
          <a href="mailto:gulflineai@gmail.com" style={{ color: '#22D3EE' }}>
            gulflineai@gmail.com
          </a>{' '}
          and we&rsquo;ll add you by hand.
        </p>
      )}
    </form>
  )
}
