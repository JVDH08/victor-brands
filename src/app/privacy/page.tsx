import type { Metadata } from "next";
import { siteContent } from "@/content";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: `${siteContent.legal.privacy.title} — Victor Brands`,
  description: "Privacyverklaring van Victor Brands.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return <LegalPage data={siteContent.legal.privacy} />;
}
