"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const testimonialsData = [
  {
    quote: "Hashim Tech transformed our outdated platform into something our users actually love. The attention to detail in both design and performance was remarkable. Our conversion rate jumped 35% within two months of launch.",
    name: "Sarah Chen",
    role: "CEO, Meridian Finance",
    avatar: "https://picsum.photos/seed/avatar-sarah/88/88.jpg",
  },
  {
    quote: "Working with Hashim Tech felt like having an in-house team that truly understood our vision. They didn't just build what we asked — they challenged our assumptions and delivered something better.",
    name: "Marcus Wright",
    role: "CTO, Orbitra Analytics",
    avatar: "https://picsum.photos/seed/avatar-marcus/88/88.jpg",
  },
  {
    quote: "The mobile app they built for us handles thousands of daily sessions without a hitch. Their technical expertise in healthcare compliance gave us total confidence. Absolutely world-class work.",
    name: "Aisha Patel",
    role: "Founder, NovaTech Health",
    avatar: "https://picsum.photos/seed/avatar-aisha/88/88.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <SectionLabel text="Client Testimonials" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
              What our clients
              <br />
              say about us
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-snug">
              Don't take our word for it — hear from the teams we've worked with.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
          {testimonialsData.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="group bg-bg rounded-neu p-8 lg:p-10 shadow-neu transition-all duration-300 hover:shadow-neu-hover hover:-translate-y-1 flex flex-col h-full"
                whileHover={{ rotate: 0.3 }}
              >
                <div className="flex gap-0.5 text-amber-500 text-sm mb-6" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-8 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-black/[0.06]">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-neu-in flex-shrink-0">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-text-tertiary">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
