/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/photography-portfolio' : '',
  trailingSlash: true,
};

module.exports = nextConfig; 