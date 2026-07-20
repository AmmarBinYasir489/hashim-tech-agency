import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import NeuCard from './NeuCard'

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <NeuCard className="group p-6 sm:p-8 relative overflow-hidden" delay={index * 0.1}>
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-neu-sm bg-surface flex items-center justify-center mb-6 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15),inset_3px_3px_6px_rgba(0,0,0,0.3)] transition-shadow duration-500">
          <Icon size={26} className="text-accent" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-light transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span>Learn more</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </div>
    </NeuCard>
  )
}
