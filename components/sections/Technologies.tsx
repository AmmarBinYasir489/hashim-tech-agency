"use client";

import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const techs = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Tailwind", icon: "🌊" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Firebase", icon: "🔥" },
  { name: "AWS", icon: "☁️" },
  { name: "Figma", icon: "🎨" },
  { name: "Docker", icon: "🐳" },
  { name: "Stripe", icon: "💳" },
];

export default function Technologies() {
  return (
    <section className="py-24 lg:py-32" id="technologies">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <SectionLabel text="Tech Stack" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
              Built with the best
              <br />
              tools in the industry
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-snug">
              We choose technologies based on your project's needs — never force-fitting solutions.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="flex flex-wrap justify-center gap-4 lg:gap-6"
          staggerDelay={0.05}
        >
          {techs.map((tech) => (
            <StaggerItem key={tech.name}>
              <motion.div
                className="group flex flex-col items-center gap-2 px-6 py-5 rounded-2xl bg-bg shadow-neu-sm transition-all duration-300 hover:shadow-neu hover:-translate-y-[3px] min-w-[100px]"
                whileHover={{
                  boxShadow: "10px 10px 30px #bebebe, -10px -10px 30px #ffffff, 0 0 30px rgba(14,165,233,0.22)",
                }}
              >
                <span className="text-[32px] transition-transform duration-300 group-hover:scale-[1.15]">
                  {tech.icon}
                </span>
                <span className="text-xs font-medium text-text-secondary">{tech.name}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
