"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/components/motion-primitives";

/* ─── Gedeelde modal ──────────────────────────────────────────────────────────
   Overlay, animatie, sluitknop, Escape, focus trap en scroll-lock op één plek.
   Wordt alleen gemonteerd zolang hij open is: de aanroeper regelt de presence
   met <AnimatePresence> en zet bij sluiten de focus terug op de knop die hem
   opende. */
export function Modal({
  titleId,
  closeLabel,
  onClose,
  header,
  children,
}: {
  titleId: string;
  closeLabel: string;
  onClose: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* ─── Escape + focus trap ──────────────────────────────────────────────── */
  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const node = dialogRef.current;
      if (!node) return;
      const focusables = Array.from(
        node.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled"));
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  /* ─── Body scroll lock ─────────────────────────────────────────────────────
     overflow:hidden op <html> zet ook Lenis stil: die animeert scrollTop, en
     met een maximale scrollpositie van 0 kan de pagina niet meer bewegen.
     De modal-inhoud zelf krijgt data-lenis-prevent, zodat scrollen dáárin
     gewoon werkt. */
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollbar = window.innerWidth - html.clientWidth;
    const prev = {
      html: html.style.overflow,
      body: body.style.overflow,
      pad: body.style.paddingRight,
    };
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    return () => {
      html.style.overflow = prev.html;
      body.style.overflow = prev.body;
      body.style.paddingRight = prev.pad;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(20,48,95,0.45)] px-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96, y: reduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.97, y: reduceMotion ? 0 : 8 }}
        transition={{ duration: 0.35, ease }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_40px_100px_rgba(20,48,95,0.35)]"
      >
        <div className="flex items-start justify-between gap-6 border-b border-[rgba(20,48,95,0.08)] px-8 py-6">
          <div>{header}</div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label={closeLabel}
            className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(20,48,95,0.1)] text-[#5a6478] transition-all hover:border-[#2563eb] hover:bg-[#eff4ff] hover:text-[#2563eb]"
          >
            <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div data-lenis-prevent className="overflow-y-auto px-8 py-7">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
