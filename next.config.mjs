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
}

export default nextConfig;
