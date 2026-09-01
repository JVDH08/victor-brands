"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/content";
import { Reveal, WordReveal, Parallax, ease } from "@/components/motion-primitives";

const { about, images } = siteContent;

function Chapter({ chapter }: { chapter: typeof about.chapters[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, ease }}
      className={`relative pl-10 ${
        chapter.accent
          ? "py-12 px-10 rounded-2xl border border-[rgba(37,99,235,0.18)] bg-gradient-to-br from-[#eff4ff] to-white shadow-[0_20px_50px_rgba(20,48,95,0.08)]"
          : "py-8"
      }`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, ease, delay: 0.2 }}
        className={`absolute -left-[5px] top-9 h-3 w-3 rounded-full border-2 ${
          chapter.accent ? "border-[#2563eb] bg-[#2563eb]" : "border-[#2563eb] bg-white"
        }`}
      />
      <p className="label mb-3">{chapter.tag}</p>
      <div className="mb-4 flex items-baseline gap-4">
        <span
          className="select-none text-[4.5rem] font-black leading-none text-[rgba(37,99,235,0.1)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {chapter.number}
        </span>
        <h3
          className={`text-2xl font-bold leading-tight md:text-3xl ${chapter.accent ? "text-[#2563eb]" : "text-[#14305f]"}`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {chapter.title}
        </h3>
      </div>
      <p className="max-w-2xl leading-relaxed text-[#5a6478]">{chapter.body}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="verhaal" className="relative bg-white px-8 py-28 md:px-[8vw] md:py-36">
      <div className="mb-20 grid items-end gap-12 lg:grid-cols-[1fr_auto]">
        <div className="max-w-xl">
          <Reveal>
            <p className="label mb-4">{about.sectionLabel}</p>
          </Reveal>
          <WordReveal
            text={`${about.heading} ${about.headingAccent}`}
            accentFrom={about.heading.split(" ").length}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#14305f]"
          />
          <Reveal delay={0.2}>
            <div className="blue-line mt-6" />
          </Reveal>
        </div>

        {/* Parallax portrait accent */}
        <Reveal delay={0.15} className="hidden lg:block">
          {/* Liggend 16:9 i.p.v. het vorige staande blokje — anders zou de
              filmstill tot een smalle strook worden bijgesneden. */}
          <Parallax distance={40} className="aspect-video w-[22rem] overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(20,48,95,0.18)]">
            <Image
              src={images.verhaal}
              alt="Filmstill uit de verfilming van Victors verhaal: twee mannen 's avonds op straat"
              width={1920}
              height={1027}
              sizes="352px"
              className="h-full w-full object-cover object-center"
            />
          </Parallax>
        </Reveal>
      </div>

      <div className="relative max-w-3xl">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[rgba(37,99,235,0.3)] to-transparent" />
        <div className="flex flex-col gap-12">
          {about.chapters.map((chapter) => (
            <Chapter key={chapter.number} chapter={chapter} />
          ))}
        </div>
      </div>

      <Reveal>
        <blockquote className="mt-20 max-w-2xl border-l-[3px] border-[#2563eb] pl-8">
          <p
            className="text-2xl italic leading-relaxed text-[#14305f] md:text-3xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            &ldquo;{about.quote}&rdquo;
          </p>
        </blockquote>
      </Reveal>
    </section>
  );
}
