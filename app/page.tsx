import HeroClean from '@/components/HeroClean'
import WhyWebsiteSection from '@/components/WhyWebsiteSection'
import TruthSection from '@/components/TruthSection'
import ResultsSection from '@/components/ResultsSection'
import ServiceCard from '@/components/ServiceCard'
import PricingTable from '@/components/PricingTable'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Puncak Alam | Digital Marketing Selangor | Fikz Studio',
  description: 'Top web design agency in Puncak Alam, Selangor & Klang Valley. Professional website design, SEO services, and digital marketing. Serving Shah Alam, Klang, Petaling Jaya. Free consultation!',
  keywords: ['web design Puncak Alam', 'web design Selangor', 'digital marketing Klang Valley', 'SEO Puncak Alam', 'website design Shah Alam', 'web agency Klang', 'Fikz Studio', 'web design Petaling Jaya', 'responsive web design Malaysia'],
  authors: [{ name: 'Fikz Studio' }],
  openGraph: {
    title: 'Web Design Puncak Alam | Digital Marketing Selangor | Fikz Studio',
    description: 'Top web design agency serving Puncak Alam, Selangor & Klang Valley. 50+ successful projects, 98% client satisfaction. Affordable packages from RM 999.',
    url: 'https://fikzstudio.com',
    siteName: 'Fikz Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fikzstudio - Web Design & Digital Marketing',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fikz Studio - Professional Web Design & Digital Marketing',
    description: 'Transform your online presence with our expert web design and digital marketing services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  // Local Business Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fikz Studio",
    "image": "https://fikzstudio.com/logo.png",
    "@id": "https://fikzstudio.com",
    "url": "https://fikzstudio.com",
    "telephone": "+60127075391",
    "priceRange": "RM 999 - RM 35,000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Puncak Alam",
      "addressLocality": "Puncak Alam",
      "addressRegion": "Selangor",
      "postalCode": "42300",
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 3.2396,
      "longitude": 101.4290
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/fikzstudio",
      "https://www.instagram.com/fikzstudio",
      "https://www.linkedin.com/company/fikzstudio"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Puncak Alam"
      },
      {
        "@type": "City",
        "name": "Shah Alam"
      },
      {
        "@type": "City",
        "name": "Klang"
      },
      {
        "@type": "City",
        "name": "Petaling Jaya"
      },
      {
        "@type": "City",
        "name": "Subang Jaya"
      }
    ],
    "description": "Professional web design and digital marketing agency in Puncak Alam, Selangor. Serving businesses across Klang Valley with affordable, high-quality web solutions."
  }

  const services = [
    {
      title: 'Web Design',
      description: 'Modern, responsive websites that convert visitors into customers with stunning visuals and seamless user experience',
      icon: '🎨'
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic with proven SEO strategies and technical optimization',
      icon: '🚀'
    },
    {
      title: 'Website Maintenance',
      description: 'Keep your website secure, fast, and up-to-date with regular maintenance and performance monitoring',
      icon: '🔧'
    },
    {
      title: 'Brand Identity',
      description: 'Create a memorable brand identity that stands out with professional logo design and brand guidelines',
      icon: '✨'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <>
      {/* Schema Markup for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Clean Hero with Psychology-Driven Copy */}
      <HeroClean />

      {/* Why You Need a Website - Problem/Solution */}
      <WhyWebsiteSection />

      {/* The Truth About Other Agencies */}
      <TruthSection />

      {/* Real Results & Case Studies */}
      <ResultsSection />
      
      {/* Stats Section */}
      <section className="py-20 px-6 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Malaysian Businesses</h2>
            <p className="text-gray-600">Real numbers from real clients</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              Services That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every service is designed to increase your revenue, not just look good
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTable />

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary via-purple-600 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Losing Money to Competitors
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Every day without a converting website is money left on the table. Let's change that.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/60127075391?text=I%20want%20a%20website%20that%20makes%20me%20money"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Get Your Free Strategy Call
            </a>
            <a
              href="/work"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 border-2 border-white/20"
            >
              View Success Stories
            </a>
          </div>
          <p className="text-white/80 mt-6">✓ Free consultation ✓ No obligation ✓ 90-day guarantee</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
