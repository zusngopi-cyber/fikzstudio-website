import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Website Terms & Conditions | Fikzstudio',
  description: 'Read Fikzstudio\'s terms of service and conditions for using our web design and digital marketing services. Clear terms for a transparent partnership.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen">
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Agreement to Terms</h2>
              <p>
                By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on Fikzstudio's website for personal, non-commercial use only.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Disclaimer</h2>
              <p>
                The materials on Fikzstudio's website are provided on an 'as is' basis. We make no warranties, expressed or implied.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Contact</h2>
              <p>
                For questions about these Terms, please contact us at fikzstudiowork@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
