import { motion } from 'framer-motion'

export default function SectionHeading({ 
  eyebrow, 
  title, 
  description,
  align = 'center',
  className = '' 
}) {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-block text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4"
        >
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight tracking-tight"
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ marginLeft: align === 'left' ? '0' : align === 'right' ? 'auto' : undefined, marginRight: align === 'right' ? '0' : align === 'left' ? 'auto' : undefined }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
