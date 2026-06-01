import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Globe, ShoppingBag, Bot, Workflow, Database, Mail, LayoutDashboard, Users, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services — Gulfline AI',
  description: 'Websites, web apps, Shopify stores, AI chatbots, CRM integration, SMS & email pipelines, and lead automation. One team for everything your business needs online.',
}

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Custom websites built from scratch — not templates. Designed for your brand, your audience, and your goals. From single landing pages to full multi-page business sites.',
    features: ['Mobile-first, fully responsive', 'Fast load times optimized for SEO', 'Contact forms with lead capture', 'Hosting setup and deployment', 'Ongoing maintenance available'],
  },
  {
    icon: ShoppingBag,
    title: 'Shopify & E-Commerce Stores',
    description: 'Full Shopify store builds with custom design, product setup, collections, payment integration, and everything you need to start selling on day one.',
    features: ['Custom Shopify theme design', 'Product catalog setup', 'Payment & shipping configuration', 'Discount codes and promotions', 'Analytics and reporting'],
  },
  {
    icon: LayoutDashboard,
    title: 'Web Apps & Client Portals',
    description: 'Custom web applications — client portals, dashboards, booking systems, and internal tools with databases and user authentication.',
    features: ['Secure user login & authentication', 'Custom database design', 'Real-time data and dashboards', 'File uploads and document management', 'Role-based access control'],
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Smart chatbots trained on your business that answer questions, capture leads, qualify prospects, and hand off to your team — installed on your website.',
    features: ['Trained on your products and services', 'Lead capture and qualification', 'Human handoff when needed', 'Works 24/7 without staff', 'Embedded on any website'],
  },
  {
    icon: Workflow,
    title: 'Lead Intake & Automation',
    description: 'Systems that capture leads from your website, qualify them automatically, and route them to the right person or CRM — zero manual work.',
    features: ['Form-to-CRM automation', 'Lead scoring and qualification', 'Instant notifications to your team', 'Duplicate detection and cleanup', 'Custom routing rules'],
  },
  {
    icon: Database,
    title: 'CRM Integration',
    description: "Connect your website, forms, and tools to the CRM you already use. Every lead and contact lands exactly where it should.",
    features: ['HubSpot, Salesforce, GoHighLevel', 'Google Sheets & Workspace', 'Custom API integrations', 'Two-way data sync', 'Pipeline and deal automation'],
  },
  {
    icon: Mail,
    title: 'SMS & Email Pipelines',
    description: 'Automated follow-up sequences triggered by what your leads and customers actually do. Right message, right person, right time.',
    features: ['Welcome and onboarding sequences', 'Lead nurture campaigns', 'Appointment reminders', 'Re-engagement flows', 'SMS and email combined'],
  },
  {
    icon: Users,
    title: 'Agency Partnerships',
    description: "We work with marketing agencies as the technical build team. You handle strategy and client relationships — we handle the development.",
    features: ['White-label builds available', 'Direct or behind-the-scenes collaboration', 'Flexible project-based pricing', 'Fast turnaround on landing pages', 'Ongoing dev support retainers'],
  },
]

const integrations = [
  'HubSpot', 'Salesforce', 'GoHighLevel', 'Google Workspace',
  'Shopify', 'Zapier', 'Make', 'Twilio', 'Stripe',
  'Calendly', 'Slack', 'Microsoft 365', 'Custom APIs',
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ background: 'var(--navy)' }}>

        {/* Hero */}
        <section className="hero-grid relative overflow-hidden" style={{ padding: '7rem 0 5rem' }}>
          <div className="orb orb-blue" style={{ width: 500, height: 500, top: '-20%', right: '-5%' }} />
          <div className="orb orb-cyan" style={{ width: 300, height: 300, bottom: '-10%', left: '10%' }} />
          <div
            className="pointer-events-none absolute"
            style={{ right: '-4%', top: '50%', transform: 'translateY(-50%)', width: 'clamp(280px, 38vw, 520px)', opacity: 0.045, filter: 'blur(1px)' }}
          >
            <img src="/images/logo-icon-only.png" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, var(--navy))' }} />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '48rem' }}>
              <div className="badge-cyan mb-6">What We Do</div>
              <h1
                className="glow-text"
                style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  lineHeight: 1.05, letterSpacing: '-0.03em',
                  color: 'var(--white)', marginBottom: '1.5rem',
                }}
              >
                Everything Your Business<br />
                <span style={{ color: 'var(--cyan)', fontStyle: 'italic' }}>Needs Online.</span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '36rem', marginBottom: '2.5rem' }}>
                One team that builds websites, apps, automations, and AI tools — so you never have to juggle multiple vendors again.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)', color: '#fff', fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', boxShadow: '0 0 25px rgba(27,79,216,0.4)', textDecoration: 'none' }}>
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
                <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(240,244,255,0.15)', color: 'rgba(240,244,255,0.7)', fontFamily: "'Syne', sans-serif", fontWeight: 500, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', textDecoration: 'none' }}>
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section style={{ padding: '5rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="glass-card"
                    style={{ padding: '2.5rem', transition: 'border-color 0.3s' }}
                  >
                    <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                      <div>
                        <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(27,79,216,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                          <Icon size={22} color="var(--cyan)" />
                        </div>
                        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.35rem', color: 'var(--white)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                          {service.title}
                        </h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                          {service.description}
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.3)', marginBottom: '1rem' }}>
                          What&apos;s included
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {service.features.map((f) => (
                            <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                              <CheckCircle2 size={15} color="var(--cyan)" style={{ marginTop: '2px', flexShrink: 0 }} />
                              <span style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '4rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,244,255,0.3)', marginBottom: '1.5rem' }}>
                Integrates With Your Existing Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.65rem' }}>
                {integrations.map((t) => (
                  <span key={t} style={{ border: '1px solid var(--border-mid)', background: 'rgba(255,255,255,0.03)', borderRadius: '999px', padding: '0.45rem 1rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center', border: '1px solid rgba(27,79,216,0.35)', borderRadius: '24px', padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 4rem)', background: 'linear-gradient(135deg, rgba(27,79,216,0.1) 0%, rgba(34,211,238,0.05) 100%)', position: 'relative', overflow: 'hidden' }}>
              <div className="orb orb-blue" style={{ width: 300, height: 300, top: '-50%', left: '-10%', opacity: 0.5 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.1 }}>
                  Not sure what you need?
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '28rem', margin: '0 auto 2rem' }}>
                  Tell us about your business. We will figure out the right build together — no jargon, no pressure.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)', color: '#fff', fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 0 25px rgba(27,79,216,0.4)' }}>
                    Get a Free Quote <ArrowRight size={16} />
                  </Link>
                  <a href="mailto:gulflineai@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(240,244,255,0.15)', color: 'rgba(240,244,255,0.7)', fontFamily: "'Syne', sans-serif", fontWeight: 500, fontSize: '0.95rem', padding: '0.875rem 2rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', textDecoration: 'none' }}>
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
