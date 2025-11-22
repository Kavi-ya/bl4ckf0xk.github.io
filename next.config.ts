import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Note: headers() are not supported in 'output: export' mode for Next.js
  // We will rely on GitHub Pages or a _headers file if needed, but for purely static export
  // we can't use next.config.js headers.
  // However, we can ensure strict mode is on.
  reactStrictMode: true,
};

export default nextConfig;
