"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <motion.div
            className="relative bg-accent rounded-neu-xl p-12 lg:p-20 text-center overflow-hidden shadow-accent"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative orbs */}
            <div className="absolute -top-1/2 -right-[20%] w-[500px] h-[500px] rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute -bottom-[30%] -left-[10%] w-[400px] h-[400px] rounded-full bg-white/[0.06] pointer-events-none" />

            <h2 className="relative z-10 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
              Ready to build something
              <br />
              that matters?
            </h2>
            <p className="relative z-10 text-lg text-white/80 max-w-[500px] mx-auto mb-8">
              Let's talk about your project. No sales pitch — just an honest conversation about what's possible.
            </p>
            <Link
              href="#contact"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-bold text-base rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:bg-bg-light hover:text-accent-hover hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              Schedule a Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
