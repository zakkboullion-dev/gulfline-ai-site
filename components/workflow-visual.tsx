'use client'

export function WorkflowVisual() {
  const nodes = [
    { id: 1, label: 'Lead Intake', x: 50, y: 120, active: true },
    { id: 2, label: 'Qualification', x: 220, y: 60, active: true },
    { id: 3, label: 'CRM Routing', x: 220, y: 180, active: false },
    { id: 4, label: 'Scheduling', x: 390, y: 120, active: true },
    { id: 5, label: 'Reporting', x: 560, y: 60, active: false },
    { id: 6, label: 'Human Review', x: 560, y: 180, active: false },
  ]

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
  ]

  return (
    <div className="relative w-full max-w-[950px]">
      {/* Canvas Container */}
      <div className="relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-[#0B1220] to-[#0F172A] p-8 shadow-2xl">
        {/* SVG for connection lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {connections.map((conn, i) => {
            const fromNode = nodes.find((n) => n.id === conn.from)
            const toNode = nodes.find((n) => n.id === conn.to)
            if (!fromNode || !toNode) return null

            const x1 = fromNode.x + 75
            const y1 = fromNode.y + 20
            const x2 = toNode.x
            const y2 = toNode.y + 20

            const midX = (x1 + x2) / 2

            return (
              <path
                key={i}
                d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
                opacity="0.4"
              />
            )
          })}
        </svg>

        {/* Nodes */}
        <div className="relative">
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
                className={`group relative rounded-xl border px-4 py-2.5 backdrop-blur transition-all ${
                  node.active
                    ? 'border-[#22D3EE]/40 bg-[#1D4ED8]/10 shadow-lg shadow-[#22D3EE]/20'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {node.active && (
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#1D4ED8]/20 to-[#22D3EE]/20 blur-sm" />
                )}
                <div className="relative">
                  <p
                    className={`text-xs font-medium ${
                      node.active ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    {node.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <div className="mt-56 flex items-center justify-center gap-2">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22D3EE]" />
          <p className="text-xs font-medium text-white/40">
            AI Workflow Engine • Processing
          </p>
        </div>
      </div>
    </div>
  )
}
