/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [25, 50, 75, 80, 85, 90, 100],
    remotePatterns: [],
  },
}

export default nextConfig
