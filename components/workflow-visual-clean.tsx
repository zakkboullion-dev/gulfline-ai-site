'use client'

import { Mail, Calendar, FileSpreadsheet, Brain } from 'lucide-react'

export function WorkflowVisualClean() {
  const aiAgent = { x: 400, y: 40, label: 'AI Agent' }
  
  const integrations = [
    { id: 1, label: 'Gmail', icon: Mail, x: 120, y: 180, active: true },
    { id: 2, label: 'Google Calendar', icon: Calendar, x: 280, y: 180, active: true },
    { id: 3, label: 'Google Sheets', icon: FileSpreadsheet, x: 520, y: 180, active: false },
    { id: 4, label: 'Knowledge Base', icon: Brain, x: 680, y: 180, active: false },
  ]

  return (
    <div className="relative w-full max-w-[900px]">
      {/* Canvas Container */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0B1220] to-[#0F172A] shadow-2xl">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0B1220]/40" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/5 px-6 py-4">
          <span className="text-xs font-medium tracking-tight text-white/70">Example Workflow</span>
          <span className="rounded-full bg-[#22D3EE]/20 px-3 py-1 text-xs font-medium text-[#22D3EE]">
            Live
          </span>
        </div>

        {/* Content */}
        <div className="relative p-8">
          {/* SVG for connections */}
          <svg
            className="absolute inset-0 h-full w-full"
            style={{ pointerEvents: 'none' }}
          >
            <defs>
              <linearGradient id="cleanActiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="cleanInactiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#475569" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#475569" stopOpacity="0.2" />
              </linearGradient>
              <filter id="cleanGlow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Stage rail */}
            <line
              x1="60"
              y1="188"
              x2="740"
              y2="188"
              stroke="#475569"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.2"
            />

            {/* Connections from AI Agent to integrations */}
            {integrations.map((integration) => {
              const x1 = aiAgent.x + 50
              const y1 = aiAgent.y + 45
              const x2 = integration.x + 50
              const y2 = integration.y + 8

              const midY = (y1 + y2) / 2

              return (
                <path
                  key={integration.id}
                  d={`M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`}
                  stroke={integration.active ? "url(#cleanActiveGradient)" : "url(#cleanInactiveGradient)"}
                  strokeWidth="2"
                  fill="none"
                  filter={integration.active ? "url(#cleanGlow)" : undefined}
                />
              )
            })}
          </svg>

          {/* AI Agent Node (centered top) */}
          <div
            className="absolute"
            style={{
              left: `${aiAgent.x}px`,
              top: `${aiAgent.y}px`,
            }}
          >
            <div className="relative flex items-center gap-3 rounded-lg border border-[#22D3EE]/40 bg-[#1D4ED8]/10 px-4 py-2.5 shadow-lg shadow-[#22D3EE]/20 backdrop-blur">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#1D4ED8]/20 to-[#22D3EE]/20 blur-sm" />
              <div className="relative flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0F172A]/60">
                  <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-[#22D3EE] to-[#1D4ED8]" />
                </div>
                <p className="text-sm font-semibold text-white">{aiAgent.label}</p>
              </div>
            </div>
          </div>

          {/* Integration Nodes */}
          <div className="relative" style={{ minHeight: '220px' }}>
            {integrations.map((integration) => {
              const Icon = integration.icon
              return (
                <div
                  key={integration.id}
                  className="absolute"
                  style={{
                    left: `${integration.x}px`,
                    top: `${integration.y}px`,
                  }}
                >
                  <div
                    className={`relative flex items-center gap-2 rounded-lg border px-3 py-2 backdrop-blur transition-all ${
                      integration.active
                        ? 'border-[#22D3EE]/30 bg-white/5 shadow-md'
                        : 'border-white/10 bg-white/[0.02]'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${integration.active ? 'text-[#22D3EE]' : 'text-white/40'}`} />
                    <p
                      className={`whitespace-nowrap text-xs font-medium ${
                        integration.active ? 'text-white/90' : 'text-white/50'
                      }`}
                    >
                      {integration.label}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
