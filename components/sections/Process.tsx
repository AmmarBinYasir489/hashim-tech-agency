"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Code, Rocket, CheckCircle } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us What You Need",
    desc: "Submit your enquiry through our WhatsApp form or contact us directly. Tell us about your business, your goals, and what you need help with.",
    details: [
      "Fill out the enquiry form",
      "Tell us about your business",
      "Share your goals and timeline",
      "We respond within 24 hours",
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "We Understand Your Goals",
    desc: "We review your requirements in detail, ask the right questions, and prepare a tailored approach that aligns with your business objectives.",
    details: [
      "Detailed requirements review",
      "Goal alignment discussion",
      "Tailored proposal creation",
      "Clear timeline & pricing",
    ],
  },
  {
    number: "03",
    icon: Code,
    title: "We Build Your Solution",
    desc: "Our team works on the appropriate solution, keeping you informed throughout the process with regular updates and milestone check-ins.",
    details: [
      "Regular progress updates",
      "Milestone check-ins",
      "Quality assurance testing",
      "Revisions until you&apos;re happy",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Grow",
    desc: "You move forward with professional support. We&apos;re here to help you optimize, scale, and evolve your business long after launch.",
    details: [
      "Professional launch support",
      "Post-launch guidance",
      "Ongoing maintenance options",
      "Long-term growth partner",
    ],
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
              From your first enquiry to launch and beyond — here&apos;s how we work with you every step of the way.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[1100px] mx-auto">
          <StaggerContainer className="contents" staggerDelay={0.1}>
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="group bg-white rounded-card p-8 border border-gray-100 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-accent/30 h-full">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                        <step.icon className="w-7 h-7 text-accent transition-colors group-hover:text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-text-primary text-white text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 ml-[84px]">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-xs text-text-secondary" dangerouslySetInnerHTML={{ __html: detail }} />
                      </div>
                    ))}
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
