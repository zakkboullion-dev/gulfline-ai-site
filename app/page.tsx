import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  Globe,
  ShoppingBag,
  Bot,
  Workflow,
  Database,
  Mail,
  LayoutDashboard,
  Users,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Custom-built websites that look professional, load fast, and convert visitors into leads. Landing pages to full multi-page sites.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify & E-Commerce Stores',
    description: 'Full Shopify store builds with custom design, product setup, and payment integration — ready to sell from day one.',
  },
  {
    icon: LayoutDashboard,
    title: 'Web Apps & Client Portals',
    description: 'Custom web applications and secure client-facing portals with databases, user authentication, and real-time data.',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Smart chatbots that answer questions, capture leads, and hand off to your team — installed directly on your website.',
  },
  {
    icon: Workflow,
    title: 'Lead Intake & Automation',
    description: 'Automated systems that capture, qualify, and route leads from your website straight to your CRM or inbox.',
  },
  {
    icon: Database,
    title: 'CRM Integration',
    description: 'Connect your website and forms to HubSpot, Salesforce, GoHighLevel, or any CRM so nothing falls through the cracks.',
  },
  {
    icon: Mail,
    title: 'SMS & Email Pipelines',
    description: 'Automated follow-up sequences sent by SMS or email based on what your leads and customers actually do.',
  },
  {
    icon: Users,
    title: 'Partnership Builds',
    description: "We partner with marketing agencies as the technical build team. Your client's vision, our execution.",
  },
]

const portfolio = [
  {
    name: 'DHDO Scan',
    url: 'https://dhdoscan.com',
    description: 'Full website for a 3D property scanning and digital documentation company. Clean dark design built for credibility and lead capture.',
    tags: ['Website', 'Lead Capture'],
  },
  {
    name: "Jab's Seafood",
    url: 'https://jabsseafood.com',
    description: 'Business website for a Louisiana seafood company. Built to showcase their offerings and drive local customer engagement.',
    tags: ['Website', 'Local Business'],
    partner: 'Bryant Marketing Services, LLC',
  },
  {
    name: 'Joey for Judge',
    url: 'https://joeyforjudge.com',
    description: 'Political campaign website built fast for a local Louisiana judicial race. Clear messaging, mobile-first, and built to drive awareness.',
    tags: ['Campaign Site', 'Website'],
    partner: 'Bryant Marketing Services, LLC',
  },
]

const faqs = [
  {
    q: 'What exactly does Gulfline AI build?',
    a: 'We build websites, web apps, client portals, e-commerce stores, AI chatbots, and automated lead and CRM pipelines for businesses of all sizes.',
  },
  {
    q: 'How long does a website take?',
    a: 'A standard landing page can be ready in 2–5 days. More complex projects like portals or e-commerce stores typically run 2–4 weeks depending on scope.',
  },
  {
    q: 'What does a project cost?',
    a: 'Every project is scoped individually. We give you a clear number before anything starts — no surprise invoices.',
  },
  {
    q: 'Can you automate my lead intake and follow-ups?',
    a: 'Yes. We build systems that capture leads from your site, qualify them, route them to the right person, and send automatic follow-ups via SMS or email.',
  },
  {
    q: 'Can you integrate with my existing CRM?',
    a: 'Yes. We work with HubSpot, Salesforce, GoHighLevel, Google Workspace, and custom APIs. If you use a tool, we will figure out how to connect it.',
  },
  {
    q: 'Do you work with other marketing agencies?',
    a: 'Yes. We partner with marketing agencies as the technical build team. Your strategy, our execution.',
  },
  {
    q: 'Where are you based?',
    a: 'Lake Charles, Louisiana. We work with clients locally and remotely.',
  },
  {
    q: 'How do I get started?',
    a: 'Fill out the contact form and we will set up a quick call — always free — to learn about your business and what you need.',
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="bg-[#0B1220] py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 flex justify-center">
                <img
                  src="/images/logo-hero-final.png"
                  alt="Gulfline AI"
                  className="h-auto w-[280px] sm:w-[340px] lg:w-[400px]"
                />
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                We Build the Digital Side of Your Business.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
                Websites, web apps, Shopify stores, AI chatbots, and automated lead pipelines — built clean, built fast, built to work.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href="/portfolio">See Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <section className="border-y border-white/[0.05] bg-[#0F1829] py-6">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-white/40">
              <span>Lake Charles, Louisiana</span>
              <span className="hidden sm:block text-white/20">•</span>
              <span>Websites & Web Apps</span>
              <span className="hidden sm:block text-white/20">•</span>
              <span>AI Chatbots & Automation</span>
              <span className="hidden sm:block text-white/20">•</span>
              <span>CRM & Lead Pipelines</span>
              <span className="hidden sm:block text-white/20">•</span>
              <span>Agency Partnerships Welcome</span>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="bg-[#0B1220] py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What We Build
              </h2>
              <p className="mt-4 text-lg text-white/60">
                One team. Everything your business needs online.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.title}
                    className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-[#22D3EE]/30 hover:bg-white/[0.08]"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1D4ED8]/20">
                      <Icon className="h-5 w-5 text-[#22D3EE]" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-white">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-white/55">{service.description}</p>
                  </Card>
                )
              })}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="rounded-lg border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── How We Work ── */}
        <section className="bg-[#0F1829] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How We Work</h2>
              <p className="mt-4 text-lg text-white/60">Simple process. No surprises.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: '1', title: 'Discovery Call', body: "We learn about your business, your goals, and what you need. Free, no pressure, no pitch." },
                { num: '2', title: 'Scope & Quote', body: 'You get a clear breakdown of what we\'ll build, the timeline, and the price. You approve before we start.' },
                { num: '3', title: 'Build & Review', body: 'We build it, show you progress, and take your feedback. You\'re in the loop the whole time.' },
                { num: '4', title: 'Launch & Support', body: 'We launch your project and stick around. Updates, fixes, and new features as you grow.' },
              ].map((step, i) => (
                <div key={step.num} className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8] text-lg font-bold text-white">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{step.body}</p>
                  {i < 3 && (
                    <div className="absolute -right-4 top-6 hidden h-0.5 w-8 bg-white/10 lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio Preview ── */}
        <section className="bg-[#0B1220] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Recent Work</h2>
              <p className="mt-4 text-lg text-white/60">Real projects for real businesses.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
              {portfolio.map((project) => (
                <Card
                  key={project.name}
                  className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-[#22D3EE]/30"
                >
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-[#1D4ED8]/20 px-3 py-1 text-xs font-medium text-[#22D3EE]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{project.name}</h3>
                    <p className="text-sm leading-relaxed text-white/55">{project.description}</p>
                    {project.partner && (
                      <p className="mt-3 text-xs text-white/35">In partnership with {project.partner}</p>
                    )}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#22D3EE] transition-colors hover:text-white"
                  >
                    View site <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="rounded-lg border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/portfolio">View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#0F1829] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-white/[0.07] pb-6">
                    <h3 className="mb-2 text-base font-semibold text-white">{faq.q}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0B1220] py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-[#1D4ED8]/30 bg-[#1D4ED8]/10 px-8 py-14 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to build something?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
                Tell us what you need. The first call is free and there is no commitment. We will put together a plan and a price — then it is up to you.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <a href="mailto:gulflineai@gmail.com">Email Us Directly</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
