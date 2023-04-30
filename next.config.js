/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdntv.techflash.net"]
  }
}

module.exports = nextConfig
