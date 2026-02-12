'use client'

export function CaseStudyWorkflow() {
  const nodes = [
    { id: 1, label: 'Website Inquiry', x: 40, y: 80 },
    { id: 2, label: 'AI Intake Agent', x: 200, y: 80, highlight: true },
    { id: 3, label: 'Qualification Logic', x: 380, y: 80 },
    { id: 4, label: 'CRM Logging', x: 580, y: 80 },
    { id: 5, label: 'Calendar Scheduling', x: 40, y: 160 },
    { id: 6, label: 'Internal Notification', x: 260, y: 160 },
    { id: 7, label: 'Reporting Summary', x: 480, y: 160 },
  ]

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5, vertical: true },
    { from: 5, to: 6 },
    { from: 6, to: 7 },
  ]

  return (
    <div className="relative w-full max-w-[900px]">
      <div className="relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-[#0B1220] to-[#0F172A] p-12 shadow-2xl">
        {/* SVG for connection lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <linearGradient id="caseLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {connections.map((conn, i) => {
            const fromNode = nodes.find((n) => n.id === conn.from)
            const toNode = nodes.find((n) => n.id === conn.to)
            if (!fromNode || !toNode) return null

            const x1 = fromNode.x + 80
            const y1 = fromNode.y + 20
            const x2 = toNode.x
            const y2 = toNode.y + 20

            // For vertical connections (going down)
            if (conn.vertical) {
              const midY = (y1 + y2) / 2
              return (
                <path
                  key={i}
                  d={`M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`}
                  stroke="url(#caseLineGradient)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
              )
            }

            // Horizontal connections
            return (
              <path
                key={i}
                d={`M ${x1} ${y1} L ${x2} ${y2}`}
                stroke="url(#caseLineGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
            )
          })}
        </svg>

        {/* Nodes */}
        <div className="relative" style={{ minHeight: '220px' }}>
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
                  node.highlight
                    ? 'border-[#22D3EE]/40 bg-[#1D4ED8]/10 shadow-lg shadow-[#22D3EE]/20'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {node.highlight && (
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#1D4ED8]/20 to-[#22D3EE]/20 blur-sm" />
                )}
                <div className="relative">
                  <p
                    className={`whitespace-nowrap text-xs font-medium ${
                      node.highlight ? 'text-white' : 'text-white/60'
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
