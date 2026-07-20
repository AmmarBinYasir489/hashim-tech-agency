import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import NeuCard from '../components/NeuCard'
import ScrollReveal from '../components/ScrollReveal'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@hashim.tech',
    href: 'mailto:hello@hashim.tech',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: '#',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Start a Conversation"
          description="Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours."
          className="mb-16 sm:mb-20"
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Contact info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-neu-sm bg-surface-light border border-white/[0.04] shadow-[4px_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_16px_rgba(0,0,0,0.4)] hover:border-accent/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-shadow">
                      <item.icon size={18} className="text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">{item.label}</p>
                      <p className="text-text-primary text-sm font-medium group-hover:text-accent-light transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>

            {/* Social proof mini */}
            <ScrollReveal delay={0.3}>
              <NeuCard className="mt-8 p-6" hover={false}>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  "The team at Hashim Tech went above and beyond. They did not just deliver a product — they delivered a competitive advantage."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white text-xs font-bold">
                    SM
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-medium">Sarah Mitchell</p>
                    <p className="text-text-muted text-xs">CMO, Vertex Labs</p>
                  </div>
                </div>
              </NeuCard>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
