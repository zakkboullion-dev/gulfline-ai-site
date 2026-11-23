import React from "react"
import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'

import './globals.css'
import { BartWidget } from '@/components/bart-widget'
import { Tracking } from '@/components/tracking'
import { liveSocials } from '@/lib/site'

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
  title: 'Gulfline AI — Free Website Builds, CRM Integration & Analytics | Lake Charles, Louisiana',
  description: 'Gulfline AI builds your business website free, then hosts it for $29.99/mo. Lake Charles team for websites, CRM integration, data analytics, and custom integrations between the programs you already use.',
  metadataBase: new URL('https://gulflineai.com'),
  openGraph: {
    title: 'Your Website, Built Free — Gulfline AI | Lake Charles, LA',
    description: 'We build your business website free, then $29.99/mo keeps it online. CRM integration, data analytics, and custom integrations when you are ready for more.',
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
    title: 'Your Website, Built Free — Gulfline AI | Lake Charles, LA',
    description: 'We build your business website free, then $29.99/mo keeps it online. CRM integration, data analytics, and custom integrations when you are ready for more.',
    images: ['/images/logo-hero-final.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/images/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/logo-g-mark.png' },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Gulfline AI',
  url: 'https://gulflineai.com',
  logo: 'https://gulflineai.com/images/logo-hero-final.png',
  image: 'https://gulflineai.com/images/logo-hero-final.png',
  email: 'gulflineai@gmail.com',
  telephone: '+1-337-287-0105',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'gulflineai@gmail.com',
    telephone: '+1-337-287-0105',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lake Charles',
    addressRegion: 'LA',
    addressCountry: 'US',
    postalCode: '70601',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2266,
    longitude: -93.2174,
  },
  areaServed: [
    { '@type': 'City', name: 'Lake Charles' },
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'Country', name: 'United States' },
  ],
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-17:00',
  sameAs: liveSocials.map((s) => s.url),
  description: 'Gulfline AI is a Lake Charles, Louisiana web development and AI automation company. We build and host business websites, integrate CRMs, build analytics dashboards, and connect the programs a business already uses.',
  knowsAbout: [
    'Web Development',
    'Website Design',
    'Shopify Development',
    'AI Chatbots',
    'Lead Automation',
    'CRM Integration',
    'Website Hosting',
    'Data Analytics',
    'Custom Software Integrations',
    'Web Applications',
    'Client Portals',
  ],
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
        <Tracking />
      </body>
    </html>
  )
}
