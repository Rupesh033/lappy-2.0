import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dotpe.in",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.myg.in",
      },
      {
        protocol: "https",
        hostname: "myg.in",
      },
    ],
  },
};

export default nextConfig;
