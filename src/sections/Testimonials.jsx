import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'
import ScrollReveal from '../components/ScrollReveal'

const testimonialsList = [
  {
    quote: "Hashim Tech transformed our outdated website into a conversion machine. Our lead generation increased by 340% within the first three months. The attention to detail is unmatched.",
    author: "Sarah Mitchell",
    role: "CMO",
    company: "Vertex Labs",
    rating: 5,
  },
  {
    quote: "Working with Hashim Tech felt like having an in-house team. They understood our vision from day one and delivered a product that exceeded every expectation.",
    author: "David Chen",
    role: "Founder & CEO",
    company: "Nova Finance",
    rating: 5,
  },
  {
    quote: "The mobile app they built for us has a 4.9-star rating and over 50K downloads. Their UX expertise and technical execution are world-class.",
    author: "Amara Okafor",
    role: "Product Director",
    company: "Pulse Health",
    rating: 5,
  },
  {
    quote: "They did not just build us a website — they built us a brand. The rebrand increased our perceived value and helped us close enterprise deals we could not before.",
    author: "James Rodriguez",
    role: "Head of Growth",
    company: "Lumina Energy",
    rating: 5,
  },
  {
    quote: "Fast, responsive, and incredibly skilled. They rebuilt our entire e-commerce platform in 8 weeks without a single day of downtime.",
    author: "Emily Watson",
    role: "CTO",
    company: "Aura Fashion",
    rating: 5,
  },
  {
    quote: "The AI integration they built into our platform reduced our customer support tickets by 60%. Brilliant problem-solving and clean implementation.",
    author: "Michael Park",
    role: "VP Engineering",
    company: "Cipher Security",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Client Love"
          title="What Our Clients Say"
          description="Do not just take our word for it. Here is what the people we have worked with have to say."
          className="mb-16 sm:mb-20"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsList.map((testimonial, i) => (
            <ScrollReveal key={testimonial.author} delay={i * 0.1}>
              <TestimonialCard {...testimonial} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
