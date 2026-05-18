"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Founder = {
  name: string;
  role: string;
  tagline?: string;
  image: string;
  bio: string;
  extendedBio?: string; // paragraphs separated by a blank line
};

const founders: Founder[] = [
  {
    name: "Mrs. Uduogho Oritseweyinmi Temile",
    role: "Co-Founder",
    image: "/images/team/uduogho-temile.jpg",
    bio: "A strategic business-administration professional with more than a decade across the bottling, beverage, and facility-management industries. She has consistently driven revenue growth, operational excellence, and market expansion across diverse sectors — strengthening stakeholder relationships, brand reputation, and the collaborative partnerships that support long-term organisational growth. Her commitment to sustainability and corporate responsibility makes her a natural architect of the Initiative's operational model, leading diverse teams toward shared goals with innovation and accountability.",
    extendedBio: `Uduogho Oritseweyinmi Temile is a strategic business administration professional with over 10 years of experience spanning the bottling and beverage industry, as well as facility management. With a strong understanding of complex business environments, she has consistently driven revenue growth, operational excellence, and market expansion across diverse sectors.

She is highly skilled in improving productivity through efficient operational management, strategic planning, and effective resource allocation. Her expertise also extends to building strong stakeholder relationships, strengthening brand reputation, and fostering collaborative partnerships that support long-term organisational growth.

Passionate about sustainability and corporate responsibility, Uduogho has a proven track record of leading diverse teams toward shared goals while promoting innovation, accountability, and impactful community development initiatives.`,
  },
  {
    name: "Mrs. Fatima Binta Lawrence",
    role: "Co-Founder",
    image: "/images/team/fatima-binta-lawrence.jpg",
    bio: "A results-driven leader across community development, social entrepreneurship, and agriculture. As Founder of GOOODDEEDS Empowerment Foundation, she supports widows and orphans while creating sustainable employment for vulnerable families. With a background in Peace and Conflict Studies and direct experience in agricultural enterprise, she brings conflict-resolution, agronomic insight, and team-leadership expertise to the Initiative — combining disciplined business acumen with the kind of compassion that builds durable institutions and empowers the communities they serve.",
  },
  {
    name: "Ambassador Young Piero Omatseye",
    role: "Co-Founder",
    tagline: "Driving Africa's future through strategic leadership and boardroom engagement.",
    image: "/images/team/young-piero-omatseye.jpg",
    bio: "Known as The Pacesetter — Managing Director of Jet Age Nation Builders, with operations in Zimbabwe and Mauritius and an enterprise valued at over $50 million. He leads the Young Piero Organisation, a think-tank and empowerment platform for emerging African leaders, and serves as Director of Parliament at the African Union Commission Simulation. His career spans real estate, agriculture, finance, technology, and diplomacy — bringing boardroom discipline and continental reach to the work ahead.",
    extendedBio: `Ambassador Young Piero Omatseye, widely referred to as The Pacesetter, is expanding his influence beyond activism and youth advocacy into business leadership and corporate governance across Africa and beyond.

Omatseye is the Managing Director of Jet Age Nation Builders, with operations in Zimbabwe and Mauritius. Since its founding in 2019 with an initial investment of $100, the organisation has grown into a multinational enterprise valued at over $50 million by 2024. Its work spans investment, youth development, entrepreneurship, and innovation.

He also leads the Young Piero Organisation, which operates as a think tank and empowerment platform for emerging African leaders. The organisation focuses on leadership incubation and mentoring, with programmes designed to build capacity and improve human capital development.

In real estate, Omatseye serves as Executive Director of P's Consultant & Real Estate. The firm develops urban-focused solutions and youth-centred property investment models. It also promotes ethics and training within the real estate profession, aiming to shape a new generation of responsible property practitioners.

Beyond his direct management roles, Omatseye occupies key board positions in several local and international companies. His involvement cuts across real estate, aviation support, logistics, technology integration, agriculture, finance and healthcare. His experience in diplomacy and development has strengthened his ability to contribute to cross-sector strategies and international business alignment.

He also serves as Director of Parliament in the African, Caribbean, and Pacific Joint Session under the African Union Commission Simulation. The role provides him with a platform to contribute to discussions on policymaking, governance, and multinational cooperation.

Colleagues and observers note that Omatseye has created a balance between activism and administration. His trajectory demonstrates how leadership on the continent can merge grassroots engagement with boardroom-level decision-making.

For him, Africa's future requires more than advocacy. It calls for disciplined leadership, innovation in enterprise, and direct involvement in structures that shape governance and economic growth. In his boardroom roles and leadership positions, Omatseye continues to contribute to shaping strategies that seek to connect business, policy, and social development across the continent.`,
  },
];

export default function AboutLeadership() {
  const [selected, setSelected] = useState<Founder | null>(null);

  // ESC to close + body scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    if (selected) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24"
        >
          <div className="lg:col-span-3">
            <div className="eyebrow">Leadership</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              The Co-Founders
              <br />
              <span className="display-italic text-[#C9A961]">behind the vision.</span>
            </h2>
            <p className="mt-8 font-serif text-lg text-[#F2EDE2]/65 max-w-2xl leading-relaxed">
              Three leaders bringing community-building, operational discipline, and continental
              diplomacy to a single coordinated effort.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 items-start">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-[#11261C]">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  className="object-cover grayscale-[15%] transition-all duration-1000 hover:grayscale-0 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F17]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-3">
                {f.role}
              </div>

              <h3 className="display text-[#F2EDE2] text-[1.75rem] mb-3 leading-[1.1]">
                {f.name}
              </h3>

              {f.tagline && (
                <p className="font-serif italic text-[#C9A961] text-[15px] leading-snug mb-5">
                  {f.tagline}
                </p>
              )}

              <p className="font-serif text-[16px] text-[#F2EDE2]/65 leading-[1.65]">
                {f.bio}
              </p>

              {f.extendedBio && (
                <button
                  onClick={() => setSelected(f)}
                  className="mt-5 link-line text-[13px] font-medium tracking-wide text-[#C9A961]"
                >
                  Read full profile →
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile modal */}
      <AnimatePresence>
        {selected && <ProfileModal founder={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProfileModal({ founder, onClose }: { founder: Founder; onClose: () => void }) {
  const paragraphs = (founder.extendedBio || founder.bio)
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0C1F17]/85 backdrop-blur-md" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#11261C] border border-[#F2EDE2]/10 shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#0C1F17]/80 backdrop-blur-md border border-[#F2EDE2]/15 text-[#F2EDE2]/70 hover:text-[#F2EDE2] hover:border-[#C9A961]/50 transition-colors"
          aria-label="Close profile"
        >
          <X size={18} />
        </button>

        {/* Header with portrait + identity */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
          <div className="sm:col-span-5 relative aspect-[4/5] sm:aspect-auto sm:min-h-[420px] bg-[#0C1F17]">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#11261C] via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="sm:col-span-7 p-8 sm:p-10 flex flex-col justify-end">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-3">
              {founder.role}
            </div>
            <h3 className="display text-[#F2EDE2] text-3xl sm:text-4xl leading-[1.05] mb-3">
              {founder.name}
            </h3>
            {founder.tagline && (
              <p className="font-serif italic text-[#C9A961] text-[16px] leading-snug">
                {founder.tagline}
              </p>
            )}
          </div>
        </div>

        <div className="hairline mx-8 sm:mx-10" />

        {/* Full bio */}
        <div className="px-8 sm:px-10 py-10 space-y-5">
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="font-serif text-[16.5px] text-[#F2EDE2]/75 leading-[1.7]"
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
