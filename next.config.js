/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/photography-portfolio',
  assetPrefix: '/photography-portfolio/',
};

module.exports = nextConfig; 