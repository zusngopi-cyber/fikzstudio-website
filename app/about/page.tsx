import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us - Fikzstudio',
  description: 'Learn about Fikzstudio and our mission to help businesses succeed online',
}

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen">
        <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Fikzstudio</h1>
            <p className="text-xl text-gray-600">
              We're a digital marketing agency passionate about helping businesses grow online
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Fikzstudio was founded with a simple mission: to make professional web design and digital marketing accessible to businesses of all sizes.
              </p>
              <p>
                We believe every business deserves a beautiful, fast, and effective online presence. That's why we combine modern technology with creative design to deliver websites that not only look great but also drive real results.
              </p>
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
