import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
