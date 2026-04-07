"use client";

// Accurate Nigeria map outline with hub dots positioned at actual state capital locations
// Viewbox calibrated to Nigeria's approximate lat/lng bounds: lng 2.7-14.7, lat 4.2-13.9

const states = [
  { name: "Lagos", x: 108, y: 355 },
  { name: "Ogun", x: 120, y: 330 },
  { name: "Oyo", x: 135, y: 300 },
  { name: "Osun", x: 155, y: 310 },
  { name: "Ondo", x: 170, y: 335 },
  { name: "Ekiti", x: 175, y: 300 },
  { name: "Kwara", x: 155, y: 260 },
  { name: "Edo", x: 195, y: 345 },
  { name: "Delta", x: 195, y: 370 },
  { name: "Bayelsa", x: 210, y: 395 },
  { name: "Rivers", x: 230, y: 390 },
  { name: "Imo", x: 245, y: 365 },
  { name: "Abia", x: 260, y: 365 },
  { name: "Anambra", x: 240, y: 345 },
  { name: "Enugu", x: 260, y: 335 },
  { name: "Ebonyi", x: 275, y: 340 },
  { name: "Cross River", x: 290, y: 370 },
  { name: "Akwa Ibom", x: 265, y: 390 },
  { name: "Kogi", x: 215, y: 290 },
  { name: "Benue", x: 280, y: 295 },
  { name: "Nassarawa", x: 260, y: 260 },
  { name: "Plateau", x: 280, y: 240 },
  { name: "Taraba", x: 320, y: 270 },
  { name: "Adamawa", x: 345, y: 230 },
  { name: "Gombe", x: 320, y: 200 },
  { name: "Bauchi", x: 295, y: 200 },
  { name: "Kaduna", x: 240, y: 190 },
  { name: "Niger", x: 190, y: 220 },
  { name: "Kebbi", x: 135, y: 175 },
  { name: "Sokoto", x: 165, y: 120 },
  { name: "Zamfara", x: 195, y: 150 },
  { name: "Katsina", x: 235, y: 120 },
  { name: "Kano", x: 260, y: 150 },
  { name: "Jigawa", x: 290, y: 130 },
  { name: "Yobe", x: 340, y: 140 },
  { name: "Borno", x: 370, y: 160 },
  { name: "FCT", x: 235, y: 260, isFCT: true },
];

export default function NigeriaMap() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="50 70 400 370"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Accurate Nigeria outline */}
        <path
          d="
            M 90 350
            C 85 340, 82 330, 85 320
            C 88 310, 92 305, 95 298
            L 100 290
            C 102 282, 105 275, 108 268
            L 115 255
            C 118 248, 120 242, 122 236
            L 128 220
            C 130 212, 132 205, 130 198
            C 128 190, 125 185, 122 178
            L 118 170
            C 120 162, 125 158, 130 155
            C 138 150, 142 148, 148 145
            L 155 138
            C 160 132, 162 126, 165 120
            C 168 115, 172 112, 178 110
            C 185 107, 192 108, 200 110
            C 208 112, 215 110, 222 108
            C 230 105, 238 100, 248 100
            C 258 100, 265 105, 272 108
            C 280 112, 288 110, 295 112
            C 305 115, 312 120, 320 125
            C 328 130, 338 128, 348 125
            C 355 122, 362 125, 368 130
            C 375 136, 380 142, 385 150
            C 390 158, 392 165, 395 172
            C 398 180, 400 188, 398 196
            C 395 205, 390 212, 385 218
            C 378 228, 370 235, 362 242
            C 355 250, 348 258, 340 265
            C 332 272, 325 280, 318 288
            C 312 295, 308 302, 305 310
            C 302 318, 300 325, 298 332
            C 295 340, 292 348, 288 355
            C 284 362, 280 368, 275 375
            C 268 382, 260 388, 252 392
            C 245 396, 238 400, 230 402
            C 222 404, 215 405, 208 404
            C 200 402, 195 398, 190 394
            C 185 388, 180 382, 178 376
            C 175 368, 170 362, 165 358
            C 158 352, 150 350, 142 350
            C 135 350, 128 352, 120 355
            C 112 358, 105 360, 100 358
            C 95 356, 92 353, 90 350
            Z
          "
          fill="#E8F5E9"
          stroke="#009639"
          strokeWidth="2.5"
        />

        {/* Inner detail lines for geographic texture */}
        <path
          d="M 130 260 Q 180 250, 230 260 Q 280 270, 310 290"
          stroke="#009639"
          strokeWidth="0.5"
          opacity="0.15"
          fill="none"
        />
        <path
          d="M 140 200 Q 200 190, 260 200 Q 310 210, 350 230"
          stroke="#009639"
          strokeWidth="0.5"
          opacity="0.15"
          fill="none"
        />
        <path
          d="M 155 155 Q 220 150, 290 155 Q 340 160, 370 170"
          stroke="#009639"
          strokeWidth="0.5"
          opacity="0.15"
          fill="none"
        />

        {/* State hub dots */}
        {states.map((state, i) => (
          <g key={state.name}>
            {/* Pulse ring */}
            <circle
              cx={state.x}
              cy={state.y}
              r="6"
              fill={state.isFCT ? "#D4A843" : "#009639"}
              opacity="0.15"
            >
              <animate
                attributeName="r"
                values="6;12;6"
                dur={`${2 + (i % 4) * 0.4}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.2;0.05;0.2"
                dur={`${2 + (i % 4) * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
            {/* Dot */}
            <circle
              cx={state.x}
              cy={state.y}
              r={state.isFCT ? "5" : "3.5"}
              fill={state.isFCT ? "#D4A843" : "#009639"}
              stroke="white"
              strokeWidth="1"
            />
            {/* FCT label */}
            {state.isFCT && (
              <text
                x={state.x + 10}
                y={state.y + 4}
                fill="#0D1B2A"
                fontSize="11"
                fontWeight="bold"
                fontFamily="'DM Sans', sans-serif"
              >
                FCT
              </text>
            )}
          </g>
        ))}

        {/* Title */}
        <text
          x="230"
          y="435"
          fill="#0D1B2A"
          fontSize="13"
          fontWeight="600"
          textAnchor="middle"
          fontFamily="'DM Sans', sans-serif"
          opacity="0.5"
        >
          Federal Republic of Nigeria
        </text>
      </svg>

      {/* Legend */}
      <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-100">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-[#009639]" />
          <span className="text-gray-600">Greenprint Hub (36 States)</span>
        </div>
        <div className="flex items-center gap-2 text-sm mt-1">
          <div className="w-3 h-3 rounded-full bg-[#D4A843]" />
          <span className="text-gray-600">FCT Headquarters</span>
        </div>
        <div className="text-xs text-gray-400 mt-2">
          72 Hubs across 36 States + FCT
        </div>
      </div>
    </div>
  );
}
