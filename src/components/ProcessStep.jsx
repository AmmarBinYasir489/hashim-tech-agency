import { motion } from 'framer-motion'

export default function ProcessStep({ 
  number, 
  title, 
  description, 
  icon: Icon,
  index = 0,
  isLast = false 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-5 sm:gap-7"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 sm:left-6 top-14 bottom-0 w-px bg-gradient-to-b from-accent/30 to-transparent" />
      )}

      {/* Number / Icon */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-light border border-accent/20 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.1)]">
          {Icon ? (
            <Icon size={20} className="text-accent" strokeWidth={1.5} />
          ) : (
            <span className="font-display font-bold text-accent text-sm sm:text-base">{number}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="pb-10 sm:pb-14">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
