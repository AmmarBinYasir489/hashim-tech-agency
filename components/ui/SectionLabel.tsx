"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 font-mono text-xs font-medium text-accent uppercase tracking-[0.1em] mb-6 px-4 py-2 bg-bg rounded-full"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
      {text}
    </motion.div>
  );
}
