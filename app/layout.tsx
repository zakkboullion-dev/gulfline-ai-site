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
  title: 'Gulfline AI - AI Agents & Automation for Modern Businesses',
  description: 'We design and deploy AI-powered systems that automate customer conversations, scheduling, and internal workflows — helping organizations operate more efficiently at scale.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <script
          src="https://buildmyagent.io/widget/69a5dec034e0342922b64e49/widget-professional.js?widgetId=69a5dec034e0342922b64e49"
          async
        />
      </body>
    </html>
  )
}
