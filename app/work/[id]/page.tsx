'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Footer from '@/components/Footer'
import PortfolioCard from '@/components/PortfolioCard'
import { getProjectById, getAllProjects, type Project } from '@/lib/cms'

export default function ProjectDetailPage() {
  const params = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([])

  useEffect(() => {
    if (params?.id) {
      const foundProject = getProjectById(Number(params.id))
      setProject(foundProject)
      
      if (foundProject) {
        // Get related projects (same category, excluding current)
        const allProjects = getAllProjects()
        const related = allProjects
          .filter(p => p.id !== foundProject.id && p.category === foundProject.category)
          .slice(0, 3)
        setRelatedProjects(related)
      }
    }
  }, [params])

  if (!project) {
    return (
      <>
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
            <a href="/work" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition inline-block">
              Back to Portfolio
            </a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-sm text-primary font-semibold mb-4 uppercase tracking-wider">
              {project.category}
            </div>
            <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {project.description}
            </p>
          </div>
        </section>

        {/* Featured Image */}
        {project.image ? (
          <section className="px-6 -mt-10">
            <div className="max-w-6xl mx-auto">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        ) : (
          <section className="px-6 -mt-10">
            <div className="max-w-6xl mx-auto">
              <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-9xl">🚀</span>
              </div>
            </div>
          </section>
        )}

        {/* Project Details */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">About This Project</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Custom Fields */}
                {project.customFields.results && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Results Achieved</h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {project.customFields.results}
                    </p>
                  </div>
                )}

                {project.customFields.technologies && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {project.customFields.technologies}
                    </p>
                  </div>
                )}

                {/* Tags */}
                {project.tags.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold mb-4">Project Info</h3>
                  <div className="space-y-4">
                    {project.customFields.client && (
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Client</div>
                        <div className="font-semibold">{project.customFields.client}</div>
                      </div>
                    )}
                    {project.customFields.duration && (
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Duration</div>
                        <div className="font-semibold">{project.customFields.duration}</div>
                      </div>
                    )}
                    {project.customFields.budget && (
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Budget</div>
                        <div className="font-semibold">{project.customFields.budget}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Category</div>
                      <div className="font-semibold">{project.category}</div>
                    </div>
                  </div>
                </div>

                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-semibold text-center hover:scale-105 transition shadow-lg"
                  >
                    🔗 Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-20 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">More Projects</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <PortfolioCard key={relatedProject.id} project={relatedProject} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary via-purple-600 to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Want Similar Results for Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can create something amazing together
            </p>
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-2xl inline-block"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
