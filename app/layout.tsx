import React from "react"
import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'

import './globals.css'
import { BartWidget } from '@/components/bart-widget'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow({ 
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Gulfline AI — Websites, Web Apps & AI Automation for Businesses',
  description: 'Gulfline AI builds professional websites, web apps, Shopify stores, AI chatbots, and automated lead pipelines for businesses across every industry. Based in Lake Charles, LA.',
  metadataBase: new URL('https://gulflineai.com'),
  openGraph: {
    title: 'Gulfline AI — Websites, Web Apps & AI Automation',
    description: 'We build websites, web apps, Shopify stores, AI chatbots, and automated lead pipelines for businesses of all sizes. Lake Charles, LA.',
    url: 'https://gulflineai.com',
    siteName: 'Gulfline AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo-hero-final.png',
        width: 1200,
        height: 630,
        alt: 'Gulfline AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gulfline AI — Websites, Web Apps & AI Automation',
    description: 'We build websites, web apps, Shopify stores, AI chatbots, and automated lead pipelines for businesses of all sizes.',
    images: ['/images/logo-hero-final.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gulfline AI',
  url: 'https://gulflineai.com',
  logo: 'https://gulflineai.com/images/logo-hero-final.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'gulflineai@gmail.com',
    contactType: 'customer service',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lake Charles',
    addressRegion: 'LA',
    addressCountry: 'US',
  },
  sameAs: [],
  description: 'Gulfline AI builds websites, web apps, Shopify stores, AI chatbots, and automated lead pipelines for businesses of all sizes. Based in Lake Charles, Louisiana.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <BartWidget />
      </body>
    </html>
  )
}
