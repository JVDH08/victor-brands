import type { Metadata } from "next";
import { siteContent } from "@/content";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: `${siteContent.legal.cookies.title} — Victor Brands`,
  description: "Cookiebeleid van Victor Brands.",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return <LegalPage data={siteContent.legal.cookies} />;
}
