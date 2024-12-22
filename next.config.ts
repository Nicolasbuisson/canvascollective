import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/canvascollective',
  images: {
    unoptimized: true
},
  reactStrictMode: true
};

export default nextConfig;
