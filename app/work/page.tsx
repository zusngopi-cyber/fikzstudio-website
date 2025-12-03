'use client'

import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import PortfolioCard from '@/components/PortfolioCard'
import { getAllProjects, type Project } from '@/lib/cms'
import { Metadata } from 'next'

// Note: metadata export doesn't work in client components, so we'll use next/head in the component
export default function WorkPage() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // Load projects from CMS
    setProjects(getAllProjects())
  }, [])

  return (
    <>
      <head>
        <title>Our Portfolio - 50+ Successful Web Design Projects | Fikzstudio</title>
        <meta name="description" content="Browse our portfolio of 50+ successful web design and development projects. See how we've helped businesses in Malaysia grow with stunning websites and digital solutions." />
        <meta name="keywords" content="web design portfolio, Malaysia web projects, website examples, Fikzstudio work, web development showcase" />
      </head>
      <main className="min-h-screen">
        <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects and see how we've helped businesses grow
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {projects.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-gray-500 text-lg">No projects yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <PortfolioCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
