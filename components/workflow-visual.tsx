'use client'

export function WorkflowVisual() {
  // Primary workflow nodes aligned horizontally
  const nodes = [
    { id: 1, label: 'Lead Intake', x: 40, y: 80, active: true, primary: true },
    { id: 2, label: 'Qualification', x: 200, y: 80, active: true, primary: true },
    { id: 3, label: 'CRM Routing', x: 360, y: 80, active: false, primary: true },
    { id: 4, label: 'Scheduling', x: 520, y: 80, active: true, primary: true },
    { id: 5, label: 'Reporting', x: 680, y: 80, active: false, primary: true },
    { id: 6, label: 'Human Review', x: 520, y: 160, active: false, primary: false },
  ]

  const connections = [
    { from: 1, to: 2, active: true },
    { from: 2, to: 3, active: false },
    { from: 3, to: 4, active: true },
    { from: 4, to: 5, active: false },
    { from: 4, to: 6, active: false, secondary: true },
  ]

  return (
    <div className="relative w-full max-w-[900px]">
      {/* Canvas Container */}
      <div className="relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-[#0B1220] to-[#0F172A] p-12 shadow-2xl">
        {/* SVG for connection lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {connections.map((conn, i) => {
            const fromNode = nodes.find((n) => n.id === conn.from)
            const toNode = nodes.find((n) => n.id === conn.to)
            if (!fromNode || !toNode) return null

            const x1 = fromNode.x + 70
            const y1 = fromNode.y + 20
            const x2 = toNode.x
            const y2 = toNode.y + 20

            // Straight line for horizontal connections, subtle curve for branch
            const isHorizontal = Math.abs(y1 - y2) < 10
            const path = isHorizontal
              ? `M ${x1} ${y1} L ${x2} ${y2}`
              : `M ${x1} ${y1} Q ${x1 + 40} ${y1}, ${x1 + 40} ${(y1 + y2) / 2} T ${x2} ${y2}`

            return (
              <path
                key={i}
                d={path}
                stroke={conn.active ? "url(#activeGradient)" : "#475569"}
                strokeWidth={conn.secondary ? "1.5" : "2"}
                fill="none"
                opacity={conn.secondary ? "0.3" : conn.active ? "0.7" : "0.4"}
                filter={conn.active ? "url(#glow)" : undefined}
              />
            )
          })}
        </svg>

        {/* Nodes */}
        <div className="relative" style={{ minHeight: '200px' }}>
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute"
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`,
              }}
            >
              <div
                className={`group relative rounded-lg border px-3.5 py-2 backdrop-blur transition-all ${
                  node.primary
                    ? node.active
                      ? 'border-[#22D3EE]/40 bg-[#1D4ED8]/10 shadow-lg shadow-[#22D3EE]/20'
                      : 'border-white/10 bg-white/5'
                    : 'border-white/5 bg-white/[0.02] opacity-50'
                }`}
              >
                {node.active && node.primary && (
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#1D4ED8]/20 to-[#22D3EE]/20 blur-sm" />
                )}
                <div className="relative">
                  <p
                    className={`whitespace-nowrap text-xs font-medium ${
                      node.primary
                        ? node.active
                          ? 'text-white'
                          : 'text-white/60'
                        : 'text-white/40'
                    }`}
                  >
                    {node.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
