import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import NeuCard from './NeuCard'

export default function ProjectCard({ 
  title, 
  category, 
  description, 
  technologies = [], 
  image,
  index = 0 
}) {
  return (
    <NeuCard className="group overflow-hidden" delay={index * 0.15}>
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-accent/20 to-surface-lighter bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ 
            backgroundImage: image ? `url(${image})` : 'none',
            backgroundColor: !image ? '#1A2236' : undefined
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-80" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-xs font-medium bg-surface/80 backdrop-blur-md border border-white/[0.06] rounded-full text-accent-light">
            {category}
          </span>
        </div>

        {/* Hover actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <button className="w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md border border-white/[0.06] flex items-center justify-center text-text-primary hover:text-accent hover:border-accent/30 transition-all duration-300 focus-ring">
            <ExternalLink size={16} />
          </button>
          <button className="w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md border border-white/[0.06] flex items-center justify-center text-text-primary hover:text-accent hover:border-accent/30 transition-all duration-300 focus-ring">
            <Github size={16} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-light transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-surface rounded-full border border-white/[0.04] text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </NeuCard>
  )
}
