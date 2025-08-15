import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['api.builder.io', 'cdn.builder.io'],
  },
};

module.exports = nextConfig;

export default nextConfig;
