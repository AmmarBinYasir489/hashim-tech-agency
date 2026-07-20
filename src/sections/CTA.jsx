import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import NeuButton from '../components/NeuButton'
import FloatingShape from '../components/FloatingShape'

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <FloatingShape 
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        size={600} 
        blur={150} 
        color="accent" 
        opacity={0.06}
      />

      <div className="section-padding max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Sparkles size={14} className="text-accent" />
            <span className="text-accent text-xs font-medium">Limited Availability</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
            Ready to Build
            <br />
            Something <span className="text-gradient">Extraordinary?</span>
          </h2>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We are currently accepting new projects for Q3 2026. Book a free consultation 
            and let us discuss how we can bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NeuButton variant="primary" size="xl" icon={ArrowRight} href="#contact">
              Book a Free Call
            </NeuButton>
            <NeuButton variant="secondary" size="xl" href="#projects">
              View Portfolio
            </NeuButton>
          </div>

          <p className="text-text-muted text-xs mt-8">
            No commitment required. We will respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
