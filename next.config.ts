import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.hitmcdn.com",
        pathname: "**", // разрешает все пути
      },
    ],
  },
};

export default nextConfig;
