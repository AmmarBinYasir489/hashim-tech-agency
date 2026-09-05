"use client";

import ScrollReveal from "../ui/ScrollReveal";

const stats = [
  { label: "Web", value: "Design & Dev" },
  { label: "SEO", value: "Optimization" },
  { label: "Business", value: "Registration" },
  { label: "Finance", value: "Solutions" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-navy">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-widest">
                  {stat.value}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
