/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any experimental useLightningcss option
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
