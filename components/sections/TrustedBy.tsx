"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";

const logos = ["Acme Co", "NovaTech", "Meridian", "Apex Labs", "Stratum", "Orbitra"];

export default function TrustedBy() {
  return (
    <section className="py-12 border-t border-b border-black/5" aria-label="Trusted by companies">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-center text-xs font-mono text-text-tertiary uppercase tracking-[0.12em] mb-8">
            Trusted by forward-thinking companies
          </p>
        </ScrollReveal>
        <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
          {logos.map((logo, i) => (
            <motion.span
              key={logo}
              className="text-xl font-bold tracking-tight text-text-primary/35 hover:text-text-primary/80 transition-opacity duration-300 cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
