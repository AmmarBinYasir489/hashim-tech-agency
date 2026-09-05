"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  url?: string;
}

const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mam Naheeda",
    role: "Owner",
    company: "Synergy Therapy Rooms",
    content: "Excellent work — Hashim Tech delivered a beautiful logo with a quick turnaround and took on board my preferences. Highly recommended.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-naheeda/88/88.jpg",
    url: "https://synergytherapyrooms.co.uk/",
  },
  {
    id: "2",
    name: "Fhad Rehman",
    role: "Founder",
    company: "Mayfair Battery & Jumpstart",
    content: "Hashim Tech set up everything from scratch — logo, website, social media, business registration. Professional service from start to finish.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-fhad/88/88.jpg",
    url: "https://mayfairjumpstart.com/",
  },
  {
    id: "3",
    name: "Fhad Rehman",
    role: "Founder",
    company: "Roadwise Breakdown Recovery",
    content: "Second business I trusted Hashim Tech with. Logo, full website, social media — everything delivered on time and exactly as requested.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-fhad2/88/88.jpg",
    url: "https://roadwiserecovery.com/",
  },
  {
    id: "4",
    name: "Sarah Chen",
    role: "Director of Operations",
    company: "Meridian Finance",
    content: "Hashim Tech transformed our outdated platform into something our users actually love. The attention to detail in both design and performance was remarkable.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-sarah/88/88.jpg",
  },
  {
    id: "5",
    name: "Marcus Wright",
    role: "CTO",
    company: "Orbitra Analytics",
    content: "Working with Hashim Tech felt like having an in-house team that truly understood our vision. They didn't just build what we asked — they delivered something better.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-marcus/88/88.jpg",
  },
  {
    id: "6",
    name: "Aisha Patel",
    role: "Founder",
    company: "NovaTech Health",
    content: "The mobile app they built for us handles thousands of daily sessions without a hitch. Their technical expertise in healthcare compliance gave us total confidence.",
    rating: 5,
    avatar: "https://picsum.photos/seed/avatar-aisha/88/88.jpg",
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setTestimonials(data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let speed = 0.5;

    const animate = () => {
      if (!isPaused.current && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animId);
  }, [testimonials]);

  const duplicated = [...testimonials, ...testimonials];

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -400 : 400;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden" id="testimonials">
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
      </div>

      <div className="relative">
        <button
          onClick={() => scrollBy("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors hidden sm:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-text-primary" />
        </button>
        <button
          onClick={() => scrollBy("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors hidden sm:flex"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-text-primary" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          style={{ scrollBehavior: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
        {duplicated.map((t, idx) => (
          <div
            key={`${t.id}-${idx}`}
            className="flex-shrink-0 w-[380px] bg-bg rounded-card p-8 border border-gray-100 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 flex flex-col"
          >
            <div className="flex gap-0.5 text-accent text-sm mb-6" aria-label={`${t.rating} out of 5 stars`}>
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent" />
              ))}
            </div>
            <p className="text-text-secondary leading-relaxed flex-1 mb-8 italic">
              &quot;{t.content}&quot;
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              {t.avatar && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-text-primary truncate">{t.name}</div>
                <div className="text-xs text-text-secondary truncate">{t.role}, {t.company}</div>
              </div>
              {t.url && (
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors flex-shrink-0"
                  aria-label={`Visit ${t.name}'s website`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
