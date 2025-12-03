import ServiceCard from '@/components/ServiceCard'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design & Digital Marketing Services in Malaysia | Fikzstudio Pricing',
  description: 'Professional web design, SEO, website maintenance, and digital marketing services in Malaysia. Transparent pricing from $1,500. Get a free consultation and custom quote today!',
  keywords: ['web design services Malaysia', 'SEO services', 'website maintenance', 'digital marketing Malaysia', 'web design pricing', 'website cost Malaysia', 'Fikzstudio services'],
  openGraph: {
    title: 'Web Design & Digital Marketing Services | Fikzstudio',
    description: 'Professional web design and digital marketing services with transparent pricing. Packages from RM 6,500 to RM 35,000+.',
    url: 'https://fikzstudio.com/services',
    siteName: 'Fikzstudio',
    type: 'website',
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'Custom websites built with modern technologies. Responsive, fast, and optimized for conversions. We create digital experiences that engage your audience.',
      icon: '🎨'
    },
    {
      title: 'Search Engine Optimization',
      description: 'Improve your visibility on Google with comprehensive SEO strategies. Technical optimization, content strategy, and link building to boost your rankings.',
      icon: '🚀'
    },
    {
      title: 'Website Maintenance',
      description: 'Keep your site secure, fast, and running smoothly. Regular updates, backups, performance monitoring, and technical support when you need it.',
      icon: '🔧'
    },
    {
      title: 'Brand Identity Design',
      description: 'Create a memorable brand that stands out. Professional logo design, brand guidelines, and visual identity that resonates with your audience.',
      icon: '✨'
    },
    {
      title: 'Content Strategy',
      description: 'Engaging content that connects with your audience and drives results. Blog posts, copywriting, and content marketing that converts.',
      icon: '📝'
    },
    {
      title: 'Digital Marketing',
      description: 'Grow your business with targeted digital campaigns. Social media marketing, email campaigns, and paid advertising that delivers ROI.',
      icon: '📊'
    }
  ]

  const process = [
    { step: '01', title: 'Discovery', description: 'We learn about your business, goals, and target audience' },
    { step: '02', title: 'Strategy', description: 'We create a customized plan tailored to your needs' },
    { step: '03', title: 'Design & Build', description: 'We bring your vision to life with expert execution' },
    { step: '04', title: 'Launch & Grow', description: 'We launch your project and support your growth' }
  ]

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              <span className="text-gradient">Premium Digital Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to help your business thrive in the digital world
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Web Design & Development */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">🎨</div>
                <h2 className="text-4xl font-bold mb-6">Web Design & Development</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Transform your online presence with stunning, high-performance websites that captivate visitors and drive conversions. Our expert team combines creative design with cutting-edge technology to deliver exceptional results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Responsive Design</h4>
                      <p className="text-gray-600 text-sm">Perfect display on all devices - mobile, tablet, and desktop</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Modern Technologies</h4>
                      <p className="text-gray-600 text-sm">Built with Next.js, React, and latest web standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Fast Loading Speed</h4>
                      <p className="text-gray-600 text-sm">Optimized for performance and user experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Custom Solutions</h4>
                      <p className="text-gray-600 text-sm">Tailored to your unique business needs and goals</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">What You Get:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Custom website design mockups</li>
                  <li>• Mobile-first responsive development</li>
                  <li>• Content management system (CMS)</li>
                  <li>• Contact forms and integrations</li>
                  <li>• Social media integration</li>
                  <li>• Google Analytics setup</li>
                  <li>• SSL certificate & security</li>
                  <li>• Cross-browser compatibility</li>
                </ul>
              </div>
            </div>

            {/* SEO Optimization */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">SEO Services Include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Comprehensive SEO audit</li>
                  <li>• Keyword research & strategy</li>
                  <li>• On-page optimization</li>
                  <li>• Technical SEO improvements</li>
                  <li>• Content optimization</li>
                  <li>• Local SEO (Google My Business)</li>
                  <li>• Backlink building strategy</li>
                  <li>• Monthly performance reports</li>
                  <li>• Competitor analysis</li>
                  <li>• Schema markup implementation</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-6xl mb-6">🚀</div>
                <h2 className="text-4xl font-bold mb-6">SEO Optimization</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Dominate search engine rankings and attract more organic traffic with our proven SEO strategies. We help your business get found by customers actively searching for your services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Higher Rankings</h4>
                      <p className="text-gray-600 text-sm">Improve your position on Google search results</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">More Traffic</h4>
                      <p className="text-gray-600 text-sm">Increase qualified visitors to your website</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Better Conversions</h4>
                      <p className="text-gray-600 text-sm">Turn visitors into customers with targeted optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Long-term Results</h4>
                      <p className="text-gray-600 text-sm">Sustainable growth that compounds over time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Website Maintenance */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">🔧</div>
                <h2 className="text-4xl font-bold mb-6">Website Maintenance</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Keep your website running smoothly, securely, and at peak performance with our comprehensive maintenance services. We handle all the technical details so you can focus on your business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Regular Updates</h4>
                      <p className="text-gray-600 text-sm">Keep software, plugins, and security patches current</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Security Monitoring</h4>
                      <p className="text-gray-600 text-sm">24/7 protection against threats and vulnerabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Performance Optimization</h4>
                      <p className="text-gray-600 text-sm">Continuous speed and performance improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Priority Support</h4>
                      <p className="text-gray-600 text-sm">Quick response to any issues or questions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Maintenance Plans:</h3>
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Basic Plan - RM 500/month</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Weekly backups</li>
                      <li>• Security monitoring</li>
                      <li>• Software updates</li>
                      <li>• Email support</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-primary">
                    <div className="text-xs text-primary font-bold mb-2">POPULAR</div>
                    <h4 className="font-bold mb-2">Pro Plan - RM 1,200/month</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Daily backups</li>
                      <li>• Advanced security</li>
                      <li>• Performance optimization</li>
                      <li>• Content updates (2 hours/month)</li>
                      <li>• Priority support</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Enterprise - Custom</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Everything in Pro</li>
                      <li>• Dedicated support</li>
                      <li>• Unlimited updates</li>
                      <li>• Custom SLA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Marketing Services:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Social media management</li>
                  <li>• Facebook & Instagram ads</li>
                  <li>• Google Ads campaigns</li>
                  <li>• Email marketing</li>
                  <li>• Content marketing</li>
                  <li>• Conversion optimization</li>
                  <li>• Analytics & reporting</li>
                  <li>• Brand strategy</li>
                  <li>• Influencer partnerships</li>
                  <li>• Marketing automation</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-6xl mb-6">📊</div>
                <h2 className="text-4xl font-bold mb-6">Digital Marketing</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Grow your business with data-driven digital marketing strategies that deliver measurable results. We create campaigns that reach your target audience and drive real ROI.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Targeted Campaigns</h4>
                      <p className="text-gray-600 text-sm">Reach the right audience at the right time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Measurable Results</h4>
                      <p className="text-gray-600 text-sm">Track ROI and optimize for better performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Multi-Channel Strategy</h4>
                      <p className="text-gray-600 text-sm">Integrated approach across all platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Management</h4>
                      <p className="text-gray-600 text-sm">Experienced team handling your campaigns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Transparent Pricing</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Average Market Pricing</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Competitive rates based on industry standards. Final pricing depends on project scope and requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Startup Package */}
              <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-400 text-green-900 px-4 py-1 rounded-full text-sm font-bold">
                  BEST VALUE
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold mb-2">Startup</h3>
                  <p className="text-gray-600 mb-4">Perfect for new businesses</p>
                  <div className="text-4xl font-bold text-gradient mb-2">Starting at RM 999</div>
                  <p className="text-sm text-gray-500">One-time payment</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">1-3 page website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Mobile responsive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Basic contact form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Social media links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Google Maps integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">2 weeks support</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  Get Started
                </a>
              </div>

              {/* Business Package */}
              <div className="relative bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-xl text-white transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-2">Business</h3>
                  <p className="text-white/90 mb-4">For growing companies</p>
                  <div className="text-4xl font-bold mb-2">Custom Quote</div>
                  <p className="text-sm text-white/80">Based on your needs</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span>5-15 page website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span>Custom design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span>CMS integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span>Blog functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300 mt-1">✓</span>
                    <span>1 month support</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full text-center bg-white text-primary hover:bg-gray-100 py-3 rounded-lg font-semibold transition"
                >
                  Get Quote
                </a>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">⭐</div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-gray-600 mb-4">For established businesses</p>
                  <div className="text-4xl font-bold text-gradient mb-2">Custom Quote</div>
                  <p className="text-sm text-gray-500">Tailored solution</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Unlimited pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Advanced features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">E-commerce ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">3 months support</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                💡 All packages include responsive design, SSL certificate, and basic training
              </p>
              <p className="text-sm text-gray-500">
                Prices are estimates based on market averages. Contact us for a detailed quote tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven approach to deliver exceptional results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                    <div className="text-5xl font-bold text-gradient mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary via-purple-600 to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Get a free consultation and custom quote tailored to your specific needs
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-2xl"
              >
                📧 Contact Us
              </a>
              <a
                href="https://wa.me/60127075391?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 border-2 border-white/20"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
