'use client'

import Head from 'next/head'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

export default function ShowcasePage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-featured online store with payment integration, inventory management, and admin dashboard',
      image: '🛍️',
      tags: ['Next.js', 'Stripe', 'Tailwind', 'MongoDB'],
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Professional business website with CMS, blog, and SEO optimization',
      image: '🏢',
      tags: ['WordPress', 'SEO', 'Responsive', 'ACF'],
      link: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Restaurant Booking System',
      category: 'Web Application',
      description: 'Real-time table reservation system with SMS notifications and payment processing',
      image: '🍽️',
      tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      link: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Real Estate Portal',
      category: 'Web Development',
      description: 'Property listing platform with advanced search, filters, and virtual tours',
      image: '🏠',
      tags: ['Next.js', 'Maps API', 'Prisma', 'TypeScript'],
      link: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Fitness App Landing',
      category: 'Web Design',
      description: 'Modern landing page with animations, testimonials, and conversion optimization',
      image: '💪',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      link: '#',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Analytics dashboard with charts, reports, and team collaboration features',
      image: '📊',
      tags: ['React', 'Chart.js', 'Firebase', 'Material-UI'],
      link: '#',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 7,
      title: 'Education Platform',
      category: 'Web Development',
      description: 'Online learning platform with video courses, quizzes, and progress tracking',
      image: '📚',
      tags: ['Next.js', 'Video.js', 'Stripe', 'MySQL'],
      link: '#',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 8,
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'Creative portfolio with smooth animations and interactive project showcases',
      image: '🎨',
      tags: ['Next.js', 'GSAP', 'Three.js', 'Tailwind'],
      link: '#',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 9,
      title: 'Healthcare Booking',
      category: 'Web Application',
      description: 'Doctor appointment system with calendar integration and patient records',
      image: '🏥',
      tags: ['React', 'Node.js', 'MongoDB', 'Twilio'],
      link: '#',
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 10,
      title: 'Travel Agency Site',
      category: 'Web Development',
      description: 'Tour booking platform with destination guides and payment gateway',
      image: '✈️',
      tags: ['WordPress', 'WooCommerce', 'SEO'],
      link: '#',
      color: 'from-sky-500 to-blue-500'
    },
    {
      id: 11,
      title: 'Fashion E-Store',
      category: 'Web Development',
      description: 'Luxury fashion store with AR try-on and personalized recommendations',
      image: '👗',
      tags: ['Next.js', 'AR.js', 'Stripe', 'Redis'],
      link: '#',
      color: 'from-fuchsia-500 to-purple-500'
    },
    {
      id: 12,
      title: 'Event Management',
      category: 'Web Application',
      description: 'Event ticketing platform with QR codes and attendee management',
      image: '🎫',
      tags: ['React', 'Node.js', 'QR Code', 'Stripe'],
      link: '#',
      color: 'from-violet-500 to-indigo-500'
    },
    {
      id: 13,
      title: 'Car Rental System',
      category: 'Web Development',
      description: 'Vehicle booking platform with availability calendar and insurance options',
      image: '🚗',
      tags: ['Next.js', 'Prisma', 'Stripe', 'Maps'],
      link: '#',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 14,
      title: 'Blog Platform',
      category: 'Web Design',
      description: 'Modern blogging platform with markdown support and social sharing',
      image: '📝',
      tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
      link: '#',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 15,
      title: 'Job Board Portal',
      category: 'Web Application',
      description: 'Job listing platform with applicant tracking and resume parsing',
      image: '💼',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      link: '#',
      color: 'from-lime-500 to-green-500'
    },
    {
      id: 16,
      title: 'Social Media App',
      category: 'Web Application',
      description: 'Social networking platform with posts, stories, and real-time chat',
      image: '📱',
      tags: ['React', 'Firebase', 'Socket.io', 'Redux'],
      link: '#',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 17,
      title: 'Crypto Dashboard',
      category: 'Web Development',
      description: 'Cryptocurrency tracking dashboard with live prices and portfolio management',
      image: '₿',
      tags: ['Next.js', 'Chart.js', 'API', 'WebSocket'],
      link: '#',
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 18,
      title: 'Music Streaming',
      category: 'Web Application',
      description: 'Music player with playlists, recommendations, and offline mode',
      image: '🎵',
      tags: ['React', 'Audio API', 'Node.js', 'MongoDB'],
      link: '#',
      color: 'from-purple-500 to-fuchsia-500'
    },
    {
      id: 19,
      title: 'Food Delivery App',
      category: 'Web Development',
      description: 'Restaurant ordering system with live tracking and multiple payment options',
      image: '🍕',
      tags: ['Next.js', 'Maps API', 'Stripe', 'Socket.io'],
      link: '#',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 20,
      title: 'Gym Management',
      category: 'Web Application',
      description: 'Fitness center management with memberships, classes, and trainer booking',
      image: '🏋️',
      tags: ['React', 'Node.js', 'MySQL', 'Stripe'],
      link: '#',
      color: 'from-emerald-500 to-teal-500'
    },
  ])

  useEffect(() => {
    // Load projects from localStorage (admin panel)
    const saved = localStorage.getItem('showcase')
    if (saved) {
      try {
        const adminProjects = JSON.parse(saved)
        if (adminProjects.length > 0) {
          // Transform admin data to showcase format
          const transformedProjects = adminProjects.map((item: any) => ({
            id: item.id,
            title: item.title,
            category: item.category,
            description: item.description,
            image: item.image || '🎨',
            tags: item.customFields?.stats?.split(',').map((s: string) => s.trim()) || [],
            link: item.link || '#',
            color: 'from-primary to-secondary'
          }))
          setProjects(transformedProjects)
        }
      } catch (error) {
        console.error('Error loading showcase:', error)
      }
    }
  }, [])

  // Automatically extract unique categories from projects
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category).filter(Boolean)))]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      <Head>
        <title>Showcase - Featured Web Design Projects | Fikzstudio</title>
        <meta name="description" content="Explore our showcase of featured web design and development projects. See real examples of our work and the results we've achieved for clients." />
        <meta name="keywords" content="web design showcase, featured projects, web development examples, Fikzstudio portfolio" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="relative py-32 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              ✨ 20+ Successful Projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Showcase</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across web development, design, and applications
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-12 px-6 bg-white border-b sticky top-20 z-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-4 justify-center flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="text-center mt-4 text-gray-600">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Project Image */}
                  <div className={`relative h-64 bg-gradient-to-br ${project.color} overflow-hidden`}>
                    {project.image && (project.image.startsWith('http') || project.image.startsWith('data:image')) ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* View Button */}
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                    >
                      View Project
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">20+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">15+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary via-purple-600 to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Let's create something amazing together. Get in touch today!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-2xl"
              >
                Start a Project
              </a>
              <a
                href="https://wa.me/60127075391"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 border-2 border-white/20"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
