'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  link: string
  color: string
  image?: string
  customFields: {
    client?: string
    duration?: string
    budget?: string
    technologies?: string
    results?: string
  }
}

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const [projects, setProjects] = useState<Project[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')

  useEffect(() => {
    loadProjects()
    if (searchParams?.get('action') === 'new') {
      handleAdd()
    }
  }, [searchParams])

  const loadProjects = () => {
    const saved = localStorage.getItem('projects')
    if (saved) {
      setProjects(JSON.parse(saved))
    }
  }

  const saveProjects = (newProjects: Project[]) => {
    localStorage.setItem('projects', JSON.stringify(newProjects))
    setProjects(newProjects)
  }

  const handleAdd = () => {
    setCurrentProject({
      id: Date.now(),
      title: '',
      category: 'Web Development',
      description: '',
      tags: [],
      link: '#',
      color: 'from-blue-500 to-cyan-500',
      customFields: {}
    })
    setIsEditing(true)
    setImagePreview('')
  }

  const handleEdit = (project: Project) => {
    setCurrentProject(project)
    setImagePreview(project.image || '')
    setIsEditing(true)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result as string
        setImagePreview(base64)
        if (currentProject) {
          setCurrentProject({...currentProject, image: base64})
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    if (!currentProject) return
    
    const existing = projects.find(p => p.id === currentProject.id)
    if (existing) {
      saveProjects(projects.map(p => p.id === currentProject.id ? currentProject : p))
    } else {
      saveProjects([...projects, currentProject])
    }
    setIsEditing(false)
    setCurrentProject(null)
    setImagePreview('')
  }

  const handleDelete = (id: number) => {
    if (confirm('Delete this project?')) {
      saveProjects(projects.filter(p => p.id !== id))
    }
  }

  if (isEditing && currentProject) {
    return (
      <div className="p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">
              {projects.find(p => p.id === currentProject.id) ? 'Edit' : 'Add New'} Project
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Project Title *</label>
                  <input
                    type="text"
                    value={currentProject.title}
                    onChange={(e) => setCurrentProject({...currentProject, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="E-Commerce Platform"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Category *</label>
                  <select
                    value={currentProject.category}
                    onChange={(e) => setCurrentProject({...currentProject, category: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  >
                    <option>Web Development</option>
                    <option>Web Design</option>
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>E-Commerce</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Description *</label>
                  <textarea
                    value={currentProject.description}
                    onChange={(e) => setCurrentProject({...currentProject, description: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    rows={4}
                    placeholder="Describe the project..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={currentProject.tags.join(', ')}
                    onChange={(e) => setCurrentProject({...currentProject, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t)})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Next.js, Tailwind, MongoDB"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Link</label>
                  <input
                    type="text"
                    value={currentProject.link}
                    onChange={(e) => setCurrentProject({...currentProject, link: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="https://example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Gradient Color</label>
                  <select
                    value={currentProject.color}
                    onChange={(e) => setCurrentProject({...currentProject, color: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  >
                    <option value="from-blue-500 to-cyan-500">Blue to Cyan</option>
                    <option value="from-purple-500 to-pink-500">Purple to Pink</option>
                    <option value="from-orange-500 to-red-500">Orange to Red</option>
                    <option value="from-green-500 to-emerald-500">Green to Emerald</option>
                    <option value="from-indigo-500 to-purple-500">Indigo to Purple</option>
                    <option value="from-yellow-500 to-orange-500">Yellow to Orange</option>
                    <option value="from-pink-500 to-rose-500">Pink to Rose</option>
                    <option value="from-teal-500 to-green-500">Teal to Green</option>
                  </select>
                </div>
              </div>

              {/* Right Column - Custom Fields (ACF-like) */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">📸 Featured Image</h3>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                  />
                  {imagePreview && (
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">🎯 Custom Fields</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Client Name</label>
                      <input
                        type="text"
                        value={currentProject.customFields.client || ''}
                        onChange={(e) => setCurrentProject({
                          ...currentProject,
                          customFields: {...currentProject.customFields, client: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Duration</label>
                      <input
                        type="text"
                        value={currentProject.customFields.duration || ''}
                        onChange={(e) => setCurrentProject({
                          ...currentProject,
                          customFields: {...currentProject.customFields, duration: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        placeholder="3 months"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Budget</label>
                      <input
                        type="text"
                        value={currentProject.customFields.budget || ''}
                        onChange={(e) => setCurrentProject({
                          ...currentProject,
                          customFields: {...currentProject.customFields, budget: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        placeholder="$10,000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Technologies Used</label>
                      <textarea
                        value={currentProject.customFields.technologies || ''}
                        onChange={(e) => setCurrentProject({
                          ...currentProject,
                          customFields: {...currentProject.customFields, technologies: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        rows={2}
                        placeholder="React, Node.js, MongoDB..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Results Achieved</label>
                      <textarea
                        value={currentProject.customFields.results || ''}
                        onChange={(e) => setCurrentProject({
                          ...currentProject,
                          customFields: {...currentProject.customFields, results: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        rows={3}
                        placeholder="50% increase in sales..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSave}
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold hover:scale-105 transition"
              >
                💾 Save Project
              </button>
              <button
                onClick={() => {setIsEditing(false); setCurrentProject(null); setImagePreview('')}}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                ✖️ Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-gray-600">Manage your portfolio projects</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2"
        >
          <span className="text-xl">➕</span>
          Add New Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl">
          <div className="text-6xl mb-4">📁</div>
          <p className="text-gray-500 text-lg mb-6">No projects yet</p>
          <button
            onClick={handleAdd}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Create Your First Project
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
              {project.image ? (
                <div className="h-48 relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}>
                  🚀
                </div>
              )}
              <div className="p-6">
                <div className="text-xs text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm hover:bg-red-600 transition"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
