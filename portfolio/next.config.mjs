/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    // Add other experimental features if needed, but not useLightningcss
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
