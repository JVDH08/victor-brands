"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/content";
import { Reveal, WordReveal, ease } from "@/components/motion-primitives";

const { methods, images } = siteContent;

type ImageKey = keyof typeof images;

function QuadrantGrid({
  quadrants,
  title,
  subtitle,
  variant = "letter",
}: {
  quadrants: typeof methods.disc.quadrants;
  title: string;
  subtitle: string;
  // "letter" = DISC (D/I/S/C), "dot" = Insights (gevulde kleurcirkel)
  variant?: "letter" | "dot";
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
    >
      <p className="label mb-3">{subtitle}</p>
      <h3 className="mb-8 text-2xl font-bold text-[#14305f] md:text-3xl" style={{ fontFamily: "var(--font-playfair)" }}>
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {quadrants.map((q) => (
          <motion.div
            key={q.key}
            onMouseEnter={() => setHovered(q.key)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ y: -4 }}
            className="relative cursor-default overflow-hidden rounded-xl border bg-white p-6 transition-all duration-300"
            style={{
              borderColor: hovered === q.key ? `${q.color}66` : "rgba(20,48,95,0.08)",
              boxShadow: hovered === q.key ? `0 16px 40px ${q.color}22` : "0 1px 2px rgba(20,33,58,0.04)",
            }}
          >
            <div
              className="absolute right-0 top-0 h-1.5 w-full transition-opacity duration-300"
              style={{ background: q.color, opacity: hovered === q.key ? 1 : 0.35 }}
            />
            {variant === "dot" ? (
              // h-10 = line-height van text-4xl, h-9/w-9 = font-size ervan,
              // zodat de cirkel exact dezelfde ruimte inneemt als de letter.
              <div className="mb-3 flex h-10 items-center">
                <span
                  className="block h-9 w-9 rounded-full transition-opacity duration-300"
                  style={{ background: q.color, opacity: hovered === q.key ? 1 : 0.7 }}
                />
              </div>
            ) : (
              <div
                className="mb-3 text-4xl font-black"
                style={{ fontFamily: "var(--font-playfair)", color: q.color, opacity: hovered === q.key ? 1 : 0.7, transition: "opacity 0.3s" }}
              >
                {q.key}
              </div>
            )}
            <p className="text-sm font-semibold text-[#14305f]">{q.label}</p>
            <motion.p
              animate={{ opacity: hovered === q.key ? 1 : 0, height: hovered === q.key ? "auto" : 0 }}
              className="mt-2 overflow-hidden text-xs leading-relaxed text-[#5a6478]"
            >
              {q.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Methods() {
  return (
    <section id="werkwijze" className="relative bg-white px-8 py-28 md:px-[8vw] md:py-36">
      <div className="mb-20 max-w-2xl">
        <Reveal>
          <p className="label mb-4">{methods.sectionLabel}</p>
        </Reveal>
        <WordReveal
          text={`${methods.heading} ${methods.headingAccent}`}
          accentFrom={methods.heading.split(" ").length}
          className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#14305f]"
        />
        <Reveal delay={0.2}>
          <div className="blue-line mt-6" />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#5a6478]">{methods.intro}</p>
        </Reveal>
      </div>

      <div className="grid gap-16 lg:grid-cols-2">
        <QuadrantGrid quadrants={methods.disc.quadrants} title={methods.disc.title} subtitle={methods.disc.subtitle} />
        <QuadrantGrid quadrants={methods.insights.quadrants} title={methods.insights.title} subtitle={methods.insights.subtitle} variant="dot" />
      </div>

      {/* Certification logos */}
      <Reveal delay={0.1}>
        <div className="mt-16 border-t border-[rgba(20,48,95,0.08)] pt-12">
          <p className="label mb-8 text-center">{methods.certificationsLabel}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {methods.certifications.map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ scale: 1.05 }}
                className="relative h-20 w-36"
                title={cert.name}
              >
                <Image
                  src={images[cert.imageKey as ImageKey]}
                  alt={cert.name}
                  fill
                  className="object-contain opacity-75 transition-opacity duration-300 hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
