"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "../ui/SectionLabel";
import ScrollReveal from "../ui/ScrollReveal";

export default function FeaturedServices() {
  return (
    <section className="py-24 lg:py-32" id="featured-services">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-12 lg:mb-20">
          <ScrollReveal>
            <SectionLabel text="Featured Services" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
              Build your online presence. Get found. Grow.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="rounded-neu p-8 lg:p-12 bg-white shadow-neu">
              <h3 className="text-2xl font-bold mb-4">Build Your Online Presence</h3>
              <p className="text-text-secondary mb-6">
                Your website is your digital storefront. We deliver responsive, conversion-focused websites that look professional, load fast, and help you convert visitors into customers.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-text-secondary">
                <li>Responsive, mobile-first design</li>
                <li>SEO-ready structure and performance</li>
                <li>Conversion-focused UX and analytics</li>
                <li>Secure hosting and maintenance options</li>
              </ul>
              <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5B51B] text-[#06152D] rounded-full font-semibold">
                Build My Website
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-neu p-8 lg:p-12 bg-white shadow-neu">
              <h3 className="text-2xl font-bold mb-4">Get Found Online</h3>
              <p className="text-text-secondary mb-6">
                Increase visibility and attract the right customers with a strategic SEO plan — from keywords to technical optimisation and content.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-text-secondary">
                <li>Keyword strategy & content planning</li>
                <li>On-page and technical SEO</li>
                <li>Local SEO and Google Business optimisation</li>
                <li>Performance monitoring and reporting</li>
              </ul>
              <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#0B2854] text-[#0B2854] rounded-full font-semibold">
                Improve My Visibility
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
