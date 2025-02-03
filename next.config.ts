import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.nflxext.com", "image.tmdb.org"], // Add any other external domains if needed
  },
};

export default nextConfig;
