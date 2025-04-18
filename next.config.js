/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    path: '/photography-portfolio',
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  basePath: '/photography-portfolio',
  assetPrefix: '/photography-portfolio/',
};

module.exports = nextConfig; 