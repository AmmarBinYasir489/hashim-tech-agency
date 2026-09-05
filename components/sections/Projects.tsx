"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const projectsList = [
  {
    featured: true,
    image: "https://mayfairjumpstart.com/og-image.jpg",
    fallbackImage: "https://picsum.photos/seed/mayfair/900/600.jpg",
    alt: "Mayfair Jumpstart website",
    category: "Business Setup · Website",
    title: "Mayfair Jumpstart",
    summary:
      "Complete business setup for Fhad Rehman — including website design, business profiling, social media setup, and operational workflows.",
    tech: ["Website Design", "Business Profiling", "Social Media"],
    url: "https://mayfairjumpstart.com/",
  },
  {
    featured: true,
    image: "https://roadwiserecovery.com/og-image.jpg",
    fallbackImage: "https://picsum.photos/seed/roadwise/900/600.jpg",
    alt: "Roadwise Recovery website",
    category: "Healthcare · Recovery Services",
    title: "Roadwise Recovery",
    summary:
      "Full business and web presence for Roadwise Recovery — patient intake, scheduling, and SEO-focused site built for Fhad Rehman.",
    tech: ["Website Design", "SEO", "Business Profiling"],
    url: "https://roadwiserecovery.com/",
  },
  {
    image: "https://picsum.photos/seed/meridian-fin/600/400.jpg",
    alt: "Meridian Finance platform",
    category: "Finance · Web Application",
    title: "Meridian — Banking Reimagined",
    summary:
      "A fintech platform with real-time dashboards, automated compliance checks, and a seamless onboarding flow.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    image: "https://picsum.photos/seed/orbitra/600/400.jpg",
    alt: "Orbitra Analytics dashboard",
    category: "Analytics · SaaS Dashboard",
    title: "Orbitra Analytics",
    summary:
      "Real-time analytics dashboard for e-commerce brands with custom reporting and AI-powered insights.",
    tech: ["React", "D3.js", "Node.js"],
  },
  {
    image: "https://picsum.photos/seed/novatech/600/400.jpg",
    alt: "NovaTech Health app",
    category: "Healthcare · Mobile App",
    title: "NovaTech Health",
    summary:
      "Cross-platform telehealth app with video consultations, prescription management, and HIPAA-compliant data handling.",
    tech: ["React Native", "Firebase", "WebRTC"],
  },
  {
    image: "https://picsum.photos/seed/synergy-therapy/600/400.jpg",
    alt: "Synergy Therapy Rooms website",
    category: "Healthcare · Business Website",
    title: "Synergy Therapy Rooms",
    summary:
      "Professional website for Mam Naheeda's therapy business — logo design, branding, and a beautiful client-facing site.",
    tech: ["Web Design", "Logo Design", "Branding"],
    url: "https://synergytherapyrooms.co.uk/",
  },
];

export default function Projects() {
  return (
    <section className="py-24 lg:py-32 bg-bg-dark" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-20">
          <ScrollReveal>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Our Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
              Projects That Speak for Themselves
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/70 leading-relaxed">
              Real businesses. Real results. Here&apos;s what we&apos;ve built for our clients.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {projectsList.map((project) => (
            <StaggerItem
              key={project.title}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <motion.article
                className={`group bg-bg-dark-alt/50 rounded-card overflow-hidden border border-white/10 transition-all duration-300 hover:border-accent/30 hover:shadow-card-lg ${
                  project.featured ? "grid md:grid-cols-[1.2fr_1fr]" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    project.featured ? "h-[250px] md:h-auto md:min-h-[380px]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes={project.featured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = project.fallbackImage || "https://picsum.photos/seed/default/600/400.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="text-xs text-accent uppercase tracking-widest mb-4 font-semibold">
                    {project.category}
                  </span>
                  <h3
                    className={`font-bold leading-tight tracking-tight mb-4 text-white ${
                      project.featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-3 py-1 bg-white/5 rounded-full text-white/70 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.url ?? "#"}
                    target={project.url ? "_blank" : undefined}
                    rel={project.url ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent group/link"
                  >
                    {project.url ? "Visit Site" : "View Details"}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </Link>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
