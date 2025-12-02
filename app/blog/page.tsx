import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog - Fikzstudio',
  description: 'Digital marketing tips, web design insights, and industry news',
}

export default function BlogPage() {
  // Placeholder data - will be replaced with WordPress API data
  const posts = [
    {
      id: 1,
      title: '10 Web Design Trends for 2024',
      excerpt: 'Discover the latest trends shaping modern web design...',
      date: '2024-01-15',
      category: 'Web Design'
    },
    {
      id: 2,
      title: 'SEO Best Practices for Small Businesses',
      excerpt: 'Learn how to improve your search rankings with these proven strategies...',
      date: '2024-01-10',
      category: 'SEO'
    },
    {
      id: 3,
      title: 'Why Your Business Needs a Website',
      excerpt: 'In today\'s digital age, having a website is essential for business success...',
      date: '2024-01-05',
      category: 'Business'
    }
  ]

  return (
    <>
      <main className="min-h-screen">
        <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Digital marketing tips, web design insights, and industry news
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-primary hover:underline font-semibold">
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
