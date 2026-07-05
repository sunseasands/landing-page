// Placeholder for the reference site's low-opacity botanical photography:
// blurred foliage masses + a warm pink wash + a few sharp frond silhouettes.
// Swap for a real full-bleed photo layer when imagery is available.
export default function BotanicalBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d8a793" stopOpacity="0.38" />
            <stop offset="0.5" stopColor="#d8a793" stopOpacity="0.14" />
            <stop offset="1" stopColor="#efe6d9" stopOpacity="0" />
          </linearGradient>
          <filter id="foliage-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        <rect width="1440" height="620" fill="url(#wash)" />

        {/* Soft out-of-focus foliage masses */}
        <g filter="url(#foliage-blur)">
          <ellipse cx="180" cy="110" rx="280" ry="150" fill="#7f8a5c" opacity="0.30" />
          <ellipse cx="700" cy="60" rx="360" ry="170" fill="#c9a08e" opacity="0.34" />
          <ellipse cx="1180" cy="150" rx="320" ry="180" fill="#8a9468" opacity="0.28" />
          <ellipse cx="420" cy="330" rx="400" ry="190" fill="#d9b7a4" opacity="0.24" />
          <ellipse cx="1000" cy="380" rx="360" ry="200" fill="#9aa374" opacity="0.18" />
        </g>

        {/* Sharper frond silhouettes */}
        <g fill="#5c6440" opacity="0.13">
          <path d="M120,40 Q200,-30 320,10 Q230,60 120,40Z" />
          <path d="M240,120 Q340,40 470,90 Q360,150 240,120Z" />
          <path d="M60,220 Q160,150 290,190 Q180,250 60,220Z" />
          <path d="M620,30 Q720,-40 850,0 Q750,60 620,30Z" />
          <path d="M780,140 Q900,70 1030,120 Q910,190 780,140Z" />
          <path d="M1120,60 Q1230,-10 1360,40 Q1250,110 1120,60Z" />
          <path d="M1220,240 Q1330,170 1440,220 Q1330,290 1220,240Z" />
          <path d="M420,60 Q460,180 380,300 Q350,170 420,60Z" />
          <path d="M960,220 Q1000,330 930,440 Q900,320 960,220Z" />
        </g>
        <g
          fill="none"
          stroke="#5c6440"
          strokeOpacity="0.12"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <path d="M0,150 Q320,60 640,170" />
          <path d="M760,80 Q1080,10 1440,130" />
          <path d="M420,60 Q400,200 380,300" />
        </g>
      </svg>
    </div>
  )
}
