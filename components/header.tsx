'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/case-study', label: 'Case Study' },
  { href: '/about', label: 'About' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.05] bg-[#0B1220] backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:h-[72px] lg:px-8">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/logo-header-final.png" 
            alt="Gulfline AI" 
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-white',
                pathname === item.href
                  ? 'text-white'
                  : 'text-[#CBD5E1]'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button 
            asChild 
            size="sm"
            className="h-9 rounded-lg bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8]"
          >
            <Link href="/contact">Request Audit</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/[0.05] bg-[#0B1220] md:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'py-3 text-base font-medium transition-colors hover:text-white',
                  pathname === item.href
                    ? 'text-white'
                    : 'text-[#CBD5E1]'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8]"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Request Audit</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
