import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    label: "X (Twitter)",
    href: "https://x.com/Greenprint_Farm",
    icon: (
      <path d="M18.9 1.6h3.3l-7.2 8.2 8.5 11.3h-6.7l-5.2-6.8-6 6.8H1.5l7.7-8.8L1 1.6h6.8l4.7 6.2 5.4-6.2Zm-1.2 18.2h1.8L6.4 3.5H4.5l13.2 16.3Z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/greenprint_farm/",
    icon: (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.3" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2347079188800",
    icon: (
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.9 5-1.3A10 10 0 1 0 12 2Zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3-1.3-5-4.4-5.2-4.6-.1-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1-2.5.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.1c.1.2.1.4 0 .6l-.4.6c-.2.2-.3.4-.2.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.8-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.8-.1 1.4Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#F2EDE2]/8 mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image src="/images/Mask Group 3.svg" alt="Greenprint" fill className="object-contain" />
              </div>
              <div>
                <div className="font-serif text-lg font-medium text-[#F2EDE2]">Greenprint</div>
                <div className="text-[10px] text-[#C9A961] uppercase tracking-[0.24em] font-medium">
                  Farmers Initiative
                </div>
              </div>
            </div>
            <p className="font-serif text-[#F2EDE2]/65 text-base leading-relaxed max-w-md">
              A continental programme to transform food security across Africa —
              beginning with 72 agro-industrial hubs across Nigeria&apos;s 36 states.
            </p>
            <p className="mt-4 font-serif italic text-sm text-[#C9A961]/80">
              Born in Nigeria. Built for the African continent.
            </p>

            <div className="mt-7">
              <div className="eyebrow mb-4">Follow</div>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center border border-[#F2EDE2]/15 text-[#F2EDE2]/70 hover:text-[#0C1F17] hover:bg-[#C9A961] hover:border-[#C9A961] transition-all duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Navigate</div>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/hub", label: "The Hub" },
                { href: "/plan", label: "The Plan" },
                { href: "/journey", label: "The Journey" },
                { href: "/stay-informed", label: "Stay Informed" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#F2EDE2]/65 text-sm hover:text-[#F2EDE2] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-5">Contact</div>
            <div className="space-y-4 text-sm text-[#F2EDE2]/65">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#F2EDE2]/40 mb-1">Email</div>
                <a href="mailto:info@greenprintfarmers.org" className="hover:text-[#F2EDE2] transition-colors">
                  info@greenprintfarmers.org
                </a>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#F2EDE2]/40 mb-1">Telephone</div>
                <div className="space-y-0.5">
                  <a href="tel:+2347079188800" className="block hover:text-[#F2EDE2] transition-colors">
                    +234 707 918 8800
                  </a>
                  <a href="tel:+2348066731036" className="block hover:text-[#F2EDE2] transition-colors">
                    +234 806 673 1036
                  </a>
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#F2EDE2]/40 mb-1">Headquarters</div>
                <div>153 Green City Estate<br />Gwarinpa, Abuja<br />Nigeria</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hairline" />

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[11px] text-[#F2EDE2]/40">
          <p>© {new Date().getFullYear()} The Greenprint Farmers Initiative.</p>
          <p className="italic font-serif">An advocacy website for a proposed programme.</p>
        </div>
      </div>
    </footer>
  );
}
