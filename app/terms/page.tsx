import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)]">
        <section className="bg-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Terms of Service
              </h1>
              <div className="prose prose-lg mt-10 max-w-none">
                <p className="text-muted-foreground">
                  Last updated: February 12, 2026
                </p>

                <h2 className="mt-10 text-2xl font-bold text-foreground">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using Gulfline AI's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-foreground">Services</h2>
                <p className="text-muted-foreground">
                  Gulfline AI provides custom AI automation system design, development, and deployment services. Services are provided on a project basis and are defined through our audit and architecture process.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-foreground">Client Responsibilities</h2>
                <p className="text-muted-foreground">
                  Clients are responsible for:
                </p>
                <ul className="text-muted-foreground">
                  <li>Providing accurate information about their workflows and requirements</li>
                  <li>Maintaining access to necessary tools and systems</li>
                  <li>Testing and providing feedback during deployment</li>
                  <li>Complying with applicable laws and regulations</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-foreground">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  Custom systems developed for clients remain the property of the client upon final payment. Gulfline AI retains rights to underlying tools, frameworks, and methodologies.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Gulfline AI provides services on an "as is" basis. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-foreground">Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us at zakkboullion@gmail.com.
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
