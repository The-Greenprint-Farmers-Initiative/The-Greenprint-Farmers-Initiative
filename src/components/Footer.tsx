"use client";

import Image from "next/image";

const quickLinks = [
  { label: "The Vision", href: "#vision" },
  { label: "Our Mission", href: "#mission" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Impact", href: "#benefits" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/Mask Group 3.svg"
                alt="The Greenprint Farmers Initiative"
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <div>
                <span className="text-white font-bold text-sm tracking-wide block">
                  GREENPRINT
                </span>
                <span className="text-[#5dc004] text-[11px] font-bold tracking-wider block">
                  FARMERS INITIATIVE
                </span>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed font-playfair italic mt-3">
              Feeding Africa. Growing Prosperity.
              <br />
              Planting the Future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/35 hover:text-[#D4A843] text-sm transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-white/35 text-sm">
              <li>info@greenprintfarmers.org</li>
              <li>+234 (0) 000 000 0000</li>
              <li>Abuja, Nigeria</li>
            </ul>
          </div>

          {/* Aligned With */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Aligned With
            </h4>
            <ul className="space-y-2.5 text-white/35 text-sm">
              <li>AU Agenda 2063</li>
              <li>AfCFTA</li>
              <li>CAADP</li>
              <li>Malabo Declaration</li>
              <li>SDGs 1, 2, 8, 9, 13, 15</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs text-center sm:text-left">
            &copy; 2026 The Greenprint Farmers Initiative. All rights reserved.
          </p>
          <p className="text-white/20 text-xs text-center sm:text-right">
            This is an advocacy website for a proposed programme. All renders are artist&apos;s impressions.
          </p>
        </div>
      </div>
    </footer>
  );
}
