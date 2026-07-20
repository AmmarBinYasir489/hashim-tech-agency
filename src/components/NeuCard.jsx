import { motion } from 'framer-motion'

export default function NeuCard({ 
  children, 
  className = '',
  hover = true,
  glow = false,
  inset = false,
  ...props 
}) {
  const baseStyles = 'rounded-neu border border-white/[0.03] transition-all duration-500'
  const variantStyles = inset 
    ? 'bg-surface shadow-neu-inset' 
    : glow 
      ? 'bg-surface-light shadow-neu-glow border-accent/10' 
      : 'bg-surface-light shadow-neu-card'

  return (
    <motion.div
      whileHover={hover ? { 
        y: -6, 
        boxShadow: '16px 16px 32px rgba(0,0,0,0.45), -8px -8px 20px rgba(255,255,255,0.03), 0 0 30px rgba(99,102,241,0.08)',
        borderColor: 'rgba(99, 102, 241, 0.15)'
      } : {}}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
