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
  title: 'Gulfline AI — Web Development & AI Automation | Lake Charles, Louisiana',
  description: 'Gulfline AI — Lake Charles web development company building custom websites, web apps, Shopify stores, AI chatbots, and lead automation for businesses across Louisiana and beyond.',
  metadataBase: new URL('https://gulflineai.com'),
  openGraph: {
    title: 'Gulfline AI — Web Development & AI Automation | Lake Charles, LA',
    description: 'Lake Charles web development — custom websites, Shopify stores, web apps, AI chatbots, and lead automation for Louisiana businesses and beyond. Get a free quote.',
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
    title: 'Gulfline AI — Web Development & AI Automation | Lake Charles, LA',
    description: 'We build websites, web apps, Shopify stores, AI chatbots, and automated lead pipelines for businesses of all sizes.',
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
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'gulflineai@gmail.com',
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
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: [],
  description: 'Gulfline AI is a Lake Charles, Louisiana web development and AI automation company. We build custom websites, web apps, Shopify stores, AI chatbots, and automated lead pipelines for businesses of all sizes.',
  knowsAbout: [
    'Web Development',
    'Website Design',
    'Shopify Development',
    'AI Chatbots',
    'Lead Automation',
    'CRM Integration',
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
      </body>
    </html>
  )
}
