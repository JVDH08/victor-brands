"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/content";

const { nav, images } = siteContent;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  function scrollTo(href: string) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[rgba(20,48,95,0.08)] shadow-[0_4px_30px_rgba(20,48,95,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="group flex items-center gap-3"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14305f] text-base font-black tracking-tighter text-white transition-colors group-hover:bg-[#2563eb]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {nav.logo}
            </span>
            <span className="hidden text-[11px] font-semibold tracking-[0.22em] text-[#14305f] uppercase sm:block">
              {nav.logoSub}
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative text-[11px] font-semibold tracking-[0.1em] text-[#5a6478] uppercase transition-colors hover:text-[#14305f] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#2563eb] after:transition-all hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("#contact")}
            className="hidden btn-blue py-2.5 px-5 text-[11px] lg:inline-flex"
          >
            {nav.cta}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex lg:hidden flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 rounded bg-[#14305f] transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 rounded bg-[#14305f] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 rounded bg-[#14305f] transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </motion.header>

      {/* Tagline — eigen regel direct onder de headerbalk. Staat bewust BUITEN
          de fixed header, zodat hij met de pagina meescrollt. pt-[72px] vangt
          de hoogte van de headerbalk op (h-10 logo + py-4 = 40 + 32). Zelfde
          container/padding als de balk, dus links uitgelijnd op het logo. */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pt-[72px]"
      >
        <div className="mx-auto max-w-7xl px-6 pt-2 pb-4 lg:px-10">
          {/* Wrapt vanzelf op smalle schermen */}
          <p className="text-xs font-semibold tracking-widest text-[#2563eb] uppercase">
            {nav.tagline}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white"
          >
            <nav className="flex flex-col items-center gap-8">
              {nav.links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-medium tracking-wide text-[#14305f] transition-colors hover:text-[#2563eb]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: nav.links.length * 0.07, duration: 0.5 }}
                onClick={() => scrollTo("#contact")}
                className="btn-blue mt-4"
              >
                {nav.cta}
              </motion.button>
            </nav>
            <p className="absolute bottom-10 font-mono text-[10px] tracking-[0.22em] text-[#9aa3b5] uppercase">
              {siteContent.contact.email}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
