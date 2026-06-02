'use client'

interface SitePreviewProps {
  url: string
  name: string
}

export function SitePreview({ url, name }: SitePreviewProps) {
  const src = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

  return (
    <div
      style={{
        width: '100%',
        height: '200px',
        background: 'linear-gradient(135deg, rgba(27,79,216,0.15) 0%, rgba(34,211,238,0.08) 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${name} website preview`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          display: 'block',
          opacity: 0.85,
          transition: 'opacity 0.3s',
        }}
        onError={(e) => {
          // On failure show branded fallback placeholder
          const target = e.currentTarget
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent) {
            parent.innerHTML = `
              <div style="
                width:100%; height:100%;
                display:flex; align-items:center; justify-content:center;
                flex-direction:column; gap:0.5rem;
              ">
                <div style="font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase; color:rgba(240,244,255,0.25); font-family:var(--font-barlow),'Barlow',sans-serif;">
                  Live Site
                </div>
                <div style="font-size:1rem; font-weight:600; color:rgba(240,244,255,0.5); font-family:var(--font-barlow),'Barlow',sans-serif;">
                  ${name}
                </div>
              </div>
            `
          }
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 55%, rgba(11,21,37,0.75) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
