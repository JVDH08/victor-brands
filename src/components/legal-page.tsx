import Link from "next/link";
import { siteContent } from "@/content";
import { SiteFooter } from "@/components/site-footer";

const { legal, nav, contact } = siteContent;

type LegalContent = {
  title: string;
  updated: string;
  disclaimer?: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export function LegalPage({ data }: { data: LegalContent }) {
  return (
    <>
      {/* Minimal header — no in-page anchors here, so no dead links */}
      <header className="sticky top-0 z-50 border-b border-[rgba(20,48,95,0.08)] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14305f] text-base font-black tracking-tighter text-white transition-colors group-hover:bg-[#2563eb]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {nav.logo}
            </span>
            <span className="hidden text-[11px] font-semibold tracking-[0.22em] text-[#14305f] uppercase sm:block">
              {nav.logoSub}
            </span>
          </Link>
          <Link href="/#contact" className="btn-blue py-2.5 px-5 text-[11px]">
            {legal.contactCta}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2563eb] uppercase transition-colors hover:text-[#14305f]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M7 2L2 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {legal.backLabel}
        </Link>

        <h1
          className="text-[clamp(2.4rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-[#14305f]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {data.title}
        </h1>
        <p className="mt-3 text-xs tracking-widest text-[#9aa3b5] uppercase">{data.updated}</p>

        {/* Concept-disclaimer — alleen zichtbaar zolang `disclaimer` is ingevuld */}
        {data.disclaimer && (
          <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-800">
            {data.disclaimer}
          </div>
        )}

        <p className="mt-8 leading-relaxed text-[#5a6478]">{data.intro}</p>

        <div className="mt-12 flex flex-col gap-10">
          {data.sections.map((section) => (
            <div key={section.heading}>
              <h2
                className="mb-3 text-xl font-bold text-[#14305f]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {section.heading}
              </h2>
              <p className="leading-relaxed text-[#5a6478]">{section.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-[rgba(20,48,95,0.1)] pt-8 text-sm text-[#5a6478]">
          Vragen? Mail naar{" "}
          <a href={`mailto:${contact.email}`} className="font-semibold text-[#2563eb] hover:underline">
            {contact.email}
          </a>
          .
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
