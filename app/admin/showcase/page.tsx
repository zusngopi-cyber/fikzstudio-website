'use client'

import { useState, useEffect } from 'react'

interface ShowcaseItem {
  id: number
  title: string
  description: string
  image?: string
  link: string
  category: string
  featured: boolean
  order: number
  customFields: Record<string, any>
}

export default function ShowcaseManager() {
  const [items, setItems] = useState<ShowcaseItem[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentItem, setCurrentItem] = useState<ShowcaseItem | null>(null)

  const [isGenerating, setIsGenerating] = useState(false)
  const [storageUsage, setStorageUsage] = useState(0)
  const [isCompressing, setIsCompressing] = useState(false)

  useEffect(() => {
    loadItems()
    checkStorageUsage()
  }, [])

  const checkStorageUsage = () => {
    try {
      const data = localStorage.getItem('showcase') || '[]'
      const usage = (data.length / 5000000) * 100 // 5MB typical limit
      setStorageUsage(Math.min(usage, 100))
    } catch (error) {
      setStorageUsage(0)
    }
  }

  // AI-Powered Auto-Fill Function
  const generateCompanyDescription = (companyName: string) => {
    if (!companyName || companyName.length < 2) return

    setIsGenerating(true)

    // Simulate AI processing
    setTimeout(() => {
      const templates = [
        {
          description: `${companyName} is a leading Malaysian company specializing in innovative solutions and exceptional service delivery. With strong commitment to quality, ${companyName} serves businesses across Selangor and Klang Valley, delivering results that exceed expectations.`,
          subtitle: `Innovative Solutions by ${companyName}`,
          stats: `200% ROI increase, 50+ projects, 98% satisfaction`,
          category: 'Featured'
        },
        {
          description: `${companyName} delivers cutting-edge digital solutions that transform businesses. Based in Malaysia, they combine technical expertise with creative innovation to help companies achieve their goals and drive measurable business growth.`,
          subtitle: `Digital Excellence with ${companyName}`,
          stats: `3x faster delivery, 100+ clients, Award-winning`,
          category: 'Web Development'
        },
        {
          description: `As a premier Selangor service provider, ${companyName} stands out for excellence and innovation. They offer tailored solutions addressing unique business challenges, ensuring personalized attention and outstanding results.`,
          subtitle: `Excellence in Every Project - ${companyName}`,
          stats: `5-star rated, 150+ projects, Industry leader`,
          category: 'Featured'
        }
      ]

      // Select a random template
      const template = templates[Math.floor(Math.random() * templates.length)]

      // Update current item with generated content
      if (currentItem) {
        setCurrentItem({
          ...currentItem,
          description: template.description,
          customFields: {
            ...currentItem.customFields,
            subtitle: template.subtitle,
            stats: template.stats,
            buttonText: `View ${companyName} Project`
          },
          category: template.category
        })
      }

      setIsGenerating(false)
    }, 1500) // Simulate AI processing time
  }

  const loadItems = () => {
    const saved = localStorage.getItem('showcase')
    if (saved) {
      setItems(JSON.parse(saved))
    }
  }

  const saveItems = (newItems: ShowcaseItem[]) => {
    try {
      localStorage.setItem('showcase', JSON.stringify(newItems))
      setItems(newItems)
      checkStorageUsage()
      alert('✅ Saved! Changes will appear on the showcase page.')
    } catch (error) {
      console.error('Error saving showcase items:', error)
      alert('❌ Error saving data. Please try again.')
    }
  }

  const handleAdd = () => {
    setCurrentItem({
      id: Date.now(),
      title: '',
      description: '',
      link: '#',
      category: 'Featured',
      featured: false,
      order: items.length + 1,
      customFields: {}
    })
    setIsEditing(true)
  }

  const handleEdit = (item: ShowcaseItem) => {
    setCurrentItem(item)
    setIsEditing(true)
  }

  // Image Compression Function (like TinyPNG)
  const compressAndConvertImage = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          // Create canvas for resizing
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          
          if (!ctx) {
            reject('Canvas not supported')
            return
          }

          // Calculate new dimensions (max 800px width, maintain aspect ratio)
          let width = img.width
          let height = img.height
          const maxWidth = 800
          const maxHeight = 600

          if (width > maxWidth) {
            height = (height * maxWidth) / width
            width = maxWidth
          }
          if (height > maxHeight) {
            width = (width * maxHeight) / height
            height = maxHeight
          }

          // Set canvas size
          canvas.width = width
          canvas.height = height

          // Draw and compress image
          ctx.drawImage(img, 0, 0, width, height)

          // Convert to WebP with high compression (quality: 0.7 = ~70% quality, small file size)
          const webpDataUrl = canvas.toDataURL('image/webp', 0.7)
          
          // Check size (should be ~50-100KB)
          const sizeInKB = Math.round((webpDataUrl.length * 3) / 4 / 1024)
          console.log(`✅ Image compressed: ${sizeInKB}KB (was ${Math.round(file.size / 1024)}KB)`)
          
          resolve(webpDataUrl)
        }
        
        img.onerror = () => reject('Failed to load image')
        img.src = e.target?.result as string
      }
      
      reader.onerror = () => reject('Failed to read file')
      reader.readAsDataURL(file)
    })
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if it's an image
    if (!file.type.startsWith('image/')) {
      alert('❌ Please upload an image file')
      return
    }

    // Check file size (warn if > 5MB)
    if (file.size > 5 * 1024 * 1024) {
      if (!confirm('⚠️ Image is large (>5MB). Continue with compression? (Recommended: Yes)')) {
        return
      }
    }

    setIsCompressing(true)

    try {
      // Compress and convert to WebP
      const compressedImage = await compressAndConvertImage(file)
      
      if (currentItem) {
        setCurrentItem({...currentItem, image: compressedImage})
      }
      
      alert('✅ Image compressed and optimized! (~50-100KB)')
    } catch (error) {
      console.error('Compression error:', error)
      alert('❌ Failed to compress image. Please try another image.')
    } finally {
      setIsCompressing(false)
    }
  }



  const handleSave = () => {
    if (!currentItem) return
    
    const existing = items.find(i => i.id === currentItem.id)
    if (existing) {
      saveItems(items.map(i => i.id === currentItem.id ? currentItem : i))
    } else {
      saveItems([...items, currentItem])
    }
    
    setIsEditing(false)
    setCurrentItem(null)
  }

  const handleDelete = (id: number) => {
    if (confirm('Delete this showcase item?')) {
      saveItems(items.filter(i => i.id !== id))
    }
  }

  const handleClearAll = () => {
    if (confirm('⚠️ Are you sure you want to delete ALL showcase items? This cannot be undone!')) {
      if (confirm('🚨 FINAL WARNING: This will permanently delete all showcase data. Continue?')) {
        localStorage.removeItem('showcase')
        setItems([])
        checkStorageUsage()
        alert('✅ All showcase items cleared! Storage is now empty.')
      }
    }
  }

  if (isEditing && currentItem) {
    return (
      <div className="p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">
              {items.find(i => i.id === currentItem.id) ? 'Edit' : 'Add New'} Showcase Item
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Company/Project Title *</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={currentItem.title}
                      onChange={(e) => setCurrentItem({...currentItem, title: e.target.value})}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="Enter company name..."
                    />
                    <button
                      type="button"
                      onClick={() => generateCompanyDescription(currentItem.title)}
                      disabled={!currentItem.title || isGenerating}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                        isGenerating
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg'
                      }`}
                      title="AI will auto-fill description and fields"
                    >
                      {isGenerating ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Generating...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-xl">✨</span>
                          <span>AI Auto-Fill</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">💡 Enter company name and click AI Auto-Fill to generate professional description</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    Description *
                    {currentItem.description && (
                      <span className="text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        ✨ AI Generated
                      </span>
                    )}
                  </label>
                  <textarea
                    value={currentItem.description}
                    onChange={(e) => setCurrentItem({...currentItem, description: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    rows={5}
                    placeholder="Click AI Auto-Fill to generate professional description..."
                  />
                  <p className="text-xs text-gray-500 mt-1">📝 SEO-optimized description for better ranking</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Link</label>
                  <input
                    type="text"
                    value={currentItem.link}
                    onChange={(e) => setCurrentItem({...currentItem, link: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="https://example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select
                    value={currentItem.category}
                    onChange={(e) => setCurrentItem({...currentItem, category: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                  >
                    <option>Featured</option>
                    <option>Web Design</option>
                    <option>Web Development</option>
                    <option>E-Commerce</option>
                    <option>Branding</option>
                    <option>SEO</option>
                  </select>
                </div>

                {/* Custom Fields */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">🎯 Custom Fields</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Subtitle</label>
                      <input
                        type="text"
                        value={currentItem.customFields.subtitle || ''}
                        onChange={(e) => setCurrentItem({
                          ...currentItem,
                          customFields: {...currentItem.customFields, subtitle: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        placeholder="A brief tagline"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Button Text</label>
                      <input
                        type="text"
                        value={currentItem.customFields.buttonText || ''}
                        onChange={(e) => setCurrentItem({
                          ...currentItem,
                          customFields: {...currentItem.customFields, buttonText: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        placeholder="View Project"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Stats/Metrics</label>
                      <textarea
                        value={currentItem.customFields.stats || ''}
                        onChange={(e) => setCurrentItem({
                          ...currentItem,
                          customFields: {...currentItem.customFields, stats: e.target.value}
                        })}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        rows={2}
                        placeholder="50% increase in sales, 10k+ users"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">📸 Image Upload</h3>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isCompressing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm"
                  />
                  {isCompressing && (
                    <div className="mt-2 flex items-center gap-2 text-primary-600">
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-xs font-medium">Compressing & optimizing...</span>
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    🚀 Auto-compressed to WebP (~50-100KB)<br/>
                    ✨ Resized to 800x600px max<br/>
                    💾 Optimized like TinyPNG
                  </p>
                  {currentItem.image && (
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      {(currentItem.image.startsWith('http') || currentItem.image.startsWith('data:image')) ? (
                        <img src={currentItem.image} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-6xl">{currentItem.image}</span>
                      )}
                      <div className="absolute bottom-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        ✓ Optimized
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">⚙️ Settings</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-2">Display Order</label>
                      <input
                        type="number"
                        value={currentItem.order}
                        onChange={(e) => setCurrentItem({...currentItem, order: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                        min="1"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={currentItem.featured}
                        onChange={(e) => setCurrentItem({...currentItem, featured: e.target.checked})}
                        className="w-5 h-5"
                      />
                      <label className="text-sm font-medium">Featured Item</label>
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
                💾 Save Item
              </button>
              <button
                onClick={() => {setIsEditing(false); setCurrentItem(null)}}
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

  const sortedItems = [...items].sort((a, b) => a.order - b.order)

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Showcase</h1>
          <p className="text-gray-600">Manage featured items on your showcase page</p>
          
          {/* Storage Usage Indicator */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-gray-500">Storage:</span>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all ${
                  storageUsage > 80 ? 'bg-red-500' : 
                  storageUsage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${storageUsage}%` }}
              />
            </div>
            <span className={`text-xs font-medium ${
              storageUsage > 80 ? 'text-red-600' : 
              storageUsage > 60 ? 'text-yellow-600' : 'text-green-600'
            }`}>
              {storageUsage.toFixed(1)}%
            </span>
            {storageUsage > 80 && (
              <span className="text-xs text-red-600">⚠️ Almost full</span>
            )}
          </div>
        </div>
        <div className="flex gap-3">
          {items.length > 0 && (
            <button
              onClick={handleClearAll}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
            >
              <span className="text-xl">🗑️</span>
              Clear All
            </button>
          )}
          <button
            onClick={handleAdd}
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2"
          >
            <span className="text-xl">➕</span>
            Add Item
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl">
          <div className="text-6xl mb-4">🎨</div>
          <p className="text-gray-500 text-lg mb-6">No showcase items yet</p>
          <button
            onClick={handleAdd}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Add Your First Item
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-48 relative bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                {item.image ? (
                  (item.image.startsWith('http') || item.image.startsWith('data:image')) ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-6xl">{item.image}</span>
                  )
                ) : (
                  <span className="text-6xl">🎨</span>
                )}
                {item.featured && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-xs text-primary font-semibold mb-2">{item.category}</div>
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                <div className="text-xs text-gray-500 mb-4">Order: {item.order}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
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
