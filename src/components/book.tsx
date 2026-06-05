"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteContent } from "@/content";
import { Reveal, ease } from "@/components/motion-primitives";
import { BookOrderModal } from "@/components/book-order-modal";

const { book } = siteContent;

export function Book() {
  const [orderOpen, setOrderOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const titleX = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section
      ref={sectionRef}
      id="boek"
      className="relative overflow-hidden bg-[#0e2244] px-8 py-28 text-white md:px-[8vw] md:py-40"
    >
      {/* Deep gradient base */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#0a1a36_0%,#0e2244_50%,#143a6b_100%)]" />

      {/* Parallax blue glow */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_80%_45%,rgba(59,130,246,0.22),transparent)]"
      />

      {/* Subtle vertical bars (prison motif, abstract) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[8%] opacity-[0.07]">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mx-5 h-full w-px bg-white" />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl">
        <Reveal>
          <p className="label mb-5 text-[#7da7f0]">{book.sectionLabel}</p>
          <motion.div style={{ x: titleX }}>
            <h2 className="mb-2 text-[clamp(3rem,7vw,6rem)] font-bold leading-[1] tracking-tight text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              {book.title}
            </h2>
            <h2 className="mb-10 text-[clamp(3rem,7vw,6rem)] font-bold italic leading-[1] tracking-tight text-[#5b9bf5]" style={{ fontFamily: "var(--font-playfair)" }}>
              {book.titleAccent}
            </h2>
          </motion.div>
          <div className="mb-10 h-0.5 w-11 rounded bg-[#3b82f6]" />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="mb-6 text-xl italic leading-relaxed text-[#cdddf7]" style={{ fontFamily: "var(--font-cormorant)" }}>
              &ldquo;{book.pullQuote}&rdquo;
            </p>
            <p className="mb-5 text-sm leading-relaxed text-[#9fb6d9]">{book.body1}</p>
            <p className="text-sm leading-relaxed text-[#9fb6d9]">{book.body2}</p>
            <div className="mt-8">
              <button
                onClick={() => setOrderOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0e2244] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eff4ff] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]"
              >
                {book.orderCta}
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                  <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-5">
              <p className="label mb-2 text-[#7da7f0]">Beluister het verhaal</p>
              {book.podcasts.map((podcast) => (
                <a
                  key={podcast.title}
                  href={podcast.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1DB954]/15 text-[#1DB954]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-white transition-colors group-hover:text-[#7da7f0]">{podcast.title}</p>
                    <p className="text-xs text-[#9fb6d9]">{podcast.desc}</p>
                  </div>
                  <svg viewBox="0 0 16 16" fill="none" className="ml-auto mt-1 h-4 w-4 shrink-0 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
                <p className="text-xs leading-relaxed text-[#9fb6d9]">{book.volkskrantNote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <BookOrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </section>
  );
}
