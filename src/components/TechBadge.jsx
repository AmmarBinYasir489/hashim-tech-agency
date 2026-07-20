import { motion } from 'framer-motion'

export default function TechBadge({ name, icon: Icon, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.08, 
        boxShadow: '0 0 25px rgba(99,102,241,0.15), inset 3px 3px 6px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(255,255,255,0.02)' 
      }}
      className="flex items-center gap-2.5 px-5 py-3 rounded-neu-sm bg-surface-light border border-white/[0.04] shadow-[4px_4px_10px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.02)] cursor-default transition-all duration-300"
    >
      {Icon && <Icon size={18} className="text-accent" strokeWidth={1.5} />}
      <span className="text-text-primary text-sm font-medium">{name}</span>
    </motion.div>
  )
}
