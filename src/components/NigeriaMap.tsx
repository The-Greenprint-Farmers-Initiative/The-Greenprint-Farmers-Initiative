"use client";

// Nigeria map with accurate outline and state capital hub dots
// Coordinates derived from Nigeria's geographic bounds (lng ~2.7-14.7, lat ~4.2-13.9)
// Mapped to SVG viewbox with x = longitude scaled, y = latitude inverted

const states = [
  { name: "Sokoto", x: 130, y: 68 },
  { name: "Zamfara", x: 160, y: 88 },
  { name: "Katsina", x: 197, y: 72 },
  { name: "Kano", x: 220, y: 100 },
  { name: "Jigawa", x: 255, y: 88 },
  { name: "Yobe", x: 306, y: 88 },
  { name: "Borno", x: 348, y: 98 },
  { name: "Kebbi", x: 110, y: 118 },
  { name: "Niger", x: 155, y: 158 },
  { name: "Kaduna", x: 200, y: 138 },
  { name: "Bauchi", x: 260, y: 140 },
  { name: "Gombe", x: 292, y: 138 },
  { name: "Adamawa", x: 330, y: 158 },
  { name: "Kwara", x: 125, y: 205 },
  { name: "FCT", x: 195, y: 198, isFCT: true },
  { name: "Nassarawa", x: 220, y: 202 },
  { name: "Plateau", x: 245, y: 178 },
  { name: "Taraba", x: 295, y: 195 },
  { name: "Oyo", x: 105, y: 238 },
  { name: "Osun", x: 120, y: 252 },
  { name: "Ekiti", x: 140, y: 248 },
  { name: "Kogi", x: 170, y: 228 },
  { name: "Benue", x: 230, y: 228 },
  { name: "Ogun", x: 90, y: 262 },
  { name: "Lagos", x: 80, y: 278 },
  { name: "Ondo", x: 130, y: 270 },
  { name: "Edo", x: 150, y: 280 },
  { name: "Anambra", x: 178, y: 275 },
  { name: "Enugu", x: 198, y: 268 },
  { name: "Ebonyi", x: 216, y: 272 },
  { name: "Cross River", x: 238, y: 288 },
  { name: "Delta", x: 145, y: 298 },
  { name: "Imo", x: 180, y: 292 },
  { name: "Abia", x: 198, y: 288 },
  { name: "Rivers", x: 172, y: 310 },
  { name: "Bayelsa", x: 155, y: 318 },
  { name: "Akwa Ibom", x: 212, y: 310 },
];

export default function NigeriaMap() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <svg
        viewBox="40 30 360 330"
        className="w-full h-auto drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Nigeria outline — accurate shape */}
        <path
          d="
            M 75 280
            C 72 274, 70 266, 72 258
            L 75 248
            C 73 240, 70 235, 68 228
            C 65 218, 68 210, 72 202
            L 80 192
            C 82 185, 85 178, 88 172
            L 92 165
            C 90 158, 88 150, 90 142
            C 92 134, 95 128, 98 122
            L 105 112
            C 108 108, 112 105, 118 102
            C 125 98, 130 95, 138 90
            C 145 85, 150 78, 155 72
            C 160 66, 168 60, 178 58
            C 188 55, 198 58, 208 62
            C 215 65, 222 64, 232 60
            C 242 56, 252 54, 262 56
            C 272 58, 280 62, 290 68
            C 298 73, 308 75, 318 72
            C 328 70, 338 72, 348 78
            C 355 83, 360 90, 365 98
            L 370 108
            C 372 118, 370 128, 365 138
            C 360 148, 352 155, 345 162
            C 338 170, 330 178, 322 186
            C 315 194, 308 202, 302 210
            C 296 218, 290 226, 285 234
            C 278 244, 270 252, 262 260
            C 255 268, 248 276, 240 284
            C 232 292, 225 300, 218 308
            C 212 315, 205 318, 198 320
            C 188 324, 178 326, 168 328
            C 158 330, 148 326, 140 322
            L 130 315
            C 122 308, 118 305, 112 302
            C 105 298, 98 296, 92 292
            C 85 288, 80 285, 75 280
            Z
          "
          fill="#E8F5E9"
          stroke="#009639"
          strokeWidth="2"
        />

        {/* State boundary hints */}
        <path d="M 98 175 Q 160 170, 210 190 Q 250 200, 290 210" stroke="#009639" strokeWidth="0.4" opacity="0.2" fill="none" />
        <path d="M 108 130 Q 180 125, 250 138 Q 310 148, 350 145" stroke="#009639" strokeWidth="0.4" opacity="0.2" fill="none" />
        <path d="M 80 248 Q 140 245, 195 260 Q 230 268, 250 280" stroke="#009639" strokeWidth="0.4" opacity="0.2" fill="none" />

        {/* Hub dots for each state */}
        {states.map((state, i) => (
          <g key={state.name}>
            {/* Animated pulse */}
            <circle
              cx={state.x}
              cy={state.y}
              r="5"
              fill={state.isFCT ? "#D4A843" : "#009639"}
              opacity="0.15"
            >
              <animate
                attributeName="r"
                values="5;10;5"
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
              r={state.isFCT ? "4.5" : "3"}
              fill={state.isFCT ? "#D4A843" : "#009639"}
              stroke="white"
              strokeWidth="0.8"
            />
            {/* FCT label */}
            {state.isFCT && (
              <text
                x={state.x + 8}
                y={state.y + 4}
                fill="#0D1B2A"
                fontSize="10"
                fontWeight="bold"
                fontFamily="'DM Sans', sans-serif"
              >
                FCT
              </text>
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
