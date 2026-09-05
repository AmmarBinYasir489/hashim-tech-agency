"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "7882733546", href: "tel:7882733546" },
  { icon: Mail, label: "Email", value: "hashimtechsolutions@gmail.com", href: "mailto:hashimtechsolutions@gmail.com" },
  { icon: MapPin, label: "Location", value: "Remote-first, worldwide" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    business: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [toast, setToast] = useState<{ message: string; isError: boolean } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message: string, isError = false) => {
    setToast({ message, isError });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim()) { showToast("Please enter your name.", true); return; }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Please enter a valid email address.", true); return;
    }
    if (!message.trim()) { showToast("Please describe what you need.", true); return; }

    setStatus("loading");
    const fullMessage = `Hello Hashim Tech,

I'd like to enquire about your ${formData.service || "service"} service.

Name: ${name}
Business: ${formData.business || "(not provided)"}
Email: ${email}
Phone: ${formData.phone || "(not provided)"}

Message:
${message}

Please let me know how we can get started.`;

    setTimeout(() => {
      setStatus("success");
      const waUrl = `https://wa.me/447882733546?text=${encodeURIComponent(fullMessage)}`;
      window.open(waUrl, "_blank");
      showToast("Opening WhatsApp...");
      setFormData({ name: "", email: "", phone: "", service: "", business: "", message: "" });
    }, 600);
  };

  return (
    <section className="py-24 lg:py-32 bg-bg-dark" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <ScrollReveal>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Get in Touch
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
              Let&apos;s Talk About Your Business
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-white/70 leading-relaxed">
              Tell us what you need and we&apos;ll help you find the right solution.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Info */}
          <ScrollReveal className="lg:sticky lg:top-[120px]">
            <div className="flex flex-col gap-6">
              {contactDetails.map((detail) => (
                <motion.div
                  key={detail.label}
                  className="group flex items-center gap-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                    <detail.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">{detail.label}</div>
                    {detail.href ? (
                      <a href={detail.href} className="font-semibold text-white text-base hover:text-accent transition-colors">
                        {detail.value}
                      </a>
                    ) : (
                      <div className="font-semibold text-white text-base">{detail.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-card-xl p-8 lg:p-10 shadow-card-lg"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-secondary">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="px-5 py-3 bg-bg rounded-xl border border-gray-200 text-sm text-text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-secondary">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="px-5 py-3 bg-bg rounded-xl border border-gray-200 text-sm text-text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-text-secondary">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="px-5 py-3 bg-bg rounded-xl border border-gray-200 text-sm text-text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-text-secondary">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="px-5 py-3 bg-bg rounded-xl border border-gray-200 text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all w-full appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%23888' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                      paddingRight: "40px",
                    }}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Website">Website</option>
                    <option value="SEO">SEO</option>
                    <option value="Business Profiling">Business Profiling</option>
                    <option value="Business Registration">Business Registration</option>
                    <option value="Company Registration">Company Registration</option>
                    <option value="Business Banking">Business Banking</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="business" className="text-sm font-medium text-text-secondary">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="px-5 py-3 bg-bg rounded-xl border border-gray-200 text-sm text-text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all w-full"
                />
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  required
                  rows={5}
                  className="px-5 py-3 bg-bg rounded-xl border border-gray-200 text-sm text-text-primary placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all w-full resize-y min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-text-primary text-base font-semibold rounded-xl shadow-accent hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry on WhatsApp
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed bottom-8 right-8 z-[9999] flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-card-lg font-medium text-sm"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {toast.isError ? (
              <AlertCircle className="w-5 h-5 text-danger flex-shrink-0" />
            ) : (
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
            )}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
