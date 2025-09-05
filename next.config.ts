/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/https://bl4ckf0xk.github.io', // Empty for root-level GitHub Pages
  assetPrefix: '/https://bl4ckf0xk.github.io', // Ensure assets use relative paths
  trailingSlash: true, // Optional: Adds trailing slashes to help with routing
};

module.exports = nextConfig;