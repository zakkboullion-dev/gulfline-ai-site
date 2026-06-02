import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Gulfline AI',
  description: 'Privacy Policy for Gulfline AI. Learn how we collect, use, and protect your information.',
}

const sections = [
  {
    title: 'Information We Collect',
    content: `When you use our website or contact us about a project, we may collect the following information:

- Name and contact details (email address, phone number)
- Business name and location
- Industry and project details you share with us
- Messages sent through our contact form or chatbot
- General usage data such as pages visited and time spent on the site (via analytics)`
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information you provide to:

- Respond to your inquiries and quote requests
- Deliver and support the services we build for you
- Follow up on leads and project discussions
- Improve our website and services
- Send relevant updates if you have opted in

We do not use your information for any purpose unrelated to our services.`
  },
  {
    title: 'How We Store Your Information',
    content: `Contact form and chatbot submissions are stored in a secured Google Sheets document accessible only to the Gulfline AI team. We use industry-standard practices to protect your data from unauthorized access, disclosure, or loss.

We retain your information for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law.`
  },
  {
    title: 'Third-Party Services',
    content: `We use a small number of third-party tools to operate our website and services:

- Google Sheets — for storing contact form submissions
- Vercel — for website hosting and deployment
- Groq — for powering our AI chat assistant (Bart)

These providers have their own privacy policies and we encourage you to review them. We do not sell your personal information to any third party.`
  },
  {
    title: 'Cookies & Analytics',
    content: `Our website may use cookies and similar technologies to understand how visitors use the site. This data is used solely to improve the website experience and is not linked to personally identifiable information.

You can disable cookies in your browser settings at any time.`
  },
  {
    title: 'Your Rights',
    content: `You have the right to:

- Request access to the personal information we hold about you
- Request correction of inaccurate information
- Request deletion of your information
- Opt out of any marketing communications

To exercise any of these rights, contact us at gulflineai@gmail.com and we will respond within a reasonable timeframe.`
  },
  {
    title: 'Children\'s Privacy',
    content: `Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.`
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.`
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy or how we handle your information, reach out to us at:

Email: gulflineai@gmail.com
Location: Lake Charles, Louisiana`
  },
]

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
                Last updated: June 1, 2026
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75, marginTop: '1rem', maxWidth: '36rem' }}>
                Gulfline AI is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding that information.
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
                  Questions about this policy?{' '}
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
