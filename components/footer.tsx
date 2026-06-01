import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#0B1220]">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <img
                src="/images/logo-g-mark.png"
                alt="Gulfline AI"
                style={{ height: '36px', width: 'auto' }}
              />
              <span style={{
                fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '-0.01em',
                color: '#F0F4FF',
                lineHeight: 1,
              }}>
                Gulfline<span style={{ color: '#22D3EE' }}>AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Websites, web apps, and AI automation built for real businesses.
            </p>
            <p className="text-sm text-white/40">Lake Charles, Louisiana</p>
            <a
              href="mailto:gulflineai@gmail.com"
              className="block text-sm text-[#22D3EE] transition-colors hover:text-[#22D3EE]/80"
            >
              gulflineai@gmail.com
            </a>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                'Website Design & Dev',
                'Web Apps & Portals',
                'Shopify Stores',
                'AI Chatbots',
                'Lead Automation',
                'CRM Integration',
                'SMS & Email Pipelines',
              ].map((s) => (
                <li key={s} className="text-white/60">{s}</li>
              ))}
            </ul>
          </div>

          {/* Social + Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">Follow Us</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Instagram', href: '#' },
                { label: 'TikTok', href: '#' },
                { label: 'Facebook', href: '#' },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-white/60 transition-colors hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4 space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/privacy" className="text-white/60 transition-colors hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-white/60 transition-colors hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Gulfline AI LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/20">Built by Gulfline AI</p>
        </div>
      </div>
    </footer>
  )
}
