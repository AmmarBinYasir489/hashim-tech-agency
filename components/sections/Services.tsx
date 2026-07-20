"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Search,
  Megaphone,
  Palette,
  Figma,
  BrainCircuit,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const servicesList = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom-built, performant websites engineered for speed, SEO, and conversion. No templates — every pixel is intentional.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    desc: "Complex, data-driven web apps with real-time features, intuitive interfaces, and scalable architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps that feel fast, look stunning, and keep users coming back.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Technical SEO, content strategy, and authority building that gets you ranking — and staying — on page one.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Strategic social campaigns that build brand awareness, drive engagement, and convert followers into customers.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Logos, color systems, typography, and brand guides that give your business a cohesive, memorable identity.",
  },
  {
    icon: Figma,
    title: "UI/UX Design",
    desc: "Research-driven design that balances beauty with usability. Wireframes, prototypes, and polished interfaces.",
  },
  {
    icon: BrainCircuit,
    title: "AI Automation",
    desc: "Integrate AI into your workflows — chatbots, content generation, data analysis, and intelligent automation.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    desc: "High-converting online stores with seamless checkout, inventory management, and payment integrations.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <SectionLabel text="What We Do" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
              Services built for
              <br />
              modern businesses
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-snug">
              From concept to launch, we deliver end-to-end digital solutions that drive real results.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {servicesList.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="group bg-bg rounded-neu p-8 shadow-neu transition-all duration-300 hover:shadow-neu-hover hover:-translate-y-1 relative overflow-hidden flex flex-col h-full"
                whileHover={{ rotate: 0.5 }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

                <div className="w-[60px] h-[60px] rounded-2xl bg-bg shadow-neu-in flex items-center justify-center text-2xl text-accent mb-6 transition-all duration-300 group-hover:shadow-neu-in-deep group-hover:scale-105 group-hover:-rotate-3">
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-6">
                  {service.desc}
                </p>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
