"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/content";
import { Reveal, WordReveal, ease } from "@/components/motion-primitives";

const { services, images } = siteContent;

const icons = [
  <svg key="trainer" viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <rect x="4" y="8" width="32" height="20" rx="2" stroke="#2563eb" strokeWidth="1.5" />
    <line x1="4" y1="32" x2="36" y2="32" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="28" x2="20" y2="32" stroke="#2563eb" strokeWidth="1.5" />
    <line x1="10" y1="16" x2="18" y2="16" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="10" y1="20" x2="15" y2="20" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="27" cy="16" r="4" stroke="#2563eb" strokeWidth="1.5" />
  </svg>,
  <svg key="actor" viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <circle cx="20" cy="13" r="6" stroke="#2563eb" strokeWidth="1.5" />
    <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 6l2 2-2 2" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 8c2 1.5 3 4 2 6.5" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" />
  </svg>,
  <svg key="coach" viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <path d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z" stroke="#2563eb" strokeWidth="1.5" />
    <path d="M14 20c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="20" r="2.5" fill="#2563eb" />
  </svg>,
];

function ServiceCard({
  item,
  icon,
  image,
  delay,
}: {
  item: typeof services.items[number];
  icon: React.ReactNode;
  image?: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease, delay }}
      whileHover={{ y: -8 }}
      className="card group flex flex-col overflow-hidden rounded-2xl"
    >
      {image && (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={image}
            alt={item.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
          <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-multiply" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#eff4ff] transition-colors duration-300 group-hover:bg-[#2563eb]/10">
          {icon}
        </div>
        <p className="label mb-2">{item.tagline}</p>
        <h3
          className="mb-5 text-2xl font-bold text-[#14305f] md:text-[1.7rem]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {item.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-[#5a6478]">{item.body}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(37,99,235,0.18)] bg-[#eff4ff]/60 px-3 py-1 text-[10px] font-semibold tracking-wider text-[#2563eb] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="diensten" className="relative bg-[#f6f8fc] px-8 py-28 md:px-[8vw] md:py-36">
      <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="label mb-4">{services.sectionLabel}</p>
          </Reveal>
          <WordReveal
            text={`${services.heading} ${services.headingAccent}`}
            accentFrom={services.heading.split(" ").length}
            className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#14305f]"
          />
          <Reveal delay={0.2}>
            <div className="blue-line mt-6" />
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-sm leading-relaxed text-[#5a6478] md:text-right">{services.intro}</p>
        </Reveal>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.items.map((item, i) => (
          <ServiceCard
            key={item.title}
            item={item}
            icon={icons[i]}
            image={i === 1 ? images.trainingsacteur : undefined}
            delay={i * 0.12}
          />
        ))}
      </div>
    </section>
  );
}
