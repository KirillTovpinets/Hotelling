/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: 'http://localhost:3001',
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['tailwindui.com'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
