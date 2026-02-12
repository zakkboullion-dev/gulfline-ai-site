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
//import { WorkflowVisualClean } from '@/components/workflow-visual-clean'
import { WorkflowVisualEnhanced } from '@/components/workflow-visual-enhanced' // Swap to use enhanced version
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
                {/* Logo */}
                <div className="mb-10 flex justify-center lg:justify-start">
                  <img
                    src="/images/logo-hero-final.png"
                    alt="Gulfline AI"
                    className="h-auto w-[360px] sm:w-[420px] md:w-[480px] lg:w-[540px]"
                  />
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  We Build Internal AI Workflows That Run Your Operations.
                </h1>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
                  Custom automation systems designed for real business processes — lead routing, scheduling, document handling, reporting, and follow-ups. Built to integrate with your existing tools and deliver measurable outcomes.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1D4ED8]/90">
                    <Link href="/contact">Request an Automation Audit</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-lg border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    <Link href="/solutions">See What We Build</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Workflow Visual */}
              <div className="flex items-center justify-center lg:justify-end">
                <WorkflowVisualEnhanced />
              </div>
            </div>
          </div>
        </section>

        {/* Examples of What We Automate */}
        <section className="border-b border-[#0F172A]/10 bg-white py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Examples of What We Automate
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#0F172A]/70">
                Real workflows that run your operations.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="rounded-xl border border-[#0F172A]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  Lead Intake → Routing → CRM
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                  Capture leads, qualify them, route to the right team, and log everything to your CRM automatically.
                </p>
              </Card>

              <Card className="rounded-xl border border-[#0F172A]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  Document Processing + Extraction
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                  Extract data from PDFs, emails, and forms, then route for approval or action.
                </p>
              </Card>

              <Card className="rounded-xl border border-[#0F172A]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  Scheduling + Reminders + Updates
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                  Automated booking, confirmation emails, reminders, and real-time status updates.
                </p>
              </Card>

              <Card className="rounded-xl border border-[#0F172A]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  Follow-up Sequences
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                  Intelligent follow-up emails and SMS based on customer behavior and timeline.
                </p>
              </Card>

              <Card className="rounded-xl border border-[#0F172A]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  Reporting + KPI Summaries
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                  Daily, weekly, or monthly reports generated and delivered to your team automatically.
                </p>
              </Card>

              <Card className="rounded-xl border border-[#0F172A]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                  Internal Alerts + Notifications
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                  Slack, email, or SMS alerts when key events happen in your systems.
                </p>
              </Card>
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
                Custom automation systems for internal operations.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2">
              <Card className="rounded-xl border-0 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                  Internal Workflow Automation
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0F172A]/70">
                  AI-powered systems that handle lead routing, data entry, scheduling, follow-ups, and status updates — designed around your specific processes.
                </p>
              </Card>

              <Card className="rounded-xl border-0 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                  AI Assistants for Operations
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0F172A]/70">
                  Custom chatbots and AI agents that capture information, answer questions, and route requests to the right team member or system.
                </p>
              </Card>

              <Card className="rounded-xl border-0 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                  Data Handling + Routing
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0F172A]/70">
                  Extract data from documents, emails, and forms, then intelligently route it to CRMs, project management tools, or approval workflows.
                </p>
              </Card>

              <Card className="rounded-xl border-0 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                  Reporting + Monitoring
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0F172A]/70">
                  Automated reports, KPI summaries, and real-time alerts delivered to Slack, email, or dashboards based on your business logic.
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
                How We Work
              </h2>
              <p className="mt-4 text-lg text-white/70">
                A structured process that gets you from audit to deployment.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8] text-lg font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">Audit</h3>
                <p className="text-base leading-relaxed text-white/70">
                  We walk through your current workflows, tools, and pain points. No sales pitch — just a real conversation about what slows you down.
                </p>
                <div className="absolute -right-4 top-6 hidden h-0.5 w-8 bg-white/20 lg:block" />
              </div>

              <div className="relative space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8] text-lg font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">Architect</h3>
                <p className="text-base leading-relaxed text-white/70">
                  We design the automation system based on your processes, tools, and team. You approve the plan before we build anything.
                </p>
                <div className="absolute -right-4 top-6 hidden h-0.5 w-8 bg-white/20 lg:block" />
              </div>

              <div className="relative space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8] text-lg font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">Deploy</h3>
                <p className="text-base leading-relaxed text-white/70">
                  We build and integrate the system into your real environment. You test it, we refine it, and it goes live when you're ready.
                </p>
                <div className="absolute -right-4 top-6 hidden h-0.5 w-8 bg-white/20 lg:block" />
              </div>

              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8] text-lg font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">Optimize</h3>
                <p className="text-base leading-relaxed text-white/70">
                  We monitor performance, fix issues, and adjust based on real usage. Your system improves over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations / Stack Section */}
        <section className="border-b border-[#0F172A]/10 bg-white py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0F172A]/60">
                Integrates With Your Existing Stack
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#0F172A]/70">
                <span>Google Workspace</span>
                <span className="text-[#0F172A]/30">•</span>
                <span>Salesforce</span>
                <span className="text-[#0F172A]/30">•</span>
                <span>HubSpot</span>
                <span className="text-[#0F172A]/30">•</span>
                <span>Slack</span>
                <span className="text-[#0F172A]/30">•</span>
                <span>Microsoft 365</span>
                <span className="text-[#0F172A]/30">•</span>
                <span>Zapier</span>
                <span className="text-[#0F172A]/30">•</span>
                <span>Make</span>
              </div>
              <p className="mt-6 text-sm text-[#0F172A]/60">
                + Custom APIs and internal systems
              </p>
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
                Ready to Automate Your Operations?
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/80">
                Request a free automation audit. We'll walk through your workflows and show you what's possible — no commitment, no pressure.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="rounded-lg bg-[#1D4ED8] hover:bg-[#1D4ED8]/90">
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
