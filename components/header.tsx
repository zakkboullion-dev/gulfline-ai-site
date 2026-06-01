'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/content', label: 'Content' },
  { href: '/about', label: 'About' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/[0.06] bg-[#060C18]/90 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">

        {/* Logo — full size */}
        <Link href="/" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
          <img
            src="/images/logo-g-mark.png"
            alt="Gulfline AI"
            style={{ height: '48px', width: 'auto' }}
          />
          <span style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 700,
            fontSize: '1.2rem',
            letterSpacing: '-0.01em',
            color: '#F0F4FF',
            lineHeight: 1,
          }}>
            Gulfline<span style={{ color: '#22D3EE' }}>AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-display text-sm font-500 tracking-wide transition-colors duration-200',
                pathname === item.href
                  ? 'text-[#22D3EE]'
                  : 'text-white/60 hover:text-white'
              )}
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200"
            style={{
              fontFamily: "'Barlow', sans-serif",
              background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)',
              boxShadow: '0 0 20px rgba(27,79,216,0.35)',
            }}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white/70 md:hidden hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#060C18]/95 backdrop-blur-xl md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-white/5 text-[#22D3EE]'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                )}
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg px-4 py-3 text-center text-sm font-semibold text-white"
              style={{
                fontFamily: "'Barlow', sans-serif",
                background: 'linear-gradient(135deg, #1B4FD8 0%, #2563EB 100%)',
              }}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
