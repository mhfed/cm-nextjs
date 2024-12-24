/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.coolmate.me',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'mcdn.coolmate.me',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'media3.coolmate.me',
        pathname: '/cdn-cgi/**',
      },
    ],
    minimumCacheTTL: 60,
  },
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  experimental: {
    optimizeCss: true,
    turbo: true,
  },
  crossOrigin: 'anonymous',
  devIndicators: {
    buildActivityPosition: 'bottom-right', // if not using, set to false
  },
  // env: {
  //   NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  // },
  eslint: {
    // Warning: cho phép build thành công ngay cả khi có lỗi eslint
    ignoreDuringBuilds: true,
  },
  generateBuildId: async () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    return `${year}_${month}_${day}_${hours}_${minutes}_${seconds}`
  },
}

export default nextConfig
