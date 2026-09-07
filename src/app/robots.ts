import type { MetadataRoute } from "next";

// TODO: terugzetten naar https://victorbrands.nl zodra dat domein naar Vercel
// wijst — zie de TODO bovenaan README.md. Staat tijdelijk op de vercel.app-URL
// omdat de sitemap op het echte domein nu nog een 404 geeft.
const baseUrl = "https://victor-brands.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
