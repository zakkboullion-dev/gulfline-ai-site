import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle2 } from 'lucide-react'

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Solutions Designed to Scale
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Start with one automation. Expand into a fully integrated AI system.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-16">
              {/* Solution 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Website AI Chat Agents</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Custom AI agents that operate as the first point of contact for your
                    business — capturing information, routing requests, and escalating when
                    needed.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Business-specific knowledge
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Structured data collection
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Smart routing and escalation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Guardrails for pricing, claims, and policies
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button asChild>
                      <Link href="/contact">Request a Demo</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Solution 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Scheduling & Intake Automation</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Automated scheduling and intake that reduces manual effort and improves
                    conversion quality.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Calendar integrations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Custom intake logic
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Automated confirmations and reminders
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        CRM and internal system logging
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button asChild>
                      <Link href="/contact">Request an Audit</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Solution 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Advanced Business Automation</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Custom-built automation systems that connect AI agents to your internal
                    operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        CRM pipelines
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Notifications and alerts
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Follow-up workflows
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Custom operational logic
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button asChild>
                      <Link href="/contact">Request an Audit</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Solution 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Custom Website Development</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Enterprise-grade websites engineered to support AI agents, automation, and
                    conversion workflows. This is a consultative service, not a template product.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Discovery & planning sessions
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Conversion-focused architecture
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        AI-ready infrastructure
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Custom integrations and automations
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button asChild>
                      <Link href="/contact">Discuss Website Development</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-border bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Every solution starts with understanding your business. Let's discuss what you
                need.
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
