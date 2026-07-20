"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <>
      <motion.div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
          top: -100,
          right: -80,
        }}
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)",
          bottom: -60,
          left: -40,
        }}
        animate={{
          x: [0, 25, 0],
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 150,
          height: 150,
          background: "radial-gradient(circle, rgba(255,152,0,0.06) 0%, transparent 70%)",
          top: "40%",
          right: "10%",
        }}
        animate={{
          x: [0, -15, 20, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
