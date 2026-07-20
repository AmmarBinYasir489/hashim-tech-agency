"use client";

import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import StaggerContainer, { StaggerItem } from "../ui/StaggerContainer";

const statsData = [
  { count: 150, suffix: "+", label: "Projects Delivered" },
  { count: 98, suffix: "%", label: "Client Satisfaction" },
  { count: 5, suffix: "+", label: "Years of Experience" },
  { count: 40, suffix: "+", label: "Active Clients" },
];

function StatCard({
  count,
  suffix,
  label,
}: {
  count: number;
  suffix: string;
  label: string;
}) {
  const { ref, count: animatedCount } = useCounter(count, 2000, suffix);

  return (
    <motion.div
      ref={ref}
      className="group text-center p-8 lg:p-10 rounded-neu bg-bg-dark shadow-neu transition-all duration-300 hover:shadow-neu-hover hover:-translate-y-[3px]"
    >
      <div className="text-4xl lg:text-5xl font-bold tracking-tight leading-none mb-2 bg-gradient-to-br from-text-primary to-accent bg-clip-text text-transparent">
        {animatedCount}{suffix}
      </div>
      <div className="text-sm text-text-secondary font-medium">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 lg:py-24 bg-bg-dark overflow-hidden" id="stats">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(14,165,233,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {statsData.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCard {...stat} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
