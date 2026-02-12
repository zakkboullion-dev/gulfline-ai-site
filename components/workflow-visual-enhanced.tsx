'use client'

import { Mail, Calendar, FileSpreadsheet, Brain, Zap } from 'lucide-react'

export function WorkflowVisualEnhanced() {
  const aiAgent = { x: 400, y: 40, label: 'AI Agent' }
  
  const integrations = [
    { id: 1, label: 'Gmail', icon: Mail, x: 120, y: 180, active: true, color: '#EA4335' },
    { id: 2, label: 'Google Calendar', icon: Calendar, x: 280, y: 180, active: true, color: '#4285F4' },
    { id: 3, label: 'Google Sheets', icon: FileSpreadsheet, x: 520, y: 180, active: false, color: '#0F9D58' },
    { id: 4, label: 'Knowledge Base', icon: Brain, x: 680, y: 180, active: false, color: '#9333EA' },
  ]

  return (
    <div className="relative w-full max-w-[900px]">
      {/* Canvas Container */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0B1220] to-[#0F172A] shadow-2xl">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        
        {/* Strong vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0B1220]/20 to-[#0B1220]/60" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/5 px-6 py-4">
          <span className="text-xs font-medium tracking-tight text-white/70">Example Workflow</span>
          <span className="flex items-center gap-1.5 rounded-full bg-[#22D3EE]/20 px-3 py-1 text-xs font-medium text-[#22D3EE]">
            <Zap className="h-3 w-3" />
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
              <linearGradient id="enhancedActiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="enhancedInactiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#475569" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#475569" stopOpacity="0.2" />
              </linearGradient>
              <filter id="enhancedGlow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="strongGlow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Stage rail with glow */}
            <line
              x1="60"
              y1="188"
              x2="740"
              y2="188"
              stroke="#22D3EE"
              strokeWidth="1"
              strokeDasharray="6 3"
              opacity="0.15"
              filter="url(#enhancedGlow)"
            />

            {/* Connections from AI Agent to integrations */}
            {integrations.map((integration) => {
              const x1 = aiAgent.x + 60
              const y1 = aiAgent.y + 45
              const x2 = integration.x + 60
              const y2 = integration.y + 8

              const midY = (y1 + y2) / 2

              return (
                <g key={integration.id}>
                  <path
                    d={`M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`}
                    stroke={integration.active ? "url(#enhancedActiveGradient)" : "url(#enhancedInactiveGradient)"}
                    strokeWidth="2.5"
                    fill="none"
                    filter={integration.active ? "url(#enhancedGlow)" : undefined}
                  />
                  {integration.active && (
                    <circle
                      cx={x2}
                      cy={midY}
                      r="3"
                      fill="#22D3EE"
                      opacity="0.6"
                      filter="url(#strongGlow)"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.4;0.8;0.4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              )
            })}
          </svg>

          {/* AI Agent Node (centered top) with strong visual emphasis */}
          <div
            className="absolute"
            style={{
              left: `${aiAgent.x}px`,
              top: `${aiAgent.y}px`,
            }}
          >
            <div className="relative flex items-center gap-3 rounded-lg border border-[#22D3EE]/50 bg-gradient-to-br from-[#1D4ED8]/20 to-[#0F172A]/80 px-5 py-3 shadow-xl shadow-[#22D3EE]/30 backdrop-blur">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#1D4ED8]/30 to-[#22D3EE]/30 blur-md" />
              <div className="relative flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#22D3EE]/20 to-[#1D4ED8]/20 ring-1 ring-[#22D3EE]/40">
                  <div className="h-3.5 w-3.5 rounded-sm bg-gradient-to-br from-[#22D3EE] to-[#1D4ED8] shadow-lg" />
                </div>
                <p className="text-sm font-semibold text-white">{aiAgent.label}</p>
              </div>
            </div>
          </div>

          {/* Integration Nodes with icons and stronger styling */}
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
                    className={`relative flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 backdrop-blur transition-all ${
                      integration.active
                        ? 'border-[#22D3EE]/40 bg-white/5 shadow-lg shadow-[#22D3EE]/10'
                        : 'border-white/10 bg-white/[0.02]'
                    }`}
                  >
                    {integration.active && (
                      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#1D4ED8]/10 to-[#22D3EE]/10 blur" />
                    )}
                    <div className="relative flex items-center gap-2.5">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-md ${
                          integration.active ? 'bg-white/10' : 'bg-white/5'
                        }`}
                      >
                        <Icon 
                          className={`h-3.5 w-3.5 ${
                            integration.active ? 'text-[#22D3EE]' : 'text-white/40'
                          }`}
                          style={integration.active ? { filter: 'drop-shadow(0 0 4px rgba(34, 211, 238, 0.4))' } : {}}
                        />
                      </div>
                      <p
                        className={`whitespace-nowrap text-xs font-medium ${
                          integration.active ? 'text-white' : 'text-white/50'
                        }`}
                      >
                        {integration.label}
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
  )
}
