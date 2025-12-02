import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - Fikzstudio',
  description: 'Our privacy policy and data protection practices',
}

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen">
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you fill out a contact form or communicate with us.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">How We Use Your Information</h2>
              <p>
                We use the information we collect to respond to your inquiries, provide our services, and improve our website.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at fikzstudiowork@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
