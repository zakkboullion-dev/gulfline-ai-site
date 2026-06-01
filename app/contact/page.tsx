'use client'

import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const industries = [
  'Restaurants & Food Service',
  'Retail & E-Commerce',
  'Construction & Real Estate',
  'Legal & Political',
  'Healthcare & Wellness',
  'Finance & Insurance',
  'Marketing & Advertising',
  'Logistics & Transportation',
  'Education & Training',
  'Local Service Business',
  'Other',
]

const services = [
  'Website Design & Development',
  'Shopify / E-Commerce Store',
  'Web App or Client Portal',
  'AI Chatbot',
  'Lead Intake & Automation',
  'CRM Integration',
  'SMS & Email Pipeline',
  'Not sure — need advice',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [industry, setIndustry] = useState('')
  const [service, setService] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const fd = new FormData(form)

    // Honeypot check
    if (fd.get('website_url')) { setSubmitting(false); return }

    const payload = {
      timestamp: new Date().toISOString(),
      submissionId: Math.random().toString(36).slice(2, 10).toUpperCase(),
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      businessName: String(fd.get('businessName') || ''),
      location: String(fd.get('location') || ''),
      industry,
      service,
      message: String(fd.get('message') || ''),
      source: 'gulflineai.com/contact',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (!data.ok) throw new Error(data.error || 'Submission failed')
      setSubmitted(true)
      form.reset()
      setIndustry('')
      setService('')
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please email us directly at gulflineai@gmail.com')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main style={{ background: 'var(--navy)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div className="container mx-auto px-4 py-24 text-center lg:px-8">
            <div
              style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'rgba(34,211,238,0.1)',
                border: '1px solid rgba(34,211,238,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}
            >
              <CheckCircle2 size={32} color="var(--cyan)" />
            </div>
            <h1 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 700, fontSize: '2.5rem', color: 'var(--white)', marginBottom: '1rem' }}>
              We got it.
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '30rem', margin: '0 auto' }}>
              We will review your submission and reach out within 24 hours to set up a call. Talk soon.
            </p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main style={{ background: 'var(--navy)' }}>

        {/* Hero */}
        <section style={{ background: 'var(--navy-mid)', padding: '5rem 0 4rem', borderBottom: '1px solid var(--border)' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '40rem' }}>
              <div className="badge-cyan mb-5">Free Consultation</div>
              <h1
                style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                  color: 'var(--white)',
                  lineHeight: 1.1,
                  marginBottom: '1.25rem',
                }}
              >
                Tell us what you need.<br />
                <span style={{ color: 'var(--cyan)' }}>We&apos;ll handle the rest.</span>
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                Fill this out and we will reach out within 24 hours. The first call is always free — no pitch, just a real conversation about your business.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section style={{ padding: '4rem 0 6rem' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '44rem', margin: '0 auto' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* Honeypot */}
                <input name="website_url" type="text" style={{ display: 'none' }} autoComplete="off" tabIndex={-1} />

                {error && (
                  <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '1rem', fontSize: '0.9rem', color: '#FCA5A5' }}>
                    {error}
                  </div>
                )}

                {/* Row 1 */}
                <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                  <div>
                    <label className="label-dark" htmlFor="name">Full Name *</label>
                    <input className="input-dark" id="name" name="name" required placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="label-dark" htmlFor="email">Email *</label>
                    <input className="input-dark" id="email" name="email" type="email" required placeholder="jane@company.com" />
                  </div>
                </div>

                {/* Row 2 */}
                <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                  <div>
                    <label className="label-dark" htmlFor="phone">Phone *</label>
                    <input className="input-dark" id="phone" name="phone" required placeholder="(555) 000-0000" />
                  </div>
                  <div>
                    <label className="label-dark" htmlFor="businessName">Business Name *</label>
                    <input className="input-dark" id="businessName" name="businessName" required placeholder="Acme Co." />
                  </div>
                </div>

                {/* Row 3 */}
                <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                  <div>
                    <label className="label-dark" htmlFor="location">City / State *</label>
                    <input className="input-dark" id="location" name="location" required placeholder="Lake Charles, LA" />
                  </div>
                  <div>
                    <label className="label-dark" htmlFor="industry-select">Industry</label>
                    <select
                      className="input-dark"
                      id="industry-select"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                    >
                      <option value="">Select industry</option>
                      {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="label-dark" htmlFor="service-select">What do you need built?</label>
                  <select
                    className="input-dark"
                    id="service-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="label-dark" htmlFor="message">Tell us more about your project</label>
                  <textarea
                    className="input-dark"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What are you trying to build or improve? Any timeline or budget in mind?"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Submit — We\'ll Reach Out Within 24 Hours'}
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'rgba(240,244,255,0.3)' }}>
                  Or email us directly at{' '}
                  <a href="mailto:gulflineai@gmail.com" style={{ color: 'var(--cyan)' }}>gulflineai@gmail.com</a>
                </p>

              </form>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
