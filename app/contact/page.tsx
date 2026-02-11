'use client'

import React, { useState } from "react"

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      businessName: String(formData.get("business-name") || ""),
      location: String(formData.get("location") || ""),
      industry: String(formData.get("industry") || ""),
      website: String(formData.get("website") || ""),
      message: String(formData.get("message") || ""),
      companyWebsite: String(formData.get("companyWebsite") || ""),
    }

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) throw new Error(data?.error || "Submit failed")

      setSubmitted(true)
      form.reset()
    } catch (err: any) {
      setError(err?.message || "Failed to submit. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
                  Thank you for your interest in Gulfline AI.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Our team will review your information and reach out by email or phone to schedule your automation audit.
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
        <section className="border-b border-border bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Request an Automation Audit
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Honeypot */}
                <div className="hidden">
                  <Label htmlFor="companyWebsite">Company Website</Label>
                  <Input id="companyWebsite" name="companyWebsite" autoComplete="off" tabIndex={-1} />
                </div>

                {error && (
                  <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business-name">Business Name *</Label>
                    <Input id="business-name" name="business-name" required />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input id="location" name="location" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select name="industry">
                      <SelectTrigger>
                        <SelectValue placeholder="Select an industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website *</Label>
                  <Input id="website" name="website" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What would you like to improve or automate?</Label>
                  <Textarea id="message" name="message" rows={5} />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request an Automation Audit"}
                </Button>

              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
