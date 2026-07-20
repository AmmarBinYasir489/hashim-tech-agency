import { motion } from 'framer-motion'

export default function NeuButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-ring rounded-neu-sm'

  const variants = {
    primary: 'bg-accent text-white shadow-[4px_4px_12px_rgba(0,0,0,0.4),-2px_-2px_8px_rgba(255,255,255,0.05)] hover:shadow-[6px_6px_16px_rgba(0,0,0,0.5),-3px_-3px_10px_rgba(255,255,255,0.07),0_0_20px_rgba(99,102,241,0.2)] hover:-translate-y-0.5 active:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.4)] active:translate-y-0',
    secondary: 'bg-surface-light text-text-primary border border-white/[0.06] shadow-[4px_4px_12px_rgba(0,0,0,0.35),-2px_-2px_8px_rgba(255,255,255,0.03)] hover:shadow-[6px_6px_16px_rgba(0,0,0,0.45),-3px_-3px_10px_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:border-accent/20 active:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.35)] active:translate-y-0',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/[0.03]',
    outline: 'bg-transparent border border-white/[0.08] text-text-primary hover:border-accent/40 hover:text-accent-light',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 20 : size === 'xl' ? 22 : 18} strokeWidth={2} />}
      {children}
    </motion.button>
  )
}
