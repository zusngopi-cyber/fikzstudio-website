import ServiceCard from '@/components/ServiceCard'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services - Fikzstudio',
  description: 'Professional web design, SEO, maintenance, and branding services',
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

        {/* Process Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
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
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Let's discuss your project and create something amazing together
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-2xl"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
