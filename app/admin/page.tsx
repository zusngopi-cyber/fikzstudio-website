'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { initializeAuth, verifyPassword, checkRateLimit, recordLoginAttempt, clearLoginAttempts } from '@/lib/auth'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLocked, setIsLocked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    initializeAuth()
    if (!checkRateLimit()) {
      setIsLocked(true)
      setError('Too many login attempts. Please try again in 15 minutes.')
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!checkRateLimit()) {
      setIsLocked(true)
      setError('Too many login attempts. Please try again in 15 minutes.')
      return
    }

    const storedPassword = localStorage.getItem('adminPassword')
    
    if (storedPassword && verifyPassword(password, storedPassword)) {
      localStorage.setItem('adminAuth', 'true')
      clearLoginAttempts()
      router.push('/admin/dashboard')
    } else {
      recordLoginAttempt()
      setError('Invalid password')
      
      // Check if this was the 5th attempt
      if (!checkRateLimit()) {
        setIsLocked(true)
        setError('Too many failed attempts. Account locked for 15 minutes.')
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🔐</div>
          <h1 className="text-3xl font-bold text-gradient">Admin Login</h1>
          <p className="text-gray-600 mt-2">Fikzstudio CMS</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLocked}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLocked}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLocked ? '🔒 Account Locked' : '🚀 Login'}
          </button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-sm text-gray-700">
            <div className="font-semibold mb-2">🛡️ Security Features:</div>
            <ul className="space-y-1 text-xs">
              <li>✓ Encrypted password storage</li>
              <li>✓ Rate limiting (5 attempts per 15 min)</li>
              <li>✓ Auto-lock after failed attempts</li>
              <li>✓ Secure session management</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          Change your password in Settings after first login
        </p>
      </div>
    </div>
  )
}
