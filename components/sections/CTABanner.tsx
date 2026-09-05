"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32 bg-bg" id="cta">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="relative bg-gradient-navy rounded-card-xl p-12 lg:p-20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

            <div className="relative z-10 text-center max-w-[700px] mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 text-white">
                Ready to Take the Next Step?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Whether you need a website, better visibility, business registration or financial support, we&apos;re here to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-text-primary rounded-xl font-semibold shadow-accent hover:bg-accent-hover transition-all duration-200"
                >
                  Start Your Enquiry
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:7882733546"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60">
                <a href="tel:7882733546" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+44 7882733546</span>
                </a>
                <a href="mailto:hashimtechsolutions@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">hashimtechsolutions@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
