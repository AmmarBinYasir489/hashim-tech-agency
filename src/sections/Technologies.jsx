import { 
  Code2, 
  Database, 
  Server, 
  Smartphone, 
  Palette, 
  Cloud,
  Box,
  Layers,
  Figma,
  GitBranch,
  Cpu,
  Globe
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import TechBadge from '../components/TechBadge'
import ScrollReveal from '../components/ScrollReveal'

const techStack = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Globe },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Code2 },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Box },
  { name: 'Kubernetes', icon: Layers },
  { name: 'React Native', icon: Smartphone },
  { name: 'Figma', icon: Figma },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'GraphQL', icon: GitBranch },
  { name: 'TensorFlow', icon: Cpu },
  { name: 'Three.js', icon: Code2 },
]

export default function Technologies() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Our Stack"
          title="Technologies We Master"
          description="We use the right tools for the job. Our tech stack is modern, battle-tested, and constantly evolving."
          className="mb-16 sm:mb-20"
        />

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {techStack.map((tech, i) => (
            <TechBadge key={tech.name} {...tech} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-text-muted text-sm mt-12 max-w-lg mx-auto">
            And many more. We are technology-agnostic — we pick the stack that best serves 
            your product goals, performance requirements, and team preferences.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
