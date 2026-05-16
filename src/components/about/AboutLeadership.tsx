"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Fatima Binta Lawrence",
    role: "Co-Founder",
    image: "/images/team/fatima-binta-lawrence.jpg",
    bio: "A results-driven leader in community development and social entrepreneurship. Founder of GOOODDEEDS Empowerment Foundation, supporting widows and orphans while creating sustainable employment for families. With a background in Peace and Conflict Studies, she brings conflict-resolution and team-leadership expertise to the Initiative — combining business acumen with the kind of compassion that builds durable institutions.",
  },
  {
    name: "Uduogho Oritseweyinmi Temile",
    role: "Co-Founder",
    image: "/images/team/uduogho-temile.jpg",
    bio: "A strategic business-administration professional with more than a decade across the bottling, beverage, and facility-management industries. She has consistently driven revenue growth, operational excellence, and market expansion — strengthening stakeholder relationships and brand reputation along the way. Her commitment to sustainability and corporate responsibility makes her a natural architect of the Initiative&apos;s operational model.",
  },
  {
    name: "Ambassador Young Piero Omatseye",
    role: "Co-Founder",
    image: "/images/team/young-piero-omatseye.jpg",
    bio: "Known as The Pacesetter — Managing Director of Jet Age Nation Builders, with operations in Zimbabwe and Mauritius, and an enterprise valued at over $50 million. He leads the Young Piero Organisation and serves as Director of Parliament at the African Union Commission Simulation. His career spans real estate, agriculture, finance, technology, and diplomacy — bringing boardroom discipline and continental reach to the work ahead.",
  },
];

export default function AboutLeadership() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] mb-8 overflow-hidden bg-[#11161E]">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  className="object-cover grayscale-[15%] transition-all duration-1000 hover:grayscale-0 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E13]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Name + role */}
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-3">
                {f.role}
              </div>
              <h3 className="display text-[#F2EDE2] text-[1.75rem] mb-5 leading-[1.1]">
                {f.name}
              </h3>

              {/* Bio */}
              <p
                className="font-serif text-[16px] text-[#F2EDE2]/65 leading-[1.65]"
                dangerouslySetInnerHTML={{ __html: f.bio }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
