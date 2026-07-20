import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Website Development', href: '#services' },
    { label: 'Web Applications', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Branding', href: '#services' },
    { label: 'SEO & Marketing', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      {/* Top section */}
      <div className="section-padding py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4">
              <a href="#" className="inline-block mb-6">
                <span className="font-display text-2xl font-bold text-text-primary">
                  Hashim<span className="text-accent">.</span>Tech
                </span>
              </a>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
                Building premium digital experiences for ambitious brands. We turn ideas into products that people love.
              </p>
              <div className="space-y-3">
                <a href="mailto:hello@hashim.tech" className="flex items-center gap-3 text-text-secondary hover:text-accent-light transition-colors text-sm">
                  <Mail size={16} />
                  hello@hashim.tech
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-text-secondary hover:text-accent-light transition-colors text-sm">
                  <Phone size={16} />
                  +1 (234) 567-890
                </a>
                <div className="flex items-center gap-3 text-text-secondary text-sm">
                  <MapPin size={16} />
                  San Francisco, CA
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="font-display font-semibold text-text-primary text-sm uppercase tracking-wider mb-5">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-text-secondary hover:text-accent-light transition-colors text-sm flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-semibold text-text-primary text-sm uppercase tracking-wider mb-5">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-text-secondary hover:text-accent-light transition-colors text-sm flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-semibold text-text-primary text-sm uppercase tracking-wider mb-5">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-text-secondary hover:text-accent-light transition-colors text-sm flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="section-padding py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-xs">
              © 2026 Hashim Tech. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-text-muted hover:text-accent-light transition-colors text-xs">Twitter</a>
              <a href="#" className="text-text-muted hover:text-accent-light transition-colors text-xs">LinkedIn</a>
              <a href="#" className="text-text-muted hover:text-accent-light transition-colors text-xs">Dribbble</a>
              <a href="#" className="text-text-muted hover:text-accent-light transition-colors text-xs">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
