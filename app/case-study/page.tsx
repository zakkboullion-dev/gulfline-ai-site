import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle2, ExternalLink } from 'lucide-react'

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4 text-sm font-medium text-primary">Case Study</div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Construction Website AI Assistant
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">Bradberry Construction</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-16">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Challenge
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Bradberry Construction wanted to improve website engagement, capture inquiries
                  at all hours, and begin automating their intake process.
                </p>
              </div>

              {/* Solution */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Solution</CardTitle>
                  <CardDescription className="text-base">
                    We deployed a custom AI assistant that operates as the first point of
                    contact for website visitors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Answers common questions
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
                        Schedules consultations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Provides controlled pricing context
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Live Deployment */}
              <div className="rounded-lg border border-border bg-card p-8">
                <h3 className="text-xl font-semibold text-foreground">Live Deployment</h3>
                <div className="mt-4 flex items-center gap-4">
                  <Button asChild variant="outline">
                    <a
                      href="https://bradberryconstruction.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Recently deployed. Performance metrics will be published as data matures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Build Your System?
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                See how AI automation can transform your business operations. Request an audit
                to get started.
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
