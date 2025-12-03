'use client'

import { useState, useEffect } from 'react'

interface Snippet {
  id: number
  title: string
  code: string
  type: 'css' | 'javascript' | 'html' | 'php'
  location: 'head' | 'body' | 'footer'
  active: boolean
  createdAt: string
}

export default function SnippetsPage() {
  const [snippets, setSnippets] = useState<Snippet[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentSnippet, setCurrentSnippet] = useState<Snippet | null>(null)

  useEffect(() => {
    loadSnippets()
  }, [])

  const loadSnippets = () => {
    const saved = localStorage.getItem('snippets')
    if (saved) {
      setSnippets(JSON.parse(saved))
    }
  }

  const saveSnippets = (newSnippets: Snippet[]) => {
    localStorage.setItem('snippets', JSON.stringify(newSnippets))
    setSnippets(newSnippets)
  }

  const handleAdd = () => {
    setCurrentSnippet({
      id: Date.now(),
      title: '',
      code: '',
      type: 'css',
      location: 'head',
      active: true,
      createdAt: new Date().toISOString()
    })
    setIsEditing(true)
  }

  const handleEdit = (snippet: Snippet) => {
    setCurrentSnippet(snippet)
    setIsEditing(true)
  }

  const handleSave = () => {
    if (!currentSnippet) return
    
    const existing = snippets.find(s => s.id === currentSnippet.id)
    if (existing) {
      saveSnippets(snippets.map(s => s.id === currentSnippet.id ? currentSnippet : s))
    } else {
      saveSnippets([...snippets, currentSnippet])
    }
    
    setIsEditing(false)
    setCurrentSnippet(null)
  }

  const handleDelete = (id: number) => {
    if (confirm('Delete this snippet?')) {
      saveSnippets(snippets.filter(s => s.id !== id))
    }
  }

  const toggleActive = (id: number) => {
    saveSnippets(snippets.map(s => 
      s.id === id ? {...s, active: !s.active} : s
    ))
  }

  if (isEditing && currentSnippet) {
    return (
      <div className="p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {snippets.find(s => s.id === currentSnippet.id) ? 'Edit' : 'Add New'} Code Snippet
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Snippet Title *</label>
                <input
                  type="text"
                  value={currentSnippet.title}
                  onChange={(e) => setCurrentSnippet({...currentSnippet, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Google Analytics"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Type</label>
                  <select
                    value={currentSnippet.type}
                    onChange={(e) => setCurrentSnippet({...currentSnippet, type: e.target.value as any})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  >
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="html">HTML</option>
                    <option value="php">PHP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Location</label>
                  <select
                    value={currentSnippet.location}
                    onChange={(e) => setCurrentSnippet({...currentSnippet, location: e.target.value as any})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  >
                    <option value="head">Head (before &lt;/head&gt;)</option>
                    <option value="body">Body Start (after &lt;body&gt;)</option>
                    <option value="footer">Footer (before &lt;/body&gt;)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Code *</label>
                <textarea
                  value={currentSnippet.code}
                  onChange={(e) => setCurrentSnippet({...currentSnippet, code: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary font-mono text-sm"
                  rows={12}
                  placeholder={`<!-- Example: Google Analytics -->\n<script>\n  // Your code here\n</script>`}
                />
              </div>

              <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-lg">
                <input
                  type="checkbox"
                  checked={currentSnippet.active}
                  onChange={(e) => setCurrentSnippet({...currentSnippet, active: e.target.checked})}
                  className="w-5 h-5"
                />
                <label className="text-sm">
                  <span className="font-semibold">Active</span> - Enable this snippet on the website
                </label>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-sm text-red-700">
                <div className="font-semibold mb-1">⚠️ Warning:</div>
                <div>Be careful with code snippets. Invalid code can break your website. Test thoroughly before activating.</div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSave}
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold hover:scale-105 transition"
              >
                💾 Save Snippet
              </button>
              <button
                onClick={() => {setIsEditing(false); setCurrentSnippet(null)}}
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
          <h1 className="text-4xl font-heading font-bold mb-2">Code Snippets</h1>
          <p className="text-gray-600">Add custom CSS, JavaScript, or HTML to your site</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2"
        >
          <span className="text-xl">➕</span>
          Add Snippet
        </button>
      </div>

      {snippets.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl">
          <div className="text-6xl mb-4">💻</div>
          <p className="text-gray-500 text-lg mb-6">No code snippets yet</p>
          <button
            onClick={handleAdd}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Add Your First Snippet
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {snippets.map((snippet) => (
            <div key={snippet.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{snippet.title}</h3>
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {snippet.type}
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">
                      {snippet.location}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleActive(snippet.id)}
                  className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${
                    snippet.active
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {snippet.active ? '✓ Active' : '○ Inactive'}
                </button>
              </div>
              
              <pre className="bg-gray-50 p-3 rounded-lg text-xs overflow-x-auto mb-4 max-h-32">
                <code>{snippet.code}</code>
              </pre>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(snippet)}
                  className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(snippet.id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm hover:bg-red-600 transition"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
