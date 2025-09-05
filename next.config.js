/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',   // your repo name
  assetPrefix: '/bl4ckf0xk.github.io/',
  trailingSlash: true,
};

module.exports = nextConfig;