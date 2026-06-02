import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Gulfline AI',
  description: 'Terms of Service for Gulfline AI. Read our terms before using our services.',
}

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing our website or engaging Gulfline AI for services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.`
  },
  {
    title: 'Services',
    content: `Gulfline AI provides web development, web application development, e-commerce solutions, AI chatbot development, lead automation, CRM integration, and related digital services ("Services").

The scope, timeline, and cost of each project are defined in a separate written agreement or proposal provided before work begins. These Terms govern the general relationship between Gulfline AI and its clients.`
  },
  {
    title: 'Project Agreements',
    content: `All projects require a written agreement outlining the scope of work, deliverables, timeline, and payment terms before work begins. No work will commence without a signed or confirmed agreement.

Changes to project scope after work has begun may result in adjusted timelines and additional fees. Any scope changes will be communicated and agreed upon in writing before being implemented.`
  },
  {
    title: 'Payment',
    content: `Payment terms are defined in the individual project agreement. Generally:

- A deposit is required before work begins
- Remaining balance is due upon project completion or as outlined in the agreement
- Late payments may result in paused work until the account is current
- All fees are non-refundable once work has commenced, unless otherwise agreed in writing`
  },
  {
    title: 'Intellectual Property',
    content: `Upon receipt of full payment, the client owns all custom code and design assets created specifically for their project.

Gulfline AI retains the right to display the work in our portfolio unless otherwise agreed in writing. Third-party assets, libraries, and tools used in the project remain subject to their respective licenses.`
  },
  {
    title: 'Client Responsibilities',
    content: `Clients are responsible for:

- Providing accurate and complete information required to complete the project
- Reviewing and approving deliverables in a timely manner
- Providing necessary access to platforms, accounts, and assets
- Ensuring all content provided does not infringe on third-party intellectual property rights

Delays caused by the client may result in adjusted project timelines.`
  },
  {
    title: 'Confidentiality',
    content: `Gulfline AI treats all client information as confidential and will not disclose proprietary business information to third parties without consent. We will sign a mutual NDA upon request.`
  },
  {
    title: 'Limitation of Liability',
    content: `Gulfline AI is not liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability in any matter is limited to the amount paid for the specific project in question.

We do not guarantee specific business outcomes such as revenue increases, lead generation results, or search engine rankings as a result of our work.`
  },
  {
    title: 'Warranties',
    content: `Gulfline AI warrants that all work will be completed in a professional manner consistent with industry standards. We will fix any defects or bugs reported within 30 days of project delivery at no additional charge.

Beyond this period, ongoing support and maintenance are available under a separate agreement.`
  },
  {
    title: 'Termination',
    content: `Either party may terminate a project agreement with written notice. In the event of termination:

- The client owes payment for all work completed up to the termination date
- Gulfline AI will deliver all completed work and assets upon receipt of outstanding payment
- Deposits are non-refundable unless Gulfline AI fails to begin work within the agreed timeframe`
  },
  {
    title: 'Governing Law',
    content: `These Terms are governed by the laws of the State of Louisiana. Any disputes arising from these Terms or our services will be resolved in the courts of Calcasieu Parish, Louisiana.`
  },
  {
    title: 'Changes to These Terms',
    content: `We may update these Terms from time to time. When we do, we will update the "Last Updated" date. Continued use of our website or services after any changes constitutes acceptance of the updated Terms.`
  },
  {
    title: 'Contact',
    content: `Questions about these Terms? Reach out at:

Email: gulflineai@gmail.com
Location: Lake Charles, Louisiana`
  },
]

export default function TermsPage() {
  return (
    <>
      <Header />
      <main style={{ background: 'var(--navy)' }}>

        {/* Hero */}
        <section style={{ background: 'var(--navy-mid)', borderBottom: '1px solid var(--border)', padding: '5rem 0 3.5rem' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '48rem' }}>
              <div className="badge-cyan mb-5">Legal</div>
              <h1
                style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: 'var(--white)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                Terms of Service
              </h1>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
                Last updated: June 1, 2026
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75, marginTop: '1rem', maxWidth: '36rem' }}>
                Please read these terms carefully before engaging Gulfline AI for services. By working with us, you agree to the terms outlined below.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '4rem 0 6rem' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {sections.map((section, i) => (
                  <div
                    key={section.title}
                    style={{
                      borderTop: '1px solid var(--border)',
                      padding: '2rem 0',
                      ...(i === sections.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: 'var(--white)',
                        marginBottom: '0.875rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {section.title}
                    </h2>
                    <div style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  Questions about these terms?{' '}
                  <a href="mailto:gulflineai@gmail.com" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>
                    gulflineai@gmail.com
                  </a>
                  {' '}or visit our{' '}
                  <Link href="/contact" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>
                    contact page
                  </Link>.
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
