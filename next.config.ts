import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export: portable to Cloudflare Pages / GitHub Pages / any
  // static host. No server code, no env vars required.
  output: "export",
  images: {
    // next/image without a loader host: keep layout/CLS benefits, ship
    // plain files so the static export stays host-independent.
    unoptimized: true,
  },
};

export default nextConfig;
