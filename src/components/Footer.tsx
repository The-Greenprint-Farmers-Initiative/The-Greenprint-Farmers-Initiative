import Link from "next/link";
import Image from "next/image";

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
              A 15-year programme to build 72 agro-industrial hubs across Nigeria —
              transforming the foundations of food security on the African continent.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Navigate</div>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/hub", label: "The Hub" },
                { href: "/plan", label: "The Plan" },
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
            <div className="space-y-3 text-sm text-[#F2EDE2]/65">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#F2EDE2]/40 mb-0.5">Email</div>
                <div>kilimanjarohub@gmail.com</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#F2EDE2]/40 mb-0.5">Headquarters</div>
                <div>Abuja, Federal Capital Territory, Nigeria</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#F2EDE2]/40 mb-0.5">Aligned with</div>
                <div>African Union · Agenda 2063</div>
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
