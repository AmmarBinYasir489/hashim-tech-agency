"use client";

import { motion } from "framer-motion";
import { Shield, Target, Clock, TrendingUp } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const values = [
  { icon: Shield, label: "Professional Solutions" },
  { icon: Target, label: "Business-Focused Support" },
  { icon: Clock, label: "Simple Process" },
  { icon: TrendingUp, label: "Long-Term Growth" },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">
              Built for Business Growth
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <motion.div
                className="flex flex-col items-center gap-3 text-center"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-text-secondary">
                  {item.label}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
