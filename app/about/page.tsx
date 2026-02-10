import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

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
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                AI Systems Built for Real Operations
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Gulfline AI designs and deploys AI-powered automation systems for businesses
                that want measurable efficiency gains — not experimental tools. We work closely
                with leadership teams to ensure automation aligns with operations, compliance,
                and long-term growth.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="border-b border-border bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Founded by Jay Joseph & Zakk Boullion
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Lake Charles, Louisiana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="border-b border-border bg-background py-20 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Industries We Serve
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <Badge
                    key={industry}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary/30 py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let's Build Your System
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Request an automation audit to see what's possible for your business.
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">Request an Automation Audit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
