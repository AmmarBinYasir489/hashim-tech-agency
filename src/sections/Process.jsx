import { MessageSquare, Compass, PenTool, Code2, Rocket, Headphones } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProcessStep from '../components/ProcessStep'

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery & Strategy',
    description: 'We start by deeply understanding your business, audience, and goals. Through workshops and research, we define the roadmap for success.',
  },
  {
    icon: Compass,
    title: 'Planning & Architecture',
    description: 'We map out the user journey, information architecture, and technical stack. Every decision is data-informed and user-focused.',
  },
  {
    icon: PenTool,
    title: 'Design & Prototyping',
    description: 'High-fidelity designs and interactive prototypes let you experience the product before a single line of code is written.',
  },
  {
    icon: Code2,
    title: 'Development & Testing',
    description: 'Clean, scalable code with rigorous testing. We follow best practices for performance, security, and maintainability.',
  },
  {
    icon: Rocket,
    title: 'Launch & Optimize',
    description: 'A smooth deployment with monitoring, analytics, and post-launch optimization to ensure peak performance from day one.',
  },
  {
    icon: Headphones,
    title: 'Support & Growth',
    description: 'Ongoing maintenance, updates, and strategic improvements. We grow with you as your business evolves.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Sticky heading */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="How We Work"
              title="Our Development Process"
              description="A battle-tested methodology refined over 150+ projects. Transparent, collaborative, and always focused on delivering value."
              align="left"
              className="mb-8"
            />
            <div className="hidden lg:block p-6 rounded-neu bg-surface-light border border-white/[0.04] shadow-neu-card">
              <p className="text-text-secondary text-sm leading-relaxed">
                Every project follows our six-phase process, but we adapt the pace and depth 
                to match your timeline and budget. Flexibility without sacrificing quality.
              </p>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="pl-2 sm:pl-4">
            {steps.map((step, i) => (
              <ProcessStep
                key={step.title}
                {...step}
                index={i}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
