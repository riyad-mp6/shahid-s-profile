import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[#A7AFBD]/30 py-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <p className="text-xs tracking-[0.25em] font-semibold text-[#0D111E]">SHAHIDUL ISLAM</p>
        <p className="mt-2 text-sm text-[#A7AFBD]">Entrepreneur · Customer Acquisition</p>
      </div>
      <p className="text-sm text-[#A7AFBD]">© 2026 Shahidul Islam</p>
    </footer>
  );
}