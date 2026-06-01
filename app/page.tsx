import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  Globe, ShoppingBag, Bot, Workflow,
  Database, Mail, LayoutDashboard, Users,
  ArrowRight, ExternalLink,
} from 'lucide-react'

const services = [
  { icon: Globe,          title: 'Website Design & Dev',       desc: 'Custom sites that convert. Landing pages to full business websites.' },
  { icon: ShoppingBag,    title: 'Shopify & E-Commerce',        desc: 'Full store builds — design, products, payments, launch-ready.' },
  { icon: LayoutDashboard,title: 'Web Apps & Client Portals',   desc: 'Dashboards, portals, databases, auth — built to your workflow.' },
  { icon: Bot,            title: 'AI Chatbots',                 desc: '24/7 chatbots trained on your business, embedded on your site.' },
  { icon: Workflow,       title: 'Lead Intake & Automation',    desc: 'Capture, qualify, and route leads automatically — zero manual work.' },
  { icon: Database,       title: 'CRM Integration',             desc: 'HubSpot, Salesforce, GoHighLevel — your data, where it needs to be.' },
  { icon: Mail,           title: 'SMS & Email Pipelines',       desc: 'Automated follow-ups triggered by real customer behavior.' },
  { icon: Users,          title: 'Agency Partnerships',         desc: 'You handle the strategy. We handle the build. White-label friendly.' },
  // duplicate set for seamless loop
  { icon: Globe,          title: 'Website Design & Dev',       desc: 'Custom sites that convert. Landing pages to full business websites.' },
  { icon: ShoppingBag,    title: 'Shopify & E-Commerce',        desc: 'Full store builds — design, products, payments, launch-ready.' },
  { icon: LayoutDashboard,title: 'Web Apps & Client Portals',   desc: 'Dashboards, portals, databases, auth — built to your workflow.' },
  { icon: Bot,            title: 'AI Chatbots',                 desc: '24/7 chatbots trained on your business, embedded on your site.' },
  { icon: Workflow,       title: 'Lead Intake & Automation',    desc: 'Capture, qualify, and route leads automatically — zero manual work.' },
  { icon: Database,       title: 'CRM Integration',             desc: 'HubSpot, Salesforce, GoHighLevel — your data, where it needs to be.' },
  { icon: Mail,           title: 'SMS & Email Pipelines',       desc: 'Automated follow-ups triggered by real customer behavior.' },
  { icon: Users,          title: 'Agency Partnerships',         desc: 'You handle the strategy. We handle the build. White-label friendly.' },
]

const steps = [
  { num: '01', title: 'Discovery Call',   body: 'We learn about your business, goals, and pain points. Free, no pitch, just a real conversation.' },
  { num: '02', title: 'Scope & Quote',    body: 'You get a clear plan — what we build, the timeline, the price. You approve before we start anything.' },
  { num: '03', title: 'Build & Review',   body: 'We build, you review. Regular updates, your feedback shapes the final product.' },
  { num: '04', title: 'Launch & Support', body: 'We go live and stay available. Updates, fixes, and new features as you grow.' },
]

const portfolio = [
  { name: 'DHDO Scan',      url: 'https://dhdoscan.com',      tags: ['Website', 'Lead Capture'],     desc: 'Professional dark-themed site for a Matterport 3D scanning company.',  partner: null },
  { name: "Jab's Seafood",  url: 'https://jabsseafood.com',   tags: ['Website', 'Local Business'],   desc: 'Louisiana seafood business site built to drive local engagement.',       partner: 'Bryant Marketing' },
  { name: 'Joey for Judge', url: 'https://joeyforjudge.com',  tags: ['Campaign', 'Fast Turnaround'], desc: 'Political campaign site — clear messaging, mobile-first, launched fast.', partner: 'Bryant Marketing' },
]

const faqs = [
  { q: 'What does Gulfline AI build?',             a: 'Websites, web apps, Shopify stores, AI chatbots, CRM integrations, lead automation, and SMS/email pipelines.' },
  { q: 'How long does a project take?',             a: 'Landing pages in 2–5 days. Full sites and web apps typically 2–4 weeks depending on scope.' },
  { q: 'What does it cost?',                        a: 'Every project is scoped individually. You get a clear number before we start — no surprises.' },
  { q: 'Can you integrate with my existing tools?', a: 'Yes. HubSpot, Salesforce, GoHighLevel, Google Workspace, Zapier, Make, and custom APIs.' },
  { q: 'Do you work with marketing agencies?',      a: 'Yes. We partner as the technical build team — white-label or collaborative, your call.' },
  { q: 'Where are you based?',                      a: 'Lake Charles, Louisiana. We work locally and remotely with clients everywhere.' },
  { q: 'Is the first call really free?',            a: 'Always. No pitch, no pressure. We just want to understand your business first.' },
  { q: 'What if I already have a site?',            a: 'Send us the link. We do redesigns and rebuilds too.' },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ background: 'var(--navy)' }}>

        {/* ── HERO ── */}
        <section
          className="hero-grid relative overflow-hidden"
          style={{ minHeight: '92vh', display: 'flex', alignItems: 'center' }}
        >
          {/* Orbs */}
          <div className="orb orb-blue" style={{ width: 600, height: 600, top: '-10%', left: '-5%' }} />
          <div className="orb orb-cyan" style={{ width: 400, height: 400, bottom: '5%', right: '10%' }} />
          <div className="scan-line" />

          {/* G watermark */}
          <div
            className="pointer-events-none absolute"
            style={{
              right: '-4%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 'clamp(320px, 45vw, 620px)',
              opacity: 0.055,
              userSelect: 'none',
              filter: 'blur(1px)',
            }}
          >
            <img src="/images/logo-icon-only.png" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>

          {/* Fade out bottom */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--navy))' }}
          />

          <div className="container relative mx-auto px-4 py-28 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">

              <div className="badge-cyan mb-8">Lake Charles, Louisiana</div>

              <h1
                className="glow-text text-balance"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: 'var(--white)',
                  marginBottom: '1.5rem',
                }}
              >
                We Build the Digital Side<br />
                <span style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>of Your Business.</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                  maxWidth: '42rem',
                  margin: '0 auto 2.5rem',
                }}
              >
                Websites. Web apps. Shopify stores. AI chatbots. Automated lead pipelines.
                One team. Built clean, built fast, built to work.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)',
                    color: '#fff',
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.875rem 2rem',
                    borderRadius: '10px',
                    boxShadow: '0 0 30px rgba(27,79,216,0.45)',
                    transition: 'opacity 0.2s, transform 0.2s',
                    textDecoration: 'none',
                  }}
                >
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
                <Link
                  href="/portfolio"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: '1px solid rgba(240,244,255,0.15)',
                    color: 'rgba(240,244,255,0.7)',
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    padding: '0.875rem 2rem',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    transition: 'border-color 0.2s, color 0.2s',
                    textDecoration: 'none',
                  }}
                >
                  See Our Work
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="section-line" />
        <section style={{ background: 'var(--navy-mid)', padding: '1.25rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem 2rem',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(240,244,255,0.35)',
                fontFamily: "'Barlow', sans-serif",
              }}
            >
              {['Websites & Web Apps', 'AI Chatbots', 'Shopify Stores', 'Lead Automation', 'CRM Integration', 'Agency Partnerships'].map((t, i) => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  {i > 0 && <span style={{ color: 'rgba(34,211,238,0.3)' }}>·</span>}
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
        <div className="section-line" />

        {/* ── WHAT WE BUILD — Horizontal Scroll ── */}
        <section style={{ background: 'var(--navy)', padding: '6rem 0', overflow: 'hidden' }}>
          <div className="container mx-auto px-4 lg:px-8 mb-10">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="badge-cyan mb-4">What We Build</div>
                <h2
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                    color: 'var(--white)',
                    lineHeight: 1.15,
                  }}
                >
                  One team.<br />Everything your business needs online.
                </h2>
              </div>
              <Link
                href="/services"
                className="animated-link"
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: '0.9rem', whiteSpace: 'nowrap' }}
              >
                View All Services →
              </Link>
            </div>
          </div>

          {/* Scroll mask + track */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute', top: 0, left: 0, width: 120, height: '100%', zIndex: 2,
                background: 'linear-gradient(to right, var(--navy), transparent)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute', top: 0, right: 0, width: 120, height: '100%', zIndex: 2,
                background: 'linear-gradient(to left, var(--navy), transparent)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ overflow: 'hidden', padding: '1rem 0' }}>
              <div className="scroll-track">
                {services.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <Link href="/services" key={i} className="service-card" style={{ textDecoration: 'none' }}>
                      <div
                        style={{
                          width: 40, height: 40, borderRadius: 10,
                          background: 'rgba(27,79,216,0.2)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          marginBottom: '1.25rem',
                        }}
                      >
                        <Icon size={20} color="var(--cyan)" />
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 600,
                          fontSize: '1rem',
                          color: 'var(--white)',
                          marginBottom: '0.6rem',
                        }}
                      >
                        {s.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                        {s.desc}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK — Vertical Timeline ── */}
        <section style={{ background: 'var(--navy-mid)', padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ display: 'grid', gap: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start' }}>

              {/* Left — sticky heading */}
              <div style={{ position: 'sticky', top: '6rem' }}>
                <div className="badge-cyan mb-4">How We Work</div>
                <h2
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                    color: 'var(--white)',
                    lineHeight: 1.15,
                    marginBottom: '1.5rem',
                  }}
                >
                  Simple process.<br />No surprises.
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '28rem' }}>
                  From first call to launch day, you always know exactly where things stand and what comes next.
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '2rem',
                    background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)',
                    color: '#fff',
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                  }}
                >
                  Start Now <ArrowRight size={15} />
                </Link>
              </div>

              {/* Right — timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {steps.map((step, i) => (
                  <div key={step.num} className="timeline-item">
                    <div className="timeline-num">{step.num}</div>
                    <div style={{ paddingTop: '0.75rem' }}>
                      <h3
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 600,
                          fontSize: '1.15rem',
                          color: 'var(--white)',
                          marginBottom: '0.6rem',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── PORTFOLIO PREVIEW ── */}
        <section style={{ background: 'var(--navy)', padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <div className="badge-cyan mb-4">Our Work</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <h2
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                    color: 'var(--white)',
                    lineHeight: 1.15,
                  }}
                >
                  Real projects.<br />Real businesses.
                </h2>
                <Link
                  href="/portfolio"
                  className="animated-link"
                  style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: '0.9rem' }}
                >
                  Full Portfolio →
                </Link>
              </div>
            </div>
            <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {portfolio.map((p) => (
                <div key={p.name} className="glass-card" style={{ padding: '1.75rem', transition: 'border-color 0.3s' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {p.tags.map((t) => (
                      <span key={t} className="badge-cyan" style={{ fontSize: '0.65rem' }}>{t}</span>
                    ))}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      color: 'var(--white)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {p.desc}
                  </p>
                  {p.partner && (
                    <p style={{ fontSize: '0.75rem', color: 'rgba(240,244,255,0.25)', marginBottom: '1rem' }}>
                      In partnership with {p.partner}
                    </p>
                  )}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-link"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}
                  >
                    Visit Site <ExternalLink size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPANY QUOTE ── */}
        <section style={{ background: 'var(--navy-mid)', padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <div className="quote-bar" style={{ minHeight: '8rem' }} />
                <div>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 600,
                      fontSize: 'clamp(1.2rem, 3vw, 1.65rem)',
                      color: 'var(--white)',
                      lineHeight: 1.55,
                      marginBottom: '2rem',
                      fontStyle: 'italic',
                    }}
                  >
                    "We started Gulfline AI because we kept seeing the same problem — businesses that needed real digital work getting handed templates, bloated agencies, and vendors who disappeared after launch. We build custom because generic doesn&apos;t work. Every client gets our full attention, a clear plan, and something that actually ships."
                  </p>
                  <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                    <div>
                      <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: 'var(--white)' }}>Zakk Boullion</p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--cyan)', marginTop: '2px' }}>CEO, Gulfline AI</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: 'var(--white)' }}>Jay Joseph</p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--cyan)', marginTop: '2px' }}>CFO, Gulfline AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: 'var(--navy)', padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
              <div className="badge-cyan mb-4">FAQ</div>
              <h2
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  color: 'var(--white)',
                  marginBottom: '3rem',
                  lineHeight: 1.15,
                }}
              >
                Answers to the questions<br />we get most.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {faqs.map((faq, i) => (
                  <div
                    key={faq.q}
                    style={{
                      borderTop: '1px solid var(--border)',
                      padding: '1.5rem 0',
                      ...(i === faqs.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: 'var(--white)',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {faq.q}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: 'var(--navy-mid)', padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div
              style={{
                maxWidth: '52rem',
                margin: '0 auto',
                textAlign: 'center',
                border: '1px solid rgba(27,79,216,0.35)',
                borderRadius: '24px',
                padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
                background: 'linear-gradient(135deg, rgba(27,79,216,0.1) 0%, rgba(34,211,238,0.05) 100%)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div className="orb orb-blue" style={{ width: 300, height: 300, top: '-50%', left: '-10%', opacity: 0.5 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                    color: 'var(--white)',
                    lineHeight: 1.1,
                    marginBottom: '1.25rem',
                  }}
                >
                  Ready to build<br />
                  <span style={{ color: 'var(--cyan)' }}>something real?</span>
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '30rem', margin: '0 auto 2.5rem' }}>
                  First call is always free. Tell us what you need and we will put together a plan — no jargon, no pressure.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link
                    href="/contact"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)',
                      color: '#fff',
                      fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: '0.95rem',
                      padding: '0.875rem 2rem', borderRadius: '10px',
                      boxShadow: '0 0 30px rgba(27,79,216,0.45)',
                      textDecoration: 'none',
                    }}
                  >
                    Get a Free Quote <ArrowRight size={16} />
                  </Link>
                  <a
                    href="mailto:gulflineai@gmail.com"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      border: '1px solid rgba(240,244,255,0.15)',
                      color: 'rgba(240,244,255,0.7)',
                      fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: '0.95rem',
                      padding: '0.875rem 2rem', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      textDecoration: 'none',
                    }}
                  >
                    Email Us Directly
                  </a>
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
