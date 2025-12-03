import Link from 'next/link'

export default function PricingTable() {
  const packages = [
    {
      name: 'Startup',
      icon: '💡',
      price: 'Starting at RM 999',
      description: 'Perfect for new businesses',
      features: [
        '1-3 page website',
        'Mobile responsive',
        'Basic contact form',
        'Social media links',
        'Google Maps integration',
        'Fast loading speed',
        '2 weeks support',
      ],
      cta: 'Get Started',
      popular: false,
      badge: 'BEST VALUE',
    },
    {
      name: 'Business',
      icon: '🚀',
      price: 'Custom Quote',
      description: 'For growing companies',
      features: [
        '5-15 page website',
        'Custom design',
        'SEO optimization',
        'CMS integration',
        'Blog functionality',
        'Contact forms',
        '1 month support',
        'Analytics setup',
      ],
      cta: 'Get Quote',
      popular: true,
      badge: 'MOST POPULAR',
    },
    {
      name: 'Enterprise',
      icon: '⭐',
      price: 'Custom Quote',
      description: 'For established businesses',
      features: [
        'Unlimited pages',
        'Advanced features',
        'E-commerce ready',
        'Custom integrations',
        'Priority support',
        'Dedicated manager',
        '3 months support',
        'Training included',
      ],
      cta: 'Contact Us',
      popular: false,
      badge: null,
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Average Market Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Competitive rates based on industry standards. Final pricing depends on project scope and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border ${
                pkg.popular
                  ? 'border-primary scale-105 bg-gradient-to-br from-primary to-secondary text-white'
                  : 'border-gray-100'
              }`}
            >
              {pkg.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold ${
                  pkg.badge === 'BEST VALUE' 
                    ? 'bg-green-400 text-green-900' 
                    : 'bg-yellow-400 text-yellow-900'
                }`}>
                  {pkg.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : ''}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-4 ${pkg.popular ? 'text-white/90' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <div className={`text-4xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gradient'}`}>
                  {pkg.price}
                </div>
                <p className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-gray-500'}`}>
                  {pkg.name === 'Enterprise' ? 'Custom quote' : 'One-time payment'}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={pkg.popular ? 'text-yellow-300 mt-1' : 'text-green-500 mt-1'}>
                      ✓
                    </span>
                    <span className={pkg.popular ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                  pkg.popular
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            💡 All packages include responsive design, SSL certificate, and hosting setup
          </p>
          <p className="text-sm text-gray-500">
            Final pricing depends on your specific requirements. Contact us for a free consultation and detailed quote.
          </p>
        </div>
      </div>
    </section>
  )
}
