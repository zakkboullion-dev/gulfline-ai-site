import type { Metadata } from 'next'
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
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services — Gulfline AI',
  description: 'Websites, web apps, Shopify stores, AI chatbots, CRM integration, SMS & email pipelines, and lead automation. One team for everything your business needs online.',
}

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Custom websites built from scratch — not templates. We design for your brand, your audience, and your goals. From single landing pages to full multi-page business sites.',
    features: [
      'Mobile-first, fully responsive',
      'Fast load times optimized for SEO',
      'Contact forms with lead capture',
      'Hosting setup and deployment',
      'Ongoing maintenance available',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Shopify & E-Commerce Stores',
    description: 'Full Shopify store builds with custom design, product setup, collections, payment integration, and everything you need to start selling on day one.',
    features: [
      'Custom Shopify theme design',
      'Product catalog setup',
      'Payment & shipping configuration',
      'Discount codes and promotions',
      'Analytics and reporting',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Web Apps & Client Portals',
    description: 'Need something more than a website? We build custom web applications — client portals, dashboards, booking systems, and internal tools with databases and user authentication.',
    features: [
      'Secure user login & authentication',
      'Custom database design',
      'Real-time data and dashboards',
      'File uploads and document management',
      'Role-based access control',
    ],
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Smart chatbots trained on your business that answer questions, capture leads, qualify prospects, and hand off to your team — installed directly on your website.',
    features: [
      'Trained on your products and services',
      'Lead capture and qualification',
      'Human handoff when needed',
      'Works 24/7 without staff',
      'Embedded on any website',
    ],
  },
  {
    icon: Workflow,
    title: 'Lead Intake & Automation',
    description: 'Stop manually handling every inquiry. We build systems that capture leads from your website, qualify them automatically, and route them to the right person or CRM entry.',
    features: [
      'Form-to-CRM automation',
      'Lead scoring and qualification',
      'Instant notifications to your team',
      'Duplicate detection and cleanup',
      'Custom routing rules',
    ],
  },
  {
    icon: Database,
    title: 'CRM Integration',
    description: "Connect your website, forms, and tools to the CRM you already use. We make sure nothing falls through the cracks — every lead and contact lands exactly where it should.",
    features: [
      'HubSpot, Salesforce, GoHighLevel',
      'Google Sheets & Workspace',
      'Custom API integrations',
      'Two-way data sync',
      'Pipeline and deal automation',
    ],
  },
  {
    icon: Mail,
    title: 'SMS & Email Pipelines',
    description: 'Automated follow-up sequences triggered by what your leads and customers actually do. Right message, right person, right time — without you lifting a finger.',
    features: [
      'Welcome and onboarding sequences',
      'Lead nurture campaigns',
      'Appointment reminders',
      'Re-engagement flows',
      'SMS and email combined',
    ],
  },
  {
    icon: Users,
    title: 'Agency Partnerships',
    description: "We work with marketing agencies as the technical build team. You handle strategy and client relationships — we handle the development. Your clients get better results, faster.",
    features: [
      'White-label builds available',
      'Direct or behind-the-scenes collaboration',
      'Flexible project-based pricing',
      'Fast turnaround on landing pages',
      'Ongoing dev support retainers',
    ],
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
      <main>

        {/* Hero */}
        <section className="bg-[#0B1220] py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#22D3EE]">
                What We Do
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Everything Your Business Needs Online.
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
                One team that builds websites, apps, automations, and AI tools — so you never have to juggle multiple vendors again.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href="/portfolio">See Our Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-[#0F1829] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Card
                    key={service.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                  >
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                      <div>
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8]/20">
                          <Icon className="h-6 w-6 text-[#22D3EE]" />
                        </div>
                        <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
                          {service.title}
                        </h2>
                        <p className="text-base leading-relaxed text-white/65">
                          {service.description}
                        </p>
                      </div>
                      <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                          What&apos;s included
                        </p>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#22D3EE]" />
                              <span className="text-sm text-white/70">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="border-y border-white/[0.05] bg-[#0B1220] py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-white/40">
                Integrates With Your Existing Stack
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {integrations.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B1220] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-[#1D4ED8]/30 bg-[#1D4ED8]/10 px-8 py-14 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Not sure what you need?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/65">
                Tell us about your business and what you are trying to accomplish. We will figure out the right build together — no tech jargon, no pressure.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
