'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import { getPublishedPosts, getAllCategories, type BlogPost } from '@/lib/cms'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    // Load posts and categories from CMS
    setPosts(getPublishedPosts())
    setCategories(getAllCategories())
  }, [])

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.categories.includes(selectedCategory))

  return (
    <>
      <Head>
        <title>Blog - Web Design Tips & Digital Marketing Insights | Fikzstudio</title>
        <meta name="description" content="Read our latest articles on web design, SEO, digital marketing, and web development. Expert tips and insights to help your business grow online." />
        <meta name="keywords" content="web design blog, digital marketing tips, SEO guide, web development articles, Malaysia web design" />
      </Head>
      <main className="min-h-screen">
        <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Digital marketing tips, web design insights, and industry news
            </p>
          </div>
        </section>

        {/* Category Filter */}
        {categories.length > 0 && (
          <section className="py-8 px-6 bg-white border-b">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedCategory === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Posts
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-gray-500 text-lg">
                  {selectedCategory === 'all' 
                    ? 'No blog posts yet. Check back soon!' 
                    : `No posts in "${selectedCategory}" category.`}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
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
