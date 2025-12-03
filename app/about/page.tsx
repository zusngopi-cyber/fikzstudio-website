import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Fikzstudio - Web Design Agency Puncak Alam, Selangor',
  description: 'Fikzstudio is a trusted web design and digital marketing agency based in Puncak Alam, Selangor. Serving Shah Alam, Klang, and Klang Valley with quality-first approach. 50+ successful projects.',
  keywords: ['about Fikzstudio', 'web design agency Puncak Alam', 'digital marketing Selangor', 'web development Klang Valley', 'Malaysia web agency', 'Shah Alam web design'],
  openGraph: {
    title: 'About Fikzstudio - Web Design Agency Puncak Alam, Selangor',
    description: 'Quality-first web design and digital marketing agency in Puncak Alam, serving Selangor and Klang Valley businesses.',
    url: 'https://fikzstudio.com/about',
    siteName: 'Fikzstudio',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen">
        <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Fikzstudio</h1>
            <p className="text-xl text-gray-600">
              Your trusted web design and digital marketing partner in Puncak Alam, Selangor
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Fikzstudio was founded in Puncak Alam, Selangor with a simple mission: to make professional web design and digital marketing accessible to businesses of all sizes across Klang Valley.
              </p>
              <p>
                Based in the heart of Selangor, we serve businesses in Puncak Alam, Shah Alam, Klang, Petaling Jaya, and throughout the Klang Valley region. We believe every business deserves a beautiful, fast, and effective online presence. That's why we combine modern technology with creative design to deliver websites that not only look great but also drive real results.
              </p>
              <p>
                With over 50 successful projects completed and a 98% client satisfaction rate, we've helped local Malaysian businesses establish their online presence and grow their digital footprint. From startups to established enterprises, we're committed to delivering quality web solutions that make a difference.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose Fikzstudio?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Based in Puncak Alam, we understand the local market in Selangor and Klang Valley. We know what works for Malaysian businesses.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">
                  Startup-friendly packages starting from RM 999. Quality web design doesn't have to break the bank.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
                <p className="text-gray-600">
                  We deliver projects on time without compromising quality. Most websites completed within 2-4 weeks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Results-Focused</h3>
                <p className="text-gray-600">
                  We don't just build websites - we create digital solutions that help your business grow and succeed online.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every project receives our full attention and expertise.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Results Driven</h3>
                <p className="text-gray-600">
                  We focus on delivering measurable results that help your business grow.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                <p className="text-gray-600">
                  We work closely with our clients as partners, not just service providers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-gray-600 mb-8">
              Let's discuss how we can help your business succeed online
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
