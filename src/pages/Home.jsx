import React from "react";
import Hero from "@/components/profile/Hero";
import About from "@/components/profile/About";
import Focus from "@/components/profile/Focus";
import Work from "@/components/profile/Work";
import Contact from "@/components/profile/Contact";
import Footer from "@/components/profile/Footer";

export default function Home() {
  return (
    <div className="font-body antialiased">
      <Hero />
      <main className="bg-white">
        <div className="max-w-[850px] mx-auto px-6 sm:px-10">
          <About />
          <Focus />
          <Work />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}