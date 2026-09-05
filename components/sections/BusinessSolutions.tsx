"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const features = [
  "Business Registration",
  "Company Registration",
  "Business Structure Guidance",
  "Documentation Support",
  "Professional Setup",
];

export default function BusinessSolutions() {
  return (
    <section className="py-24 lg:py-32 bg-bg" id="business-solutions">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="rounded-card-xl overflow-hidden shadow-card-lg">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop"
                  alt="Business registration and company formation documents"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-card-xl bg-accent/10 -z-10" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Business Solutions
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6">
                From Idea to Registered Business
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Starting a business? We provide comprehensive support from initial concept through to full registration. Our team guides you through every step of the process, ensuring your business is set up correctly from day one.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-text-primary rounded-xl font-semibold shadow-accent hover:bg-accent-hover transition-all duration-200"
              >
                Start Your Business
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
