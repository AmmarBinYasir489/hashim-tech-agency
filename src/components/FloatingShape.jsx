import { motion } from 'framer-motion'

export default function FloatingShape({ 
  className = '', 
  delay = 0, 
  duration = 6,
  size = 200,
  blur = 80,
  color = 'accent',
  opacity = 0.08
}) {
  const colorMap = {
    accent: 'bg-accent',
    purple: 'bg-purple-500',
    blue: 'bg-blue-500',
    cyan: 'bg-cyan-500',
    emerald: 'bg-emerald-500',
    rose: 'bg-rose-500',
  }

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${colorMap[color] || colorMap.accent} ${className}`}
      style={{ 
        width: size, 
        height: size, 
        filter: `blur(${blur}px)`,
        opacity 
      }}
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 15, -10, 5, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
