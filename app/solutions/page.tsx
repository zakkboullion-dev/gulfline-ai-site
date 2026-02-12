import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Network, Database, GitBranch, LayoutDashboard, X } from 'lucide-react'

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Page Header */}
        <section className="border-b border-white/5 bg-[#0B1220] py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                AI Systems Built for Operational Execution
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
                We design structured AI workflow systems that integrate into real business processes — not surface-level automations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: AI Systems We Build */}
        <section className="border-b border-white/5 bg-[#0F1829] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                AI Systems We Build
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Card 1 */}
                <Card className="group border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-[#22D3EE]/40 hover:shadow-lg hover:shadow-[#22D3EE]/10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8]/10">
                    <Network className="h-6 w-6 text-[#22D3EE]" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    AI Workflow Systems
                  </h3>
                  <p className="leading-relaxed text-white/60">
                    Structured internal pipelines mapped directly to your operational processes.
                  </p>
                </Card>

                {/* Card 2 */}
                <Card className="group border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-[#22D3EE]/40 hover:shadow-lg hover:shadow-[#22D3EE]/10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8]/10">
                    <GitBranch className="h-6 w-6 text-[#22D3EE]" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Execution Layer Automation
                  </h3>
                  <p className="leading-relaxed text-white/60">
                    Reduce manual internal tasks and enforce consistent operational logic.
                  </p>
                </Card>

                {/* Card 3 */}
                <Card className="group border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-[#22D3EE]/40 hover:shadow-lg hover:shadow-[#22D3EE]/10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8]/10">
                    <Database className="h-6 w-6 text-[#22D3EE]" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Data & Decision Infrastructure
                  </h3>
                  <p className="leading-relaxed text-white/60">
                    AI-powered routing, qualification logic, CRM updates, document handling, and reporting flows.
                  </p>
                </Card>

                {/* Card 4 */}
                <Card className="group border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:border-[#22D3EE]/40 hover:shadow-lg hover:shadow-[#22D3EE]/10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D4ED8]/10">
                    <LayoutDashboard className="h-6 w-6 text-[#22D3EE]" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Operational AI Interfaces
                  </h3>
                  <p className="leading-relaxed text-white/60">
                    Internal dashboards, AI agents, and workflow tools built specifically for your team.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Problems We Eliminate */}
        <section className="border-b border-white/5 bg-[#0B1220] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Operational Bottlenecks We Remove
              </h2>
              <div className="space-y-6">
                {/* Problem 1 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="mb-3 flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Manual lead routing across inboxes
                    </h3>
                  </div>
                  <p className="ml-8 leading-relaxed text-white/60">
                    Leads get lost, delayed, or assigned to the wrong team member. Automation ensures every lead is captured, qualified, and routed to the right person instantly based on defined business logic.
                  </p>
                </div>

                {/* Problem 2 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="mb-3 flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Disconnected scheduling and calendar workflows
                    </h3>
                  </div>
                  <p className="ml-8 leading-relaxed text-white/60">
                    Manual back-and-forth scheduling wastes time and creates friction. Structured automation integrates directly with calendars to handle availability checks, booking confirmations, and reminders without human intervention.
                  </p>
                </div>

                {/* Problem 3 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="mb-3 flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Inconsistent qualification or CRM updates
                    </h3>
                  </div>
                  <p className="ml-8 leading-relaxed text-white/60">
                    Data entry errors and inconsistent qualification standards create unreliable reporting. AI-powered systems enforce standardized qualification criteria and update CRMs with structured, validated data automatically.
                  </p>
                </div>

                {/* Problem 4 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="mb-3 flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Delayed reporting and lack of operational visibility
                    </h3>
                  </div>
                  <p className="ml-8 leading-relaxed text-white/60">
                    Manual report generation delays decision-making and hides operational inefficiencies. Automated reporting systems provide real-time performance data and alert leadership to issues before they compound.
                  </p>
                </div>

                {/* Problem 5 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="mb-3 flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Internal processes dependent on tribal knowledge
                    </h3>
                  </div>
                  <p className="ml-8 leading-relaxed text-white/60">
                    Undocumented processes create operational risk when key team members are unavailable. Structured automation codifies business logic into systems that execute consistently regardless of who is working.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Example System Architecture */}
        <section className="border-b border-white/5 bg-[#0F1829] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Example AI Workflow Architecture
              </h2>
              
              {/* Architecture Visual */}
              <div className="relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-[#0B1220] to-[#0F172A] p-12 shadow-2xl">
                {/* Central AI Agent */}
                <div className="mb-12 flex justify-center">
                  <div className="relative rounded-xl border border-[#22D3EE]/40 bg-[#1D4ED8]/10 px-8 py-4 shadow-lg shadow-[#22D3EE]/20 backdrop-blur">
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#1D4ED8]/20 to-[#22D3EE]/20 blur-sm" />
                    <div className="relative">
                      <p className="text-center text-sm font-semibold text-white">AI Workflow Engine</p>
                      <p className="text-center text-xs text-[#22D3EE]">gemini-2.5-flash</p>
                    </div>
                  </div>
                </div>

                {/* Workflow Steps */}
                <div className="relative grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                  {/* SVG connections */}
                  <svg className="absolute inset-0 h-full w-full" style={{ pointerEvents: 'none', zIndex: 0 }}>
                    <defs>
                      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    {/* Connection lines - simplified horizontal flow */}
                    <line x1="16%" y1="50%" x2="30%" y2="50%" stroke="url(#flowGradient)" strokeWidth="2" opacity="0.6" />
                    <line x1="36%" y1="50%" x2="47%" y2="50%" stroke="url(#flowGradient)" strokeWidth="2" opacity="0.6" />
                    <line x1="53%" y1="50%" x2="64%" y2="50%" stroke="url(#flowGradient)" strokeWidth="2" opacity="0.6" />
                    <line x1="70%" y1="50%" x2="81%" y2="50%" stroke="url(#flowGradient)" strokeWidth="2" opacity="0.6" />
                    <line x1="87%" y1="50%" x2="98%" y2="50%" stroke="url(#flowGradient)" strokeWidth="2" opacity="0.6" />
                  </svg>

                  {/* Step nodes */}
                  {[
                    'Lead Intake',
                    'Qualification',
                    'Routing',
                    'Scheduling',
                    'CRM Update',
                    'Reporting'
                  ].map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center">
                      <div className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 backdrop-blur">
                        <p className="whitespace-nowrap text-xs font-medium text-white/80">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom label */}
                <div className="mt-8 flex items-center justify-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]" />
                  <p className="text-xs font-medium text-white/40">
                    Structured execution pipeline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: What This Means for Your Business */}
        <section className="border-b border-white/5 bg-[#0B1220] py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Built for Operational Scale
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#22D3EE]" />
                  <p className="text-base leading-relaxed text-white/70">
                    Reduced manual administrative work
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#22D3EE]" />
                  <p className="text-base leading-relaxed text-white/70">
                    Faster internal execution
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#22D3EE]" />
                  <p className="text-base leading-relaxed text-white/70">
                    Structured, consistent processes
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#22D3EE]" />
                  <p className="text-base leading-relaxed text-white/70">
                    Clear performance visibility
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#22D3EE]" />
                  <p className="text-base leading-relaxed text-white/70">
                    Systems that integrate with existing tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section className="bg-[#0B1220] py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start With a Structured Automation Audit
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
                We'll walk through your current workflows and identify where automation can remove bottlenecks and improve operational clarity.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8]"
                >
                  <Link href="/contact">Request an Automation Audit</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/5"
                >
                  <Link href="/case-study">Explore Case Study</Link>
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
