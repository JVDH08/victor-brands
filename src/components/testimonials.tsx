"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content";
import { Reveal, WordReveal, ease } from "@/components/motion-primitives";
import { Modal } from "@/components/modal";

const { testimonials } = siteContent;
const categoryLabels: Record<string, string> = testimonials.categoryLabels;

const AUTOPLAY_MS = 8000;

/* ─── Alinea's + opsommingen uit `volledig` ───────────────────────────────────
   Regels die met "• " beginnen worden samengevoegd tot één <ul>. */
function Paragraphs({ blocks }: { blocks: string[] }) {
  const out: React.ReactNode[] = [];
  let bullets: string[] = [];

  const flushBullets = (key: string) => {
    if (!bullets.length) return;
    out.push(
      <ul key={key} className="my-5 list-disc space-y-2 pl-5 marker:text-[#2563eb]">
        {bullets.map((b) => (
          <li key={b} className="text-[15px] leading-relaxed text-[#5a6478]">
            {b}
          </li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  blocks.forEach((block, i) => {
    if (block.startsWith("• ")) {
      bullets.push(block.slice(2));
      return;
    }
    flushBullets(`ul-${i}`);
    out.push(
      <p key={`p-${i}`} className="mb-5 text-[15px] leading-relaxed text-[#5a6478] last:mb-0">
        {block}
      </p>,
    );
  });
  flushBullets("ul-end");

  return <>{out}</>;
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  // Autoplay stopt permanent zodra de bezoeker zelf navigeert.
  const [autoplayStopped, setAutoplayStopped] = useState(false);
  // Tijdelijke pauze bij hover/focus.
  const [paused, setPaused] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLButtonElement>(null);

  const items = testimonials.items;
  const quote = items[current];
  const openItem = openId ? items.find((it) => it.id === openId) : null;

  /* ─── Autoplay ─────────────────────────────────────────────────────────── */
  const autoplayActive = !reduceMotion && !autoplayStopped && !paused && openId === null;

  useEffect(() => {
    if (!autoplayActive) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % items.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [autoplayActive, items.length]);

  // Handmatige navigatie: schakelt autoplay definitief uit.
  const goTo = useCallback(
    (index: number) => {
      setAutoplayStopped(true);
      setDirection(index > current ? 1 : -1);
      setCurrent((index + items.length) % items.length);
    },
    [current, items.length],
  );

  /* ─── Modal sluiten + focus terug naar de kaart ────────────────────────── */
  const closeModal = useCallback(() => {
    setOpenId(null);
    requestAnimationFrame(() => cardRef.current?.focus());
  }, []);

  const roleLine = [quote.functie, quote.organisatie].filter(Boolean).join(" · ");

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

      {/* Hover/focus pauzeert het autoplay; verlaten hervat het weer. */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="relative min-h-[280px] max-w-4xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: reduceMotion ? 0 : d * 40 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: reduceMotion ? 0 : d * -40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease }}
            >
              <button
                ref={cardRef}
                type="button"
                onClick={() => setOpenId(quote.id)}
                aria-haspopup="dialog"
                className="group block w-full cursor-pointer text-left"
              >
                <span className="label mb-6 inline-block rounded-full border border-[rgba(37,99,235,0.25)] bg-[#eff4ff] px-3 py-1">
                  {categoryLabels[quote.categorie]}
                </span>
                <p
                  className="mb-10 text-2xl italic leading-relaxed text-[#14305f] md:text-3xl lg:text-4xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  &ldquo;{quote.kort}&rdquo;
                </p>
                <span className="mb-8 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#2563eb] transition-colors group-hover:text-[#14305f]">
                  {testimonials.readMore}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14305f] text-white">
                    <span className="text-sm font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                      {quote.naam[0]}
                    </span>
                  </span>
                  <span>
                    <span className="block font-semibold text-[#14305f]">{quote.naam}</span>
                    <span className="block text-xs text-[#5a6478]">{roleLine}</span>
                  </span>
                </span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex gap-2">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-10 bg-[#2563eb]" : "w-5 bg-[rgba(37,99,235,0.25)]"}`}
              aria-label={`Referentie ${i + 1}: ${item.naam}`}
              aria-current={i === current}
            />
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => goTo(current - 1)}
            aria-label={testimonials.prevLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(37,99,235,0.2)] text-[#2563eb] transition-all hover:border-[#2563eb] hover:bg-[#eff4ff]"
          >
            &larr;
          </button>
          <button
            onClick={() => goTo(current + 1)}
            aria-label={testimonials.nextLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(37,99,235,0.2)] text-[#2563eb] transition-all hover:border-[#2563eb] hover:bg-[#eff4ff]"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* ─── Modal met de volledige referentie ───────────────────────────── */}
      <AnimatePresence>
        {openItem && (
          <Modal
            titleId="referentie-titel"
            closeLabel={testimonials.closeLabel}
            onClose={closeModal}
            header={
              <>
                <p className="label mb-2">{categoryLabels[openItem.categorie]}</p>
                <h3
                  id="referentie-titel"
                  className="text-2xl font-bold text-[#14305f]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {openItem.naam}
                </h3>
                <p className="mt-1 text-sm text-[#5a6478]">
                  {[openItem.functie, openItem.organisatie].filter(Boolean).join(" · ")}
                </p>
              </>
            }
          >
            <Paragraphs blocks={openItem.volledig} />
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}
