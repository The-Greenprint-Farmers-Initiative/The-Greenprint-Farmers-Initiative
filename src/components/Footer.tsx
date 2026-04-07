"use client";

import Image from "next/image";

const quickLinks = [
  { label: "About", href: "#vision" },
  { label: "The Hub", href: "#hub" },
  { label: "Investment", href: "#investors" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/website navbar logo.png"
                alt="The Greenprint Farmers Initiative"
                width={180}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-playfair italic">
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
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#D4A843] text-sm transition-colors duration-300"
                  >
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
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li>info@greenprintinitiative.org</li>
              <li>+234 (0) 000 000 0000</li>
              <li>Abuja, Nigeria</li>
            </ul>
          </div>

          {/* Alignment */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Aligned With
            </h4>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li>AU Agenda 2063</li>
              <li>AfCFTA</li>
              <li>CAADP</li>
              <li>SDGs 1, 2, 8, 9, 13, 15</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs text-center sm:text-left">
            &copy; 2026 The Greenprint Initiative. All rights reserved.
          </p>
          <p className="text-white/25 text-xs text-center sm:text-right">
            Aligned with AU Agenda 2063 | AfCFTA | CAADP
          </p>
        </div>
      </div>
    </footer>
  );
}
