'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import { getPostBySlug, getRelatedPosts, type BlogPost } from '@/lib/cms'

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    if (params?.slug) {
      const foundPost = getPostBySlug(params.slug as string)
      setPost(foundPost)
      
      if (foundPost) {
        setRelatedPosts(getRelatedPosts(foundPost, 3))
      }
    }
  }, [params])

  if (!post) {
    return (
      <>
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📝</div>
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <a href="/blog" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition inline-block">
              Back to Blog
            </a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold mb-6">{post.title}</h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👤</span>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.featuredImage && (
          <section className="px-6 -mt-10">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <article className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Excerpt */}
            {post.excerpt && (
              <div className="text-xl text-gray-700 mb-8 pb-8 border-b border-gray-200 italic">
                {post.excerpt}
              </div>
            )}

            {/* Main Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-3">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Related Posts</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary via-purple-600 to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help your business succeed online
            </p>
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-2xl inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
