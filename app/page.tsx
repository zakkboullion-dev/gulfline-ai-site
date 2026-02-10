import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                AI Agents & Automation for Modern Businesses
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                We design and deploy AI-powered systems that automate customer conversations,
                scheduling, and internal workflows — helping organizations operate more
                efficiently at scale.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">Request an Automation Audit</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Link href="/case-study">View Case Study</Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                Built in Louisiana. Designed for real businesses. Engineered for scale.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What We Do
              </h2>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>AI Chat Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Enterprise-grade AI assistants trained on your business to handle inquiries,
                    qualify requests, and route conversations intelligently — 24/7.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scheduling & Intake Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Automated booking, data collection, and routing that removes friction from
                    your customer experience.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>End-to-End Business Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Custom automation systems that connect AI agents with calendars, CRMs,
                    internal tools, and operational workflows — tailored to how your business
                    actually runs.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Build Section */}
        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-lg border border-border bg-card p-8 lg:p-12">
                <div className="mb-2 text-sm font-medium text-primary">Featured Build</div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Construction Website AI Assistant
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">Bradberry Construction</p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Responds instantly to inbound inquiries
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Collects structured project details
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Schedules consultations automatically
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Provides controlled, high-level pricing context with safeguards
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild>
                    <Link href="/case-study">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How It Works
              </h2>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground">Automation Audit</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We assess your workflows, bottlenecks, and opportunities for automation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground">System Design</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We architect an AI solution aligned with your operations, compliance needs, and
                  growth goals.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Deployment & Integration
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We deploy the system across your website and internal tools.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Optimization & Expansion
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We monitor performance, refine logic, and expand automation over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Gulfline AI Section */}
        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Gulfline AI
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-3xl space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Enterprise-minded architecture — not templates
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Fast but deliberate deployment
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Automation beyond chat — full operational systems
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Controlled AI behavior — safeguards built in from day one
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-lg">
                    How much does this cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    Every system is custom-built based on your business, workflows, and
                    integrations. After an automation audit, we scope the system and provide a
                    tailored proposal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-lg">
                    Is this just a chatbot?
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    No. Chatbots are only one component. We design full AI-powered systems that
                    connect to your internal tools and operations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-lg">
                    How long does deployment take?
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    Initial systems can deploy in days. More advanced automation projects vary
                    based on scope and complexity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-lg">
                    Will this replace our staff?
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    No. Our systems are designed to support teams, eliminate repetitive work, and
                    improve efficiency — not replace human judgment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-lg">
                    Is our data secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    Systems are designed with access controls, scoped permissions, and secure
                    integrations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Request an Automation Audit
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Every business operates differently. We'll identify what can realistically be
                automated, how it should be built, and what it would take to deploy it properly.
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
