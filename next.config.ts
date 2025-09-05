import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // Disable image optimization for static export
  basePath: '',
};

export default nextConfig;
