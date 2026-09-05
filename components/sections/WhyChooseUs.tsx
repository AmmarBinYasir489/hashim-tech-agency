"use client";

import { motion } from "framer-motion";
import { Layers, Users, Target, Zap, Heart, TrendingUp } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const reasons = [
  {
    icon: Layers,
    title: "One Place. Multiple Solutions.",
    desc: "Digital and business services under one roof. No need to juggle multiple providers.",
  },
  {
    icon: Users,
    title: "Professional Approach",
    desc: "Clear communication and practical solutions. We keep you informed every step of the way.",
  },
  {
    icon: Target,
    title: "Business-Focused",
    desc: "Everything is designed around your goals. We understand what matters to your business.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    desc: "Modern websites, digital tools and online strategies that keep you ahead of the curve.",
  },
  {
    icon: Heart,
    title: "Personal Support",
    desc: "We make the process easier from enquiry to completion. Your success is our priority.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    desc: "We focus on building solutions that support long-term growth and sustainable success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Why Hashim Tech
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
              Why Businesses Choose Hashim Tech
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-relaxed">
              We combine digital expertise with business knowledge to deliver solutions that truly make a difference.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <motion.div
                className="group bg-bg rounded-card p-8 border border-gray-100 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-accent/30 h-full"
                whileHover={{ rotate: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                  <reason.icon className="w-5 h-5 text-accent transition-colors group-hover:text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-2 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
