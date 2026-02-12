'use client'

import { Activity, CheckCircle2, Database, Calendar, Users, Clock } from 'lucide-react'

export function DashboardMockup() {
  const modules = [
    { name: 'AI Intake Agent', status: 'Active', icon: Activity, active: true },
    { name: 'Qualification Engine', status: 'Connected', icon: CheckCircle2, active: false },
    { name: 'CRM Sync', status: 'Connected', icon: Database, active: false },
    { name: 'Scheduling Automation', status: 'Connected', icon: Calendar, active: false },
  ]

  const activityLog = [
    { text: 'New website inquiry received', time: '2s ago' },
    { text: 'Qualified: Kitchen Remodel', time: '5s ago' },
    { text: 'Calendar availability confirmed', time: '8s ago' },
    { text: 'Appointment scheduled', time: '10s ago' },
    { text: 'CRM updated successfully', time: '12s ago' },
  ]

  const metrics = [
    { label: 'Response Time', value: '<2s' },
    { label: 'Qualification Accuracy', value: '94%' },
    { label: 'Scheduling Success', value: '99%' },
  ]

  return (
    <div className="relative w-full max-w-5xl">
      {/* Main Dashboard Container */}
      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#0B1220] to-[#0F172A] shadow-2xl">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Content */}
        <div className="relative p-6 lg:p-8">
          {/* Header Bar */}
          <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
            <div>
              <h3 className="text-base font-semibold tracking-tight text-white">
                Agent: Bradberry Intake
              </h3>
              <p className="mt-0.5 text-xs text-white/40">Last updated 12s ago</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </div>
              <span className="text-sm font-medium text-green-400">Live</span>
            </div>
          </div>

          {/* Main 2-column grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* LEFT: System Modules */}
            <div className="space-y-3">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                System Modules
              </h4>
              {modules.map((module, i) => {
                const Icon = module.icon
                return (
                  <div
                    key={i}
                    className={`group relative overflow-hidden rounded-lg border backdrop-blur transition-all ${
                      module.active
                        ? 'border-cyan-500/30 bg-cyan-500/5 shadow-lg shadow-cyan-500/10'
                        : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                    }`}
                  >
                    {module.active && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
                    )}
                    <div className="relative flex items-center gap-3 p-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          module.active
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'bg-white/5 text-white/60'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{module.name}</p>
                        <p
                          className={`mt-0.5 text-xs ${
                            module.active ? 'text-cyan-400' : 'text-white/50'
                          }`}
                        >
                          {module.status}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* RIGHT: Live Activity Feed */}
            <div className="space-y-3">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                Live Activity
              </h4>
              <div className="space-y-2">
                {activityLog.map((entry, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 backdrop-blur transition-all hover:border-white/10"
                  >
                    <div className="mt-0.5 flex h-1.5 w-1.5 flex-shrink-0">
                      <span className="inline-flex h-full w-full rounded-full bg-cyan-400/80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/90">{entry.text}</p>
                      <p className="mt-0.5 text-xs text-white/40">{entry.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Metrics Row */}
          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/5 pt-6 sm:grid-cols-3">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="group rounded-lg border border-white/5 bg-white/[0.02] p-4 backdrop-blur transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5"
              >
                <p className="text-xs font-medium text-white/50">{metric.label}</p>
                <p className="mt-2 text-2xl font-bold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
