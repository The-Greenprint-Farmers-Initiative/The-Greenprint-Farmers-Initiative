"use client";

// Hub positions calculated from geographic coordinates mapped to NG MAP.svg
// Map path bounding box within 2880x2160 viewBox: x=246, y=112, w=2397, h=1946
// Geo mapping: lon 2.7-14.7°E → x 246-2643, lat 4.2-13.9°N → y 112-2058

const states = [
  // North-West
  { name: "Sokoto", x: 753, y: 281 },
  { name: "Kebbi", x: 546, y: 403 },
  { name: "Zamfara", x: 1037, y: 459 },
  { name: "Katsina", x: 1225, y: 293 },
  { name: "Kaduna", x: 1191, y: 790 },
  { name: "Kano", x: 1409, y: 493 },
  { name: "Jigawa", x: 1572, y: 541 },

  // North-East
  { name: "Bauchi", x: 1672, y: 832 },
  { name: "Gombe", x: 1938, y: 836 },
  { name: "Yobe", x: 2096, y: 543 },
  { name: "Borno", x: 2335, y: 523 },
  { name: "Adamawa", x: 2196, y: 1049 },
  { name: "Taraba", x: 1976, y: 1117 },

  // North-Central
  { name: "Niger", x: 1017, y: 973 },
  { name: "Kwara", x: 616, y: 1195 },
  { name: "Plateau", x: 1482, y: 910 },
  { name: "Nassarawa", x: 1409, y: 1197 },
  { name: "Kogi", x: 1053, y: 1336 },
  { name: "Benue", x: 1413, y: 1350 },
  { name: "FCT", x: 1203, y: 1083, isFCT: true },

  // South-West
  { name: "Oyo", x: 492, y: 1418 },
  { name: "Osun", x: 618, y: 1342 },
  { name: "Ekiti", x: 749, y: 1372 },
  { name: "Ondo", x: 745, y: 1446 },
  { name: "Ogun", x: 376, y: 1464 },
  { name: "Lagos", x: 386, y: 1607 },

  // South-South
  { name: "Edo", x: 831, y: 1629 },
  { name: "Delta", x: 841, y: 1719 },
  { name: "Bayelsa", x: 957, y: 1914 },
  { name: "Rivers", x: 1107, y: 1936 },
  { name: "Akwa Ibom", x: 1291, y: 1889 },
  { name: "Cross River", x: 1369, y: 1908 },

  // South-East
  { name: "Anambra", x: 1119, y: 1655 },
  { name: "Enugu", x: 1205, y: 1609 },
  { name: "Ebonyi", x: 1325, y: 1633 },
  { name: "Imo", x: 1111, y: 1801 },
  { name: "Abia", x: 1203, y: 1791 },
];

const LOGO_SIZE = 80;
const FCT_LOGO_SIZE = 110;

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

        {/* Hub logos with pulse */}
        {states.map((state, i) => {
          const size = state.isFCT ? FCT_LOGO_SIZE : LOGO_SIZE;
          return (
            <g key={state.name}>
              {/* Pulse ring */}
              <circle
                cx={state.x}
                cy={state.y}
                r={size * 0.55}
                fill={state.isFCT ? "#D4A843" : "#009639"}
                opacity="0.15"
              >
                <animate
                  attributeName="r"
                  values={`${size * 0.55};${size * 0.95};${size * 0.55}`}
                  dur={`${2 + (i % 5) * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;0.03;0.2"
                  dur={`${2 + (i % 5) * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Logo */}
              <image
                href="/images/Mask Group 3.svg"
                x={state.x - size / 2}
                y={state.y - size / 2}
                width={size}
                height={size}
              />

              {/* FCT label */}
              {state.isFCT && (
                <text
                  x={state.x + size / 2 + 10}
                  y={state.y + 14}
                  fill="#D4A843"
                  fontSize="48"
                  fontWeight="bold"
                  fontFamily="'DM Sans', sans-serif"
                >
                  FCT
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-3 sm:mt-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <img src="/images/Mask Group 3.svg" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-gray-500">Planned Hub (36 States)</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <img src="/images/Mask Group 3.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-gray-500">FCT Headquarters</span>
        </div>
      </div>
      <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-1.5">
        72 planned hubs across all 36 States + FCT
      </p>
    </div>
  );
}
