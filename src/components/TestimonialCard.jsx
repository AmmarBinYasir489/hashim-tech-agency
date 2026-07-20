import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import NeuCard from './NeuCard'

export default function TestimonialCard({ 
  quote, 
  author, 
  role, 
  company,
  rating = 5,
  index = 0 
}) {
  return (
    <NeuCard className="p-6 sm:p-8 relative" delay={index * 0.1}>
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote size={48} className="text-accent" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-surface-lighter'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote text */}
      <p className="text-text-primary text-base leading-relaxed mb-6 italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-semibold text-sm shadow-lg">
          {author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="text-text-primary font-medium text-sm">{author}</p>
          <p className="text-text-muted text-xs">{role} · {company}</p>
        </div>
      </div>
    </NeuCard>
  )
}
