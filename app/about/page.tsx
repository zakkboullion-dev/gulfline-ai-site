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
            <div className="mx-auto max-w-4xl">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                About Gulfline AI
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                We design and deploy custom AI automation systems that handle real business workflows — lead routing, scheduling, document processing, reporting, and follow-ups.
              </p>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What We Believe
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  AI automation should solve operational problems, not create new ones. We build systems that integrate with your existing tools, follow your business rules, and deliver measurable improvements in efficiency.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Every business has repetitive tasks that slow teams down. Our approach is to audit your workflows, architect the right solution, deploy it into your environment, and optimize based on real usage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                How We Work
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    1. Audit
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We walk through your current workflows, tools, and pain points to identify what can be automated.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    2. Architect
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We design the automation system based on your processes and get your approval before building.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    3. Deploy
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We build and integrate the system into your environment, then test and refine it with your team.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    4. Optimize
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    We monitor performance, fix issues, and adjust based on real usage data.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Who We're For */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Who We're For
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We work with small to mid-market businesses that have operational complexity — multiple team members, customer touchpoints, and workflows that involve manual coordination. If your team is spending time on repetitive tasks instead of higher-value work, we can help.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Founded by Jay Joseph & Zakk Boullion
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Lake Charles, Louisiana
                  </p>
                </div>
              </div>
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
