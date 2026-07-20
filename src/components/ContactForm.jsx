import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Mail, User, MessageSquare, Briefcase } from 'lucide-react'
import NeuButton from './NeuButton'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const inputClass = "w-full px-5 py-4 bg-surface rounded-neu-sm border border-white/[0.05] text-text-primary placeholder-text-muted text-sm shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(255,255,255,0.02)] focus:outline-none focus:border-accent/30 focus:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),0_0_15px_rgba(99,102,241,0.1)] transition-all duration-300"

  const labelClass = "block text-text-secondary text-xs font-medium uppercase tracking-wider mb-2"

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-10 sm:p-16 text-center rounded-neu bg-surface-light border border-white/[0.04] shadow-neu-card"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <CheckCircle size={32} className="text-emerald-400" />
        </div>
        <h3 className="font-display text-2xl font-bold text-text-primary mb-3">Message Sent!</h3>
        <p className="text-text-secondary">We'll get back to you within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Name</label>
          <div className="relative">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="John Doe"
              className={`${inputClass} pl-11`}
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="email" 
              placeholder="john@company.com"
              className={`${inputClass} pl-11`}
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Company</label>
          <div className="relative">
            <Briefcase size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Your company"
              className={`${inputClass} pl-11`}
              value={formData.company}
              onChange={e => setFormData({...formData, company: e.target.value})}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>Service Interest</label>
          <select 
            className={`${inputClass} appearance-none cursor-pointer`}
            value={formData.service}
            onChange={e => setFormData({...formData, service: e.target.value})}
          >
            <option value="" className="bg-surface">Select a service</option>
            <option value="website" className="bg-surface">Website Development</option>
            <option value="webapp" className="bg-surface">Web Application</option>
            <option value="mobile" className="bg-surface">Mobile App</option>
            <option value="design" className="bg-surface">UI/UX Design</option>
            <option value="branding" className="bg-surface">Branding</option>
            <option value="seo" className="bg-surface">SEO & Marketing</option>
            <option value="other" className="bg-surface">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <div className="relative">
          <MessageSquare size={16} className="absolute left-4 top-4 text-text-muted" />
          <textarea 
            rows={5}
            placeholder="Tell us about your project..."
            className={`${inputClass} pl-11 resize-none`}
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
            required
          />
        </div>
      </div>

      <NeuButton type="submit" variant="primary" size="lg" className="w-full sm:w-auto" icon={Send}>
        Send Message
      </NeuButton>
    </form>
  )
}
