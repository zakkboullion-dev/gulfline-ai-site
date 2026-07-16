import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ExternalLink, ArrowRight, Heart, Church, HandHeart, Clock } from 'lucide-react'
import { SitePreview } from '@/components/site-preview'

export const metadata: Metadata = {
  title: 'Nonprofits — Gulfline AI',
  description:
    'Gulfline AI designs, builds, and hosts websites free for churches and nonprofits in Southwest Louisiana. Real, professional web presence at no cost — our way of giving back to the community.',
}

// What a nonprofit gets, at no cost
const included = [
  'Custom-designed website — built from scratch, not a template',
  'Free hosting, forever — we cover it',
  'Mobile-first, fast, and accessible on every device',
  'Service times, events, and contact info front and center',
  'Photo galleries and story pages that reflect your community',
  'Updates as your needs change — just reach out',
]

// The churches / nonprofits we've built for (and slots in progress)
const partners = [
  {
    name: 'Zion Travelers Baptist Church',
    url: 'https://zion-travelers-website.vercel.app/',
    location: 'Iowa, Louisiana',
    blurb:
      'A single-page home for a historic Southwest Louisiana congregation — worship times, the pastor’s welcome, community outreach, and a photo story of the church, all in one clean, fast site we designed and host at no cost.',
    status: 'live' as const,
  },
  {
    name: 'First Christian Church (Disciples of Christ)',
    url: 'https://first-christian-sulphur-website.vercel.app/',
    location: 'Sulphur, Louisiana',
    blurb:
      'A welcoming Disciples of Christ congregation serving Sulphur since 1919. We designed and host a warm, red-and-white single-page site — worship times, their story and faith, ministries, community life, and a photo gallery — carrying their heritage and their open-table spirit online, free of charge.',
    status: 'live' as const,
  },
]

export default function NonprofitPage() {
  return (
    <>
      <Header />
      <main style={{ background: 'var(--navy)' }}>

        {/* Hero */}
        <section className="hero-grid relative overflow-hidden" style={{ padding: '7rem 0 5rem' }}>
          <div className="orb orb-blue" style={{ width: 450, height: 450, top: '-15%', right: '5%' }} />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, var(--navy))' }} />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '48rem' }}>
              <div className="badge-cyan mb-6">Giving Back</div>
              <h1
                className="glow-text"
                style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  lineHeight: 1.05, letterSpacing: '-0.03em',
                  color: 'var(--white)', marginBottom: '1.5rem',
                }}
              >
                Built for good.<br />
                <span style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>On us.</span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '36rem' }}>
                Gulfline AI designs, builds, and hosts websites for churches and nonprofits in
                Southwest Louisiana — completely free. The organizations that hold our community
                together deserve a professional web presence, and cost should never stand in the way.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '60rem', margin: '0 auto', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {[
                { icon: Heart, title: 'Because it matters', body: 'Churches, food pantries, and community groups do the quiet work that keeps our region strong. A great website helps them reach more people — so we build it for them.' },
                { icon: HandHeart, title: 'No cost, no catch', body: 'Design, build, and hosting are on us. There’s no invoice, no monthly bill, and no fine print. It’s our way of investing in the place we call home.' },
                { icon: Church, title: 'Rooted in Louisiana', body: 'We’re a Lake Charles company. The nonprofits we serve are our neighbors, and the impact stays right here in Southwest Louisiana.' },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="glass-card" style={{ padding: '2rem' }}>
                  <span
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: 48, height: 48, borderRadius: '12px',
                      border: '1px solid var(--border-mid)', background: 'rgba(34,211,238,0.1)',
                      color: 'var(--cyan)', marginBottom: '1.25rem',
                    }}
                  >
                    <Icon size={22} />
                  </span>
                  <h3 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: 'var(--white)', marginBottom: '0.6rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section style={{ padding: '4rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
              <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.3)', marginBottom: '0.75rem' }}>Who We&apos;re Serving</p>
                <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', color: 'var(--white)' }}>
                  Congregations we&apos;ve built for.
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {partners.map((p) => (
                  <div key={p.name} className="glass-card" style={{ overflow: 'hidden' }}>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
                        <SitePreview url={p.url} name={p.name} />
                      </a>
                    ) : (
                      <div
                        style={{
                          borderBottom: '1px solid var(--border)', padding: '3.5rem 2rem',
                          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                          gap: '0.85rem', textAlign: 'center',
                          background: 'linear-gradient(135deg, var(--navy-mid) 0%, rgba(27,79,216,0.18) 100%)',
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                            width: 52, height: 52, borderRadius: '14px',
                            border: '1px solid var(--border-mid)', background: 'rgba(34,211,238,0.1)', color: 'var(--cyan)',
                          }}
                        >
                          <Clock size={22} />
                        </span>
                        <span style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: 'var(--white)' }}>
                          In the works
                        </span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                          Next site in progress
                        </span>
                      </div>
                    )}

                    <div style={{ padding: '1.75rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                          <span className="badge-cyan" style={{ fontSize: '0.65rem' }}>Nonprofit</span>
                          <span className="badge-cyan" style={{ fontSize: '0.65rem' }}>{p.status === 'live' ? 'Live' : 'Coming Soon'}</span>
                          <span className="badge-cyan" style={{ fontSize: '0.65rem' }}>Free</span>
                        </div>
                        <h3 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.25rem' }}>{p.name}</h3>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(240,244,255,0.35)' }}>Church Website · {p.location}</p>
                      </div>
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border-mid)', borderRadius: '8px', padding: '0.6rem 1.1rem', fontSize: '0.85rem', fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 500, color: 'var(--muted)', textDecoration: 'none', flexShrink: 0 }}
                        >
                          Visit Site <ExternalLink size={13} />
                        </a>
                      ) : (
                        <span
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border-mid)', borderRadius: '8px', padding: '0.6rem 1.1rem', fontSize: '0.85rem', fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 500, color: 'rgba(240,244,255,0.4)', flexShrink: 0 }}
                        >
                          <Clock size={13} /> In Progress
                        </span>
                      )}
                    </div>

                    <div style={{ padding: '2rem' }}>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>{p.blurb}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '60rem', margin: '0 auto', display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.3)', marginBottom: '0.75rem' }}>What&apos;s Included</p>
                <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.1 }}>
                  Everything a real website needs — nothing to pay.
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  We treat pro bono work like every other project: designed with care, built to last,
                  and supported after launch.
                </p>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {included.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                    <span style={{ marginTop: '0.5rem', width: 7, height: 7, borderRadius: '50%', background: 'var(--cyan)', flexShrink: 0, display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center', border: '1px solid rgba(27,79,216,0.35)', borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 4rem)', background: 'linear-gradient(135deg, rgba(27,79,216,0.1) 0%, rgba(34,211,238,0.05) 100%)', position: 'relative', overflow: 'hidden' }}>
              <div className="orb orb-cyan" style={{ width: 250, height: 250, bottom: '-40%', right: '-5%', opacity: 0.4 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.1 }}>
                  Run a church or nonprofit?
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '30rem', margin: '0 auto 2rem' }}>
                  If you serve the Southwest Louisiana community, we&apos;d love to build your website —
                  free. Tell us about your organization and let&apos;s get started.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)', color: '#fff', fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 0 25px rgba(27,79,216,0.4)' }}>
                    Get in Touch <ArrowRight size={16} />
                  </Link>
                  <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(240,244,255,0.15)', color: 'rgba(240,244,255,0.7)', fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 500, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', textDecoration: 'none' }}>
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
