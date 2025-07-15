/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    //<img src="images/myphoto.jpg" alt="My Photo" width="200" height="200">

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
