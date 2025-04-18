/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/photography-portfolio',
  assetPrefix: '/photography-portfolio/',
  trailingSlash: true,
};

module.exports = nextConfig; 