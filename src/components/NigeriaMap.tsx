"use client";

const states = [
  { name: "Sokoto", x: 753, y: 281 },
  { name: "Kebbi", x: 546, y: 403 },
  { name: "Zamfara", x: 1037, y: 459 },
  { name: "Katsina", x: 1225, y: 293 },
  { name: "Kaduna", x: 1191, y: 790 },
  { name: "Kano", x: 1409, y: 493 },
  { name: "Jigawa", x: 1572, y: 541 },
  { name: "Bauchi", x: 1672, y: 832 },
  { name: "Gombe", x: 1938, y: 836 },
  { name: "Yobe", x: 2096, y: 543 },
  { name: "Borno", x: 2335, y: 523 },
  { name: "Adamawa", x: 2196, y: 1049 },
  { name: "Taraba", x: 1976, y: 1117 },
  { name: "Niger", x: 1017, y: 973 },
  { name: "Kwara", x: 616, y: 1195 },
  { name: "Plateau", x: 1482, y: 910 },
  { name: "Nassarawa", x: 1409, y: 1197 },
  { name: "Kogi", x: 1053, y: 1336 },
  { name: "Benue", x: 1413, y: 1350 },
  { name: "FCT", x: 1203, y: 1083, isFCT: true },
  { name: "Oyo", x: 492, y: 1418 },
  { name: "Osun", x: 618, y: 1342 },
  { name: "Ekiti", x: 749, y: 1372 },
  { name: "Ondo", x: 745, y: 1446 },
  { name: "Ogun", x: 376, y: 1464 },
  { name: "Lagos", x: 386, y: 1607 },
  { name: "Edo", x: 831, y: 1629 },
  { name: "Delta", x: 841, y: 1719 },
  { name: "Bayelsa", x: 957, y: 1914 },
  { name: "Rivers", x: 1107, y: 1936 },
  { name: "Akwa Ibom", x: 1291, y: 1889 },
  { name: "Cross River", x: 1369, y: 1908 },
  { name: "Anambra", x: 1119, y: 1655 },
  { name: "Enugu", x: 1205, y: 1609 },
  { name: "Ebonyi", x: 1325, y: 1633 },
  { name: "Imo", x: 1111, y: 1801 },
  { name: "Abia", x: 1203, y: 1791 },
];

const HUB_DOT = 22;
const FCT_DOT = 32;

export default function NigeriaMap() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 2880 2160"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* invert the embedded raster to look right on dark bg */}
          <filter id="invertMap">
            <feColorMatrix type="matrix" values="
              -0.7 0 0 0 0.85
              0 -0.7 0 0 0.83
              0 0 -0.7 0 0.78
              0 0 0 0.35 0
            "/>
          </filter>
        </defs>

        <image
          href="/images/NG MAP.svg"
          x="0"
          y="0"
          width="2880"
          height="2160"
          filter="url(#invertMap)"
          opacity="0.55"
        />

        {states.map((state, i) => {
          const r = state.isFCT ? FCT_DOT : HUB_DOT;
          const fill = state.isFCT ? "#C9A961" : "#F2EDE2";
          return (
            <g key={state.name}>
              <circle
                cx={state.x}
                cy={state.y}
                r={r * 1.6}
                fill={fill}
                opacity="0.10"
              >
                <animate
                  attributeName="r"
                  values={`${r * 1.4};${r * 2.2};${r * 1.4}`}
                  dur={`${2.5 + (i % 5) * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.18;0.04;0.18"
                  dur={`${2.5 + (i % 5) * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={state.x} cy={state.y} r={r} fill={fill} />
              {state.isFCT && (
                <text
                  x={state.x + r + 16}
                  y={state.y + 14}
                  fill="#C9A961"
                  fontSize="42"
                  fontFamily="'Inter', sans-serif"
                  fontWeight="500"
                  letterSpacing="2"
                >
                  FCT
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 mt-6 pt-6 border-t border-[#F2EDE2]/10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#F2EDE2]" />
          <span className="text-xs text-[#F2EDE2]/60">Planned hub · 36 states</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#C9A961]" />
          <span className="text-xs text-[#F2EDE2]/60">FCT · Headquarters</span>
        </div>
        <div className="text-[11px] text-[#F2EDE2]/35 italic font-serif sm:ml-4">
          72 hubs across all 36 states + FCT
        </div>
      </div>
    </div>
  );
}
