import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ExternalLink, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio — Gulfline AI',
  description: 'Real websites and web projects built by Gulfline AI. See our work across local business, e-commerce, political campaigns, and more.',
}

const projects = [
  {
    name: 'DHDO Scan',
    url: 'https://dhdoscan.com',
    category: 'Business Website',
    location: 'Lake Charles, Louisiana',
    tags: ['Website', 'Lead Capture', 'Dark Design'],
    description: 'Digital Home Documentation Operations (DHDO) needed a professional website to represent their Matterport 3D scanning and property documentation services. We built a clean, dark-themed site focused on credibility, clear service communication, and lead generation.',
    built: ['Custom design from scratch', 'Contact and lead capture form', 'Service pages and pricing layout', 'Mobile-optimized', 'Deployed on Vercel'],
    partner: null,
  },
  {
    name: "Jab's Seafood",
    url: 'https://jabsseafood.com',
    category: 'Local Business Website',
    location: 'Hackberry, Louisiana',
    tags: ['Website', 'Local Business', 'Cajun & Seafood'],
    description: "Jab's Seafood is a Louisiana seafood business serving the local community. We built their online presence to showcase their offerings, communicate their story, and make it easy for customers to find and contact them.",
    built: ['Business website with branding', 'Product and service showcase', 'Contact and location info', 'Mobile-first design', 'Optimized for local SEO'],
    partner: 'Bryant Marketing Services, LLC',
  },
  {
    name: 'Joey for Judge',
    url: 'https://joeyforjudge.com',
    category: 'Political Campaign Website',
    location: 'Louisiana',
    tags: ['Campaign Site', 'Political', 'Fast Turnaround'],
    description: 'A Louisiana judicial candidate needed a campaign website fast. We delivered a clean, professional site built to drive name recognition, communicate the candidate\'s platform, and reach voters ahead of the election.',
    built: ['Campaign site with clear messaging', 'Candidate bio and platform pages', 'Mobile-first design', 'Fast turnaround delivery', 'Social sharing optimized'],
    partner: 'Bryant Marketing Services, LLC',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-[#0B1220] py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#22D3EE]">
                Our Work
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Built by Gulfline AI.
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
                Real projects for real businesses. We are early and growing — every client gets our full attention.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-[#0F1829] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-10">
              {projects.map((project, i) => (
                <Card
                  key={project.name}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
                >
                  {/* Card Header */}
                  <div className="border-b border-white/[0.07] px-8 py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[#1D4ED8]/20 px-3 py-1 text-xs font-medium text-[#22D3EE]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                        <p className="mt-1 text-sm text-white/40">
                          {project.category} &nbsp;·&nbsp; {project.location}
                        </p>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#22D3EE]/50 hover:text-[#22D3EE]"
                      >
                        Visit Site <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="grid gap-8 px-8 py-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
                        About the Project
                      </p>
                      <p className="text-base leading-relaxed text-white/65">
                        {project.description}
                      </p>
                      {project.partner && (
                        <p className="mt-5 text-sm text-white/35">
                          Built in partnership with{' '}
                          <span className="text-white/50">{project.partner}</span>
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
                        What We Built
                      </p>
                      <ul className="space-y-2.5">
                        {project.built.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22D3EE]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* More coming */}
        <section className="bg-[#0B1220] py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/40">
                More Coming Soon
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                We add new work as projects launch.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/55">
                We are actively building client portals, web apps, and additional sites. Check back regularly — or reach out and your project could be next.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F1829] py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-[#1D4ED8]/30 bg-[#1D4ED8]/10 px-8 py-12 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Want your project here?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/65">
                We build fast, we build clean, and we build it right. Get in touch and tell us what you need.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white">
                  <Link href="/contact">Start a Project</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href="/services">View Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
