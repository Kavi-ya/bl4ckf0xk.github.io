// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: { unoptimized: true },
//   basePath: '', // Empty for root-level GitHub Pages
//   assetPrefix: '/bl4ckf0xk.github.io/', // Ensure assets use relative paths
//   trailingSlash: true, // Optional: Adds trailing slashes to help with routing
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '', // Root-level GitHub Pages
  assetPrefix: './', // Relative asset prefix
  distDir: 'out', // Explicit output directory
  // Ensure static export compatibility
  experimental: {
    serverComponents: false,
    staticExport: true, // Explicitly enable static export
  },
};

module.exports = nextConfig;