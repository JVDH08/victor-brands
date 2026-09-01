"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/content";
import { Reveal, WordReveal, ease } from "@/components/motion-primitives";

const { contact } = siteContent;
const { interests } = contact;
type Status = "idle" | "sending" | "error";
const field =
  "w-full border-b border-[rgba(20,48,95,0.18)] bg-transparent px-0 py-4 text-[#14305f] placeholder-[#9aa3b5] outline-none transition-colors duration-300 focus:border-[#2563eb] text-sm";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<string[]>([]);
  const [other, setOther] = useState("");
  const [interestError, setInterestError] = useState(false);
  const firstInterestRef = useRef<HTMLInputElement>(null);

  const showOther = selected.includes(interests.otherId);
  const showBookNote = selected.includes(interests.noteForId);

  // De knop "Vraag het boek aan" in de boeksectie stuurt dit event, zodat de
  // bijbehorende optie hier alvast aangevinkt staat.
  useEffect(() => {
    function onInterest(e: Event) {
      const id = (e as CustomEvent<string>).detail;
      if (!interests.options.some((o) => o.id === id)) return;
      setSelected((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setInterestError(false);
    }
    window.addEventListener("victor:interest", onInterest);
    return () => window.removeEventListener("victor:interest", onInterest);
  }, []);

  function toggleInterest(id: string) {
    setSelected((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      if (next.length) setInterestError(false);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    // Minimaal één interesse verplicht — inline, geen native validatiepopup.
    if (selected.length === 0) {
      setInterestError(true);
      firstInterestRef.current?.focus();
      return;
    }

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
      interests: selected,
      interestOther: showOther ? other.trim() : "",
      // honeypot — only bots fill this
      company: String(fd.get("company") ?? ""),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      setSent(true);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-[#f6f8fc] px-8 py-28 md:px-[8vw] md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(37,99,235,0.06),transparent)]" />

      <div className="relative z-10 grid gap-20 lg:grid-cols-2 lg:gap-32">
        <div>
          <Reveal>
            <p className="label mb-4">{contact.sectionLabel}</p>
          </Reveal>
          <WordReveal
            text={`${contact.heading} ${contact.headingAccent}`}
            accentFrom={contact.heading.split(" ").length}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#14305f]"
          />
          <Reveal delay={0.15}>
            <div className="blue-line mb-8 mt-6" />
            <p className="mb-10 text-sm leading-relaxed text-[#5a6478]">{contact.intro}</p>

            <div className="space-y-4">
              {/* E-mail */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff4ff] text-[#2563eb]">
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                    <path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <a href={`mailto:${contact.email}`} className="text-sm text-[#14305f] transition-colors hover:text-[#2563eb]">
                  {contact.email}
                </a>
              </div>

              {/* Telefoon */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff4ff] text-[#2563eb]">
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                    <path d="M4 2.5h2.2l1 2.5-1.3 1a7.5 7.5 0 003.6 3.6l1-1.3 2.5 1v2.2c0 .8-.7 1.4-1.5 1.4A11 11 0 013 5C2.9 4.2 3.2 2.5 4 2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {contact.phone ? (
                  <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="text-sm text-[#14305f] transition-colors hover:text-[#2563eb]">
                    {contact.phone}
                  </a>
                ) : (
                  <span className="text-sm text-[#9aa3b5]">
                    {contact.phoneLabel} — {contact.placeholderNote}
                  </span>
                )}
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff4ff] text-[#2563eb]">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                    <path d="M3 4a1 1 0 100-2 1 1 0 000 2zM2.2 5.5h1.6V14H2.2V5.5zM6 5.5h1.5v1.15h.02c.21-.4.72-.82 1.48-.82 1.58 0 1.87 1.04 1.87 2.4V14H9.34V9.6c0-.6-.01-1.37-.83-1.37-.84 0-.97.65-.97 1.33V14H6V5.5z" />
                  </svg>
                </div>
                {contact.linkedin ? (
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[#14305f] transition-colors hover:text-[#2563eb]">
                    {contact.linkedinLabel}
                  </a>
                ) : (
                  <span className="text-sm text-[#9aa3b5]">
                    {contact.linkedinLabel} — {contact.placeholderNote}
                  </span>
                )}
              </div>

              {/* Standplaats */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eff4ff] text-[#2563eb]">
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                    <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M8 2C5.239 2 3 4.239 3 7c0 4 5 9 5 9s5-5 5-9c0-2.761-2.239-5-5-5z" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
                <span className="text-sm text-[#5a6478]">{contact.location}</span>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              {contact.principles.map((p, i) => (
                <div key={p} className="flex items-center gap-3">
                  <span className="text-lg font-bold text-[rgba(37,99,235,0.5)]" style={{ fontFamily: "var(--font-playfair)" }}>
                    {`0${i + 1}`}
                  </span>
                  <span className="text-sm font-medium text-[#14305f]">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="card rounded-2xl p-8 md:p-10">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex h-full min-h-[400px] flex-col items-center justify-center gap-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eff4ff] text-[#2563eb]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-[#14305f]" style={{ fontFamily: "var(--font-playfair)" }}>{contact.successTitle}</p>
                <p className="text-sm text-[#5a6478]">{contact.successBody}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-9">
                <div>
                  <label className="label mb-1 block">{contact.formLabels.name}</label>
                  <input name="name" type="text" required placeholder={contact.formLabels.namePlaceholder} className={field} />
                </div>
                <div>
                  <label className="label mb-1 block">{contact.formLabels.email}</label>
                  <input name="email" type="email" required placeholder={contact.formLabels.emailPlaceholder} className={field} />
                </div>
                <div>
                  <label className="label mb-1 block">{contact.formLabels.phone}</label>
                  <input name="phone" type="tel" placeholder={contact.formLabels.phonePlaceholder} className={field} />
                </div>

                {/* Interesses — echte checkboxes (sr-only) onder een pill-label,
                    zodat toetsenbord en screenreader gewoon werken. */}
                <fieldset>
                  <legend className="label mb-3">{interests.legend}</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {interests.options.map((opt, i) => {
                      const active = selected.includes(opt.id);
                      return (
                        <label key={opt.id} className="cursor-pointer">
                          <input
                            ref={i === 0 ? firstInterestRef : undefined}
                            type="checkbox"
                            name="interests"
                            value={opt.id}
                            checked={active}
                            onChange={() => toggleInterest(opt.id)}
                            aria-describedby={interestError ? "interests-error" : undefined}
                            className="peer sr-only"
                          />
                          <span
                            className={`flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm transition-all duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-[#2563eb] peer-focus-visible:ring-offset-2 ${
                              active
                                ? "border-[#2563eb] bg-[#eff4ff] font-semibold text-[#14305f]"
                                : "border-[rgba(20,48,95,0.18)] bg-white text-[#5a6478] hover:border-[rgba(37,99,235,0.45)] hover:text-[#14305f]"
                            }`}
                          >
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                active
                                  ? "border-[#2563eb] bg-[#2563eb] text-white"
                                  : "border-[rgba(20,48,95,0.25)] text-transparent"
                              }`}
                            >
                              <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5">
                                <path d="M1.6 5.1l2.1 2.1L8.4 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            {opt.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {interestError && (
                    <p id="interests-error" role="alert" className="mt-3 text-xs font-medium text-red-600">
                      {interests.error}
                    </p>
                  )}

                  <AnimatePresence initial={false}>
                    {showOther && (
                      <motion.div
                        key="other"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5">
                          <label htmlFor="interest-other" className="label mb-1 block">
                            {interests.otherLabel}
                          </label>
                          <input
                            id="interest-other"
                            type="text"
                            value={other}
                            onChange={(e) => setOther(e.target.value)}
                            placeholder={interests.otherPlaceholder}
                            className={field}
                          />
                        </div>
                      </motion.div>
                    )}

                    {showBookNote && (
                      <motion.div
                        key="book-note"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 flex items-start gap-2.5 rounded-xl border border-[rgba(37,99,235,0.15)] bg-[#eff4ff] px-4 py-3 text-xs leading-relaxed text-[#14305f]">
                          <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white">
                            <svg viewBox="0 0 10 10" fill="none" className="h-2 w-2">
                              <path d="M5 2.2v3.2M5 7.4h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                          </span>
                          {interests.bookNote}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </fieldset>

                {/* Honeypot — hidden from humans, catches spam bots. Not announced to screen readers. */}
                <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Laat dit veld leeg
                    <input name="company" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div>
                  <label className="label mb-1 block">{contact.formLabels.message}</label>
                  <textarea name="message" required rows={5} placeholder={contact.formLabels.messagePlaceholder} className={`${field} resize-none`} />
                </div>

                {status === "error" && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600">
                    {contact.formLabels.error}{" "}
                    <a href={`mailto:${contact.email}`} className="font-semibold underline">
                      {contact.email}
                    </a>
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-[#9aa3b5]">{contact.formLabels.privacy}</p>
                  <button type="submit" disabled={status === "sending"} className="btn-blue shrink-0 disabled:cursor-not-allowed disabled:opacity-60">
                    {status === "sending" ? contact.formLabels.sending : contact.formLabels.submit}
                    {status !== "sending" && (
                      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                        <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
