'use client'

import { useState, useEffect } from 'react'
import { changePassword } from '@/lib/auth'

export default function SettingsPage() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState({ type: '', text: '' })
  const [logo, setLogo] = useState('')
  const [favicon, setFavicon] = useState('')

  useEffect(() => {
    // Load saved logo and favicon
    const savedLogo = localStorage.getItem('siteLogo')
    const savedFavicon = localStorage.getItem('siteFavicon')
    if (savedLogo) setLogo(savedLogo)
    if (savedFavicon) setFavicon(savedFavicon)
  }, [])

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    if (newPassword.length < 8) {
      setMessage({ type: 'error', text: 'Password must be at least 8 characters' })
      return
    }

    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' })
      return
    }

    if (changePassword(oldPassword, newPassword)) {
      setMessage({ type: 'success', text: 'Password changed successfully!' })
      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } else {
      setMessage({ type: 'error', text: 'Current password is incorrect' })
    }
  }

  const handleExportData = () => {
    const data = {
      projects: JSON.parse(localStorage.getItem('projects') || '[]'),
      blogPosts: JSON.parse(localStorage.getItem('blogPosts') || '[]'),
      media: JSON.parse(localStorage.getItem('media') || '[]'),
      exportDate: new Date().toISOString()
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `fikzstudio-backup-${Date.now()}.json`
    a.click()
  }

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string)
        if (data.projects) localStorage.setItem('projects', JSON.stringify(data.projects))
        if (data.blogPosts) localStorage.setItem('blogPosts', JSON.stringify(data.blogPosts))
        if (data.media) localStorage.setItem('media', JSON.stringify(data.media))
        setMessage({ type: 'success', text: 'Data imported successfully!' })
        setTimeout(() => window.location.reload(), 1500)
      } catch (error) {
        setMessage({ type: 'error', text: 'Invalid backup file' })
      }
    }
    reader.readAsText(file)
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please upload an image file' })
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const result = event.target?.result as string
      setLogo(result)
      localStorage.setItem('siteLogo', result)
      setMessage({ type: 'success', text: 'Logo uploaded successfully!' })
    }
    reader.readAsDataURL(file)
  }

  const handleFaviconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please upload an image file' })
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const result = event.target?.result as string
      setFavicon(result)
      localStorage.setItem('siteFavicon', result)
      setMessage({ type: 'success', text: 'Favicon uploaded successfully!' })
      
      // Update favicon in real-time
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link')
      link.type = 'image/x-icon'
      link.rel = 'shortcut icon'
      link.href = result
      document.getElementsByTagName('head')[0].appendChild(link)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveLogo = () => {
    setLogo('')
    localStorage.removeItem('siteLogo')
    setMessage({ type: 'success', text: 'Logo removed successfully!' })
  }

  const handleRemoveFavicon = () => {
    setFavicon('')
    localStorage.removeItem('siteFavicon')
    setMessage({ type: 'success', text: 'Favicon removed successfully!' })
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-gray-600 mb-8">Manage your CMS settings and security</p>

        {/* Logo & Favicon */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>🎨</span> Logo & Favicon
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Logo Upload */}
            <div>
              <h3 className="font-semibold mb-2">Site Logo</h3>
              <p className="text-sm text-gray-600 mb-4">Upload your logo (PNG, JPG, SVG recommended)</p>
              
              {logo && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Current Logo:</span>
                    <button
                      onClick={handleRemoveLogo}
                      className="text-red-500 hover:text-red-700 text-sm font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                  <img 
                    src={logo} 
                    alt="Site Logo" 
                    className="max-h-20 w-auto mx-auto"
                  />
                </div>
              )}
              
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              />
              <p className="text-xs text-gray-500 mt-2">
                Recommended: Square or horizontal logo, at least 200x200px
              </p>
            </div>

            {/* Favicon Upload */}
            <div>
              <h3 className="font-semibold mb-2">Favicon</h3>
              <p className="text-sm text-gray-600 mb-4">Upload your favicon (square image, 32x32px or larger)</p>
              
              {favicon && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Current Favicon:</span>
                    <button
                      onClick={handleRemoveFavicon}
                      className="text-red-500 hover:text-red-700 text-sm font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                  <img 
                    src={favicon} 
                    alt="Favicon" 
                    className="w-8 h-8 mx-auto"
                  />
                </div>
              )}
              
              <input
                type="file"
                accept="image/*"
                onChange={handleFaviconUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary-50 file:text-secondary-700 hover:file:bg-secondary-100"
              />
              <p className="text-xs text-gray-500 mt-2">
                Recommended: Square image, 32x32px, 64x64px, or 512x512px
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">ℹ️</span>
              <div className="text-sm text-blue-900">
                <div className="font-semibold mb-1">How to use:</div>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Upload your logo and favicon here</li>
                  <li>They will be stored in your browser</li>
                  <li>The navigation will automatically use your uploaded logo</li>
                  <li>Refresh the page to see changes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>🔐</span> Change Password
          </h2>
          <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-semibold mb-2">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                required
                minLength={8}
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            {message.text && (
              <div className={`px-4 py-3 rounded-lg text-sm ${
                message.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-700' 
                  : 'bg-red-50 border border-red-200 text-red-700'
              }`}>
                {message.text}
              </div>
            )}
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Update Password
            </button>
          </form>
        </div>

        {/* Backup & Restore */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>💾</span> Backup & Restore
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Export Data</h3>
              <p className="text-sm text-gray-600 mb-4">Download all your content as a backup file</p>
              <button
                onClick={handleExportData}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                📥 Export All Data
              </button>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Import Data</h3>
              <p className="text-sm text-gray-600 mb-4">Restore from a backup file</p>
              <input
                type="file"
                accept=".json"
                onChange={handleImportData}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              />
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🛡️</span> Security Information
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <div>
                <div className="font-semibold">Password Encryption</div>
                <div className="text-gray-600">Your password is hashed and stored securely</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <div>
                <div className="font-semibold">Rate Limiting</div>
                <div className="text-gray-600">Maximum 5 login attempts per 15 minutes</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <div>
                <div className="font-semibold">Session Management</div>
                <div className="text-gray-600">Automatic logout on browser close</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <div>
                <div className="font-semibold">Local Storage</div>
                <div className="text-gray-600">All data stored locally in your browser</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
