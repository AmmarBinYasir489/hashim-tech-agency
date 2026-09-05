"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const contactDetails = [
  { icon: Mail, label: "Email", value: "hashimtechsolutions@gmail.com" },
  { icon: Phone, label: "Phone", value: "+44 7882 733546" },
  { icon: MapPin, label: "Location", value: "Remote-first, worldwide" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);
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
    if (!message.trim()) { showToast("Please describe your project.", true); return; }

    // prepare a WhatsApp + email friendly message and show actions
    setStatus("loading");
    const phone = "7882733546"; // number to receive WhatsApp message
    const fullMessage = `Hello, my name is ${name}.\nCompany: ${formData.company || "(not provided)"}\nService: ${formData.service || "(not specified)"}\n\nMessage:\n${message}\n\nContact email: ${email}`;
    setTimeout(() => {
      setPreparedMessage(fullMessage);
      setStatus("success");
      showToast("Message prepared. Open WhatsApp or send an email to continue.");
    }, 800);
  };

  const handleCopy = async () => {
    if (!preparedMessage) return;
    try {
      await navigator.clipboard.writeText(preparedMessage);
      showToast("Message copied to clipboard.");
    } catch (e) {
      showToast("Unable to copy message.", true);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-bg-dark" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Info */}
          <ScrollReveal className="lg:sticky lg:top-[120px]">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
              Let's start a
              <br />
              conversation
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-10">
              Tell us about your project and we'll get back to you within 24 hours with a tailored plan and timeline.
            </p>
            <div className="flex flex-col gap-6">
              {contactDetails.map((detail) => (
                <motion.div
                  key={detail.label}
                  className="group flex items-center gap-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-bg shadow-neu-in flex items-center justify-center text-xl text-accent flex-shrink-0">
                    <detail.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary">{detail.label}</div>
                    <div className="font-semibold text-text-primary text-base">{detail.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-bg rounded-neu p-8 lg:p-10 shadow-neu"
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
                    placeholder="John Doe"
                    required
                    className="px-5 py-3 bg-bg rounded-xl shadow-neu-in text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:shadow-neu-in-deep transition-shadow w-full"
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
                    placeholder="john@company.com"
                    required
                    className="px-5 py-3 bg-bg rounded-xl shadow-neu-in text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:shadow-neu-in-deep transition-shadow w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-text-secondary">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="px-5 py-3 bg-bg rounded-xl shadow-neu-in text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:shadow-neu-in-deep transition-shadow w-full"
                  />
                </div>
                {/* Budget removed — enquiries are welcome without selecting a range */}
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="service" className="text-sm font-medium text-text-secondary">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="px-5 py-3 bg-bg rounded-xl shadow-neu-in text-sm text-text-primary focus:outline-none focus:shadow-neu-in-deep transition-shadow w-full appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%23888' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                    paddingRight: "40px",
                  }}
                >
                  <option value="" disabled>What do you need?</option>
                  <option value="website">Website Development</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="branding">Brand Identity</option>
                  <option value="business-profiling">Business Profiling</option>
                  <option value="business-registration">Business Registration</option>
                  <option value="company-registration">Company Registration</option>
                  <option value="business-banking">Business Banking</option>
                  <option value="business-loan">Business Loan</option>
                  <option value="personal-loan">Personal Loan</option>
                  <option value="ai">AI Automation</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                  rows={5}
                  className="px-5 py-3 bg-bg rounded-xl shadow-neu-in text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:shadow-neu-in-deep transition-shadow w-full resize-y min-h-[140px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-base font-semibold rounded-full shadow-accent hover:bg-accent-hover hover:shadow-[0_12px_40px_rgba(14,165,233,0.4)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === "success" && preparedMessage && (
                <div className="mt-6 p-2 rounded-md">
                  <div className="text-sm text-text-secondary mb-2">Send your enquiry</div>
                  <div className="flex gap-3 flex-wrap">
                    <button
                      type="button"
                      onClick={() => window.open(`https://wa.me/447882733546?text=${encodeURIComponent(preparedMessage)}`, "_blank")}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full font-semibold"
                    >
                      Send via WhatsApp
                    </button>

                    <button
                      type="button"
                      onClick={() => window.location.href = `mailto:hashimtechsolutions@gmail.com?subject=${encodeURIComponent("New booking from " + formData.name)}&body=${encodeURIComponent(preparedMessage)}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full font-semibold"
                    >
                      Send Email
                    </button>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-bg text-text-primary rounded-full border border-black/5"
                    >
                      Copy message
                    </button>
                  </div>
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed bottom-8 right-8 z-[9999] flex items-center gap-3 bg-bg rounded-2xl px-6 py-4 shadow-neu-hover font-medium text-sm"
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
