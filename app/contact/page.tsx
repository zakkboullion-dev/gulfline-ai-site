'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle2 } from 'lucide-react'

const industries = [
  'Healthcare',
  'Construction & Real Estate',
  'Legal & Courts',
  'Finance & Accounting',
  'Retail & eCommerce',
  'Manufacturing',
  'Logistics & Transportation',
  'Marketing & Advertising',
  'Customer Support / Call Centers',
  'Education & Training',
  'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend here
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">
          <section className="bg-background py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Request Received
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Thank you for your interest in Gulfline AI. We'll review your automation audit
                  request and get back to you shortly.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)]">
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Request an Automation Audit
              </h1>
              <div className="mx-auto mt-8 max-w-2xl space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-left text-base leading-relaxed text-muted-foreground">
                    Identify automation opportunities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-left text-base leading-relaxed text-muted-foreground">
                    Review realistic use cases
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-left text-base leading-relaxed text-muted-foreground">
                    See a demo tailored to your business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input id="name" name="name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone <span className="text-destructive">*</span>
                    </Label>
                    <Input id="phone" name="phone" type="tel" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business-name">
                      Business Name <span className="text-destructive">*</span>
                    </Label>
                    <Input id="business-name" name="business-name" required />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">
                      Location <span className="text-destructive">*</span>
                    </Label>
                    <Input id="location" name="location" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select name="industry">
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select an industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry.toLowerCase()}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">
                    Website <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://example.com or 'No website'"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What would you like to improve or automate?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your automation needs..."
                  />
                  <p className="text-sm text-muted-foreground">
                    If you're not sure what to automate — we'll help you find it.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Request an Automation Audit
                </Button>
              </form>

              <div className="mt-8 rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">What happens next</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  After you submit the form, our team will review your information and reach out
                  by email or phone to schedule your automation audit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
