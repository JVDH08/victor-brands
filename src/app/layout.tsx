import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { siteContent } from "@/content";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: [
    "trainer",
    "trainingsacteur",
    "teamcoach",
    "leiderschap",
    "teamontwikkeling",
    "communicatie",
    "managementteam",
    "overheid",
    "Haarlem",
    "Victor Brands",
  ],
  // TODO: terugzetten naar https://victorbrands.nl zodra dat domein naar Vercel
  // wijst. Staat tijdelijk op de vercel.app-URL omdat victorbrands.nl nu nog de
  // oude WordPress-site serveert: met het echte domein hier levert og:image een
  // 404 op en toont LinkedIn geen previewafbeelding bij de gedeelde link.
  // Let op: sitemap.ts en robots.ts noemen victorbrands.nl nog wel expliciet.
  metadataBase: new URL("https://victor-brands.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/",
    siteName: "Victor Brands",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Victor Brands — trainer, trainingsacteur & teamcoach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#14213a]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
