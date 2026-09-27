import React from "react";
import FadeIn from "./FadeIn";
import { LINKS } from "@/lib/profile";

export default function Contact() {
  return (
    <section id="contact">
      <FadeIn className="pt-24 text-center">
        <p className="text-sm sm:text-base tracking-wide text-[#A7AFBD]">
          Research → Reach → Qualify → Convert → Grow
        </p>
      </FadeIn>
      <FadeIn className="pt-32 sm:pt-44 pb-32 text-center">
        <h2 className="text-5xl sm:text-6xl font-semibold tracking-tight text-[#0D111E]">Let's talk.</h2>
        <p className="mt-6 text-lg leading-relaxed text-[#2D3748] max-w-md mx-auto">
          If you're interested in customer acquisition or digital marketing I'd be happy to connect.
        </p>
        <a
          href={LINKS.email}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block mt-12 bg-[#E56B5D] text-white text-base font-medium rounded px-12 py-5 hover:bg-[#d95d4f] transition-colors duration-300"
        >
          Get in touch <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </FadeIn>
    </section>
  );
}