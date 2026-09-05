"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Search,
  UserCheck,
  FileText,
  Building2,
  Landmark,
  Banknote,
  Wallet,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const servicesList = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc: "Modern, responsive and conversion-focused websites designed around your business goals.",
    cta: "Learn More",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Improve your search visibility, attract organic traffic and reach more potential customers.",
    cta: "Learn More",
  },
  {
    icon: UserCheck,
    title: "Business Profiling",
    desc: "Create a professional online presence that builds credibility and helps customers find you.",
    cta: "Learn More",
  },
  {
    icon: FileText,
    title: "Business Registration",
    desc: "Support with business registration and setting up your business structure correctly.",
    cta: "Learn More",
  },
  {
    icon: Building2,
    title: "Company Registration",
    desc: "Professional support for company formation and registration processes.",
    cta: "Learn More",
  },
  {
    icon: Landmark,
    title: "Business Banking",
    desc: "Guidance around business banking solutions and account setup for your needs.",
    cta: "Learn More",
  },
  {
    icon: Banknote,
    title: "Business Loans",
    desc: "Explore business finance options designed around your business needs and goals.",
    cta: "Learn More",
  },
  {
    icon: Wallet,
    title: "Personal Loans",
    desc: "Simple guidance for exploring suitable personal finance options.",
    cta: "Learn More",
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-bg" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              What We Do
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
              Everything You Need to Move Your Business Forward
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-relaxed">
              From building your online presence to establishing and growing your business, we provide practical solutions under one roof.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.06}
        >
          {servicesList.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="group bg-white rounded-card p-6 border border-gray-100 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-accent/30 flex flex-col h-full"
                whileHover={{ rotate: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                  <service.icon className="w-5 h-5 text-accent transition-colors group-hover:text-white" />
                </div>

                <h3 className="text-base font-semibold mb-2 tracking-tight text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">
                  {service.desc}
                </p>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent group/link"
                >
                  {service.cta}
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
