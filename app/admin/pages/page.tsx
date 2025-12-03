'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

interface Page {
  id: number
  title: string
  slug: string
  content: string
  template: 'default' | 'home' | 'about' | 'contact'
  status: 'published' | 'draft'
  customFields: Record<string, any>
  createdAt: string
  updatedAt: string
}

export default function PagesManager() {
  const searchParams = useSearchParams()
  const [pages, setPages] = useState<Page[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentPage, setCurrentPage] = useState<Page | null>(null)

  useEffect(() => {
    loadPages()
    if (searchParams?.get('action') === 'new') {
      handleAdd()
    }
  }, [searchParams])

  const loadPages = () => {
    const saved = localStorage.getItem('pages')
    if (saved) {
      setPages(JSON.parse(saved))
    }
  }

  const savePages = (newPages: Page[]) => {
    localStorage.setItem('pages', JSON.stringify(newPages))
    setPages(newPages)
  }

  const handleAdd = () => {
    setCurrentPage({
      id: Date.now(),
      title: '',
      slug: '',
      content: '',
      template: 'default',
      status: 'draft',
      customFields: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
    setIsEditing(true)
  }

  const handleEdit = (page: Page) => {
    setCurrentPage(page)
    setIsEditing(true)
  }

  const handleSave = () => {
    if (!currentPage) return
    
    const updatedPage = {
      ...currentPage,
      updatedAt: new Date().toISOString()
    }

    const existing = pages.find(p => p.id === currentPage.id)
    if (existing) {
      savePages(pages.map(p => p.id === currentPage.id ? updatedPage : p))
    } else {
      savePages([...pages, updatedPage])
    }
    
    setIsEditing(false)
    setCurrentPage(null)
  }

  const handleDelete = (id: number) => {
    if (confirm('Delete this page?')) {
      savePages(pages.filter(p => p.id !== id))
    }
  }

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  if (isEditing && currentPage) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {pages.find(p => p.id === currentPage.id) ? 'Edit' : 'Add New'} Page
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Page Title *</label>
                  <input
                    type="text"
                    value={currentPage.title}
                    onChange={(e) => {
                      const title = e.target.value
                      setCurrentPage({
                        ...currentPage,
                        title,
                        slug: generateSlug(title)
                      })
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="About Us"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Slug (URL)</label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">fikzstudio.com/</span>
                    <input
                      type="text"
                      value={currentPage.slug}
                      onChange={(e) => setCurrentPage({...currentPage, slug: e.target.value})}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="about-us"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Content</label>
                  <textarea
                    value={currentPage.content}
                    onChange={(e) => setCurrentPage({...currentPage, content: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary font-mono text-sm"
                    rows={15}
                    placeholder="Enter your content here... (HTML supported)"
                  />
                  <p className="text-xs text-gray-500 mt-1">You can use HTML tags for formatting</p>
                </div>

                {/* Custom Fields (ACF-like) */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">🎯 Custom Fields</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Hero Title</label>
                      <input
                        type="text"
                        value={currentPage.customFields.heroTitle || ''}
                        onChange={(e) => setCurrentPage({
                          ...currentPage,
                          customFields: {...currentPage.customFields, heroTitle: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Hero Subtitle</label>
                      <input
                        type="text"
                        value={currentPage.customFields.heroSubtitle || ''}
                        onChange={(e) => setCurrentPage({
                          ...currentPage,
                          customFields: {...currentPage.customFields, heroSubtitle: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CTA Button Text</label>
                      <input
                        type="text"
                        value={currentPage.customFields.ctaText || ''}
                        onChange={(e) => setCurrentPage({
                          ...currentPage,
                          customFields: {...currentPage.customFields, ctaText: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CTA Button Link</label>
                      <input
                        type="text"
                        value={currentPage.customFields.ctaLink || ''}
                        onChange={(e) => setCurrentPage({
                          ...currentPage,
                          customFields: {...currentPage.customFields, ctaLink: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">📋 Publish</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-2">Status</label>
                      <select
                        value={currentPage.status}
                        onChange={(e) => setCurrentPage({...currentPage, status: e.target.value as any})}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Template</label>
                      <select
                        value={currentPage.template}
                        onChange={(e) => setCurrentPage({...currentPage, template: e.target.value as any})}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      >
                        <option value="default">Default</option>
                        <option value="home">Home Page</option>
                        <option value="about">About Page</option>
                        <option value="contact">Contact Page</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <div className="font-semibold mb-2">💡 Tips:</div>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Use custom fields for dynamic content</li>
                    <li>• HTML is supported in content</li>
                    <li>• Slug creates the URL path</li>
                    <li>• Published pages go live instantly</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSave}
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold hover:scale-105 transition"
              >
                {currentPage.status === 'published' ? '🚀 Publish' : '💾 Save Draft'}
              </button>
              <button
                onClick={() => {setIsEditing(false); setCurrentPage(null)}}
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
          <h1 className="text-4xl font-heading font-bold mb-2">Pages</h1>
          <p className="text-gray-600">Manage your website pages</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2"
        >
          <span className="text-xl">➕</span>
          Add New Page
        </button>
      </div>

      {pages.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl">
          <div className="text-6xl mb-4">📄</div>
          <p className="text-gray-500 text-lg mb-6">No pages yet</p>
          <button
            onClick={handleAdd}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Create Your First Page
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Slug</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Template</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Updated</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {pages.map((page) => (
                <tr key={page.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{page.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">/{page.slug}</td>
                  <td className="px-6 py-4 text-sm">{page.template}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      page.status === 'published' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {page.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleEdit(page)}
                      className="text-blue-600 hover:text-blue-700 mr-4 text-sm font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(page.id)}
                      className="text-red-600 hover:text-red-700 text-sm font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
