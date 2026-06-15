// ═══════════════════════════════════════════════════════════════
// SVG REACTOR DIAGRAMS
// Each function returns an SVG string showing the relevant reactor
// type and the specific failure mode for that incident.
// ═══════════════════════════════════════════════════════════════

const REACTOR_DIAGRAMS = {

  // ── SL-1 (1961) — Manual control rod withdrawal failure ────
  sl1: `
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="reactor-svg">
      <defs>
        <linearGradient id="sl1-fuel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#d4391d" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#7d1c0a" stop-opacity="0.9"/>
        </linearGradient>
        <radialGradient id="sl1-explosion" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffeb3b" stop-opacity="1"/>
          <stop offset="40%" stop-color="#ff6b35" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#d4391d" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Reactor vessel outline -->
      <rect x="200" y="80" width="200" height="280" rx="8" fill="none" stroke="#1a1612" stroke-width="3"/>

      <!-- Water level -->
      <rect x="203" y="180" width="194" height="180" fill="#4ba0c4" fill-opacity="0.15"/>
      <line x1="200" y1="180" x2="400" y2="180" stroke="#4ba0c4" stroke-width="1" stroke-dasharray="3,2"/>

      <!-- Fuel core -->
      <rect x="240" y="200" width="120" height="120" fill="url(#sl1-fuel)" stroke="#1a1612" stroke-width="2"/>

      <!-- Fuel rods -->
      <g opacity="0.6">
        <line x1="260" y1="200" x2="260" y2="320" stroke="#1a1612" stroke-width="2"/>
        <line x1="280" y1="200" x2="280" y2="320" stroke="#1a1612" stroke-width="2"/>
        <line x1="320" y1="200" x2="320" y2="320" stroke="#1a1612" stroke-width="2"/>
        <line x1="340" y1="200" x2="340" y2="320" stroke="#1a1612" stroke-width="2"/>
      </g>

      <!-- Central control rod (the one that was withdrawn) -->
      <g class="sl1-rod">
        <rect x="295" y="40" width="10" height="180" fill="#2d2d2d" stroke="#1a1612" stroke-width="1"/>
        <rect x="290" y="35" width="20" height="10" fill="#1a1612"/>
      </g>

      <!-- Rod position markers -->
      <g class="sl1-markers" font-family="JetBrains Mono, monospace" font-size="10" fill="#8a7f72">
        <line x1="320" y1="200" x2="340" y2="200" stroke="#8a7f72" stroke-width="1"/>
        <text x="345" y="204">SAFE (4")</text>
        <line x1="320" y1="60" x2="340" y2="60" stroke="#d4391d" stroke-width="1"/>
        <text x="345" y="64" fill="#d4391d" font-weight="700">ACTUAL (20"+)</text>
      </g>

      <!-- Operator silhouette -->
      <g class="sl1-operator" transform="translate(120, 200)">
        <circle cx="0" cy="-30" r="12" fill="#4a423a"/>
        <path d="M -15 -15 L -15 25 L 15 25 L 15 -15 L 10 -15 L 10 -5 L -10 -5 L -10 -15 Z" fill="#4a423a"/>
        <line x1="15" y1="-5" x2="180" y2="50" stroke="#4a423a" stroke-width="2"/>
        <text x="-30" y="55" font-family="JetBrains Mono, monospace" font-size="10" fill="#1a1612" font-weight="600">OPERATOR</text>
      </g>

      <!-- Explosion overlay (animated) -->
      <circle cx="300" cy="260" r="80" fill="url(#sl1-explosion)" class="sl1-explosion" opacity="0"/>

      <!-- Power level annotation -->
      <g class="sl1-power" transform="translate(450, 100)">
        <text font-family="JetBrains Mono, monospace" font-size="11" fill="#8a7f72">POWER:</text>
        <text y="20" font-family="Fraunces, serif" font-size="24" font-weight="700" fill="#d4391d" class="sl1-power-num">~20 GW</text>
        <text y="40" font-family="JetBrains Mono, monospace" font-size="10" fill="#8a7f72">in 4 milliseconds</text>
      </g>

      <!-- Caption -->
      <text x="300" y="385" font-family="JetBrains Mono, monospace" font-size="11" fill="#4a423a" text-anchor="middle">
        Manual control rod withdrawal → prompt criticality → steam explosion
      </text>
    </svg>
  `,

  // ── THREE MILE ISLAND (1979) — Stuck valve + operator confusion ──
  tmi: `
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="reactor-svg">
      <defs>
        <linearGradient id="tmi-fuel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#d4391d" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#7d1c0a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>

      <!-- Containment dome -->
      <path d="M 60 320 Q 60 100, 250 100 Q 440 100, 440 320 Z" fill="none" stroke="#999186" stroke-width="3"/>
      <text x="80" y="115" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">CONTAINMENT</text>

      <!-- Reactor vessel -->
      <rect x="150" y="200" width="100" height="120" rx="6" fill="#ebe6dc" stroke="#1a1612" stroke-width="2"/>

      <!-- Fuel core -->
      <rect x="165" y="230" width="70" height="70" fill="url(#tmi-fuel)" stroke="#1a1612" stroke-width="1.5"/>

      <!-- Pressurizer -->
      <rect x="320" y="180" width="50" height="80" rx="4" fill="#ebe6dc" stroke="#1a1612" stroke-width="2"/>
      <text x="345" y="175" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72" text-anchor="middle">PRESSURIZER</text>

      <!-- Water level in pressurizer (rising due to leak) -->
      <rect x="322" y="200" width="46" height="58" fill="#4ba0c4" fill-opacity="0.3" class="tmi-water-rising"/>

      <!-- Pipe from reactor to pressurizer -->
      <path d="M 250 240 L 320 220" fill="none" stroke="#1a1612" stroke-width="2"/>

      <!-- The stuck PORV valve at top of pressurizer -->
      <g class="tmi-valve">
        <rect x="335" y="160" width="20" height="20" fill="#d4391d" stroke="#1a1612" stroke-width="2"/>
        <text x="345" y="174" font-family="JetBrains Mono, monospace" font-size="11" fill="#fff" text-anchor="middle" font-weight="700">!</text>
        <line x1="345" y1="160" x2="345" y2="140" stroke="#d4391d" stroke-width="2" class="tmi-leak"/>
      </g>

      <!-- Steam escaping (animated) -->
      <g class="tmi-steam" opacity="0.6">
        <circle cx="345" cy="135" r="6" fill="#999186" class="steam-1"/>
        <circle cx="350" cy="125" r="5" fill="#999186" class="steam-2"/>
        <circle cx="340" cy="115" r="7" fill="#999186" class="steam-3"/>
        <circle cx="348" cy="105" r="5" fill="#999186" class="steam-4"/>
      </g>

      <!-- PORV label -->
      <text x="380" y="172" font-family="JetBrains Mono, monospace" font-size="10" fill="#d4391d" font-weight="700">STUCK PORV</text>
      <text x="380" y="186" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">Indicator showed CLOSED</text>

      <!-- Operator confusion display -->
      <g transform="translate(450, 230)">
        <rect x="0" y="0" width="120" height="80" fill="#1a1612" stroke="#1a1612" stroke-width="1"/>
        <text x="60" y="20" font-family="JetBrains Mono, monospace" font-size="9" fill="#d4391d" text-anchor="middle">CONTROL PANEL</text>
        <text x="60" y="40" font-family="JetBrains Mono, monospace" font-size="8" fill="#ffeb3b" text-anchor="middle">⚠ TOO MUCH WATER</text>
        <text x="60" y="55" font-family="JetBrains Mono, monospace" font-size="8" fill="#ffeb3b" text-anchor="middle">(actually losing it)</text>
        <text x="60" y="70" font-family="JetBrains Mono, monospace" font-size="8" fill="#999186" text-anchor="middle">100+ alarms</text>
      </g>

      <!-- Caption -->
      <text x="300" y="370" font-family="JetBrains Mono, monospace" font-size="11" fill="#4a423a" text-anchor="middle">
        Stuck valve + misleading instruments → operators shut OFF emergency cooling
      </text>
    </svg>
  `,

  // ── CHERNOBYL (1986) — Positive void coefficient + bad rods ──
  chernobyl: `
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="reactor-svg">
      <defs>
        <linearGradient id="chernobyl-fuel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ff6b35" stop-opacity="1"/>
          <stop offset="100%" stop-color="#7d1c0a" stop-opacity="1"/>
        </linearGradient>
      </defs>

      <!-- NO containment building - this is the point -->
      <text x="300" y="40" font-family="Fraunces, serif" font-size="14" font-style="italic" fill="#d4391d" text-anchor="middle">
        ⚠ No containment building
      </text>

      <!-- Reactor block (graphite moderator) -->
      <rect x="150" y="80" width="300" height="240" fill="#3d3d3d" stroke="#1a1612" stroke-width="2"/>
      <text x="160" y="100" font-family="JetBrains Mono, monospace" font-size="9" fill="#999186">GRAPHITE MODERATOR</text>

      <!-- Fuel channels -->
      <g class="chernobyl-fuel">
        ${[170, 200, 230, 260, 290, 320, 350, 380, 410, 440].map(x => `
          <rect x="${x}" y="120" width="12" height="180" fill="url(#chernobyl-fuel)" stroke="#1a1612" stroke-width="1"/>
        `).join('')}
      </g>

      <!-- Steam bubbles forming (positive void coefficient) -->
      <g class="chernobyl-steam">
        <circle cx="195" cy="200" r="4" fill="#ffeb3b" opacity="0.7" class="bubble-1"/>
        <circle cx="265" cy="180" r="5" fill="#ffeb3b" opacity="0.7" class="bubble-2"/>
        <circle cx="335" cy="220" r="6" fill="#ff6b35" opacity="0.8" class="bubble-3"/>
        <circle cx="405" cy="190" r="5" fill="#ff6b35" opacity="0.8" class="bubble-4"/>
        <circle cx="225" cy="240" r="7" fill="#ff6b35" opacity="0.8" class="bubble-5"/>
      </g>

      <!-- Control rod with graphite tip -->
      <g class="chernobyl-rod" transform="translate(300, 0)">
        <rect x="-6" y="50" width="12" height="180" fill="#2d2d2d" stroke="#1a1612" stroke-width="1"/>
        <rect x="-6" y="220" width="12" height="40" fill="#999186" stroke="#1a1612" stroke-width="1"/>
        <text x="20" y="240" font-family="JetBrains Mono, monospace" font-size="9" fill="#d4391d" font-weight="700">GRAPHITE TIP</text>
        <text x="20" y="252" font-family="JetBrains Mono, monospace" font-size="9" fill="#d4391d">↳ Increases reactivity</text>
      </g>

      <!-- Feedback loop indicator -->
      <g transform="translate(40, 200)" class="chernobyl-feedback">
        <text font-family="JetBrains Mono, monospace" font-size="10" fill="#d4391d" font-weight="700">+VOID COEFFICIENT</text>
        <text y="14" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">More steam →</text>
        <text y="26" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">More power →</text>
        <text y="38" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">More steam →</text>
        <text y="50" font-family="JetBrains Mono, monospace" font-size="9" fill="#d4391d" font-weight="700">RUNAWAY</text>
      </g>

      <!-- Disabled safety systems -->
      <g transform="translate(470, 100)">
        <text font-family="JetBrains Mono, monospace" font-size="10" fill="#d4391d" font-weight="700">DISABLED:</text>
        <text y="16" font-family="JetBrains Mono, monospace" font-size="9" fill="#999186">✗ Emergency cooling</text>
        <text y="30" font-family="JetBrains Mono, monospace" font-size="9" fill="#999186">✗ Auto shutdown</text>
        <text y="44" font-family="JetBrains Mono, monospace" font-size="9" fill="#999186">✗ Power limits</text>
      </g>

      <!-- Caption -->
      <text x="300" y="370" font-family="JetBrains Mono, monospace" font-size="11" fill="#4a423a" text-anchor="middle">
        Bad design + disabled safeties + reckless test = uncontainable explosion
      </text>
    </svg>
  `,

  // ── DAVIS-BESSE (2002) — Hidden corrosion ──────────────────
  'davis-besse': `
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="reactor-svg">
      <defs>
        <radialGradient id="db-corrosion" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3d3d3d"/>
          <stop offset="60%" stop-color="#7d1c0a"/>
          <stop offset="100%" stop-color="#d4391d"/>
        </radialGradient>
      </defs>

      <!-- Reactor head zoomed view -->
      <text x="300" y="40" font-family="JetBrains Mono, monospace" font-size="11" fill="#8a7f72" text-anchor="middle">
        REACTOR PRESSURE VESSEL HEAD — CROSS SECTION
      </text>

      <!-- Steel head (carbon steel) -->
      <rect x="100" y="100" width="400" height="80" fill="#999186" stroke="#1a1612" stroke-width="2"/>
      <text x="120" y="125" font-family="JetBrains Mono, monospace" font-size="9" fill="#1a1612">CARBON STEEL (6" thick)</text>

      <!-- Stainless steel inner liner -->
      <rect x="100" y="180" width="400" height="8" fill="#d4d4d4" stroke="#1a1612" stroke-width="1"/>
      <text x="120" y="200" font-family="JetBrains Mono, monospace" font-size="9" fill="#1a1612">STAINLESS LINER (3/8" thick)</text>

      <!-- Reactor coolant beneath -->
      <rect x="100" y="190" width="400" height="80" fill="#4ba0c4" fill-opacity="0.4"/>
      <text x="280" y="240" font-family="JetBrains Mono, monospace" font-size="11" fill="#1a1612" text-anchor="middle" font-weight="600">
        High-pressure radioactive coolant (2,200 psi)
      </text>

      <!-- Control rod nozzles -->
      <g>
        ${[150, 220, 290, 360, 430].map(x => `
          <rect x="${x-8}" y="80" width="16" height="100" fill="#5c4a2a" stroke="#1a1612" stroke-width="1"/>
        `).join('')}
      </g>

      <!-- The corrosion cavity -->
      <g class="db-corrosion-cavity">
        <ellipse cx="290" cy="140" rx="50" ry="40" fill="url(#db-corrosion)" stroke="#1a1612" stroke-width="2"/>
        <ellipse cx="290" cy="140" rx="35" ry="25" fill="#1a1612"/>
        <text x="290" y="135" font-family="JetBrains Mono, monospace" font-size="9" fill="#ff6b35" text-anchor="middle" font-weight="700">CORROSION</text>
        <text x="290" y="150" font-family="JetBrains Mono, monospace" font-size="9" fill="#ff6b35" text-anchor="middle">CAVITY</text>
      </g>

      <!-- Boric acid drips (animated) -->
      <g class="db-boric-drip">
        <circle cx="240" cy="190" r="3" fill="#ffeb3b" opacity="0.8" class="drip-1"/>
        <circle cx="300" cy="195" r="3" fill="#ffeb3b" opacity="0.8" class="drip-2"/>
        <circle cx="350" cy="190" r="3" fill="#ffeb3b" opacity="0.8" class="drip-3"/>
      </g>

      <!-- Annotation arrows -->
      <g class="db-arrows">
        <line x1="380" y1="60" x2="320" y2="115" stroke="#d4391d" stroke-width="1.5"/>
        <text x="385" y="55" font-family="JetBrains Mono, monospace" font-size="10" fill="#d4391d" font-weight="700">6 inches eaten through</text>
        <text x="385" y="68" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">over multiple years</text>

        <line x1="180" y1="220" x2="240" y2="195" stroke="#d4391d" stroke-width="1.5"/>
        <text x="50" y="225" font-family="JetBrains Mono, monospace" font-size="10" fill="#d4391d" font-weight="700">Only 3/8" stainless</text>
        <text x="50" y="237" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">holding back coolant</text>
      </g>

      <!-- Bulging indicator -->
      <path d="M 270 188 Q 290 200 310 188" fill="none" stroke="#d4391d" stroke-width="2" stroke-dasharray="3,2" class="db-bulge"/>

      <!-- Caption -->
      <text x="300" y="370" font-family="JetBrains Mono, monospace" font-size="11" fill="#4a423a" text-anchor="middle">
        Years of undetected boric acid corrosion → near-rupture under 2,200 psi pressure
      </text>
    </svg>
  `,

  // ── FUKUSHIMA (2011) — Tsunami floods backup generators ─────
  fukushima: `
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="reactor-svg">
      <defs>
        <linearGradient id="fk-water" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2a6b6e" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#1a4a4d" stop-opacity="1"/>
        </linearGradient>
      </defs>

      <!-- Sky -->
      <rect x="0" y="0" width="600" height="200" fill="#ebe6dc"/>

      <!-- Ground -->
      <rect x="0" y="280" width="600" height="120" fill="#5c4a2a" fill-opacity="0.3"/>

      <!-- Seawall (designed for 5.7m) -->
      <g class="fk-seawall">
        <rect x="50" y="240" width="20" height="60" fill="#999186" stroke="#1a1612" stroke-width="2"/>
        <line x1="40" y1="230" x2="80" y2="230" stroke="#999186" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="90" y="234" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">5.7m DESIGN</text>
      </g>

      <!-- Actual tsunami height -->
      <line x1="40" y1="100" x2="80" y2="100" stroke="#d4391d" stroke-width="2" stroke-dasharray="3,2"/>
      <text x="90" y="104" font-family="JetBrains Mono, monospace" font-size="10" fill="#d4391d" font-weight="700">14m TSUNAMI</text>

      <!-- Tsunami wave overtopping -->
      <path d="M 0 100 Q 50 80, 100 100 T 200 110 L 200 300 L 0 300 Z"
            fill="url(#fk-water)" class="fk-tsunami"/>
      <path d="M 0 100 Q 50 80, 100 100 T 200 110"
            fill="none" stroke="#fff" stroke-width="2" opacity="0.6"/>

      <!-- Reactor building -->
      <rect x="220" y="170" width="160" height="130" fill="#999186" stroke="#1a1612" stroke-width="2"/>

      <!-- Containment dome inside -->
      <path d="M 240 210 Q 240 180, 300 180 Q 360 180, 360 210 L 360 290 L 240 290 Z"
            fill="#ebe6dc" stroke="#1a1612" stroke-width="2"/>

      <!-- Reactor core -->
      <rect x="280" y="220" width="40" height="60" fill="#d4391d" stroke="#1a1612" stroke-width="1.5" class="fk-core"/>

      <!-- Backup generators (in basement, getting flooded) -->
      <g class="fk-generators">
        <rect x="400" y="270" width="40" height="30" fill="#1a1612"/>
        <text x="420" y="290" font-family="JetBrains Mono, monospace" font-size="9" fill="#ffeb3b" text-anchor="middle">GEN</text>
        <rect x="450" y="270" width="40" height="30" fill="#1a1612"/>
        <text x="470" y="290" font-family="JetBrains Mono, monospace" font-size="9" fill="#ffeb3b" text-anchor="middle">GEN</text>
        <rect x="500" y="270" width="40" height="30" fill="#1a1612"/>
        <text x="520" y="290" font-family="JetBrains Mono, monospace" font-size="9" fill="#ffeb3b" text-anchor="middle">GEN</text>
      </g>

      <!-- Floodwater overtaking generators -->
      <rect x="200" y="260" width="400" height="40" fill="url(#fk-water)" opacity="0.7" class="fk-flood"/>

      <!-- Annotations -->
      <g class="fk-annotations">
        <text x="220" y="160" font-family="JetBrains Mono, monospace" font-size="9" fill="#1a1612">REACTOR BUILDING</text>
        <text x="395" y="265" font-family="JetBrains Mono, monospace" font-size="8" fill="#d4391d" font-weight="700">↑ FLOODED ↑</text>
      </g>

      <!-- Earthquake indicator -->
      <g class="fk-earthquake">
        <text x="50" y="40" font-family="Fraunces, serif" font-size="14" fill="#1a1612" font-weight="700">M9.0</text>
        <text x="50" y="55" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">EARTHQUAKE</text>
        <text x="50" y="68" font-family="JetBrains Mono, monospace" font-size="8" fill="#8a7f72">14:46 JST</text>
      </g>

      <!-- Decay heat warning -->
      <g class="fk-decay" transform="translate(250, 80)">
        <text font-family="JetBrains Mono, monospace" font-size="10" fill="#d4391d" font-weight="700">DECAY HEAT CONTINUES</text>
        <text y="14" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">7% of full power, declining</text>
        <text y="26" font-family="JetBrains Mono, monospace" font-size="9" fill="#8a7f72">over hours-days</text>
        <text y="40" font-family="JetBrains Mono, monospace" font-size="9" fill="#d4391d">Without cooling: meltdown</text>
      </g>

      <!-- Caption -->
      <text x="300" y="385" font-family="JetBrains Mono, monospace" font-size="11" fill="#4a423a" text-anchor="middle">
        Earthquake → tsunami → flooded backup power → loss of cooling → core melt
      </text>
    </svg>
  `,
};

// ── DEFENSE IN DEPTH DIAGRAM ────────────────────────────────
const DEFENSE_DEPTH_SVG = `
  <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" class="reactor-svg defense-svg">
    <defs>
      <radialGradient id="dd-core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ff6b35"/>
        <stop offset="100%" stop-color="#7d1c0a"/>
      </radialGradient>
    </defs>

    <!-- Layer 5: Exclusion zone -->
    <circle cx="300" cy="280" r="200" fill="none" stroke="#999186" stroke-width="2" stroke-dasharray="5,3"/>
    <text x="300" y="100" font-family="JetBrains Mono, monospace" font-size="10" fill="#8a7f72" text-anchor="middle">5 · EXCLUSION ZONE</text>

    <!-- Layer 4: Containment building -->
    <circle cx="300" cy="280" r="160" fill="#ebe6dc" stroke="#1a1612" stroke-width="3"/>
    <text x="300" y="135" font-family="JetBrains Mono, monospace" font-size="10" fill="#1a1612" text-anchor="middle" font-weight="600">4 · CONTAINMENT BUILDING</text>

    <!-- Layer 3: Primary containment -->
    <circle cx="300" cy="290" r="120" fill="#999186" stroke="#1a1612" stroke-width="2"/>
    <text x="300" y="180" font-family="JetBrains Mono, monospace" font-size="10" fill="#fff" text-anchor="middle" font-weight="600">3 · PRIMARY CONTAINMENT</text>

    <!-- Layer 2: Reactor pressure vessel -->
    <circle cx="300" cy="295" r="80" fill="#5c4a2a" stroke="#1a1612" stroke-width="2"/>
    <text x="300" y="225" font-family="JetBrains Mono, monospace" font-size="9" fill="#fff" text-anchor="middle" font-weight="600">2 · REACTOR VESSEL</text>

    <!-- Layer 1: Fuel cladding -->
    <circle cx="300" cy="300" r="45" fill="#3d3d3d" stroke="#1a1612" stroke-width="1.5"/>
    <text x="300" y="265" font-family="JetBrains Mono, monospace" font-size="9" fill="#fff" text-anchor="middle">1 · CLADDING</text>

    <!-- Fuel core (center) -->
    <circle cx="300" cy="305" r="20" fill="url(#dd-core)" stroke="#1a1612" stroke-width="1"/>
    <text x="300" y="310" font-family="JetBrains Mono, monospace" font-size="9" fill="#fff" text-anchor="middle" font-weight="700">FUEL</text>

    <!-- Connector lines and labels on right -->
    <g font-family="JetBrains Mono, monospace" font-size="9" fill="#4a423a">
      <line x1="320" y1="305" x2="510" y2="100" stroke="#999186" stroke-width="1"/>
      <text x="510" y="100" font-weight="700">Ceramic UO₂</text>

      <line x1="345" y1="300" x2="510" y2="155" stroke="#999186" stroke-width="1"/>
      <text x="510" y="155" font-weight="700">Zircaloy cladding</text>

      <line x1="380" y1="295" x2="510" y2="210" stroke="#999186" stroke-width="1"/>
      <text x="510" y="210" font-weight="700">Steel pressure vessel</text>

      <line x1="420" y1="290" x2="510" y2="265" stroke="#999186" stroke-width="1"/>
      <text x="510" y="265" font-weight="700">Steel containment</text>

      <line x1="460" y1="280" x2="510" y2="320" stroke="#999186" stroke-width="1"/>
      <text x="510" y="320" font-weight="700">Reinforced concrete</text>
    </g>
  </svg>
`;

// ── REACTOR GENERATIONS COMPARISON ──────────────────────────
const GENERATIONS_SVG = `
  <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" class="reactor-svg gen-svg">
    <text x="400" y="30" font-family="Fraunces, serif" font-size="20" font-weight="500" fill="#1a1612" text-anchor="middle">
      Four Generations of Reactor Safety
    </text>

    <!-- Timeline -->
    <line x1="60" y1="350" x2="740" y2="350" stroke="#1a1612" stroke-width="2"/>

    <!-- Generation I -->
    <g transform="translate(120, 100)">
      <circle cx="0" cy="0" r="35" fill="#999186" stroke="#1a1612" stroke-width="2"/>
      <text x="0" y="6" font-family="Fraunces, serif" font-size="20" font-weight="700" fill="#fff" text-anchor="middle">I</text>
      <text x="0" y="60" font-family="JetBrains Mono, monospace" font-size="11" fill="#1a1612" text-anchor="middle" font-weight="700">1950s-1960s</text>
      <text x="0" y="80" font-family="Fraunces, serif" font-size="13" fill="#1a1612" text-anchor="middle">Early prototypes</text>
      <text x="0" y="98" font-family="Fraunces, serif" font-size="11" fill="#8a7f72" text-anchor="middle" font-style="italic">Shippingport · SL-1</text>
      <text x="0" y="120" font-family="JetBrains Mono, monospace" font-size="9" fill="#d4391d" text-anchor="middle">Manual safety</text>
      <line x1="0" y1="140" x2="0" y2="245" stroke="#999186" stroke-width="1" stroke-dasharray="2,2"/>
    </g>

    <!-- Generation II -->
    <g transform="translate(290, 100)">
      <circle cx="0" cy="0" r="38" fill="#5c4a2a" stroke="#1a1612" stroke-width="2"/>
      <text x="0" y="6" font-family="Fraunces, serif" font-size="20" font-weight="700" fill="#fff" text-anchor="middle">II</text>
      <text x="0" y="60" font-family="JetBrains Mono, monospace" font-size="11" fill="#1a1612" text-anchor="middle" font-weight="700">1970s-1990s</text>
      <text x="0" y="80" font-family="Fraunces, serif" font-size="13" fill="#1a1612" text-anchor="middle">Commercial fleet</text>
      <text x="0" y="98" font-family="Fraunces, serif" font-size="11" fill="#8a7f72" text-anchor="middle" font-style="italic">PWR · BWR · CANDU</text>
      <text x="0" y="120" font-family="JetBrains Mono, monospace" font-size="9" fill="#b3502c" text-anchor="middle">Active safety systems</text>
      <line x1="0" y1="140" x2="0" y2="245" stroke="#999186" stroke-width="1" stroke-dasharray="2,2"/>
    </g>

    <!-- Generation III -->
    <g transform="translate(460, 100)">
      <circle cx="0" cy="0" r="42" fill="#2a6b6e" stroke="#1a1612" stroke-width="2"/>
      <text x="0" y="8" font-family="Fraunces, serif" font-size="20" font-weight="700" fill="#fff" text-anchor="middle">III</text>
      <text x="0" y="60" font-family="JetBrains Mono, monospace" font-size="11" fill="#1a1612" text-anchor="middle" font-weight="700">2000s-2010s</text>
      <text x="0" y="80" font-family="Fraunces, serif" font-size="13" fill="#1a1612" text-anchor="middle">Modern designs</text>
      <text x="0" y="98" font-family="Fraunces, serif" font-size="11" fill="#8a7f72" text-anchor="middle" font-style="italic">AP1000 · EPR · ABWR</text>
      <text x="0" y="120" font-family="JetBrains Mono, monospace" font-size="9" fill="#2a6b6e" text-anchor="middle">Passive safety</text>
      <line x1="0" y1="140" x2="0" y2="245" stroke="#999186" stroke-width="1" stroke-dasharray="2,2"/>
    </g>

    <!-- Generation IV -->
    <g transform="translate(640, 100)">
      <circle cx="0" cy="0" r="46" fill="#d4a017" stroke="#1a1612" stroke-width="2"/>
      <text x="0" y="8" font-family="Fraunces, serif" font-size="20" font-weight="700" fill="#1a1612" text-anchor="middle">IV</text>
      <text x="0" y="60" font-family="JetBrains Mono, monospace" font-size="11" fill="#1a1612" text-anchor="middle" font-weight="700">2030s+</text>
      <text x="0" y="80" font-family="Fraunces, serif" font-size="13" fill="#1a1612" text-anchor="middle">Next generation</text>
      <text x="0" y="98" font-family="Fraunces, serif" font-size="11" fill="#8a7f72" text-anchor="middle" font-style="italic">SMRs · MSR · Sodium</text>
      <text x="0" y="120" font-family="JetBrains Mono, monospace" font-size="9" fill="#d4a017" text-anchor="middle" font-weight="700">Walk-away safe</text>
      <line x1="0" y1="140" x2="0" y2="245" stroke="#999186" stroke-width="1" stroke-dasharray="2,2"/>
    </g>

    <!-- Bottom labels -->
    <text x="120" y="375" font-family="JetBrains Mono, monospace" font-size="10" fill="#4a423a" text-anchor="middle">Operator-dependent</text>
    <text x="290" y="375" font-family="JetBrains Mono, monospace" font-size="10" fill="#4a423a" text-anchor="middle">Engineered safety</text>
    <text x="460" y="375" font-family="JetBrains Mono, monospace" font-size="10" fill="#4a423a" text-anchor="middle">Inherent safety</text>
    <text x="640" y="375" font-family="JetBrains Mono, monospace" font-size="10" fill="#4a423a" text-anchor="middle">Cannot melt down</text>
  </svg>
`;
