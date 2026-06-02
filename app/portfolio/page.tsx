import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { SitePreview } from '@/components/site-preview'

export const metadata: Metadata = {
  title: 'Portfolio — Gulfline AI',
  description: 'Web projects built by Gulfline AI in Lake Charles, Louisiana — local business sites, political campaign pages, seafood companies, and more. Real work for real clients.',
}

const projects = [
  {
    name: 'DHDO Scan',
    url: 'https://dhdoscan.com',
    category: 'Business Website',
    location: 'Lake Charles, Louisiana',
    tags: ['Website', 'Lead Capture'],
    description: 'Digital Home Documentation Operations needed a professional site to represent their Matterport 3D scanning and property documentation services. We built a dark-themed site focused on credibility, clear service communication, and lead generation.',
    built: ['Custom design from scratch', 'Contact and lead capture form', 'Service pages and pricing layout', 'Mobile-optimized', 'Deployed on Vercel'],
    partner: null,
  },
  {
    name: "Jab's Seafood",
    url: 'https://jabsseafood.com',
    category: 'Local Business Website',
    location: 'Hackberry, Louisiana',
    tags: ['Website', 'Local Business'],
    description: "Jab's Seafood is a Louisiana seafood business serving the local community. We built their online presence to showcase their offerings and make it easy for customers to find and contact them.",
    built: ['Business website with branding', 'Product and service showcase', 'Contact and location info', 'Mobile-first design', 'Optimized for local SEO'],
    partner: 'Bryant Marketing Services, LLC',
  },
  {
    name: 'Joey for Judge',
    url: 'https://joeyforjudge.com',
    category: 'Political Campaign Website',
    location: 'Louisiana',
    tags: ['Campaign Site', 'Fast Turnaround'],
    description: 'A Louisiana judicial candidate needed a campaign website fast. We delivered a clean, professional site built to drive name recognition, communicate the platform, and reach voters.',
    built: ['Campaign site with clear messaging', 'Candidate bio and platform pages', 'Mobile-first design', 'Fast turnaround delivery', 'Social sharing optimized'],
    partner: 'Bryant Marketing Services, LLC',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main style={{ background: 'var(--navy)' }}>

        {/* Hero */}
        <section className="hero-grid relative overflow-hidden" style={{ padding: '7rem 0 5rem' }}>
          <div className="orb orb-blue" style={{ width: 450, height: 450, top: '-15%', right: '5%' }} />
          <div
            className="pointer-events-none absolute"
            style={{ left: '-4%', top: '50%', transform: 'translateY(-50%)', width: 'clamp(260px, 35vw, 480px)', opacity: 0.04, filter: 'blur(1px)' }}
          >
            <img src="/images/logo-icon-only.png" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, var(--navy))' }} />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '48rem' }}>
              <div className="badge-cyan mb-6">Our Work</div>
              <h1
                className="glow-text"
                style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  lineHeight: 1.05, letterSpacing: '-0.03em',
                  color: 'var(--white)', marginBottom: '1.5rem',
                }}
              >
                Built by<br />
                <span style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Gulfline AI.</span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '34rem' }}>
                Real projects for real businesses. Every client gets our full attention — we are early and growing, and we intend to keep it that way.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section style={{ padding: '5rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '60rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="glass-card"
                  style={{ overflow: 'hidden', transition: 'border-color 0.3s' }}
                >
                  {/* Site preview image */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}
                  >
                    <SitePreview url={project.url} name={project.name} />
                  </a>
                  {/* Card header */}
                  <div style={{ padding: '1.75rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        {project.tags.map((t) => (
                          <span key={t} className="badge-cyan" style={{ fontSize: '0.65rem' }}>{t}</span>
                        ))}
                      </div>
                      <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.25rem' }}>{project.name}</h2>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(240,244,255,0.35)' }}>{project.category} · {project.location}</p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border-mid)', borderRadius: '8px', padding: '0.6rem 1.1rem', fontSize: '0.85rem', fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 500, color: 'var(--muted)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s', flexShrink: 0 }}
                    >
                      Visit Site <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                    <div>
                      <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.3)', marginBottom: '0.75rem' }}>About the Project</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>{project.description}</p>
                      {project.partner && (
                        <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'rgba(240,244,255,0.25)' }}>
                          In partnership with <span style={{ color: 'rgba(240,244,255,0.4)' }}>{project.partner}</span>
                        </p>
                      )}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.3)', marginBottom: '0.75rem' }}>What We Built</p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {project.built.map((b) => (
                          <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                            <span style={{ marginTop: '0.45rem', width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', flexShrink: 0, display: 'block' }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More coming */}
        <section style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--border)', padding: '4rem 0', textAlign: 'center' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.3)', marginBottom: '0.75rem' }}>More Coming Soon</p>
            <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--white)', marginBottom: '0.75rem' }}>We add new work as projects launch.</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '30rem', margin: '0 auto' }}>
              Client portals and web apps are in active development. Check back — or reach out and your project could be next.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center', border: '1px solid rgba(27,79,216,0.35)', borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 4rem)', background: 'linear-gradient(135deg, rgba(27,79,216,0.1) 0%, rgba(34,211,238,0.05) 100%)', position: 'relative', overflow: 'hidden' }}>
              <div className="orb orb-cyan" style={{ width: 250, height: 250, bottom: '-40%', right: '-5%', opacity: 0.4 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.1 }}>Want your project here?</h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '26rem', margin: '0 auto 2rem' }}>
                  We build fast, clean, and right. Get in touch and tell us what you need.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)', color: '#fff', fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 0 25px rgba(27,79,216,0.4)' }}>
                    Start a Project <ArrowRight size={16} />
                  </Link>
                  <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(240,244,255,0.15)', color: 'rgba(240,244,255,0.7)', fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontWeight: 500, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', textDecoration: 'none' }}>
                    View Services
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
