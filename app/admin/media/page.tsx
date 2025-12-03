'use client'

import { useState, useEffect } from 'react'

interface MediaFile {
  id: number
  name: string
  url: string
  type: string
  size: number
  uploadedAt: string
}

export default function MediaManager() {
  const [media, setMedia] = useState<MediaFile[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState('')

  useEffect(() => {
    loadMedia()
  }, [])

  const loadMedia = () => {
    const saved = localStorage.getItem('media')
    if (saved) {
      setMedia(JSON.parse(saved))
    }
  }

  const saveMedia = (newMedia: MediaFile[]) => {
    localStorage.setItem('media', JSON.stringify(newMedia))
    setMedia(newMedia)
  }

  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          let width = img.width
          let height = img.height
          
          // Resize if image is too large (max 1200px width)
          const maxWidth = 1200
          if (width > maxWidth) {
            height = (height * maxWidth) / width
            width = maxWidth
          }
          
          canvas.width = width
          canvas.height = height
          
          const ctx = canvas.getContext('2d')
          if (!ctx) {
            reject('Canvas context not available')
            return
          }
          
          ctx.drawImage(img, 0, 0, width, height)
          
          // Compress to JPEG with 0.8 quality
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8)
          resolve(compressedDataUrl)
        }
        img.onerror = reject
        img.src = e.target?.result as string
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    setUploading(true)
    setUploadProgress('')

    try {
      const fileArray = Array.from(files)
      
      for (let i = 0; i < fileArray.length; i++) {
        const file = fileArray[i]
        setUploadProgress(`Processing ${i + 1} of ${fileArray.length}: ${file.name}`)
        
        // Check file size (warn if > 5MB)
        if (file.size > 5 * 1024 * 1024) {
          if (!confirm(`${file.name} is large (${(file.size / (1024 * 1024)).toFixed(1)}MB). This may take a moment to compress. Continue?`)) {
            continue
          }
        }
        
        // Compress image
        const compressedUrl = await compressImage(file)
        
        const newFile: MediaFile = {
          id: Date.now() + Math.random(),
          name: file.name,
          url: compressedUrl,
          type: file.type,
          size: compressedUrl.length, // Size of compressed base64
          uploadedAt: new Date().toISOString()
        }
        
        const currentMedia = JSON.parse(localStorage.getItem('media') || '[]')
        saveMedia([...currentMedia, newFile])
      }
      
      setUploading(false)
      setUploadProgress('')
      alert(`✅ ${fileArray.length} image(s) uploaded successfully!`)
    } catch (error) {
      console.error('Upload error:', error)
      setUploading(false)
      setUploadProgress('')
      alert('❌ Error uploading images. Please try smaller images or fewer files at once.')
    }
  }

  const handleDelete = (id: number) => {
    if (confirm('Delete this media file?')) {
      saveMedia(media.filter(m => m.id !== id))
    }
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    alert('URL copied to clipboard!')
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Media Library</h1>
          <p className="text-gray-600">Upload and manage your images and files</p>
        </div>
        <label className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition cursor-pointer flex items-center gap-2">
          <span className="text-xl">📤</span>
          Upload Files
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>

      {uploading && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-6 py-4 rounded-lg mb-6">
          <div className="flex items-center gap-3">
            <div className="animate-spin text-2xl">⏳</div>
            <div>
              <div className="font-semibold">Compressing and uploading...</div>
              {uploadProgress && <div className="text-sm mt-1">{uploadProgress}</div>}
            </div>
          </div>
        </div>
      )}

      {media.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl">
          <div className="text-6xl mb-4">🖼️</div>
          <p className="text-gray-500 text-lg mb-6">No media files yet</p>
          <label className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition cursor-pointer inline-block">
            Upload Your First File
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {media.map((file) => (
            <div key={file.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              {/* Image Preview */}
              <div className="relative h-48 bg-gray-100">
                {file.type.startsWith('image/') ? (
                  <img
                    src={file.url}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    📄
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => copyToClipboard(file.url)}
                    className="bg-white text-gray-900 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100"
                    title="Copy URL"
                  >
                    📋 Copy
                  </button>
                  <button
                    onClick={() => handleDelete(file.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-red-600"
                    title="Delete"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              {/* File Info */}
              <div className="p-4">
                <div className="font-medium text-sm mb-1 truncate" title={file.name}>
                  {file.name}
                </div>
                <div className="text-xs text-gray-500">
                  {formatFileSize(file.size)}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(file.uploadedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Usage Instructions */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-semibold text-blue-900 mb-3">💡 How to use uploaded images:</h3>
        <ol className="space-y-2 text-sm text-blue-800">
          <li>1. Upload your images using the "Upload Files" button</li>
          <li>2. Images are automatically compressed for faster loading</li>
          <li>3. Hover over an image and click "Copy" to copy its URL</li>
          <li>4. Use the copied URL in your projects, blog posts, or pages</li>
          <li>5. Images are stored locally and will appear on your website</li>
        </ol>
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-800">
            <strong>💡 Tip:</strong> For best performance, upload images under 2MB. Large images will be automatically compressed to max 1200px width.
          </p>
        </div>
      </div>
    </div>
  )
}
