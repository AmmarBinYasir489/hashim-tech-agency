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
    title: "Website Design & Development",
    desc: "Modern, responsive, conversion-focused websites built around your business goals.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Improve visibility and attract organic traffic with technical, local and content SEO.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Profiling",
    desc: "Create a professional business profile that builds credibility and helps customers find you.",
  },
  {
    icon: Globe,
    title: "Business Registration",
    desc: "Support setting up your business legally and correctly, including documentation guidance.",
  },
  {
    icon: Globe,
    title: "Company Registration",
    desc: "Professional guidance for company formation and registration processes.",
  },
  {
    icon: ShoppingBag,
    title: "Business Banking",
    desc: "Guidance on selecting and setting up banking solutions suitable for your business needs.",
  },
  {
    icon: Megaphone,
    title: "Business Loans",
    desc: "Explore funding options tailored to your business requirements (subject to eligibility).",
  },
  {
    icon: Smartphone,
    title: "Personal Loans",
    desc: "Support and guidance for personal finance options with transparent, compliant messaging.",
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
