"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const serviceLinks = [
  { label: "Website", href: "#services" },
  { label: "SEO", href: "#services" },
  { label: "Business Profiling", href: "#services" },
  { label: "Business Registration", href: "#services" },
  { label: "Company Registration", href: "#services" },
  { label: "Business Banking", href: "#services" },
  { label: "Business Loans", href: "#services" },
  { label: "Personal Loans", href: "#services" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white pt-16 lg:pt-24 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <div className="w-14 h-14 rounded-xl overflow-hidden">
                <Image src="/logo.png" alt="Hashim Tech" width={56} height={56} className="object-contain" />
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-[300px]">
              Digital Solutions. Real Results. Helping businesses build, grow and succeed with professional digital and business services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/80">Services</h4>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/80">Company</h4>
            <div className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/80">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:7882733546" className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                7882733546
              </a>
              <a href="mailto:hashimtechsolutions@gmail.com" className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                hashimtechsolutions@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Hashim Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
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
