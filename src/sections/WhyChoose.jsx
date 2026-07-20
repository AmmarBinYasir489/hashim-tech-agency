import { motion } from 'framer-motion'
import { Clock, Users, Target, Award, HeartHandshake, Lightbulb } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import NeuCard from '../components/NeuCard'
import ScrollReveal from '../components/ScrollReveal'

const reasons = [
  {
    icon: Target,
    title: 'Results-Driven Approach',
    description: 'We measure success by your business outcomes. Every design decision and line of code is optimized for conversion and growth.',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'You work directly with senior designers and engineers. No junior handoffs, no communication gaps — just expert craft.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect deadlines. Our agile process ensures transparent milestones and consistent progress you can track in real-time.',
  },
  {
    icon: Award,
    title: 'Award-Winning Quality',
    description: 'Our work has been recognized by Awwwards, CSS Design Awards, and featured in major design publications worldwide.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    description: 'We do not disappear after launch. Our maintenance and growth packages ensure your product evolves with your business.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of technology trends so you do not have to. AI, WebGL, PWA — we bring cutting-edge solutions to every project.',
  },
]

export default function WhyChoose() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeading
              eyebrow="Why Hashim Tech"
              title="Built Different. Built Better."
              description="We are not just another agency. We are a team of craftsmen who treat every project like our own."
              align="left"
              className="mb-10"
            />

            <ScrollReveal>
              <div className="space-y-6">
                <p className="text-text-secondary leading-relaxed">
                  Founded on the belief that great digital products require both technical excellence 
                  and creative vision, Hashim Tech has grown into a trusted partner for startups and 
                  enterprises alike.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Our multidisciplinary team brings together strategists, designers, and engineers 
                  who share one goal: building products that make a real difference.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats row */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-accent">150+</div>
                  <div className="text-text-muted text-xs mt-1">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-accent">6+</div>
                  <div className="text-text-muted text-xs mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-accent">40+</div>
                  <div className="text-text-muted text-xs mt-1">Team Members</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Cards grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.1}>
                <NeuCard className="p-6 h-full" hover>
                  <div className="w-11 h-11 rounded-neu-sm bg-surface flex items-center justify-center mb-4 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.02)]">
                    <reason.icon size={20} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-text-primary text-sm mb-2">{reason.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{reason.description}</p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
