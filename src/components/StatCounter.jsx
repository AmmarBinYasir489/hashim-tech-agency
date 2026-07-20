import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label, icon: Icon, index = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6 sm:p-8"
    >
      {Icon && (
        <div className="w-12 h-12 mx-auto mb-4 rounded-neu-sm bg-surface flex items-center justify-center shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.02)]">
          <Icon size={22} className="text-accent" strokeWidth={1.5} />
        </div>
      )}
      <div className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-text-secondary text-sm">{label}</p>
    </motion.div>
  )
}
