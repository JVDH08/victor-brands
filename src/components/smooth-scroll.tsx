"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";

/* Voor knoppen die zelf naar een sectie scrollen (nav, CTA's). Met reduced
   motion springt de pagina er direct heen in plaats van erheen te animeren.
   De voorkeur wordt bij elke klik opnieuw gelezen, dus een wijziging telt
   ook zonder herlaadbeurt. */
export function scrollToSection(selector: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelector(selector)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Met reduced motion draait Lenis niet: de browser scrollt zelf, en
    // ankerlinks springen direct naar hun sectie in plaats van er naartoe te
    // animeren. De rest van de afhandeling blijft gelijk, zodat ook
    // button[data-scroll-to] blijft werken — daar doet de browser niets voor.
    const lenis = reduceMotion
      ? null
      : new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.6,
        });

    let frame = 0;
    if (lenis) {
      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    }

    // Smooth-scroll for in-page anchor clicks
    const handleAnchor = (e: Event) => {
      const target = (e.target as HTMLElement).closest("a[href^='#'], button[data-scroll-to]");
      if (!target) return;
      const href =
        target.getAttribute("href") || target.getAttribute("data-scroll-to");
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(el as HTMLElement, { offset: 0 });
          } else {
            (el as HTMLElement).scrollIntoView({ behavior: "auto", block: "start" });
          }
        }
      }
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener("click", handleAnchor);
      lenis?.destroy();
    };
  }, [reduceMotion]);

  return <>{children}</>;
}
