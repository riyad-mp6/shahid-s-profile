import React from "react";
import FadeIn from "./FadeIn";
import { Image } from "@/components/ui/image";
import { LINKS } from "@/lib/profile";

const socials = [
  { label: "Facebook", href: LINKS.facebook, external: true },
  { label: "LinkedIn", href: LINKS.linkedin, external: true },
];

export default function Hero() {
  return (
    <section className="bg-[#0D111E] text-white min-h-screen flex flex-col">
      <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 pt-12 sm:pt-20">
        <p className="text-xs tracking-[0.25em] text-[#A7AFBD] font-medium">SHAHIDUL ISLAM</p>
      </div>
      <div className="flex-1 flex items-center w-full max-w-[1100px] mx-auto px-6 sm:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-14 md:gap-10 items-center w-full">
          <FadeIn className="md:col-span-8 order-2 md:order-1">
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] leading-[1.1] font-light tracking-tight">
              I'm <span className="font-bold">Shahidul</span>, a customer acquisition entrepreneur.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[#A7AFBD] max-w-xl">
              I build practical systems for generating leads, creating sales conversations, and turning opportunities into customers.
            </p>
            <p className="mt-6 text-sm text-[#A7AFBD]/80 tracking-wide">
              Digital Marketing · Lead Generation · Outbound Sales
            </p>
            <nav className="mt-14 flex gap-8 text-sm">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="link-underline text-[#A7AFBD] hover:text-[#E56B5D] transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </FadeIn>
          <FadeIn delay={0.15} className="md:col-span-4 order-1 md:order-2 flex md:justify-end">
            <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full border border-[#A7AFBD]/25 overflow-hidden">
              <Image
                src="https://media.base44.com/images/public/6ab8a09afebab59348819252/3e7514530_photo_2026-08-28_12-12-49.jpg"
                alt="Shahidul Islam"
                fittingType="fill"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}