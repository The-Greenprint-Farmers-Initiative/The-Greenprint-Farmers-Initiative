"use client";

import Image from "next/image";

export default function NigeriaMap() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Image
        src="/images/NG MAP.svg"
        alt="Map of Nigeria showing 72 planned Greenprint Hub locations across all 36 states and FCT"
        width={600}
        height={600}
        className="w-full h-auto"
        priority
      />
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-[#009639]" />
          <span className="text-gray-500">Planned Hub Location (36 States)</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-[#D4A843]" />
          <span className="text-gray-500">FCT Headquarters</span>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-2">
        72 planned hubs across all 36 States + FCT
      </p>
    </div>
  );
}
