"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Code, Rocket } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us What You Need",
    desc: "Submit your enquiry and tell us about your business goals. We'll review your requirements and get back to you.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Understand Your Goals",
    desc: "We review your requirements in detail and prepare a tailored approach that aligns with your business objectives.",
  },
  {
    number: "03",
    icon: Code,
    title: "We Build Your Solution",
    desc: "Our team works on the appropriate solution, keeping you informed throughout the process with regular updates.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Grow",
    desc: "You move forward with professional support. We're here to help you optimize, scale, and evolve.",
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-bg" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              How It Works
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
              Simple Process. Clear Results.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-relaxed">
              A straightforward approach that removes uncertainty and delivers predictable, high-quality results.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StaggerContainer className="contents" staggerDelay={0.1}>
            {steps.map((step, i) => (
              <StaggerItem key={step.number}>
                <div className="relative">
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gray-200" />
                  )}

                  <div className="text-center">
                    <div className="relative inline-flex">
                      <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 shadow-card flex items-center justify-center mb-6 transition-all duration-300 hover:shadow-card-hover hover:border-accent/30">
                        <step.icon className="w-7 h-7 text-accent" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-accent text-text-primary text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 tracking-tight">
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
