import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  objectFit = 'cover'
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Handle base64 images from localStorage
  const isBase64 = src.startsWith('data:')
  
  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-4xl">🖼️</span>
      </div>
    )
  }

  if (isBase64) {
    // For base64 images, use regular img tag
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
        style={{ objectFit }}
      />
    )
  }

  // For external URLs, use Next.js Image component
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} ${isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'} transition-all duration-300`}
        style={{ objectFit }}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={`${className} ${isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'} transition-all duration-300`}
      style={{ objectFit }}
      priority={priority}
      onLoadingComplete={() => setIsLoading(false)}
      onError={() => setError(true)}
    />
  )
}
