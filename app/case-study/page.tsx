import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DashboardMockup } from '@/components/dashboard-mockup'
import { X } from 'lucide-react'

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1 - Header */}
        <section className="border-b border-white/[0.05] bg-[#0B1220] py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4 text-sm font-medium tracking-wide text-[#22D3EE]">
                Client Implementation
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Case Study: Bradberry Construction
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
                Deploying a structured AI workflow system to modernize lead intake, qualification, and scheduling operations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - The Operational Challenge */}
        <section className="border-b border-white/[0.05] bg-[#0F172A] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                The Operational Challenge
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-lg leading-relaxed text-white/70">
                  Bradberry Construction was receiving website inquiries and project requests that required manual review, manual routing, and repetitive follow-up.
                </p>
                <p className="text-lg leading-relaxed text-white/70">
                  As the business expanded, maintaining consistent intake quality and response speed became increasingly dependent on internal availability and manual coordination.
                </p>
                <div className="mt-8">
                  <p className="mb-4 text-base font-semibold text-white/90">Primary constraints:</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      'After-hours inquiries',
                      'Repetitive intake questions',
                      'Manual scheduling coordination',
                      'Inconsistent qualification data',
                      'Limited centralized tracking',
                    ].map((constraint) => (
                      <div key={constraint} className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                        <p className="text-sm leading-relaxed text-white/60">{constraint}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - System Dashboard */}
        <section className="border-b border-white/[0.05] bg-[#0B1220] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
                System Dashboard
              </h2>
              <div className="flex justify-center">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Implementation Approach */}
        <section className="border-b border-white/[0.05] bg-[#0F172A] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Implementation Process
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      Workflow Mapping
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/60">
                      Mapped the company's intake and scheduling logic.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      AI Agent Configuration
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/60">
                      Built a controlled AI intake assistant aligned with brand tone and project types.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      System Integration
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/60">
                      Connected intake to scheduling workflows and internal notifications.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      Monitoring & Refinement
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/60">
                      Ongoing review of conversation quality and intake completeness.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Operational Impact */}
        <section className="border-b border-white/[0.05] bg-[#0B1220] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Operational Impact
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  'Improved response consistency for new inquiries',
                  'Reduced repetitive manual intake communication',
                  'Structured project qualification before scheduling',
                  'Increased visibility into inbound activity',
                  'Clearer internal routing process',
                ].map((impact) => (
                  <div key={impact} className="flex items-start gap-4 rounded-lg border border-white/5 bg-white/[0.02] p-4">
                    <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22D3EE]" />
                    <p className="text-base leading-relaxed text-white/70">{impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - Visual Proof */}
        <section className="border-b border-white/[0.05] bg-[#0F172A] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Live Deployment
              </h2>
              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-8">
                <p className="text-base text-white/70">
                  This AI intake system is deployed and operational at{' '}
                  <a
                    href="https://bradberryconstruction.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#22D3EE] underline decoration-[#22D3EE]/30 underline-offset-4 transition-colors hover:text-[#22D3EE]/80"
                  >
                    BradberryConstruction.com
                  </a>
                  .
                </p>
                <p className="mt-4 text-sm text-white/50">
                  The assistant handles initial inquiries, qualification questions, and scheduling coordination for construction project requests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 - Final CTA */}
        <section className="bg-[#0B1220] py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Build a Structured Intake System for Your Business
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
                See how AI automation can transform your operations with a custom workflow system built for your business.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8]">
                  <Link href="/contact">Request an Automation Audit</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                  <Link href="/solutions">View Solutions</Link>
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
