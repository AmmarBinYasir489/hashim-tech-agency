"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const webFeatures = [
  "Responsive, mobile-first design",
  "SEO-ready structure and performance",
  "Conversion-focused UX and analytics",
  "Secure hosting and maintenance options",
  "Professional appearance",
  "Built around your business",
];

const seoFeatures = [
  "Keyword strategy & content planning",
  "On-page and technical SEO",
  "Local SEO and Google Business optimisation",
  "Performance monitoring and reporting",
  "Content optimization",
  "Search visibility improvement",
];

export default function FeaturedServices() {
  return (
    <section className="py-24 lg:py-32 bg-white" id="featured-services">
      <div className="container mx-auto px-6">
        {/* Build Your Online Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          <ScrollReveal>
            <div className="relative">
              <div className="rounded-card-xl overflow-hidden shadow-card-lg">
                <img
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80&auto=format&fit=crop"
                  alt="Modern website design on laptop and smartphone"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-card-xl bg-accent/10 -z-10" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Website Development
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6">
                Your Website Is Your Digital Storefront
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                We deliver responsive, conversion-focused websites that look professional, load fast, and help you convert visitors into customers. Every website is built around your specific business goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {webFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-text-primary rounded-xl font-semibold shadow-accent hover:bg-accent-hover transition-all duration-200"
              >
                Build My Website
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Get Found Online */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                SEO Services
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6">
                More Visibility. More Opportunities.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Increase visibility and attract the right customers with a strategic SEO plan — from keywords to technical optimisation and content that drives results.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {seoFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-white rounded-xl font-semibold hover:bg-text-secondary transition-all duration-200"
              >
                Improve My Visibility
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-card-xl overflow-hidden shadow-card-lg">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop"
                  alt="SEO analytics dashboard showing search rankings"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-card-xl bg-text-primary/5 -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
