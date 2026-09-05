"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const testimonialsData = [
  {
    quote: "Excellent work — Hashim Tech delivered a beautiful logo with a quick turnaround and took on board my preferences. Highly recommended.",
    name: "Mam Naheeda",
    role: "Owner, Synergy Therapy Rooms",
    avatar: "https://picsum.photos/seed/avatar-naheeda/88/88.jpg",
    url: "https://synergytherapyrooms.co.uk/",
  },
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
    <section className="relative py-24 lg:py-32 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Client Reviews
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
              What Our Clients Say
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-relaxed">
              Don&apos;t take our word for it — hear from the businesses we&apos;ve helped.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {testimonialsData.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="group bg-bg rounded-card p-8 border border-gray-100 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 flex flex-col h-full"
                whileHover={{ rotate: 0.3 }}
              >
                <div className="flex gap-0.5 text-accent text-sm mb-6" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent" />
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed flex-1 mb-8 italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-text-primary">{t.name}</div>
                    <div className="text-xs text-text-secondary">{t.role}</div>
                  </div>
                  {t.url && (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover transition-colors"
                      aria-label={`Visit ${t.name}'s website`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
