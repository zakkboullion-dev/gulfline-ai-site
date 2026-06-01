import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Globe, Zap, Users, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Gulfline AI',
  description: 'Gulfline AI is a Lake Charles, Louisiana web development and AI automation company. We build websites, apps, chatbots, and lead pipelines for businesses of all sizes.',
}

const pillars = [
  {
    icon: Globe,
    title: 'We build. We do not consult.',
    body: 'Every engagement ends with something live, working, and yours. No strategy decks, no endless planning. We ship.',
  },
  {
    icon: Zap,
    title: 'One team. Full scope.',
    body: 'Websites, apps, chatbots, CRM integrations, automations — we handle all of it so you never juggle vendors.',
  },
  {
    icon: Users,
    title: 'Agency-friendly.',
    body: 'Marketing agencies bring us in as the technical build team. White-label or collaborative — we fit your workflow.',
  },
  {
    icon: ShieldCheck,
    title: 'No surprises.',
    body: 'Clear scope, clear price, clear timeline — before we start anything. You always know exactly where things stand.',
  },
]

const industries = [
  'Restaurants & Food Service', 'Retail & E-Commerce', 'Legal & Political',
  'Construction & Real Estate', 'Healthcare & Wellness', 'Finance & Insurance',
  'Marketing & Advertising', 'Logistics & Transportation',
  'Education & Training', 'Local Service Businesses',
]

const stats = [
  { val: '3+', label: 'Live client sites' },
  { val: '1', label: 'Portal in active development' },
  { val: '24hr', label: 'Response commitment' },
  { val: '100%', label: 'Custom builds — no templates' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ background: 'var(--navy)' }}>

        {/* Hero */}
        <section
          className="hero-grid relative overflow-hidden"
          style={{ padding: '7rem 0 5rem' }}
        >
          <div className="orb orb-blue" style={{ width: 500, height: 500, top: '-20%', right: '-5%' }} />

          {/* G watermark */}
          <div
            className="pointer-events-none absolute"
            style={{
              left: '-5%', top: '50%', transform: 'translateY(-50%)',
              width: 'clamp(280px, 35vw, 500px)',
              opacity: 0.04, filter: 'blur(1px)',
            }}
          >
            <img src="/images/logo-icon-only.png" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--navy))' }}
          />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '52rem' }}>
              <div className="badge-cyan mb-6">Who We Are</div>
              <h1
                className="glow-text"
                style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: 'var(--white)',
                  marginBottom: '1.5rem',
                }}
              >
                Built in Lake Charles.<br />
                <span style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Built for Business.</span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '38rem' }}>
                Gulfline AI is a web development and AI automation company based in Lake Charles, Louisiana. We build the digital side of businesses — websites, apps, chatbots, and the automated systems that power them.
              </p>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '2.5rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 800, fontSize: '2rem', color: 'var(--cyan)', lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <div className="quote-bar" style={{ minHeight: '7rem' }} />
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                      fontWeight: 600,
                      fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
                      color: 'var(--white)',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                      marginBottom: '1.5rem',
                    }}
                  >
                    "We exist because businesses deserve digital work that actually gets done — not proposals, not templates, not vendors who disappear. We build custom because generic does not work. Every client gets our full attention and something that ships."
                  </p>
                  <p style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: 'var(--cyan)' }}>— The Gulfline AI Team</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-line" />

        {/* Why us — pillars */}
        <section style={{ padding: '6rem 0', background: 'var(--navy-mid)' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="badge-cyan mb-5">Why Gulfline AI</div>
            <h2
              style={{
                fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                color: 'var(--white)',
                marginBottom: '3rem',
                lineHeight: 1.15,
              }}
            >
              How we operate.
            </h2>
            <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {pillars.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.title} className="glass-card" style={{ padding: '1.75rem', transition: 'border-color 0.3s' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(27,79,216,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <Icon size={20} color="var(--cyan)" />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 600, fontSize: '1rem', color: 'var(--white)', marginBottom: '0.6rem' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ display: 'grid', gap: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'start' }}>
              <div>
                <div className="badge-cyan mb-5">Who We Work With</div>
                <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
                  Any industry.<br />Any size.
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                  We have worked with seafood businesses, political campaigns, property documentation companies, and more. Industry does not matter — if you need something built and want it done right, we are interested.
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)',
                    color: '#fff', fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 600,
                    fontSize: '0.875rem', padding: '0.75rem 1.5rem', borderRadius: '8px',
                    textDecoration: 'none', boxShadow: '0 0 20px rgba(27,79,216,0.3)',
                  }}
                >
                  Talk to Us <ArrowRight size={15} />
                </Link>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignContent: 'flex-start' }}>
                {industries.map((ind) => (
                  <span
                    key={ind}
                    style={{
                      border: '1px solid var(--border-mid)',
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '999px',
                      padding: '0.5rem 1.1rem',
                      fontSize: '0.85rem',
                      color: 'var(--muted)',
                    }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--navy-mid)', padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div
              style={{
                maxWidth: '52rem', margin: '0 auto', textAlign: 'center',
                border: '1px solid rgba(27,79,216,0.35)', borderRadius: '24px',
                padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 4rem)',
                background: 'linear-gradient(135deg, rgba(27,79,216,0.1) 0%, rgba(34,211,238,0.05) 100%)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div className="orb orb-cyan" style={{ width: 250, height: 250, bottom: '-40%', right: '-5%', opacity: 0.5 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.1 }}>
                  Ready to work together?
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '28rem', margin: '0 auto 2rem' }}>
                  First call is free. Tell us what you need and we will put together a plan that fits your business.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)', color: '#fff', fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 0 25px rgba(27,79,216,0.4)' }}>
                    Get a Free Quote <ArrowRight size={16} />
                  </Link>
                  <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(240,244,255,0.15)', color: 'rgba(240,244,255,0.7)', fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 500, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', textDecoration: 'none' }}>
                    See Our Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
