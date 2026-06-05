"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/content";

const { book } = siteContent;
const order = book.order;
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const field =
  "w-full rounded-lg border border-[rgba(20,48,95,0.18)] bg-white px-3.5 py-2.5 text-sm text-[#14305f] placeholder-[#9aa3b5] outline-none transition-colors duration-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/15";
const lbl = "mb-1.5 block text-xs font-semibold tracking-wide text-[#14305f]";

export function BookOrderModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  // Reset the success state shortly after closing
  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => setSubmitted(false), 300);
    return () => clearTimeout(t);
  }, [open]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const address = String(fd.get("address") ?? "");
    const quantity = String(fd.get("quantity") ?? "1");
    const note = String(fd.get("message") ?? "");

    const subject = `Bestelling: Vast in de VS (${quantity}x)`;
    const body = [
      "Beste Victor,",
      "",
      `Ik wil graag "Vast in de VS" bestellen.`,
      "",
      `Naam: ${name}`,
      `E-mail: ${email}`,
      `Aantal: ${quantity}`,
      `Bezorgadres: ${address}`,
      note ? `Opmerking: ${note}` : "",
      "",
      "Graag hoor ik over levering en betaling.",
      "",
      "Met vriendelijke groet,",
      name,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${book.orderEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's mail client with the prefilled order
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0a1a36]/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease }}
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-7 shadow-[0_40px_100px_rgba(10,26,54,0.5)] md:p-9"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Sluiten"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-[#5a6478] transition-colors hover:bg-[#f6f8fc] hover:text-[#14305f]"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            {submitted ? (
              <div className="flex flex-col items-center gap-5 py-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eff4ff] text-[#2563eb]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#14305f]" style={{ fontFamily: "var(--font-playfair)" }}>
                  {order.successTitle}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-[#5a6478]">
                  {order.successBody}
                </p>
                <button onClick={onClose} className="btn-blue mt-2">
                  Sluiten
                </button>
              </div>
            ) : (
              <>
                <p className="label mb-2">{book.sectionLabel}</p>
                <h3
                  className="mb-2 text-2xl font-bold text-[#14305f] md:text-[1.7rem]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {order.title}
                </h3>
                <p className="mb-1 text-sm leading-relaxed text-[#5a6478]">{order.intro}</p>
                <p className="mb-6 text-xs text-[#2563eb]">{order.priceNote}</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className={lbl}>{order.labels.name}</label>
                      <input name="name" required placeholder={order.labels.namePlaceholder} className={field} />
                    </div>
                    <div>
                      <label className={lbl}>{order.labels.email}</label>
                      <input name="email" type="email" required placeholder={order.labels.emailPlaceholder} className={field} />
                    </div>
                  </div>

                  <div>
                    <label className={lbl}>{order.labels.address}</label>
                    <input name="address" required placeholder={order.labels.addressPlaceholder} className={field} />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
                    <div>
                      <label className={lbl}>{order.labels.quantity}</label>
                      <select name="quantity" defaultValue="1" className={field}>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={lbl}>{order.labels.message}</label>
                      <input name="message" placeholder={order.labels.messagePlaceholder} className={field} />
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full px-5 py-2.5 text-sm font-medium text-[#5a6478] transition-colors hover:text-[#14305f]"
                    >
                      {order.labels.cancel}
                    </button>
                    <button type="submit" className="btn-blue">
                      {order.labels.submit}
                      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                        <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
