import Link from "next/link";
import { siteContent } from "@/content";

const { notFound } = siteContent;

/* 404. Achtergrond, gloed en tralies komen één op één uit de boeksectie
   (book.tsx), alleen zonder de scroll-animaties: hier valt niets te scrollen. */
export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#0e2244] px-8 py-28 text-white md:px-[8vw]">
      {/* Deep gradient base */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#0a1a36_0%,#0e2244_50%,#143a6b_100%)]" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_80%_45%,rgba(59,130,246,0.22),transparent)]" />

      {/* Subtle vertical bars (prison motif, abstract) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[8%] opacity-[0.07]">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mx-5 h-full w-px bg-white" />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl">
        <p className="label mb-5 text-[#7da7f0]">{notFound.label}</p>
        <h1
          className="mb-10 text-[clamp(3rem,7vw,6rem)] font-bold leading-[1] tracking-tight text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="block">{notFound.title}</span>
          <span className="block italic text-[#5b9bf5]">{notFound.titleAccent}</span>
        </h1>
        <div className="mb-10 h-0.5 w-11 rounded bg-[#3b82f6]" />

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#cdddf7]">{notFound.body}</p>

        <Link href="/" className="btn-blue">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M7 2L2 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {notFound.cta}
        </Link>
      </div>
    </main>
  );
}
