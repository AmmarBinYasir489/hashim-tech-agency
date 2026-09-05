"use client";

import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "We dig deep into your business, audience, and goals. Through workshops and research, we define the project scope, technical architecture, and success metrics before a single line of code is written.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    desc: "Wireframes evolve into high-fidelity designs. Interactive prototypes let you experience the product before development begins. We iterate until every detail feels right.",
  },
  {
    number: "03",
    title: "Development & Testing",
    desc: "Clean, modular code built with modern frameworks. Continuous integration, automated testing, and code reviews ensure reliability at every stage.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    desc: "Staged deployment, performance monitoring, and post-launch support. We don&apos;t disappear after launch — we help you optimize, scale, and evolve.",
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-bg-dark" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <SectionLabel text="Our Process" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
              From vision to launch
              <br />
              in four steps
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-snug">
              A proven framework that removes uncertainty and delivers predictable, high-quality results.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative max-w-[700px] mx-auto">
          <div className="absolute left-8 md:left-8 top-0 bottom-0 w-0.5 bg-bg-dark shadow-neu-in-sm rounded-full" />

          <StaggerContainer className="flex flex-col" staggerDelay={0.15}>
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="group flex gap-6 md:gap-8 pb-12 last:pb-0 relative">
                  <div className="relative z-10 w-[72px] h-[72px] md:w-16 md:h-16 flex-shrink-0 rounded-full bg-bg shadow-neu flex items-center justify-center font-mono text-sm font-semibold text-accent border-2 border-transparent transition-all duration-200 group-hover:scale-105">
                    {step.number}
                  </div>

                  <div className="pt-3 md:pt-4">
                    <h3 className="text-xl font-semibold mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
