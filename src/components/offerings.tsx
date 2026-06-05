"use client";

import { siteContent } from "@/content";
import { Reveal, WordReveal, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { motion } from "framer-motion";

const { offerings } = siteContent;

export function Offerings() {
  return (
    <section id="aanbod" className="relative bg-[#f6f8fc] px-8 py-28 md:px-[8vw] md:py-36">
      <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="label mb-4">{offerings.sectionLabel}</p>
          </Reveal>
          <WordReveal
            text={`${offerings.heading} ${offerings.headingAccent}`}
            accentFrom={offerings.heading.split(" ").length}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#14305f]"
          />
          <Reveal delay={0.2}>
            <div className="blue-line mt-6" />
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-sm leading-relaxed text-[#5a6478] md:text-right">{offerings.intro}</p>
        </Reveal>
      </div>

      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.items.map((item) => (
          <StaggerItem key={item.num}>
            <motion.div
              whileHover={{ y: -6 }}
              className="card group h-full rounded-2xl p-7"
            >
              <span
                className="mb-4 block text-xs font-bold tracking-[0.2em] text-[rgba(37,99,235,0.4)]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.num}
              </span>
              <h3
                className="mb-3 text-lg font-bold leading-snug text-[#14305f] transition-colors duration-300 group-hover:text-[#2563eb]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#5a6478]">{item.desc}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-[#5a6478]">{offerings.ctaIntro}</p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-blue shrink-0"
          >
            {offerings.cta}
          </button>
        </div>
      </Reveal>
    </section>
  );
}
