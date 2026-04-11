"use client";

// Hub dot positions calibrated to NG MAP.svg (viewBox 2880x2160)
// Map occupies roughly: left ~280, right ~2200, top ~100, bottom ~1900
// Positions based on actual Nigerian state geography:
// - North: Sokoto/Katsina/Kano/Jigawa/Borno across top
// - Middle Belt: Kwara/Niger/Kogi/Benue/Plateau/Nassarawa/FCT
// - South-West: Lagos/Ogun/Oyo/Osun/Ondo/Ekiti
// - South-East: Anambra/Enugu/Imo/Abia/Ebonyi
// - South-South: Edo/Delta/Bayelsa/Rivers/Cross River/Akwa Ibom

const states = [
  // North-West
  { name: "Sokoto", x: 590, y: 240 },
  { name: "Kebbi", x: 430, y: 470 },
  { name: "Zamfara", x: 740, y: 360 },
  { name: "Katsina", x: 940, y: 230 },
  { name: "Kaduna", x: 920, y: 530 },

  // North-East
  { name: "Kano", x: 1100, y: 360 },
  { name: "Jigawa", x: 1280, y: 280 },
  { name: "Bauchi", x: 1320, y: 530 },
  { name: "Gombe", x: 1480, y: 490 },
  { name: "Yobe", x: 1560, y: 310 },
  { name: "Borno", x: 1810, y: 360 },
  { name: "Adamawa", x: 1700, y: 660 },
  { name: "Taraba", x: 1520, y: 740 },

  // North-Central
  { name: "Niger", x: 680, y: 640 },
  { name: "Kwara", x: 530, y: 810 },
  { name: "Plateau", x: 1220, y: 680 },
  { name: "Nassarawa", x: 1120, y: 790 },
  { name: "Kogi", x: 810, y: 900 },
  { name: "Benue", x: 1180, y: 890 },
  { name: "FCT", x: 960, y: 770, isFCT: true },

  // South-West
  { name: "Oyo", x: 470, y: 960 },
  { name: "Osun", x: 560, y: 1020 },
  { name: "Ekiti", x: 650, y: 980 },
  { name: "Ondo", x: 600, y: 1110 },
  { name: "Ogun", x: 400, y: 1080 },
  { name: "Lagos", x: 340, y: 1170 },

  // South-South
  { name: "Edo", x: 740, y: 1120 },
  { name: "Delta", x: 700, y: 1260 },
  { name: "Bayelsa", x: 740, y: 1380 },
  { name: "Rivers", x: 860, y: 1340 },
  { name: "Akwa Ibom", x: 1060, y: 1360 },
  { name: "Cross River", x: 1160, y: 1220 },

  // South-East
  { name: "Anambra", x: 850, y: 1140 },
  { name: "Enugu", x: 950, y: 1060 },
  { name: "Ebonyi", x: 1060, y: 1100 },
  { name: "Imo", x: 880, y: 1230 },
  { name: "Abia", x: 980, y: 1200 },
];

export default function NigeriaMap() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <svg
        viewBox="0 0 2880 2160"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* NG MAP.svg as base */}
        <image
          href="/images/NG MAP.svg"
          x="0"
          y="0"
          width="2880"
          height="2160"
        />

        {/* Hub dots */}
        {states.map((state, i) => (
          <g key={state.name}>
            {/* Pulse */}
            <circle
              cx={state.x}
              cy={state.y}
              r="18"
              fill={state.isFCT ? "#D4A843" : "#009639"}
              opacity="0.15"
            >
              <animate
                attributeName="r"
                values="18;32;18"
                dur={`${2 + (i % 5) * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.25;0.05;0.25"
                dur={`${2 + (i % 5) * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Dot */}
            <circle
              cx={state.x}
              cy={state.y}
              r={state.isFCT ? 20 : 14}
              fill={state.isFCT ? "#D4A843" : "#009639"}
              stroke="white"
              strokeWidth={state.isFCT ? 4 : 3}
            />
            {/* FCT label */}
            {state.isFCT && (
              <text
                x={state.x + 32}
                y={state.y + 10}
                fill="#D4A843"
                fontSize="42"
                fontWeight="bold"
                fontFamily="'DM Sans', sans-serif"
              >
                FCT
              </text>
            )}
          </g>
        ))}
      </svg>

      {/* Legend — responsive layout */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-3 sm:mt-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#009639]" />
          <span className="text-gray-500">Planned Hub (36 States)</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D4A843]" />
          <span className="text-gray-500">FCT Headquarters</span>
        </div>
      </div>
      <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-1.5">
        72 planned hubs across all 36 States + FCT
      </p>
    </div>
  );
}
