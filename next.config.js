/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/photography-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/photography-portfolio/' : '',
};

module.exports = nextConfig; 