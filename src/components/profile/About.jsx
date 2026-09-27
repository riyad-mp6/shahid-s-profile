import React from "react";
import FadeIn from "./FadeIn";

const paragraphs = [
  "Hello, my name is Shahidul. I’m a 20-year-old entrepreneur who is genuinely enthusiastic about the world of business and marketing.",
  "I recently decided to drop out of university, where I was studying AI in South Korea. I initially went there because it was the path my parents wanted for me, but after my first semester, I realized that the course wasn’t something I was deeply passionate about.",
  "I found myself much more interested in business, marketing, and building things of my own. So I decided to follow that passion and focus on building customer-acquisition systems for B2B businesses that can help them grow digitally and generate more sales.",
  "My core areas include paid advertising, organic content, lead generation, outbound sales, sales funnels, CRM, market research, appointment setting, copywriting, and scriptwriting.",
];

const ai = [
  "The answer is that I realized I was much more interested in the business side of AI than the technical side. My university program focused heavily on areas like programming, coding, algebra, logic, and technical systems. I understand how important those skills are, but I realized that this wasn't where I wanted to build my career.",
  "That doesn't mean I’m stepping away from AI. Quite the opposite. I’m constantly learning, experimenting, and testing new AI tools to understand how they can automate business processes, improve customer acquisition, strengthen CRM systems, and help businesses generate more sales with less manual work.",
  "I simply don't see myself as the person who needs to build the underlying technology. I want to be the person who understands the business problem, finds where AI can create leverage, and turns that technology into a practical growth system.",
];

export default function About() {
  return (
    <section className="pt-28 sm:pt-40">
      <FadeIn>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#0D111E]">About Me</h2>
      </FadeIn>
      <FadeIn className="mt-12 space-y-6 text-lg leading-[1.8] text-[#2D3748]">
        {paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
      </FadeIn>
      <FadeIn className="mt-16 space-y-6 text-lg leading-[1.8] text-[#2D3748]">
        <p className="text-xl sm:text-2xl leading-snug font-medium text-[#0D111E]">
          You might be wondering: if AI is one of the biggest opportunities right now, why did you leave an AI program?
        </p>
        {ai.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
      </FadeIn>
    </section>
  );
}