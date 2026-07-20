import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'

const projectsList = [
  {
    title: 'Nova Finance Dashboard',
    category: 'Web Application',
    description: 'A real-time financial analytics platform with interactive charts, portfolio tracking, and AI-powered insights for institutional investors.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
  },
  {
    title: 'Aura E-Commerce',
    category: 'E-Commerce',
    description: 'A luxury fashion marketplace with AR try-on, personalized recommendations, and a seamless checkout experience.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'Pulse Health App',
    category: 'Mobile App',
    description: 'A telehealth platform connecting patients with specialists, featuring video calls, prescriptions, and health tracking.',
    technologies: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
  },
  {
    title: 'Vertex SaaS Platform',
    category: 'SaaS',
    description: 'A project management tool for remote teams with real-time collaboration, time tracking, and automated reporting.',
    technologies: ['Vue.js', 'GraphQL', 'AWS', 'Docker'],
  },
  {
    title: 'Lumina Brand Identity',
    category: 'Branding',
    description: 'Complete brand overhaul for a renewable energy startup, including logo, design system, and marketing collateral.',
    technologies: ['Figma', 'Illustrator', 'After Effects'],
  },
  {
    title: 'Cipher Security Portal',
    category: 'Web Application',
    description: 'Enterprise security dashboard with threat monitoring, incident response, and compliance reporting for Fortune 500 clients.',
    technologies: ['Angular', 'Python', 'ElasticSearch', 'Kubernetes'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects"
          description="A selection of our most impactful work — each project crafted with precision and purpose."
          className="mb-16 sm:mb-20"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsList.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <ProjectCard {...project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
