import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.victorbrands.nl" },
      { protocol: "https", hostname: "victorbrands.nl" },
      { protocol: "https", hostname: "www.comedytrain.nl" },
      { protocol: "https", hostname: "d8j0ntlcm91z4.cloudfront.net" },
    ],
  },
};

export default nextConfig;
