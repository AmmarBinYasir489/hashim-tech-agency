"use client";

import Link from "next/link";
import { Landmark, Banknote, Wallet, ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const financeCards = [
  {
    icon: Landmark,
    title: "Business Banking",
    desc: "Manage your business with suitable banking solutions. Guidance on accounts, payments, and integrations to keep your finances flowing.",
    cta: "Learn More",
  },
  {
    icon: Banknote,
    title: "Business Loans",
    desc: "Explore funding options designed for growth. Advice and introductions where appropriate. Options subject to eligibility and provider approval.",
    cta: "Explore Options",
  },
  {
    icon: Wallet,
    title: "Personal Loans",
    desc: "Financial support for personal needs. Simple guidance for exploring suitable personal finance options. Subject to eligibility.",
    cta: "Find Out More",
  },
];

export default function Finance() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-navy text-white" id="finance">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[720px] mx-auto mb-12 lg:mb-20">
          <ScrollReveal>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Financial Solutions
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
              Financial Solutions for Life & Business
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/70">
              Options subject to eligibility and provider approval.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {financeCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="group p-8 rounded-card-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-accent/30 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                  <card.icon className="w-6 h-6 text-accent transition-colors group-hover:text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
                  {card.desc}
                </p>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent group/link"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
