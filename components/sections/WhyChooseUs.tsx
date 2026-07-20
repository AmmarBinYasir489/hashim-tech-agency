"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, MessageCircle, TrendingUp } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Battle-Tested Quality",
    desc: "Every line of code is reviewed, tested, and optimized. We ship production-grade software — not prototypes.",
  },
  {
    icon: Zap,
    title: "Speed to Market",
    desc: "Our streamlined process gets you from idea to launch in weeks, not months. Without cutting corners.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    desc: "No black boxes. You get weekly updates, direct access to the team, and full visibility into progress.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    desc: "We measure success by your metrics — not vanity numbers. Every decision is tied to business outcomes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32" id="why">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <SectionLabel text="Why Hashim Tech" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
              What sets us apart
              <br />
              from the rest
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-snug">
              We don&apos;t just deliver projects — we build partnerships that drive long-term growth.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {reasons.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="group text-center p-8 lg:p-10 rounded-neu bg-bg shadow-neu transition-all duration-300 hover:shadow-neu-hover hover:-translate-y-1"
                whileHover={{ rotate: 0.3 }}
              >
                <div className="w-[68px] h-[68px] mx-auto mb-6 rounded-2xl bg-bg shadow-neu-in flex items-center justify-center text-[30px] text-accent transition-all duration-300 group-hover:shadow-neu-in-deep group-hover:scale-110 group-hover:-rotate-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
