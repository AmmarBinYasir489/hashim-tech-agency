"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 w-[52px] h-[52px] rounded-full bg-bg shadow-neu flex items-center justify-center text-accent text-[22px] z-[100] hover:shadow-neu-hover hover:-translate-y-[3px] hover:text-accent-hover active:shadow-neu-in active:translate-y-0 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{
            boxShadow: "15px 15px 40px #b0b0b0, -15px -15px 40px #ffffff, 0 0 30px rgba(14,165,233,0.22)",
          }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
