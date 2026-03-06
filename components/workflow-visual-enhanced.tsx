'use client'

import { Mail, Calendar, FileSpreadsheet, Brain, Zap } from 'lucide-react'

const integrations = [
  { id: 1, label: 'Gmail', icon: Mail, active: true },
  { id: 2, label: 'Google Calendar', icon: Calendar, active: true },
  { id: 3, label: 'Google Sheets', icon: FileSpreadsheet, active: false },
  { id: 4, label: 'Knowledge Base', icon: Brain, active: false },
]

export function WorkflowVisualEnhanced() {
  return (
    <div className="w-full max-w-[560px]">
      {/* Canvas Container */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0B1220] to-[#0F172A] shadow-2xl">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/5 px-5 py-4">
          <span className="text-xs font-medium tracking-tight text-white/70">Example Workflow</span>
          <span className="flex items-center gap-1.5 rounded-full bg-[#22D3EE]/20 px-3 py-1 text-xs font-medium text-[#22D3EE]">
            <Zap className="h-3 w-3" />
            Live
          </span>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center gap-6 px-5 py-8">
          {/* AI Agent Node */}
          <div className="relative flex items-center gap-3 rounded-lg border border-[#22D3EE]/50 bg-gradient-to-br from-[#1D4ED8]/20 to-[#0F172A]/80 px-5 py-3 shadow-xl shadow-[#22D3EE]/30 backdrop-blur">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#1D4ED8]/30 to-[#22D3EE]/30 blur-md" />
            <div className="relative flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#22D3EE]/20 to-[#1D4ED8]/20 ring-1 ring-[#22D3EE]/40">
                <div className="h-3.5 w-3.5 rounded-sm bg-gradient-to-br from-[#22D3EE] to-[#1D4ED8] shadow-lg" />
              </div>
              <p className="text-sm font-semibold text-white">AI Agent</p>
            </div>
          </div>

          {/* Connector line from agent to rail */}
          <div className="flex w-full flex-col items-center gap-0">
            <div className="h-6 w-px bg-gradient-to-b from-[#1D4ED8]/80 to-[#22D3EE]/80" />
            {/* Horizontal rail */}
            <div className="relative flex w-full items-start justify-around">
              {/* Rail line */}
              <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-[#22D3EE]/30" />
              {/* Vertical drops + nodes */}
              {integrations.map((integration) => {
                const Icon = integration.icon
                return (
                  <div key={integration.id} className="flex flex-col items-center gap-0">
                    {/* vertical drop */}
                    <div
                      className={`h-6 w-px ${
                        integration.active
                          ? 'bg-gradient-to-b from-[#1D4ED8]/80 to-[#22D3EE]/80'
                          : 'bg-white/20'
                      }`}
                    />
                    {/* Node */}
                    <div
                      className={`relative flex items-center gap-2 rounded-lg border px-2.5 py-2 backdrop-blur transition-all ${
                        integration.active
                          ? 'border-[#22D3EE]/40 bg-white/5 shadow-lg shadow-[#22D3EE]/10'
                          : 'border-white/10 bg-white/[0.02]'
                      }`}
                    >
                      {integration.active && (
                        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#1D4ED8]/10 to-[#22D3EE]/10 blur" />
                      )}
                      <div className="relative flex items-center gap-2">
                        <div
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                            integration.active ? 'bg-white/10' : 'bg-white/5'
                          }`}
                        >
                          <Icon
                            className={`h-3.5 w-3.5 ${
                              integration.active ? 'text-[#22D3EE]' : 'text-white/40'
                            }`}
                            style={
                              integration.active
                                ? { filter: 'drop-shadow(0 0 4px rgba(34, 211, 238, 0.4))' }
                                : {}
                            }
                          />
                        </div>
                        <p
                          className={`hidden text-xs font-medium sm:block ${
                            integration.active ? 'text-white' : 'text-white/50'
                          }`}
                        >
                          {integration.label}
                        </p>
                        <p
                          className={`block text-[10px] font-medium sm:hidden ${
                            integration.active ? 'text-white' : 'text-white/50'
                          }`}
                        >
                          {integration.label.split(' ')[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
