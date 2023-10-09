/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: 'http://localhost:3001',
  },
  images: {
    domains: ['tailwindui.com'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
