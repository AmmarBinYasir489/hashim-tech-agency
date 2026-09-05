"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const projectsList = [
  {
    featured: true,
    image: "https://picsum.photos/seed/mayfair/900/600.jpg",
    alt: "Mayfair Jumpstart",
    category: "Education · Business",
    title: "Mayfair Jumpstart",
    summary:
      "Full business setup and launch for Mayfair Jumpstart — marketing, site, and operational workflows completed.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    url: "https://mayfairjumpstart.com/",
  },
  {
    image: "https://picsum.photos/seed/roadwise/600/400.jpg",
    alt: "Roadwise Recovery",
    category: "Healthcare · Recovery Services",
    title: "Roadwise Recovery",
    summary:
      "Complete business and web presence for Roadwise Recovery — patient intake, scheduling, and SEO-focused site.",
    tech: ["Next.js", "SEO", "Analytics"],
    url: "https://roadwiserecovery.com/",
  },
  {
    featured: true,
    image: "https://picsum.photos/seed/hashim-project-1/900/600.jpg",
    alt: "Meridian Fintech Platform",
    category: "Fintech · Web Application",
    title: "Meridian — Banking Reimagined",
    summary:
      "A full-stack fintech platform handling $2M+ in monthly transactions with real-time dashboards, automated compliance checks, and a seamless onboarding flow that reduced drop-off by 40%.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS"],
  },
  {
    image: "https://picsum.photos/seed/hashim-project-2/600/400.jpg",
    alt: "Orbitra SaaS Dashboard",
    category: "SaaS · Dashboard",
    title: "Orbitra Analytics",
    summary:
      "Real-time analytics dashboard for e-commerce brands with custom reporting, cohort analysis, and AI-powered insights.",
    tech: ["React", "D3.js", "Node.js"],
  },
  {
    image: "https://picsum.photos/seed/hashim-project-3/600/400.jpg",
    alt: "NovaTech Mobile App",
    category: "Healthcare · Mobile App",
    title: "NovaTech Health",
    summary:
      "Cross-platform telehealth app with video consultations, prescription management, and HIPAA-compliant data handling.",
    tech: ["React Native", "Firebase", "WebRTC"],
  },
  {
    image: "https://picsum.photos/seed/hashim-project-4/600/400.jpg",
    alt: "Stratum E-commerce",
    category: "Retail · E-commerce",
    title: "Stratum Store",
    summary:
      "Premium e-commerce experience with 3D product visualization, AR try-on, and a headless commerce backend.",
    tech: ["Next.js", "Shopify", "Three.js"],
  },
  {
    image: "https://picsum.photos/seed/hashim-project-5/600/400.jpg",
    alt: "Apex AI Platform",
    category: "AI · Platform",
    title: "Apex AI Studio",
    summary:
      "No-code AI workflow builder enabling marketing teams to create and deploy custom AI models without engineering support.",
    tech: ["Python", "FastAPI", "React"],
  },
];

export default function Projects() {
  return (
    <section className="py-24 lg:py-32 bg-bg-dark" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-16 lg:mb-24">
          <ScrollReveal>
            <SectionLabel text="Selected Work" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
              Projects that speak
              <br />
              for themselves
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-snug">
              A curated selection of recent work across industries and technologies.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {projectsList.map((project, index) => (
            <StaggerItem
              key={project.title}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <motion.article
                className={`group bg-bg rounded-neu overflow-hidden shadow-neu-sm transition-all duration-200 hover:translate-y-0.5 ${
                  project.featured ? "grid md:grid-cols-[1.2fr_1fr]" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    project.featured ? "h-[250px] md:h-auto md:min-h-[400px]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes={project.featured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="font-mono text-xs text-accent uppercase tracking-[0.1em] mb-4">
                    {project.category}
                  </span>
                  <h3
                    className={`font-bold leading-tight tracking-tight mb-4 ${
                      project.featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-3 py-1 bg-bg rounded-full shadow-neu-in-sm text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.url ?? "#"}
                    target={project.url ? "_blank" : undefined}
                    rel={project.url ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg text-text-primary text-sm font-semibold rounded-full shadow-neu-sm hover:shadow-neu hover:-translate-y-0.5 transition-all duration-300 w-fit"
                  >
                    {project.url ? "Visit Site" : "View Case Study"}
                    <ArrowUpRight className="w-4 h-4" />
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
