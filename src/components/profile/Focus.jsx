import React from "react";
import FadeIn from "./FadeIn";

export default function Focus() {
  return (
    <FadeIn className="pt-28 sm:pt-36">
      <p className="text-xs tracking-[0.25em] text-[#A7AFBD] font-medium">CURRENT FOCUS</p>
      <h3 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight text-[#0D111E]">
        Home-Service Customer Acquisition
      </h3>
      <p className="mt-4 text-base text-[#2D3748]/80 leading-relaxed">
        Roofing · HVAC · Plumbing · Remodeling · Flooring · Electrical · Landscaping
      </p>
    </FadeIn>
  );
}