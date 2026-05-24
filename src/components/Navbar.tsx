"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/hub", label: "The Hub" },
  { href: "/plan", label: "The Plan" },
  { href: "/journey", label: "The Journey" },
  { href: "/stay-informed", label: "Stay Informed" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-blur py-3" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <Image
                src="/images/Mask Group 3.svg"
                alt="Greenprint"
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-[15px] font-medium text-[#F2EDE2] tracking-[0.04em]">
                Greenprint
              </div>
              <div className="text-[9px] text-[#C9A961] uppercase tracking-[0.24em] font-medium">
                Farmers Initiative
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors ${
                    active
                      ? "text-[#F2EDE2]"
                      : "text-[#F2EDE2]/55 hover:text-[#F2EDE2]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/stay-informed"
              className="text-[13px] font-medium text-[#F2EDE2] border border-[#C9A961]/30 hover:border-[#C9A961] hover:bg-[#C9A961]/5 px-5 py-2 transition-all duration-300"
            >
              Get Involved
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#F2EDE2] p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#0C1F17]/95 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-[#0C1F17] border-l border-[#F2EDE2]/10 p-10 pt-24 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-4 border-b border-[#F2EDE2]/8 text-base font-medium transition-colors ${
                    active ? "text-[#C9A961]" : "text-[#F2EDE2]/70 hover:text-[#F2EDE2]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/stay-informed"
              className="mt-8 py-3 px-5 text-center text-[13px] font-medium text-[#F2EDE2] border border-[#C9A961]/40"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
