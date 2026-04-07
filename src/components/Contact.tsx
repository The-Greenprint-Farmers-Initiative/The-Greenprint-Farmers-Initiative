"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  Lock,
  Download,
  Building2,
  Send,
  Mail,
  Phone,
} from "lucide-react";

const documents = [
  {
    title: "Business Proposal",
    description: "Executive overview of The Greenprint Initiative",
    icon: FileText,
    confidential: false,
  },
  {
    title: "Comprehensive Business Plan",
    description: "Full 15-year programme strategy and implementation plan",
    icon: FileText,
    confidential: false,
  },
  {
    title: "Investor Memorandum",
    description: "Detailed financial projections, IRR, and exit strategy",
    icon: Lock,
    confidential: true,
  },
  {
    title: "Architectural Design",
    description: "Hub layout, blueprints, and infrastructure specifications",
    icon: Building2,
    confidential: false,
  },
];

const roles = ["Investor", "Government", "DFI", "Media", "Other"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    role: "",
    message: "",
  });
  const { ref: docRef, inView: docInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your interest. Your message has been received. Our team will be in touch shortly."
    );
    setFormData({ name: "", email: "", organisation: "", role: "", message: "" });
  };

  return (
    <section id="contact">
      {/* Documents Section - White bg */}
      <div className="py-24 bg-white" ref={docRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={docInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
              Resources
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-4">
              Download Our Documents
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, i) => {
              const Icon = doc.icon;
              return (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={docInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-[#D4A843]/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                >
                  {doc.confidential && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Confidential
                    </div>
                  )}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E8F5E9] rounded-xl mb-4 group-hover:bg-[#009639] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#009639] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#0D1B2A] mb-2">{doc.title}</h3>
                  <p className="text-sm text-gray-500 mb-5">{doc.description}</p>
                  <button className="flex items-center justify-center gap-2 mx-auto bg-[#009639] hover:bg-[#007a2e] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Form - Navy bg */}
      <div className="py-24 bg-[#0D1B2A]" ref={formRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
              Get In Touch
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
              It Is Time to Break Ground.
            </h2>
            <p className="mt-4 text-white/60 text-lg">
              Download our documents or get in touch.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#009639] transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#009639] transition-colors"
            />
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="Organisation"
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#009639] transition-colors"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#009639] transition-colors appearance-none"
            >
              <option value="" disabled className="text-gray-900">
                Select Role
              </option>
              {roles.map((r) => (
                <option key={r} value={r} className="text-gray-900">
                  {r}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#009639] transition-colors resize-none"
            />
            <div className="sm:col-span-2 flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#009639] hover:bg-[#007a2e] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-green-900/30 hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Contact info */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/50">
            <a
              href="mailto:info@greenprintinitiative.org"
              className="flex items-center gap-2 hover:text-[#D4A843] transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@greenprintinitiative.org
            </a>
            <a
              href="tel:+2340000000000"
              className="flex items-center gap-2 hover:text-[#D4A843] transition-colors"
            >
              <Phone className="w-4 h-4" />
              +234 (0) 000 000 0000
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center gap-6">
            {["X (Twitter)", "LinkedIn", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/30 hover:text-[#D4A843] transition-colors text-sm font-medium"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
