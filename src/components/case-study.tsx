"use client";

import { siteContent } from "@/content";
import { Reveal, WordReveal } from "@/components/motion-primitives";

const { caseStudy } = siteContent;

export function CaseStudy() {
  return (
    <section id="referenties" className="relative bg-white px-8 py-28 md:px-[8vw] md:py-36">
      <div className="mb-14 flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-4">
          <Reveal>
            <p className="label">{caseStudy.sectionLabel}</p>
          </Reveal>
          {caseStudy.isPlaceholder && (
            <Reveal>
              <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-[10px] font-semibold tracking-wider text-amber-700 uppercase">
                {caseStudy.placeholderBadge}
              </span>
            </Reveal>
          )}
        </div>
        <WordReveal
          text={`${caseStudy.heading} ${caseStudy.headingAccent}`}
          accentFrom={caseStudy.heading.split(" ").length}
          className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#14305f]"
        />
        <Reveal delay={0.2}>
          <div className="blue-line" />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="overflow-hidden rounded-3xl border border-[rgba(20,48,95,0.08)] bg-[#f6f8fc] shadow-[0_1px_2px_rgba(20,33,58,0.04)]">
          {/* Client header */}
          <div className="flex flex-col gap-1 border-b border-[rgba(20,48,95,0.08)] bg-white px-8 py-7 md:px-10">
            <p
              className="text-2xl font-bold text-[#14305f]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {caseStudy.client}
            </p>
            <p className="text-sm text-[#5a6478]">{caseStudy.sector}</p>
          </div>

          {/* Situation / approach / result */}
          <div className="grid gap-px bg-[rgba(20,48,95,0.06)] md:grid-cols-3">
            {caseStudy.blocks.map((block) => (
              <div key={block.label} className="bg-[#f6f8fc] p-8 md:p-10">
                <p className="label mb-3">{block.label}</p>
                <p className="text-sm leading-relaxed text-[#5a6478]">{block.body}</p>
              </div>
            ))}
          </div>

          {/* Closing quote */}
          <div className="border-t border-[rgba(20,48,95,0.08)] bg-white px-8 py-9 md:px-10">
            <blockquote className="border-l-[3px] border-[#2563eb] pl-6">
              <p
                className="text-xl italic leading-relaxed text-[#14305f] md:text-2xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                &ldquo;{caseStudy.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm not-italic">
                <span className="font-semibold text-[#14305f]">{caseStudy.quoteName}</span>
                <span className="text-[#5a6478]"> · {caseStudy.quoteRole}</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
