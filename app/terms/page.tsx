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
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Terms of service content will be added here.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
