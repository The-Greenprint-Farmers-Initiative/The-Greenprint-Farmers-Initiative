"use client";

// Hub dot positions mapped to the NG MAP.svg viewBox (2880 x 2160)
// Coordinates approximate state capital locations on the SVG map

const states = [
  { name: "Sokoto", x: 670, y: 280 },
  { name: "Zamfara", x: 820, y: 380 },
  { name: "Kebbi", x: 520, y: 500 },
  { name: "Katsina", x: 1020, y: 260 },
  { name: "Kano", x: 1140, y: 420 },
  { name: "Jigawa", x: 1340, y: 340 },
  { name: "Borno", x: 1900, y: 420 },
  { name: "Yobe", x: 1650, y: 380 },
  { name: "Bauchi", x: 1380, y: 580 },
  { name: "Gombe", x: 1540, y: 560 },
  { name: "Adamawa", x: 1780, y: 700 },
  { name: "Taraba", x: 1600, y: 800 },
  { name: "Plateau", x: 1280, y: 720 },
  { name: "Kaduna", x: 1000, y: 560 },
  { name: "Niger", x: 760, y: 700 },
  { name: "FCT", x: 1020, y: 820, isFCT: true },
  { name: "Nassarawa", x: 1160, y: 840 },
  { name: "Kwara", x: 620, y: 880 },
  { name: "Kogi", x: 860, y: 960 },
  { name: "Benue", x: 1240, y: 940 },
  { name: "Oyo", x: 500, y: 1020 },
  { name: "Osun", x: 580, y: 1080 },
  { name: "Ekiti", x: 680, y: 1050 },
  { name: "Ondo", x: 620, y: 1180 },
  { name: "Ogun", x: 420, y: 1140 },
  { name: "Lagos", x: 360, y: 1220 },
  { name: "Edo", x: 780, y: 1180 },
  { name: "Delta", x: 740, y: 1320 },
  { name: "Anambra", x: 920, y: 1180 },
  { name: "Enugu", x: 1020, y: 1120 },
  { name: "Ebonyi", x: 1120, y: 1160 },
  { name: "Imo", x: 940, y: 1280 },
  { name: "Abia", x: 1040, y: 1260 },
  { name: "Rivers", x: 900, y: 1400 },
  { name: "Bayelsa", x: 780, y: 1440 },
  { name: "Cross River", x: 1220, y: 1260 },
  { name: "Akwa Ibom", x: 1100, y: 1380 },
];

export default function NigeriaMap() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* NG MAP.svg as base layer */}
      <svg
        viewBox="0 0 2880 2160"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Embed the NG MAP.svg via image */}
        <image
          href="/images/NG MAP.svg"
          x="0"
          y="0"
          width="2880"
          height="2160"
        />

        {/* Hub dots overlay */}
        {states.map((state, i) => (
          <g key={state.name}>
            {/* Animated pulse ring */}
            <circle
              cx={state.x}
              cy={state.y}
              r="20"
              fill={state.isFCT ? "#D4A843" : "#009639"}
              opacity="0.15"
            >
              <animate
                attributeName="r"
                values="20;35;20"
                dur={`${2 + (i % 5) * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.2;0.05;0.2"
                dur={`${2 + (i % 5) * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Dot */}
            <circle
              cx={state.x}
              cy={state.y}
              r={state.isFCT ? 18 : 12}
              fill={state.isFCT ? "#D4A843" : "#009639"}
              stroke="white"
              strokeWidth="3"
            />
            {/* FCT label */}
            {state.isFCT && (
              <>
                <text
                  x={state.x + 30}
                  y={state.y + 8}
                  fill="#0D1B2A"
                  fontSize="36"
                  fontWeight="bold"
                  fontFamily="'DM Sans', sans-serif"
                >
                  FCT
                </text>
              </>
            )}
          </g>
        ))}
      </svg>

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
