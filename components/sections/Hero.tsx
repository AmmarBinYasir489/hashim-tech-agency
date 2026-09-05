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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="max-w-[640px]">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F7F9FC] rounded-full text-sm text-[#0B2854] mb-6 font-medium shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              DIGITAL &amp; BUSINESS SOLUTIONS
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 text-[#06152D]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              We Build Your Digital Presence.
              <br />
              <span className="text-[#F5B51B]">We Help Your Business Grow.</span>
            </motion.h1>

            <motion.p
              className="text-lg text-[#0B2854] leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From websites and SEO to business registration, banking and finance support — Hashim Tech helps you build, launch and grow with confidence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5B51B] text-[#06152D] rounded-full font-semibold">
                Get Started
              </Link>
              <Link href="#services" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#0B2854] text-[#0B2854] rounded-full font-semibold">
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right - Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[560px]">
              <div className="rounded-[24px] bg-white shadow-lg p-6">
                <div className="rounded-[16px] overflow-hidden bg-[#06152D] h-[280px] md:h-[340px] flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop" alt="dashboard" className="object-cover w-full h-full opacity-90" />
                </div>
              </div>
              <div className="absolute -right-8 -bottom-10 w-[160px] h-[320px] rounded-[24px] bg-white shadow-md overflow-hidden transform rotate-6">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=60&auto=format&fit=crop" alt="phone" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -left-8 -top-12 w-[160px] h-[160px] rounded-[24px] bg-white shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526378721410-9f6f0b4d5d2f?w=800&q=60&auto=format&fit=crop" alt="analytics" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
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
