import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Gulfline AI',
  description: 'Gulfline AI is a Lake Charles, Louisiana web development and AI automation company. We build websites, apps, chatbots, and lead pipelines for businesses of all sizes.',
}

const differentiators = [
  {
    title: 'We build, we do not consult.',
    body: 'You get a finished product — not a strategy deck. Every project ends with something live, working, and yours.',
  },
  {
    title: 'One team, full scope.',
    body: 'Websites, apps, automations, chatbots, CRM integrations — we handle all of it. No need to coordinate between vendors.',
  },
  {
    title: 'We work with agencies.',
    body: 'Marketing agencies bring us in as the technical build team. White-label or collaborative — we are flexible.',
  },
  {
    title: 'We keep it simple.',
    body: 'No jargon, no surprises, no hidden fees. You know what we are building, what it costs, and when it is done.',
  },
]

const industries = [
  'Restaurants & Food Service',
  'Retail & E-Commerce',
  'Legal & Political Campaigns',
  'Construction & Real Estate',
  'Healthcare & Wellness',
  'Finance & Insurance',
  'Marketing & Advertising',
  'Logistics & Transportation',
  'Education & Training',
  'Local Service Businesses',
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-[#0B1220] py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#22D3EE]">
                Who We Are
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Built in Lake Charles. Built for Business.
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
                Gulfline AI is a web development and automation company based in Lake Charles, Louisiana. We build the digital side of businesses — websites, apps, chatbots, and the systems that keep them running.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-[#0F1829] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="flex items-center justify-center">
                  <div className="flex h-72 w-72 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-center">
                    <div>
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#1D4ED8]/30">
                        <span className="text-2xl font-bold text-[#22D3EE]">ZB</span>
                      </div>
                      <p className="text-sm text-white/40">Photo coming soon</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white">Zakk Boullion</h2>
                  <p className="mt-1 text-base text-[#22D3EE]">Founder, Gulfline AI</p>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-white/65">
                    <p>
                      I started Gulfline AI because I saw a real gap — businesses that needed professional digital work but kept getting handed templates, cookie-cutter solutions, or vendors who disappeared after launch.
                    </p>
                    <p>
                      Every business I have worked with has something specific about how they operate, what they sell, and who they serve. Generic does not cut it. So we build custom — websites, apps, automation systems — designed around how each client actually works.
                    </p>
                    <p>
                      Based in Lake Charles, working with clients across Louisiana and beyond.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href="mailto:gulflineai@gmail.com"
                      className="text-sm font-medium text-[#22D3EE] transition-colors hover:text-white"
                    >
                      gulflineai@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Gulfline AI */}
        <section className="bg-[#0B1220] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Why Gulfline AI
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {differentiators.map((item) => (
                  <Card
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{item.body}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-[#0F1829] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    We Work With Any Industry.
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-white/60">
                    If your business needs a website, an app, or a smarter way to handle leads and communication — we can help. We have worked with seafood businesses, political campaigns, property documentation companies, and more.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-white/60">
                    Industry does not matter. What matters is that you need something built and you want it done right.
                  </p>
                  <div className="mt-8">
                    <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white">
                      <Link href="/contact">Talk to Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap content-start gap-3">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B1220] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-[#1D4ED8]/30 bg-[#1D4ED8]/10 px-8 py-14 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to work together?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/65">
                The first call is free. Tell us what you need and we will put together a plan that fits your business and your budget.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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

      </main>
      <Footer />
    </>
  )
}
