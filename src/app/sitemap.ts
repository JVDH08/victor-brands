import type { MetadataRoute } from "next";

// TODO: terugzetten naar https://victorbrands.nl zodra dat domein naar Vercel
// wijst — zie de TODO bovenaan README.md. Staat tijdelijk op de vercel.app-URL
// zodat de sitemap URL's noemt die vandaag echt bestaan.
const baseUrl = "https://victor-brands.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
