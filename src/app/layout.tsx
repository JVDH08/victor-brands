import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

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
  title: "Victor Brands — Trainer, Trainingsacteur & Coach",
  description:
    "Victor Brands: ex-KLM-manager, stand-up comedian, acteur en veelgevraagd trainer voor o.a. Heineken en Rijkswaterstaat. Trainingen op maat met veiligheid, interactiviteit en humor als kernwaarden.",
  keywords: ["trainer", "trainingsacteur", "coach", "Amsterdam", "Heineken", "Rijkswaterstaat", "Victor Brands"],
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
