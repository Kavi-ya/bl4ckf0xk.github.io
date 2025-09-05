/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '', // Empty for root-level GitHub Pages
  assetPrefix: '', // Ensure assets use relative paths
  trailingSlash: true, // Optional: Adds trailing slashes to help with routing
};

module.exports = nextConfig;