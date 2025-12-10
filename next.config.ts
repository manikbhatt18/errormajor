import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Enable static export
  images: {
    unoptimized: true,     // Required for next/image in static export
  },
};

export default nextConfig;
