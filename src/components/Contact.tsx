"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Mail, Phone } from "lucide-react";

const roles = ["Government Official", "AU / DFI Representative", "Investor", "Media / Press", "Academic / Researcher", "NGO / Civil Society", "Other"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    role: "",
    message: "",
  });
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest. Your enquiry has been received. Our team will be in touch.");
    setFormData({ name: "", email: "", organisation: "", role: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#0D1B2A]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
            Stay Informed
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Join the Conversation
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Whether you represent a government, institution, or are simply passionate
            about Africa&apos;s future — we welcome your enquiry.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
            placeholder="Organisation / Institution"
            className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#009639] transition-colors"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#009639] transition-colors appearance-none"
          >
            <option value="" disabled className="text-gray-900">Select Your Role</option>
            {roles.map((r) => (
              <option key={r} value={r} className="text-gray-900">{r}</option>
            ))}
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message or Enquiry"
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
              Send Enquiry
            </button>
          </div>
        </motion.form>

        {/* Contact info */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/40">
          <a href="mailto:info@greenprintfarmers.org" className="flex items-center gap-2 hover:text-[#D4A843] transition-colors">
            <Mail className="w-4 h-4" />
            info@greenprintfarmers.org
          </a>
          <a href="tel:+2340000000000" className="flex items-center gap-2 hover:text-[#D4A843] transition-colors">
            <Phone className="w-4 h-4" />
            +234 (0) 000 000 0000
          </a>
        </div>

        {/* Social */}
        <div className="mt-8 flex justify-center gap-6">
          {["X (Twitter)", "LinkedIn", "YouTube"].map((social) => (
            <a key={social} href="#" className="text-white/25 hover:text-[#D4A843] transition-colors text-sm font-medium">
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
