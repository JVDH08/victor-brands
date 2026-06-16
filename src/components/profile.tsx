"use client";

import Image from "next/image";
import { siteContent } from "@/content";
import { Reveal, WordReveal, Parallax } from "@/components/motion-primitives";

const { profile, images } = siteContent;

export function Profile() {
  return (
    <section id="over-victor" className="relative bg-[#f6f8fc] px-8 py-28 md:px-[8vw] md:py-36">
      <div className="mb-16 max-w-2xl">
        <Reveal>
          <p className="label mb-4">{profile.sectionLabel}</p>
        </Reveal>
        <WordReveal
          text={`${profile.heading} ${profile.headingAccent}`}
          accentFrom={profile.heading.split(" ").length}
          className="text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#14305f]"
        />
        <Reveal delay={0.2}>
          <div className="blue-line mt-6" />
          <p className="mt-7 text-base leading-relaxed text-[#5a6478] md:text-lg">{profile.intro}</p>
        </Reveal>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left: portrait + experience + expertise */}
        <div className="flex flex-col gap-10">
          <Reveal>
            <Parallax distance={28} className="overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(20,48,95,0.16)]">
              <Image
                src={images.portraitEnhanced}
                alt="Victor Brands — trainer, trainingsacteur & teamcoach"
                width={700}
                height={840}
                className="aspect-[5/6] w-full scale-105 object-cover object-top"
              />
            </Parallax>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="label mb-5">{profile.expertiseLabel}</p>
            <div className="flex flex-wrap gap-2">
              {profile.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(37,99,235,0.18)] bg-white px-3.5 py-1.5 text-xs font-medium text-[#14305f]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: vision + work experience */}
        <div className="flex flex-col gap-12">
          <div>
            <Reveal>
              <p className="label mb-6">{profile.visionLabel}</p>
            </Reveal>
            <div className="flex flex-col gap-5">
              {profile.vision.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-[rgba(20,48,95,0.08)] bg-white p-6 transition-all duration-300 hover:border-[rgba(37,99,235,0.25)] hover:shadow-[0_16px_40px_rgba(20,48,95,0.08)]">
                    <h3
                      className="mb-2 text-lg font-bold text-[#14305f]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5a6478]">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <p className="label mb-6">{profile.experienceLabel}</p>
            </Reveal>
            <div className="flex flex-col">
              {profile.experience.map((exp, i) => (
                <Reveal key={`${exp.role}-${i}`} delay={i * 0.06}>
                  <div className="flex flex-col gap-1 border-t border-[rgba(20,48,95,0.1)] py-5 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="w-32 shrink-0 text-xs font-semibold tracking-wider text-[#2563eb] uppercase">
                      {exp.period}
                    </span>
                    <div>
                      <p className="font-semibold text-[#14305f]">{exp.role}</p>
                      <p className="mt-0.5 text-sm text-[#5a6478]">{exp.org}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <button
              onClick={() => document.querySelector("#verhaal")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-ghost self-start"
            >
              {profile.storyCta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
