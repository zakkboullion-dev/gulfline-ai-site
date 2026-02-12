import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)]">
        <section className="bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Privacy Policy
              </h1>
              <div className="prose prose-lg mt-10 max-w-none">
                <p className="text-muted-foreground">
                  Last updated: February 12, 2026
                </p>

                <h2 className="mt-10 text-2xl font-bold text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground">
                  When you request an automation audit through our website, we collect:
                </p>
                <ul className="text-muted-foreground">
                  <li>Name and contact information (email, phone)</li>
                  <li>Business name and location</li>
                  <li>Industry and website</li>
                  <li>Automation goals and project details you provide</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-foreground">How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information you provide to:
                </p>
                <ul className="text-muted-foreground">
                  <li>Contact you about your automation audit request</li>
                  <li>Provide our services and support</li>
                  <li>Improve our services and customer experience</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-foreground">Data Storage and Security</h2>
                <p className="text-muted-foreground">
                  Your information is stored securely using industry-standard practices. We do not sell or share your information with third parties for marketing purposes.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-foreground">Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to request access to, correction of, or deletion of your personal information. Contact us at the email address below for assistance.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-foreground">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at zakkboullion@gmail.com.
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
