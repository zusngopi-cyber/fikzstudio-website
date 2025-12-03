/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  generateBuildId: async () => {
    // Force new build ID to bypass Vercel cache
    return `build-${Date.now()}`
  },
}

module.exports = nextConfig
