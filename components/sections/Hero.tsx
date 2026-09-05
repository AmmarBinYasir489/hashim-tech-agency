"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[120px] pb-20 overflow-hidden bg-bg" id="home">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--text-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="max-w-[640px]">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm text-accent mb-6 font-semibold tracking-wide uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Digital &amp; Business Solutions
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              We Build Your Digital Presence.
              <br />
              <span className="text-accent">We Help Your Business Grow.</span>
            </motion.h1>

            <motion.p
              className="text-lg text-text-secondary leading-relaxed mb-8 max-w-[520px]"
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
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-text-primary rounded-xl font-semibold shadow-accent hover:bg-accent-hover transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-text-primary rounded-xl font-semibold hover:border-accent hover:shadow-card transition-all duration-200"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right - Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[560px]">
              {/* Main card */}
              <motion.div
                className="rounded-card-xl bg-white shadow-card-lg p-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="rounded-card-lg overflow-hidden bg-gradient-to-br from-bg-dark to-bg-dark-alt h-[300px] md:h-[360px] flex items-center justify-center relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop"
                    alt="Business analytics dashboard showing growth metrics"
                    className="object-cover w-full h-full opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                          <span className="text-accent font-bold text-lg">H</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text-primary">Digital Growth</p>
                          <p className="text-xs text-text-secondary">Building your online presence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card - phone */}
              <motion.div
                className="absolute -right-6 -bottom-8 w-[140px] h-[280px] rounded-card-xl bg-white shadow-card-lg overflow-hidden hidden sm:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=60&auto=format&fit=crop"
                  alt="Mobile responsive website"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating card - analytics */}
              <motion.div
                className="absolute -left-6 -top-8 w-[140px] h-[140px] rounded-card-xl bg-white shadow-card-lg overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=60&auto=format&fit=crop"
                  alt="SEO analytics"
                  className="w-full h-full object-cover"
                />
              </motion.div>
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
    </section>
  );
}
