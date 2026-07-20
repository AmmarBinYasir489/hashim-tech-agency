import { 
  Globe, 
  Layout, 
  Smartphone, 
  Search, 
  Share2, 
  Palette, 
  Cpu, 
  ShoppingCart, 
  Wrench,
  BarChart3
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ScrollReveal from '../components/ScrollReveal'

const servicesList = [
  {
    icon: Globe,
    title: 'Custom Website Development',
    description: 'Hand-crafted, responsive websites built with modern frameworks. From landing pages to complex web platforms, we deliver pixel-perfect results.',
  },
  {
    icon: Layout,
    title: 'Web Applications',
    description: 'Scalable, performant web apps with real-time features, dashboards, and complex workflows using React, Next.js, and modern backends.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver smooth, intuitive user experiences.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that balances aesthetics with usability. We create interfaces that feel natural and drive conversions.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Technical SEO, content strategy, and performance tuning to help your business rank higher and attract qualified traffic.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Strategic social campaigns that build brand awareness, engage audiences, and convert followers into loyal customers.',
  },
  {
    icon: Cpu,
    title: 'AI Integrations',
    description: 'Smart automation, chatbots, and AI-powered features that enhance user experience and streamline business operations.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Full-featured online stores with secure payments, inventory management, and conversion-optimized checkout flows.',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, security patches, and performance monitoring to keep your digital presence running flawlessly.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What We Do"
          title="Services That Drive Results"
          description="From concept to launch, we offer end-to-end digital solutions tailored to your business goals."
          className="mb-16 sm:mb-20"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <ServiceCard {...service} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
