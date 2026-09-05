"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "How It Works" },
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
            ? "bg-white/95 backdrop-blur-md shadow-nav"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className={`max-w-[1440px] mx-auto flex items-center justify-between gap-6 transition-all duration-300 ${
            scrolled ? "px-6 lg:px-8 py-3" : "px-6 lg:px-8 py-5"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
              <Image src="/logo.png" alt="Hashim Tech" width={56} height={56} className="object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href
                    ? "text-accent bg-accent/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-gray-100"
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
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-text-primary text-sm font-semibold rounded-lg shadow-accent hover:bg-accent-hover transition-all duration-200"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-text-primary hover:bg-gray-100 transition-colors"
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
            className="fixed top-0 right-0 w-[min(380px,85vw)] h-screen bg-white z-[999] lg:hidden flex flex-col shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
              <Link href="/" className="flex items-center">
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src="/logo.png" alt="Hashim Tech" width={48} height={48} className="object-contain" />
                </div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
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
                    className="block px-5 py-4 rounded-xl text-base font-medium text-text-secondary hover:text-text-primary hover:bg-gray-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-100">
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-text-primary font-semibold rounded-xl shadow-accent hover:bg-accent-hover transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
