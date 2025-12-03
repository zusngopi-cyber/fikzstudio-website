'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage?: string
  categories: string[]
  tags: string[]
  author: string
  publishedAt: string
  status: 'published' | 'draft'
}

export default function BlogManager() {
  const searchParams = useSearchParams()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')

  useEffect(() => {
    loadPosts()
    if (searchParams?.get('action') === 'new') {
      handleAdd()
    }
  }, [searchParams])

  const loadPosts = () => {
    const saved = localStorage.getItem('blogPosts')
    if (saved) {
      setPosts(JSON.parse(saved))
    }
  }

  const savePosts = (newPosts: BlogPost[]) => {
    localStorage.setItem('blogPosts', JSON.stringify(newPosts))
    setPosts(newPosts)
  }

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  const handleAdd = () => {
    setCurrentPost({
      id: Date.now(),
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      categories: [],
      tags: [],
      author: 'Fikzstudio Team',
      publishedAt: new Date().toISOString(),
      status: 'draft'
    })
    setIsEditing(true)
    setImagePreview('')
  }

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post)
    setImagePreview(post.featuredImage || '')
    setIsEditing(true)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result as string
        setImagePreview(base64)
        if (currentPost) {
          setCurrentPost({...currentPost, featuredImage: base64})
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    if (!currentPost) return
    
    const updatedPost = {
      ...currentPost,
      publishedAt: currentPost.status === 'published' ? new Date().toISOString() : currentPost.publishedAt
    }

    const existing = posts.find(p => p.id === currentPost.id)
    if (existing) {
      savePosts(posts.map(p => p.id === currentPost.id ? updatedPost : p))
    } else {
      savePosts([...posts, updatedPost])
    }
    
    setIsEditing(false)
    setCurrentPost(null)
    setImagePreview('')
  }

  const handleDelete = (id: number) => {
    if (confirm('Delete this blog post?')) {
      savePosts(posts.filter(p => p.id !== id))
    }
  }

  if (isEditing && currentPost) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">
              {posts.find(p => p.id === currentPost.id) ? 'Edit' : 'Write New'} Blog Post
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Post Title *</label>
                  <input
                    type="text"
                    value={currentPost.title}
                    onChange={(e) => {
                      const title = e.target.value
                      setCurrentPost({
                        ...currentPost,
                        title,
                        slug: generateSlug(title)
                      })
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="10 Tips for Better Web Design"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Slug (URL)</label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">fikzstudio.com/blog/</span>
                    <input
                      type="text"
                      value={currentPost.slug}
                      onChange={(e) => setCurrentPost({...currentPost, slug: e.target.value})}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="web-design-tips"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Excerpt</label>
                  <textarea
                    value={currentPost.excerpt}
                    onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    rows={3}
                    placeholder="A brief summary of your post..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Content *</label>
                  <textarea
                    value={currentPost.content}
                    onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary font-mono text-sm"
                    rows={15}
                    placeholder="Write your blog post content here... (HTML supported)"
                  />
                  <p className="text-xs text-gray-500 mt-1">You can use HTML tags for formatting</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">📸 Featured Image</h3>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm"
                  />
                  {imagePreview && (
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">📋 Publish</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-2">Status</label>
                      <select
                        value={currentPost.status}
                        onChange={(e) => setCurrentPost({...currentPost, status: e.target.value as any})}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Author</label>
                      <input
                        type="text"
                        value={currentPost.author}
                        onChange={(e) => setCurrentPost({...currentPost, author: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">🏷️ Categories</h3>
                  <input
                    type="text"
                    value={currentPost.categories.join(', ')}
                    onChange={(e) => setCurrentPost({
                      ...currentPost,
                      categories: e.target.value.split(',').map(c => c.trim()).filter(c => c)
                    })}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Tech, Web Design, SEO"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">🔖 Tags</h3>
                  <input
                    type="text"
                    value={currentPost.tags.join(', ')}
                    onChange={(e) => setCurrentPost({
                      ...currentPost,
                      tags: e.target.value.split(',').map(t => t.trim()).filter(t => t)
                    })}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="javascript, react, nextjs"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSave}
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold hover:scale-105 transition"
              >
                {currentPost.status === 'published' ? '🚀 Publish Post' : '💾 Save Draft'}
              </button>
              <button
                onClick={() => {setIsEditing(false); setCurrentPost(null); setImagePreview('')}}
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
          <h1 className="text-4xl font-bold mb-2">Blog Posts</h1>
          <p className="text-gray-600">Manage your blog content</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2"
        >
          <span className="text-xl">✍️</span>
          Write New Post
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-gray-500 text-lg mb-6">No blog posts yet</p>
          <button
            onClick={handleAdd}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Write Your First Post
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Categories</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium">{post.title}</div>
                    <div className="text-sm text-gray-500">/blog/{post.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {post.categories.slice(0, 2).map((cat, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleEdit(post)}
                      className="text-blue-600 hover:text-blue-700 mr-4 text-sm font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
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
