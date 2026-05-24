"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
  heroImage: string;
  photos?: string[];
};

const events: Event[] = [
  {
    title: "African Day Celebration",
    date: "24 May 2026",
    location: "Nairobi, Kenya",
    description:
      "The Greenprint Farmers Initiative joined the continental commemoration of Africa Day in Nairobi — a gathering of African leaders, citizens, and institutions marking unity, identity, and the shared aspirations of the continent. The team carried the Greenprint banner alongside delegations, a public commitment to food sovereignty and the seventy-two-hub continental programme.",
    heroImage: "/images/journey/african-day-2026/hero.jpg",
    photos: [
      "/images/journey/african-day-2026/01.jpg",
      "/images/journey/african-day-2026/02.jpg",
      "/images/journey/african-day-2026/03.jpg",
    ],
  },
];

export default function JourneyEvents() {
  if (events.length === 0) {
    return (
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-[#F2EDE2]/55">
            Documented moments will appear here as the journey unfolds.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div>
      {events.map((ev, idx) => (
        <EventEntry key={`${ev.title}-${ev.date}`} event={ev} index={idx} />
      ))}
    </div>
  );
}

function EventEntry({ event, index }: { event: Event; index: number }) {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-7xl mx-auto">
        {/* Meta + title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16"
        >
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-3">
              {String(index + 1).padStart(2, "0")} · {event.date}
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#F2EDE2]/45 font-medium">
              {event.location}
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] leading-[1.05]">
              {event.title}
            </h2>
            <p className="mt-8 font-serif text-lg text-[#F2EDE2]/65 max-w-2xl leading-relaxed">
              {event.description}
            </p>
          </div>
        </motion.div>

        {/* Hero photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/10] w-full overflow-hidden bg-[#11261C] mb-6"
        >
          <Image
            src={event.heroImage}
            alt={`${event.title} — ${event.location}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority={index === 0}
          />
        </motion.div>

        {/* Supporting photos */}
        {event.photos && event.photos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.photos.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#11261C]"
              >
                <Image
                  src={src}
                  alt={`${event.title} — photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
