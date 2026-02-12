import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const industries = [
  'Healthcare',
  'Construction & Real Estate',
  'Legal & Courts',
  'Finance & Accounting',
  'Retail & eCommerce',
  'Manufacturing',
  'Logistics & Transportation',
  'Marketing & Advertising',
  'Customer Support / Call Centers',
  'Education & Training',
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Built for Businesses That Want Systems — Not Just Software.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Gulfline AI designs and deploys practical automation systems that integrate directly into your operations — reducing manual work, improving response time, and increasing execution clarity.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Why Gulfline AI Exists
              </h2>
              <blockquote className="mt-8 border-l-4 border-[#22D3EE] pl-6">
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>"Most businesses don't need 'more AI.'</p>
                  <p>They need structure.</p>
                  <p className="mt-6">
                    They need intake handled consistently.<br />
                    They need scheduling without back-and-forth.<br />
                    They need visibility into what's happening inside their operations.
                  </p>
                  <p className="mt-6">
                    Gulfline AI was built to remove operational friction — not to sell tools."
                  </p>
                </div>
                <footer className="mt-6 text-base font-medium text-foreground">
                  — Zakk Boullion, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                We Build Systems, Not Experiments.
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    Workflow First
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We map your operational process before introducing automation.
                  </p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    Tool Integration
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We connect directly into your existing stack — CRM, calendar, intake forms, and reporting tools.
                  </p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    Outcome Focused
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Every system is built around measurable operational improvement.
                  </p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    Long-Term Stability
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We design for reliability and refinement — not one-time deployment.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                How We Work
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    1. Audit
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We evaluate your current intake and execution flow.
                  </p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    2. Architect
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We design a structured automation framework aligned to your business logic.
                  </p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    3. Deploy
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We implement, integrate, and test the system inside your environment.
                  </p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    4. Optimize
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We monitor performance and refine based on real operational data.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Who We Work With
              </h2>
              <div className="mt-8 space-y-3 text-lg leading-relaxed text-muted-foreground">
                <p>• Service-based businesses</p>
                <p>• Contractors and local operators</p>
                <p>• Growing SMB teams</p>
                <p>• Organizations scaling operations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Leadership
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Gulfline AI was founded with a focus on operational clarity and structured execution. Our approach combines hands-on system architecture with real-world business understanding.
              </p>

              {/* Founders Card */}
              <Card className="mt-10 border border-white/10 bg-white/5 p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    Founded By
                  </h3>
                  <div className="mt-6 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
                    <div>
                      <p className="text-lg font-medium text-black">Jay Joseph</p>
                      <p className="mt-1 text-sm text-muted-foreground">Co-Founder</p>
                    </div>
                    <div className="hidden h-12 w-px bg-white/10 sm:block" />
                    <div>
                      <p className="text-lg font-medium text-black">Zakk Boullion</p>
                      <p className="mt-1 text-sm text-muted-foreground">Co-Founder</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground">Lake Charles, Louisiana</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Industries We Serve
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <Badge
                    key={industry}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let's Build Your System
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Request an automation audit to see what's possible for your business.
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">Request an Automation Audit</Link>
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
