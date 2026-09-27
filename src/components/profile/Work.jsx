import React from "react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "@/lib/profile";

export default function Work() {
  return (
    <FadeIn className="pt-28 sm:pt-36">
      <p className="text-xs tracking-[0.25em] text-[#A7AFBD] font-medium mb-8">SELECTED WORK</p>
      <div className="border-t border-[#A7AFBD]/40">
        {PROJECTS.map((p) => (
          <a
            key={p.no}
            href={p.url}
            {...(p.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-8 px-2 sm:px-4 -mx-2 sm:-mx-4 border-b border-[#A7AFBD]/40 hover:bg-[#F7F8FA] transition-colors duration-300"
          >
            <span className="text-sm text-[#A7AFBD] w-8 shrink-0">{p.no}</span>
            <div className="flex-1">
              <h4 className="text-lg sm:text-xl font-semibold text-[#0D111E]">{p.title}</h4>
              <p className="mt-1.5 text-[0.95rem] text-[#2D3748]/80">{p.desc}</p>
            </div>
            <span className="text-sm text-[#0D111E] group-hover:text-[#E56B5D] transition-colors whitespace-nowrap">
              View project <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </span>
          </a>
        ))}
      </div>
    </FadeIn>
  );
}