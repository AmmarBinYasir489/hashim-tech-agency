"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  services: string[];
  image: string;
  fallbackImage: string;
  alt: string;
  url?: string;
  featured: boolean;
}

const fallbackProjects: Project[] = [
  {
    id: "1",
    featured: true,
    image: "https://synergytherapyrooms.co.uk/wp-content/uploads/2026/07/synergytherapyrooms_logo-1.png",
    fallbackImage: "https://synergytherapyrooms.co.uk/wp-content/uploads/2026/07/synergytherapyrooms_logo-1.png",
    alt: "Synergy Therapy Rooms logo",
    category: "Healthcare · Branding · Logo",
    title: "Synergy Therapy Rooms",
    summary: "Complete brand identity for Mam Naheeda's health, wellness and aesthetics clinic — logo design, favicon, Instagram branding, and professional WordPress website.",
    tech: ["Logo Design", "Favicon", "Branding", "WordPress"],
    url: "https://synergytherapyrooms.co.uk/",
    services: ["Logo", "Favicon", "Instagram Logo", "Website"],
  },
  {
    id: "2",
    featured: true,
    image: "https://mayfairjumpstart.com/og-image.jpg",
    fallbackImage: "https://picsum.photos/seed/mayfair/900/600.jpg",
    alt: "Mayfair Battery & Jumpstart website",
    category: "Business Setup · Website · Social Media",
    title: "Mayfair Battery & Jumpstart",
    summary: "Full business setup for Fhad Rehman — logo design, business profiling, company registration, professional website, social media setup, and ongoing digital presence management.",
    tech: ["Logo Design", "Business Profiling", "Company Registration", "Web Design", "Social Media"],
    url: "https://mayfairjumpstart.com/",
    services: ["Logo", "Business Profiling", "Company Registration", "Website", "Social Media", "SEO"],
  },
  {
    id: "3",
    featured: true,
    image: "https://roadwiserecovery.com/og-image.jpg",
    fallbackImage: "https://picsum.photos/seed/roadwise/900/600.jpg",
    alt: "Roadwise Breakdown Recovery website",
    category: "Business Setup · Website · Social Media",
    title: "Roadwise Breakdown Recovery",
    summary: "Complete business setup for Fhad Rehman — logo design, business profiling, professional website with booking system, social media management, and full digital branding.",
    tech: ["Logo Design", "Business Profiling", "Web Design", "Social Media", "SEO"],
    url: "https://roadwiserecovery.com/",
    services: ["Logo", "Business Profiling", "Company Registration", "Website", "Social Media", "SEO"],
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProjects(data);
      })
      .catch(() => {});
  }, []);

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
              Client Work We&apos;ve Delivered
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/70 leading-relaxed">
              Real businesses. Real results. Here&apos;s what we&apos;ve built for our clients — from logos and branding to full business setup and websites.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {projects.map((project) => (
            <StaggerItem
              key={project.id || project.title}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <motion.article
                className={`group bg-bg-dark-alt/50 rounded-card overflow-hidden border border-white/10 transition-all duration-300 hover:border-accent/30 hover:shadow-card-lg ${
                  project.featured ? "grid md:grid-cols-[1.2fr_1fr]" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-white/5 flex items-center justify-center ${
                    project.featured ? "h-[250px] md:h-auto md:min-h-[380px]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.04]"
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
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  {project.services && project.services.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] px-3 py-1 bg-accent/20 rounded-full text-accent border border-accent/30"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
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
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent group/link"
                    >
                      Visit Live Site
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  )}
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
