import { AccordionContent } from "@/components/ui/accordion"
import { AccordionTrigger } from "@/components/ui/accordion"
import { AccordionItem } from "@/components/ui/accordion"
import { Accordion } from "@/components/ui/accordion"
import { CardDescription } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Activity, Zap, TrendingUp, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Dark */}
        <section className="bg-[#0B1220] py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Column */}
              <div className="flex flex-col justify-center">
                <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  AI Systems Built for How Your Business Actually Operates.
                </h1>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
                  We design and deploy custom AI workflows that improve internal operations,
                  reduce manual work, and streamline how your team executes.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1D4ED8]/90">
                    <Link href="/contact">Request an Audit</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-lg border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    <Link href="/solutions">View Solutions</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Mock Dashboard */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-lg space-y-4">
                  {/* Main Dashboard Card */}
                  <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#1D4ED8]/20 to-[#22D3EE]/10 p-6 shadow-2xl backdrop-blur">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white/90">System Activity</h3>
                      <span className="rounded-full bg-[#22D3EE]/20 px-3 py-1 text-xs font-medium text-[#22D3EE]">
                        Live
                      </span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <Activity className="h-4 w-4 text-[#22D3EE]" />
                          <span className="text-xs text-white/60">Active Tasks</span>
                        </div>
                        <p className="text-2xl font-bold text-white">127</p>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-[#1D4ED8]" />
                          <span className="text-xs text-white/60">Automated</span>
                        </div>
                        <p className="text-2xl font-bold text-white">94%</p>
                      </div>
                    </div>

                    {/* Workflow Steps */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1D4ED8]/20">
                          <TrendingUp className="h-4 w-4 text-[#1D4ED8]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">Data Processing</p>
                          <p className="text-xs text-white/50">Step 2 of 4</p>
                        </div>
                        <div className="h-2 w-16 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-1/2 bg-[#1D4ED8]" />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22D3EE]/20">
                          <Clock className="h-4 w-4 text-[#22D3EE]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">Scheduling</p>
                          <p className="text-xs text-white/50">Queued</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stat Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <p className="text-xs text-white/60">Response Time</p>
                      <p className="mt-1 text-xl font-bold text-white">{'<'}2s</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <p className="text-xs text-white/60">Success Rate</p>
                      <p className="mt-1 text-xl font-bold text-white">99.8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build Section */}
        <section className="bg-[#F8FAFC] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                What We Build
              </h2>
              <p className="mt-4 text-lg text-[#0F172A]/70">
                AI infrastructure tailored to your internal processes.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2">
              <Card className="rounded-xl border-0 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  Custom AI Workflow Systems
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0F172A]/70">
                  Bespoke automation systems built around how your team actually works.
                </p>
              </Card>

              <Card className="rounded-xl border-0 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  Backend Process Automation
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0F172A]/70">
                  Reduce repetitive internal tasks and increase operational consistency.
                </p>
              </Card>

              <Card className="rounded-xl border-0 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  Intelligent Data Handling
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0F172A]/70">
                  AI-powered routing, decision support, and structured internal data flows.
                </p>
              </Card>

              <Card className="rounded-xl border-0 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                <h3 className="text-xl font-semibold text-[#0F172A]">
                  Operational AI Tools
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0F172A]/70">
                  Internal AI assistants and workflow interfaces built specifically for your
                  organization.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-[#0B1220] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                How It Works
              </h2>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8] text-lg font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white">Audit</h3>
                <p className="text-base leading-relaxed text-white/70">
                  We analyze your existing workflows.
                </p>
                <div className="absolute -right-4 top-6 hidden h-0.5 w-8 bg-white/20 lg:block" />
              </div>

              <div className="relative space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8] text-lg font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white">Design</h3>
                <p className="text-base leading-relaxed text-white/70">
                  We architect a custom AI system.
                </p>
                <div className="absolute -right-4 top-6 hidden h-0.5 w-8 bg-white/20 lg:block" />
              </div>

              <div className="relative space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8] text-lg font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white">Deploy</h3>
                <p className="text-base leading-relaxed text-white/70">
                  We integrate it into your operations.
                </p>
                <div className="absolute -right-4 top-6 hidden h-0.5 w-8 bg-white/20 lg:block" />
              </div>

              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8] text-lg font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-semibold text-white">Optimize</h3>
                <p className="text-base leading-relaxed text-white/70">
                  We refine and monitor performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI System Visuals Section */}
        <section className="bg-[#F8FAFC] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Built Like Infrastructure. Designed for Humans.
              </h2>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
              {/* Mock Dashboard UI */}
              <Card className="rounded-xl border border-[#0F172A]/10 bg-white p-6 shadow-lg lg:col-span-2">
                <div className="mb-4 flex items-center justify-between border-b border-[#0F172A]/10 pb-3">
                  <h3 className="text-sm font-semibold text-[#0F172A]">Workflow Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#22D3EE]" />
                    <div className="h-2 w-2 rounded-full bg-[#1D4ED8]" />
                    <div className="h-2 w-2 rounded-full bg-[#0F172A]/20" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] p-3">
                    <span className="text-sm text-[#0F172A]/70">Intake Processing</span>
                    <span className="text-sm font-medium text-[#1D4ED8]">Active</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] p-3">
                    <span className="text-sm text-[#0F172A]/70">Data Routing</span>
                    <span className="text-sm font-medium text-[#22D3EE]">Queued</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] p-3">
                    <span className="text-sm text-[#0F172A]/70">Report Generation</span>
                    <span className="text-sm font-medium text-[#0F172A]/40">Scheduled</span>
                  </div>
                </div>
              </Card>

              {/* Chat Interface Preview */}
              <Card className="rounded-xl border border-[#0F172A]/10 bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-sm font-semibold text-[#0F172A]">AI Assistant</h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-[#1D4ED8]/10 p-3">
                    <p className="text-xs text-[#0F172A]/70">
                      How can I assist with your workflow today?
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#F8FAFC] p-3">
                    <p className="text-xs text-[#0F172A]/70">Schedule review meeting</p>
                  </div>
                  <div className="rounded-lg bg-[#1D4ED8]/10 p-3">
                    <p className="text-xs text-[#0F172A]/70">Meeting scheduled for 2pm</p>
                  </div>
                </div>
              </Card>

              {/* Workflow Map Visual */}
              <Card className="rounded-xl border border-[#0F172A]/10 bg-white p-6 shadow-lg lg:col-span-3">
                <h3 className="mb-4 text-sm font-semibold text-[#0F172A]">System Architecture</h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-[#1D4ED8] bg-[#1D4ED8]/10">
                      <span className="text-xs font-medium text-[#1D4ED8]">Input</span>
                    </div>
                    <p className="text-xs text-[#0F172A]/60">Data Entry</p>
                  </div>
                  <div className="h-0.5 w-12 bg-[#0F172A]/20" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-[#22D3EE] bg-[#22D3EE]/10">
                      <span className="text-xs font-medium text-[#22D3EE]">AI</span>
                    </div>
                    <p className="text-xs text-[#0F172A]/60">Processing</p>
                  </div>
                  <div className="h-0.5 w-12 bg-[#0F172A]/20" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-[#1D4ED8] bg-[#1D4ED8]/10">
                      <span className="text-xs font-medium text-[#1D4ED8]">Action</span>
                    </div>
                    <p className="text-xs text-[#0F172A]/60">Execution</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Strong CTA Section */}
        <section className="bg-[#0B1220] py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {"Let's"} Engineer Your Internal AI System.
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/80">
                Start with a structured automation audit.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1D4ED8]/90">
                  <Link href="/contact">Request an Audit</Link>
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
