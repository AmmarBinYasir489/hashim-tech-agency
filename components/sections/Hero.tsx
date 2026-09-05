"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FloatingShapes from "../ui/FloatingShapes";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[120px] pb-20 overflow-hidden" id="hero">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <FloatingShapes />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[780px] mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg rounded-full shadow-neu-in-sm text-sm text-text-secondary mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 bg-success rounded-full" />
              <span className="absolute inset-[-3px] rounded-full border border-success animate-ping" />
            </span>
            Available for new projects
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            We build digital
            <br />
            products that
            <br />
            <span
              className="bg-gradient-to-r from-accent via-[#a78bfa] to-accent bg-[length:200%_auto] bg-clip-text text-transparent"
              style={{ animation: "gradient-shift 4s ease-in-out infinite" }}
            >
              move businesses
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-text-secondary leading-snug max-w-[560px] mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Hashim Tech is a modern technology agency crafting high-performance websites,
            applications, and digital experiences for startups and enterprises.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-full shadow-accent hover:bg-accent-hover hover:shadow-accent hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-bg text-text-primary text-base font-semibold rounded-full shadow-neu-sm hover:shadow-neu hover:-translate-y-0.5 active:shadow-neu-in-sm active:translate-y-0 transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-tertiary text-xs font-mono tracking-[0.1em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-tertiary to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-text-tertiary"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </section>
  );
}
