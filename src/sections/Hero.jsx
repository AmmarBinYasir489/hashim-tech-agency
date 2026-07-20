import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'
import NeuButton from '../components/NeuButton'
import FloatingShape from '../components/FloatingShape'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background shapes */}
      <FloatingShape 
        className="top-20 -left-20" 
        size={400} 
        blur={120} 
        color="accent" 
        opacity={0.06}
        delay={0}
      />
      <FloatingShape 
        className="bottom-20 -right-20" 
        size={350} 
        blur={100} 
        color="purple" 
        opacity={0.05}
        delay={2}
      />
      <FloatingShape 
        className="top-1/2 left-1/3" 
        size={200} 
        blur={80} 
        color="blue" 
        opacity={0.04}
        delay={1}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-padding relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light border border-white/[0.06] shadow-[4px_4px_12px_rgba(0,0,0,0.3)] mb-8"
            >
              <Sparkles size={14} className="text-accent" />
              <span className="text-text-secondary text-xs font-medium">Premium Digital Agency</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
            >
              We Build
              <br />
              <span className="text-gradient">Digital</span>
              <br />
              Products
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              Hashim Tech partners with ambitious startups and enterprises to craft 
              websites, apps, and brands that captivate users and drive real business growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <NeuButton variant="primary" size="lg" icon={ArrowRight} href="#contact">
                Start Your Project
              </NeuButton>
              <NeuButton variant="secondary" size="lg" href="#projects">
                View Our Work
              </NeuButton>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-text-muted text-xs">
                <Shield size={14} className="text-emerald-400" />
                <span>Secure & Scalable</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-xs">
                <Zap size={14} className="text-amber-400" />
                <span>Lightning Fast</span>
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 rounded-neu bg-surface-light border border-white/[0.04] shadow-[20px_20px_60px_rgba(0,0,0,0.4),-10px_-10px_30px_rgba(255,255,255,0.02)] p-8 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-surface w-3/4" />
                  <div className="h-3 rounded-full bg-surface w-full" />
                  <div className="h-3 rounded-full bg-surface w-5/6" />
                  <div className="h-3 rounded-full bg-accent/20 w-2/3" />
                </div>
                <div className="mt-6 flex gap-3">
                  <div className="h-20 flex-1 rounded-neu-sm bg-surface shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3)]" />
                  <div className="h-20 flex-1 rounded-neu-sm bg-surface shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3)]" />
                  <div className="h-20 flex-1 rounded-neu-sm bg-accent/10 border border-accent/20" />
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 z-20 rounded-neu-sm bg-surface-light border border-white/[0.04] shadow-[12px_12px_30px_rgba(0,0,0,0.35)] p-4 w-40"
              >
                <div className="text-accent text-2xl font-display font-bold">98%</div>
                <div className="text-text-muted text-xs mt-1">Client Satisfaction</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 z-20 rounded-neu-sm bg-surface-light border border-white/[0.04] shadow-[12px_12px_30px_rgba(0,0,0,0.35)] p-4 w-44"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-medium">Live Project</span>
                </div>
                <div className="text-text-primary text-sm font-medium">E-Commerce Platform</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
