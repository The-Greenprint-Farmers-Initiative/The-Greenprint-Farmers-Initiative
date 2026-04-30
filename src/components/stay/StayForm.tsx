"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function StayForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16"
        >
          <div className="lg:col-span-3">
            <div className="eyebrow">Get in Touch</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] max-w-3xl">
              Let&apos;s plant the future,
              <br />
              <span className="display-italic text-[#C9A961]">together.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact info */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-2">Email</div>
              <a href="mailto:contact@greenprintfarmers.org" className="font-serif text-lg text-[#F2EDE2] hover:text-[#C9A961] transition-colors">
                contact@greenprintfarmers.org
              </a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-2">Telephone</div>
              <a href="tel:+2348066731036" className="font-serif text-lg text-[#F2EDE2] hover:text-[#C9A961] transition-colors">
                +234 806 673 1036
              </a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-2">Headquarters</div>
              <div className="font-serif text-lg text-[#F2EDE2] leading-snug">
                153 Green City Estate<br />Gwarinpa, Abuja<br />Nigeria
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-2">Response time</div>
              <div className="font-serif text-lg text-[#F2EDE2]">Within five working days</div>
            </div>

            <div className="pt-8 border-t border-[#F2EDE2]/10">
              <p className="font-serif italic text-[#F2EDE2]/55 text-base leading-relaxed">
                Submit the form and a member of the Greenprint team will respond personally.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="border border-[#C9A961]/30 p-12 text-center"
              >
                <div className="eyebrow mb-6">Received</div>
                <h3 className="display text-[#F2EDE2] text-3xl mb-5">Message received.</h3>
                <p className="font-serif text-[#F2EDE2]/65 max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in The Greenprint Farmers Initiative.
                  A member of our team will respond within five working days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Input label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                </div>

                <Input label="Organisation" value={form.organization} onChange={(v) => setForm({ ...form, organization: v })} />

                <Select
                  label="I represent"
                  value={form.role}
                  onChange={(v) => setForm({ ...form, role: v })}
                  options={[
                    "Government / AU Agency",
                    "Development Finance / DFI",
                    "Investor / Fund",
                    "Research / Academia",
                    "Media",
                    "Citizen / Advocate",
                    "Other",
                  ]}
                />

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-3">
                    Your message
                  </label>
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your interest in the programme…"
                    className="w-full bg-transparent border-b border-[#F2EDE2]/15 pb-3 pt-2 font-serif text-lg text-[#F2EDE2] placeholder:text-[#F2EDE2]/30 focus:outline-none focus:border-[#C9A961] transition resize-none"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="text-[13px] font-medium tracking-wide text-[#0A0E13] bg-[#C9A961] hover:bg-[#D4B67A] px-8 py-4 transition-colors"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-3">
        {label} {required && <span className="text-[#F2EDE2]/40">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b border-[#F2EDE2]/15 pb-3 pt-2 font-serif text-lg text-[#F2EDE2] placeholder:text-[#F2EDE2]/30 focus:outline-none focus:border-[#C9A961] transition"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-3">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-[#F2EDE2]/15 pb-3 pt-2 font-serif text-lg text-[#F2EDE2] focus:outline-none focus:border-[#C9A961] transition appearance-none cursor-pointer"
      >
        <option value="" className="bg-[#0A0E13]">
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0A0E13]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
