import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Work - Fikzstudio',
  description: 'View our portfolio of successful projects',
}

export default function WorkPage() {
  // Placeholder data - will be replaced with WordPress API data
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      summary: 'Modern online store with seamless checkout',
      services: ['Web Design', 'SEO'],
      image: '/placeholder.jpg'
    },
    {
      id: 2,
      title: 'Corporate Website',
      summary: 'Professional business website with CMS',
      services: ['Web Design', 'Maintenance'],
      image: '/placeholder.jpg'
    },
    {
      id: 3,
      title: 'Restaurant Website',
      summary: 'Beautiful restaurant site with online ordering',
      services: ['Web Design', 'Branding'],
      image: '/placeholder.jpg'
    }
  ]

  return (
    <>
      <main className="min-h-screen">
        <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span key={service} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
