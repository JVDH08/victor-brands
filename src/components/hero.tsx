"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/content";

const { hero } = siteContent;
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      {/* Soft blue ambient field */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_30%,rgba(37,99,235,0.07),transparent)]" />

      {/* Higgsfield white/blue background, parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src={hero.backgroundUrl}
          alt=""
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/40" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-8 pt-28 pb-16 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-[8vw] md:pt-0 md:pb-0">
        {/* Text */}
        <motion.div style={{ y: textY, opacity }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease }}
            className="label mb-5"
          >
            {hero.label}
          </motion.p>

          <h1
            className="mb-7 text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.92] tracking-tight text-[#14305f]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.45, duration: 1, ease }}
              >
                {hero.name}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.em
                className="block not-italic text-[#2563eb]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6, duration: 1, ease }}
              >
                {hero.nameSuffix}
              </motion.em>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9, ease }}
            className="mb-10 max-w-md text-lg leading-relaxed text-[#5a6478] md:text-xl"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9, ease }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector("#over-victor")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-blue"
            >
              {hero.ctaPrimary}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-ghost"
            >
              {hero.ctaSecondary}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-14 flex flex-wrap gap-10 border-t border-[rgba(20,48,95,0.1)] pt-8"
          >
            {hero.stats.map(({ number, label }) => (
              <div key={label}>
                <p
                  className="text-3xl font-bold text-[#2563eb]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {number}
                </p>
                <p className="mt-0.5 text-xs tracking-widest text-[#5a6478] uppercase">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Framed editorial portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1, ease }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          {/* Blue accent block behind */}
          <div className="absolute -bottom-4 -right-4 -z-0 h-full w-full rounded-3xl bg-[#2563eb]/10 md:-bottom-6 md:-right-6" />
          <div className="absolute -left-4 -top-4 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-[#2563eb]/40 md:-left-6 md:-top-6" />

          <motion.div
            style={{ y: portraitY }}
            className="relative z-10 overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(20,48,95,0.28)]"
          >
            <Image
              src={hero.portraitUrl}
              alt="Victor Brands — Trainer, Trainingsacteur & Coach"
              width={896}
              height={1200}
              className="aspect-[3/4] w-full object-cover object-top"
              priority
            />
            {/* Subtle blue duotone wash to tie B&W photo to the palette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#14305f]/30 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[#2563eb]/[0.06] mix-blend-overlay" />
          </motion.div>

          {/* Floating caption chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.7, ease }}
            className="absolute -bottom-5 left-6 z-20 rounded-full border border-[rgba(20,48,95,0.08)] bg-white px-5 py-2.5 shadow-[0_12px_30px_rgba(20,48,95,0.14)]"
          >
            <p className="text-xs font-semibold tracking-wide text-[#14305f]">
              Victor Brands
            </p>
            <p className="text-[10px] tracking-widest text-[#2563eb] uppercase">
              Trainer · Acteur · Coach
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <p className="label">Scroll</p>
        <div className="h-12 w-px overflow-hidden bg-[rgba(37,99,235,0.2)]">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-1/2 w-full bg-[#2563eb]"
          />
        </div>
      </motion.div>
    </section>
  );
}
