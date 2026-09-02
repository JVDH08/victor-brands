import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Content Security Policy. Next.js gebruikt inline scripts, Framer Motion zet
// inline styles, en next/font host de fonts zelf — dus 'self' + 'unsafe-inline'
// is het minimum dat werkt. 'unsafe-eval' is alleen nodig voor de dev-server.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://d8j0ntlcm91z4.cloudfront.net https://victorbrands.nl https://www.victorbrands.nl https://www.comedytrain.nl",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Voorkomt dat de site in een iframe op een andere site wordt geladen (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Browser mag content-type niet raden.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Stuur geen volledige URL's mee naar externe sites (Spotify-links e.d.).
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Camera/microfoon/locatie uit — de site gebruikt ze niet.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  // Dwing HTTPS af voor 1 jaar (Vercel serveert altijd via HTTPS).
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.victorbrands.nl" },
      { protocol: "https", hostname: "victorbrands.nl" },
      { protocol: "https", hostname: "www.comedytrain.nl" },
      { protocol: "https", hostname: "d8j0ntlcm91z4.cloudfront.net" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
