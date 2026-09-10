"use client";

import Image from "next/image";
import { siteContent } from "@/content";
import { Reveal } from "@/components/motion-primitives";

const { clients } = siteContent;

export function Clients() {
  return (
    <section className="relative border-y border-[rgba(20,48,95,0.08)] bg-white px-8 py-12 md:px-[8vw]">
      <Reveal>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <p className="label shrink-0 text-center lg:text-left">{clients.label}</p>
          {/* 8 namen op één regel vanaf 1280px. gap-x-6 (24px) geldt bewust op
              élke breedte: met lg:gap-x-8 komt de strip op 1280px 10px tekort
              en valt Sligro terug. Loopt hij op smallere schermen alsnog
              terug, dan gecentreerd — justify-between trekt de laatste regel
              uit elkaar. */}
          <div className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {clients.items.map((client) =>
              client.logo ? (
                <div key={client.name} className="relative h-8 w-28 opacity-70 transition-opacity duration-300 hover:opacity-100">
                  <Image src={client.logo} alt={client.name} fill className="object-contain" />
                </div>
              ) : (
                <span
                  key={client.name}
                  className="text-sm font-semibold tracking-tight text-[#9aa3b5] transition-colors duration-300 hover:text-[#14305f] md:text-base"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {client.name}
                </span>
              )
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
