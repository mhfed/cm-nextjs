/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
}

export default nextConfig;
