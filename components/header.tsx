'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/case-study', label: 'Case Study' },
  { href: '/about', label: 'About' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220] backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/images/unnamed.png" 
            alt="Gulfline AI" 
            className="h-16 w-auto md:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-white',
                pathname === item.href
                  ? 'text-white'
                  : 'text-white/70'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="rounded-lg bg-[#1D4ED8] hover:bg-[#1D4ED8]/90">
            <Link href="/contact">Request Audit</Link>
          </Button>
        </nav>

        <Button asChild className="rounded-lg bg-[#1D4ED8] hover:bg-[#1D4ED8]/90 md:hidden">
          <Link href="/contact">Request Audit</Link>
        </Button>
      </div>
    </header>
  )
}
