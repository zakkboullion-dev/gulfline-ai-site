import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Instagram, ExternalLink, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Content — Gulfline AI',
  description: 'Tips, tutorials, and resources on web development, AI automation, and building a digital business. Follow along on Instagram, TikTok, and Facebook.',
}

const socials = [
  { platform: 'Instagram', handle: '@gulflineai', desc: 'Reels, tips, and behind-the-scenes on websites and automation.', url: '#', icon: Instagram },
  { platform: 'TikTok', handle: '@gulflineai', desc: 'Short-form content on building websites, AI tools, and running a digital agency.', url: '#', icon: ExternalLink },
  { platform: 'Facebook', handle: 'Gulfline AI', desc: 'Updates, project launches, and local business content.', url: '#', icon: ExternalLink },
]

const courseTopics = [
  'How to scope and price web projects',
  'Design fundamentals for developers',
  'Building landing pages that convert',
  'Hosting, domains, and deployment',
  'Working with clients professionally',
  'Adding AI and automation to your toolkit',
  'Growing a freelance or agency business',
]

const upcoming = [
  { title: 'How to Build a Professional Landing Page in 2025', type: 'Tutorial' },
  { title: 'What Every Small Business Website Needs (and Most are Missing)', type: 'Article' },
  { title: 'How We Set Up Lead Automation for a Local Business', type: 'Case Study' },
  { title: 'AI Chatbots Explained: What They Are and When You Need One', type: 'Guide' },
]

export default function ContentPage() {
  return (
    <>
      <Header />
      <main style={{ background: 'var(--navy)' }}>

        {/* Hero */}
        <section className="hero-grid relative overflow-hidden" style={{ padding: '7rem 0 5rem' }}>
          <div className="orb orb-cyan" style={{ width: 450, height: 450, top: '-20%', right: '0%' }} />
          <div className="orb orb-blue" style={{ width: 300, height: 300, bottom: '-10%', left: '5%' }} />
          <div
            className="pointer-events-none absolute"
            style={{ right: '-4%', top: '50%', transform: 'translateY(-50%)', width: 'clamp(260px, 35vw, 480px)', opacity: 0.04, filter: 'blur(1px)' }}
          >
            <img src="/images/logo-icon-only.png" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, var(--navy))' }} />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '48rem' }}>
              <div className="badge-cyan mb-6">Content & Resources</div>
              <h1
                className="glow-text"
                style={{
                  fontFamily: "'Barlow', sans-serif", fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  lineHeight: 1.05, letterSpacing: '-0.03em',
                  color: 'var(--white)', marginBottom: '1.5rem',
                }}
              >
                Learn. Build.<br />
                <span style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Grow.</span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '34rem' }}>
                Tips, tutorials, and real talk on websites, AI, and building a digital business — from the team actually doing the work.
              </p>
            </div>
          </div>
        </section>

        {/* Skool course */}
        <section style={{ padding: '6rem 0', background: 'var(--navy-mid)' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div
              style={{
                maxWidth: '60rem', margin: '0 auto',
                border: '1px solid rgba(34,211,238,0.2)',
                borderRadius: '24px', overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(34,211,238,0.04) 0%, rgba(27,79,216,0.06) 100%)',
              }}
            >
              <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'start' }}>
                <div>
                  <span className="badge-cyan" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>Coming Soon</span>
                  <h2 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                    The Gulfline AI Course
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1rem' }}>
                    Everything we know about building professional websites and web projects — from zero to launched. Tools, process, pricing, client communication, and the technical side.
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                    Launching on Skool. Drop your info on the contact page to get notified.
                  </p>
                  <Link
                    href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)', color: '#fff', fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.875rem', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 0 20px rgba(27,79,216,0.35)' }}
                  >
                    Notify Me at Launch <ArrowRight size={15} />
                  </Link>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <BookOpen size={18} color="var(--cyan)" />
                    <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.4)' }}>What the course covers</p>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {courseTopics.map((t) => (
                      <li key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                        <span style={{ marginTop: '0.45rem', width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', flexShrink: 0, display: 'block' }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
              <div className="badge-cyan mb-5">Follow Along</div>
              <h2 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--white)', marginBottom: '0.75rem', lineHeight: 1.15 }}>
                We post on the build.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '3rem' }}>
                Follow wherever you spend time online — web dev, AI, and building in public.
              </p>
              <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.platform} className="glass-card" style={{ padding: '1.75rem', transition: 'border-color 0.3s' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(27,79,216,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                        <Icon size={18} color="var(--cyan)" />
                      </div>
                      <h3 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '1rem', color: 'var(--white)', marginBottom: '0.25rem' }}>{s.platform}</h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--cyan)', marginBottom: '0.75rem' }}>{s.handle}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{s.desc}</p>
                      <a href={s.url} className="animated-link" style={{ fontSize: '0.85rem', fontFamily: "'Barlow', sans-serif", fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                        Follow <ExternalLink size={12} />
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming articles */}
        <section style={{ background: 'var(--navy-mid)', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
              <div className="badge-cyan mb-5">Articles & Guides</div>
              <h2 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', color: 'var(--white)', marginBottom: '0.75rem', lineHeight: 1.15 }}>
                In-depth content. Coming soon.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>Web dev, AI tools, and building a digital business — first posts dropping soon.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {upcoming.map((a) => (
                  <div key={a.title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '1.1rem 1.5rem' }}>
                    <div>
                      <span className="badge-cyan" style={{ fontSize: '0.6rem', marginBottom: '0.5rem', display: 'inline-block' }}>{a.type}</span>
                      <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: '0.9rem', color: 'var(--white)' }}>{a.title}</p>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(240,244,255,0.25)', flexShrink: 0 }}>Coming Soon</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center', border: '1px solid rgba(27,79,216,0.35)', borderRadius: '24px', padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)', background: 'linear-gradient(135deg, rgba(27,79,216,0.1) 0%, rgba(34,211,238,0.05) 100%)', position: 'relative', overflow: 'hidden' }}>
              <div className="orb orb-blue" style={{ width: 250, height: 250, top: '-40%', right: '-5%', opacity: 0.5 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.1 }}>
                  Want us to build something for you?
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '24rem', margin: '0 auto 1.75rem' }}>
                  Content is great. A working website or automation system is better.
                </p>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)', color: '#fff', fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 0 25px rgba(27,79,216,0.4)' }}>
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
