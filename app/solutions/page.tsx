import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
                Solutions Built for Real Operations
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Custom automation systems designed around your workflows, tools, and team — not generic templates.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-16">
              {/* Solution 1: Internal Workflow Automation */}
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="secondary">Best for: Operations Teams</Badge>
                  </div>
                  <CardTitle className="text-2xl">Internal Workflow Automation</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Automate the repetitive tasks that slow your team down — lead routing, data entry, scheduling, follow-ups, and status updates.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Lead capture and routing to the right team member
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Automated scheduling with calendar integrations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Follow-up sequences based on customer behavior
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Real-time notifications and status updates
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

              {/* Solution 2: AI Assistants */}
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="secondary">Best for: Customer-Facing Teams</Badge>
                  </div>
                  <CardTitle className="text-2xl">AI Assistants for Operations</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Custom AI chatbots and agents that operate as the first point of contact — capturing information, answering questions, and routing requests intelligently.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Business-specific knowledge and context
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Structured data collection and qualification
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Smart escalation to human team members
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Guardrails for pricing, policies, and compliance
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

              {/* Solution 3: Data Handling */}
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="secondary">Best for: Document-Heavy Businesses</Badge>
                  </div>
                  <CardTitle className="text-2xl">Data Handling + Routing</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Extract data from PDFs, emails, and forms, then route it to the right system or team member — no more manual data entry.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        AI-powered document extraction and parsing
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Intelligent routing to CRMs, databases, or approval workflows
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Validation and error handling
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Integration with existing systems
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

              {/* Solution 4: Reporting + Monitoring */}
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="secondary">Best for: Leadership Teams</Badge>
                  </div>
                  <CardTitle className="text-2xl">Reporting + Monitoring</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Automated reports, KPI summaries, and real-time alerts delivered to your team — no more manual report generation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Daily, weekly, or monthly automated reports
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Real-time alerts via Slack, email, or SMS
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Custom dashboards and visualizations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Integration with your data sources
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

              {/* Solution 5: Integrations + Systems */}
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="secondary">Best for: Complex Tech Stacks</Badge>
                  </div>
                  <CardTitle className="text-2xl">Integrations + Systems</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Connect your tools together — CRMs, project management software, communication platforms, and custom internal systems.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        API integrations with major platforms
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Custom webhook and automation workflows
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Data sync and transformation logic
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Error handling and monitoring
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
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-border bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Not Sure What You Need?
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Request an automation audit. We'll walk through your workflows and recommend the best approach for your business.
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
