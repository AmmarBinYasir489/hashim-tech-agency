"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-[#06152D]/95 backdrop-blur-[6px] saturate-[1.05] shadow-[0_6px_20px_rgba(2,6,23,0.5)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className={`max-w-[1440px] mx-auto flex items-center justify-between gap-6 transition-all duration-300 ${
            scrolled
              ? "px-6 lg:px-8 py-3"
              : "px-6 lg:px-8 py-6"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold tracking-tight z-10">
            <div className="w-14 h-14 rounded-[10px] overflow-hidden flex-shrink-0">
              <Image src="/logo.png" alt="Hashim Tech" width={56} height={56} className="object-cover" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-transparent p-1 rounded-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                  activeSection === link.href
                    ? "bg-[#08233f] font-semibold text-[#F5B51B]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#F5B51B] text-[#06152D] text-sm font-semibold rounded-full shadow-md hover:brightness-95 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-[10px] flex items-center justify-center shadow-neu-in-sm text-text-primary hover:shadow-neu-in transition-shadow"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed top-0 right-0 w-[min(380px,85vw)] h-screen bg-bg z-[999] lg:hidden flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-black/5">
              <Link href="/" className="flex items-center gap-3 font-bold">
                <div className="w-12 h-12 rounded-[10px] overflow-hidden flex-shrink-0">
                  <Image src="/logo.png" alt="Hashim Tech" width={48} height={48} className="object-cover" />
                </div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-[10px] bg-bg shadow-neu-sm flex items-center justify-center hover:shadow-neu transition-shadow"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-1 p-6 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-5 py-4 rounded-2xl text-base font-medium text-text-secondary hover:text-text-primary hover:bg-bg-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-6 border-t border-black/5">
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-white font-semibold rounded-full shadow-accent hover:bg-accent-hover transition-colors"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
