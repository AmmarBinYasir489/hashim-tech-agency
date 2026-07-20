"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";

const serviceLinks = [
  { label: "Website Development", href: "#services" },
  { label: "Web Applications", href: "#services" },
  { label: "Mobile Apps", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
  { label: "AI Automation", href: "#services" },
];

const companyLinks = [
  { label: "About Us", href: "#why" },
  { label: "Portfolio", href: "#projects" },
  { label: "Our Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const resourceLinks = [
  { label: "Blog", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socials = [
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail("");
      alert("Thanks for subscribing!");
    }
  };

  return (
    <footer className="border-t border-black/[0.06] pt-16 lg:pt-24 pb-8" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="w-9 h-9 bg-accent rounded-[10px] flex items-center justify-center text-white font-bold text-sm shadow-accent">
                HT
              </div>
              <span>Hashim Tech</span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mt-4 max-w-[300px]">
              A modern technology agency crafting digital products that drive business growth. We turn ambitious ideas into exceptional realities.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-[10px] bg-bg shadow-neu-in-sm flex items-center justify-center text-lg text-text-secondary hover:text-accent hover:shadow-neu-in transition-all duration-300"
                  whileHover={{ y: -3, rotate: -5 }}
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-[0.06em]">Services</h4>
            <div className="flex flex-col gap-1">
              {serviceLinks.map((link) => (
                <motion.div key={link.label} whileHover={{ x: 3 }}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors py-1 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-[0.06em]">Company</h4>
            <div className="flex flex-col gap-1">
              {companyLinks.map((link) => (
                <motion.div key={link.label} whileHover={{ x: 3 }}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors py-1 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-[0.06em]">Resources</h4>
            <div className="flex flex-col gap-1">
              {resourceLinks.map((link) => (
                <motion.div key={link.label} whileHover={{ x: 3 }}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors py-1 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="p-5 rounded-2xl bg-bg shadow-neu-in-sm">
              <h4 className="text-sm font-bold mb-1 text-text-primary">Stay Updated</h4>
              <p className="text-xs text-text-tertiary mb-3 leading-snug">
                Get insights on design, development, and digital strategy delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-2 bg-bg rounded-full shadow-neu-in-sm text-xs text-text-primary placeholder:text-text-tertiary focus:outline-none focus:shadow-neu-in transition-shadow"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent text-white rounded-full text-xs font-semibold shadow-accent hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-150"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-black/[0.06] gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; 2026 Hashim Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-text-tertiary hover:text-text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
