'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (!auth && pathname !== '/admin') {
      router.push('/admin')
    } else {
      setIsAuth(true)
    }
  }, [pathname, router])

  if (pathname === '/admin') {
    return <>{children}</>
  }

  if (!isAuth) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin')
  }

  const menuItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/admin/pages', label: 'Pages', icon: '📄' },
    { href: '/admin/projects', label: 'Projects', icon: '🚀' },
    { href: '/admin/blog', label: 'Blog Posts', icon: '📝' },
    { href: '/admin/showcase', label: 'Showcase', icon: '🎨' },
    { href: '/admin/snippets', label: 'Code Snippets', icon: '💻' },
    { href: '/admin/media', label: 'Media', icon: '🖼️' },
    { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-900 to-purple-900 text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold">Fikzstudio CMS</h1>
          <p className="text-sm text-gray-300 mt-1">Content Management</p>
        </div>
        
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                pathname === item.href
                  ? 'bg-white/20 font-semibold'
                  : 'hover:bg-white/10'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition"
          >
            <span className="text-xl">🚪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
