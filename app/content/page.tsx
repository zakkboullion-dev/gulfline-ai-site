import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Instagram, Youtube, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Content — Gulfline AI',
  description: 'Tips, tutorials, and resources on web development, AI automation, and building a digital business. Follow along on Instagram, TikTok, and Facebook.',
}

const socials = [
  {
    platform: 'Instagram',
    handle: '@gulflineai',
    description: 'Reels, tips, and behind-the-scenes on websites and automation.',
    url: '#',
    icon: Instagram,
  },
  {
    platform: 'TikTok',
    handle: '@gulflineai',
    description: 'Short-form content on building websites, AI tools, and running a digital agency.',
    url: '#',
    icon: ExternalLink,
  },
  {
    platform: 'Facebook',
    handle: 'Gulfline AI',
    description: 'Updates, project launches, and local business content.',
    url: '#',
    icon: ExternalLink,
  },
]

const upcomingContent = [
  {
    title: 'How to Build a Professional Landing Page in 2025',
    type: 'Tutorial',
    status: 'Coming Soon',
  },
  {
    title: 'What Every Small Business Website Needs (and Most are Missing)',
    type: 'Article',
    status: 'Coming Soon',
  },
  {
    title: 'How We Set Up Lead Automation for a Local Business',
    type: 'Case Study',
    status: 'Coming Soon',
  },
  {
    title: 'AI Chatbots Explained: What They Are and When You Need One',
    type: 'Guide',
    status: 'Coming Soon',
  },
]

export default function ContentPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-[#0B1220] py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#22D3EE]">
                Content & Resources
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Learn. Build. Grow.
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
                Tips, tutorials, and real talk on websites, AI, and building a digital business — from the team actually doing the work.
              </p>
            </div>
          </div>
        </section>

        {/* Skool Course Teaser */}
        <section className="bg-[#0F1829] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="rounded-2xl border border-[#22D3EE]/20 bg-[#22D3EE]/5 p-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <span className="inline-block rounded-full bg-[#22D3EE]/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#22D3EE]">
                      Coming Soon
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                      The Gulfline AI Course
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-white/65">
                      A full course on how to build professional websites and web projects — from zero to launched. We are putting everything we know into one place: tools, process, pricing, client communication, and the technical side of actually building it.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-white/65">
                      Launching on Skool. Drop your email on the contact page to get notified when it goes live.
                    </p>
                    <div className="mt-8">
                      <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white">
                        <Link href="/contact">Notify Me at Launch</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full rounded-xl border border-white/10 bg-white/5 p-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                        What the course covers
                      </p>
                      <ul className="space-y-3">
                        {[
                          'How to scope and price web projects',
                          'Design fundamentals for developers',
                          'Building landing pages that convert',
                          'Setting up hosting, domains, and deployment',
                          'Working with clients professionally',
                          'Adding AI and automation to your toolkit',
                          'Growing a freelance or agency business',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22D3EE]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-[#0B1220] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Follow Along
              </h2>
              <p className="mb-12 text-base text-white/55">
                We post regularly on web dev, AI, and building in public. Follow us wherever you spend time online.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <Card
                      key={social.platform}
                      className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-[#22D3EE]/30"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1D4ED8]/20">
                        <Icon className="h-5 w-5 text-[#22D3EE]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{social.platform}</h3>
                      <p className="mt-1 text-sm text-[#22D3EE]">{social.handle}</p>
                      <p className="mt-3 text-sm leading-relaxed text-white/55">{social.description}</p>
                      <a
                        href={social.url}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/40 transition-colors hover:text-white"
                      >
                        Follow <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Articles */}
        <section className="bg-[#0F1829] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Articles & Guides
              </h2>
              <p className="mb-12 text-base text-white/55">
                In-depth content on building websites, setting up automation, and growing a digital business. First posts dropping soon.
              </p>
              <div className="space-y-4">
                {upcomingContent.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-5"
                  >
                    <div>
                      <span className="mb-2 inline-block rounded-full bg-[#1D4ED8]/20 px-3 py-0.5 text-xs font-medium text-[#22D3EE]">
                        {item.type}
                      </span>
                      <h3 className="text-base font-medium text-white">{item.title}</h3>
                    </div>
                    <span className="ml-6 shrink-0 text-xs text-white/30">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B1220] py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-[#1D4ED8]/30 bg-[#1D4ED8]/10 px-8 py-12 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Want us to build something for you?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/65">
                Content is great. A working website or automation system is better. Get a free quote and see what we can build together.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white">
                  <Link href="/contact">Get a Free Quote</Link>
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
