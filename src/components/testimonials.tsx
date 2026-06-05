"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/content";
import { Reveal, WordReveal, ease } from "@/components/motion-primitives";

const { testimonials } = siteContent;

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function goTo(index: number) {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }

  const quote = testimonials.items[current];

  return (
    <section id="referenties" className="relative overflow-hidden bg-white px-8 py-28 md:px-[8vw] md:py-36">
      <div
        className="pointer-events-none absolute -top-12 left-[4vw] select-none text-[18rem] font-black leading-none text-[rgba(37,99,235,0.05)]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        &ldquo;
      </div>

      <div className="mb-16">
        <Reveal>
          <p className="label mb-4">{testimonials.sectionLabel}</p>
        </Reveal>
        <WordReveal
          text={`${testimonials.heading} ${testimonials.headingAccent}`}
          accentFrom={testimonials.heading.split(" ").length}
          className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#14305f]"
        />
        <Reveal delay={0.2}>
          <div className="blue-line mt-6" />
        </Reveal>
      </div>

      <div className="relative min-h-[280px] max-w-4xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 40 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d * -40 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease }}
          >
            <span className="label mb-6 inline-block rounded-full border border-[rgba(37,99,235,0.25)] bg-[#eff4ff] px-3 py-1">
              {quote.category}
            </span>
            <p
              className="mb-10 text-2xl italic leading-relaxed text-[#14305f] md:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              &ldquo;{quote.text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14305f] text-white">
                <span className="text-sm font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  {quote.name[0]}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#14305f]">{quote.name}</p>
                <p className="text-xs text-[#5a6478]">{quote.role} · {quote.company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex gap-2">
        {testimonials.items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-10 bg-[#2563eb]" : "w-5 bg-[rgba(37,99,235,0.25)]"}`}
            aria-label={`Quote ${i + 1}`}
          />
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => goTo((current - 1 + testimonials.items.length) % testimonials.items.length)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(37,99,235,0.2)] text-[#2563eb] transition-all hover:border-[#2563eb] hover:bg-[#eff4ff]"
        >
          ←
        </button>
        <button
          onClick={() => goTo((current + 1) % testimonials.items.length)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(37,99,235,0.2)] text-[#2563eb] transition-all hover:border-[#2563eb] hover:bg-[#eff4ff]"
        >
          →
        </button>
      </div>
    </section>
  );
}
