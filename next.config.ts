import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // Disable image optimization for static export
  basePath: process.env.NODE_ENV === 'production' ? `/${process.env.REPO_NAME}` : '',
};

export default nextConfig;
