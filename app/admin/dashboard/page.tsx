'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    blogPosts: 0,
    media: 0,
    views: 0
  })

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('projects') || '[]')
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
    const media = JSON.parse(localStorage.getItem('media') || '[]')
    const showcase = JSON.parse(localStorage.getItem('showcase') || '[]')
    
    setStats({
      projects: projects.length,
      blogPosts: blogPosts.length,
      media: media.length,
      views: showcase.length
    })
  }, [])

  const quickActions = [
    { label: 'Add Project', href: '/admin/projects?action=new', icon: '➕', color: 'from-blue-500 to-cyan-500' },
    { label: 'Write Post', href: '/admin/blog?action=new', icon: '✍️', color: 'from-purple-500 to-pink-500' },
    { label: 'Upload Media', href: '/admin/media', icon: '📤', color: 'from-green-500 to-emerald-500' },
    { label: 'Settings', href: '/admin/settings', icon: '⚙️', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome Back! 👋</h1>
        <p className="text-gray-600">Here's what's happening with your website</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
              🚀
            </div>
            <span className="text-sm text-green-600 font-semibold">+12%</span>
          </div>
          <div className="text-3xl font-bold mb-1">{stats.projects}</div>
          <div className="text-gray-600 text-sm">Total Projects</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
              📝
            </div>
            <span className="text-sm text-green-600 font-semibold">+8%</span>
          </div>
          <div className="text-3xl font-bold mb-1">{stats.blogPosts}</div>
          <div className="text-gray-600 text-sm">Blog Posts</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
              🖼️
            </div>
            <span className="text-sm text-green-600 font-semibold">+15%</span>
          </div>
          <div className="text-3xl font-bold mb-1">{stats.media}</div>
          <div className="text-gray-600 text-sm">Media Files</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
              🎨
            </div>
            <span className="text-sm text-green-600 font-semibold">+23%</span>
          </div>
          <div className="text-3xl font-bold mb-1">{stats.views}</div>
          <div className="text-gray-600 text-sm">Showcase Items</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`bg-gradient-to-br ${action.color} p-6 rounded-2xl text-white hover:scale-105 transition shadow-lg`}
            >
              <div className="text-4xl mb-3">{action.icon}</div>
              <div className="font-semibold">{action.label}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              🚀
            </div>
            <div className="flex-1">
              <div className="font-semibold">New project added</div>
              <div className="text-sm text-gray-600">2 hours ago</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              📝
            </div>
            <div className="flex-1">
              <div className="font-semibold">Blog post published</div>
              <div className="text-sm text-gray-600">5 hours ago</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              🖼️
            </div>
            <div className="flex-1">
              <div className="font-semibold">3 images uploaded</div>
              <div className="text-sm text-gray-600">1 day ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
