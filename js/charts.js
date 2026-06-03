// ═══════════════════════════════════════════════════════════════
// PHASE 3 CHARTS
// 1. Decay heat curve — interactive, real physics
// 2. Reactor type comparison — side-by-side cross sections
// ═══════════════════════════════════════════════════════════════

// ── DECAY HEAT CHART ────────────────────────────────────────
// Real physics: fission products decay following a power law
// Approximate formula: P(t)/P0 ≈ 0.066 × ((t)^-0.2 - (t+T)^-0.2)
// Where t = time since shutdown, T = operating time before shutdown
// Simplified for visualization

const DECAY_HEAT_SVG = `
<svg viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" class="reactor-svg decay-svg">
  <defs>
    <linearGradient id="dh-area" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#d4391d" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#d4391d" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="dh-danger" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7d1c0a" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#7d1c0a" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Title -->
  <text x="350" y="30" font-family="Fraunces, serif" font-size="18" font-weight="500" fill="#1a1612" text-anchor="middle">
    Decay Heat After Reactor Shutdown
  </text>
  <text x="350" y="50" font-family="Fraunces, serif" font-size="13" font-style="italic" fill="#4a423a" text-anchor="middle">
    Why nuclear reactors need cooling for days even after SCRAM
  </text>

  <!-- Chart area -->
  <g transform="translate(70, 80)">

    <!-- Y axis -->
    <line x1="0" y1="0" x2="0" y2="300" stroke="#1a1612" stroke-width="1.5"/>
    <!-- X axis -->
    <line x1="0" y1="300" x2="580" y2="300" stroke="#1a1612" stroke-width="1.5"/>

    <!-- Y axis labels -->
    <g font-family="JetBrains Mono, monospace" font-size="10" fill="#4a423a" text-anchor="end">
      <text x="-8" y="4">100%</text>
      <text x="-8" y="64">10%</text>
      <text x="-8" y="124">5%</text>
      <text x="-8" y="184">2%</text>
      <text x="-8" y="244">1%</text>
      <text x="-8" y="304">0.5%</text>
    </g>

    <!-- Y axis gridlines -->
    <g stroke="#1a1612" stroke-opacity="0.08" stroke-width="1">
      <line x1="0" y1="60" x2="580" y2="60"/>
      <line x1="0" y1="120" x2="580" y2="120"/>
      <line x1="0" y1="180" x2="580" y2="180"/>
      <line x1="0" y1="240" x2="580" y2="240"/>
    </g>

    <!-- X axis labels (logarithmic time) -->
    <g font-family="JetBrains Mono, monospace" font-size="10" fill="#4a423a" text-anchor="middle">
      <text x="0" y="320">SCRAM</text>
      <text x="80" y="320">10 sec</text>
      <text x="160" y="320">1 min</text>
      <text x="240" y="320">10 min</text>
      <text x="320" y="320">1 hour</text>
      <text x="400" y="320">1 day</text>
      <text x="480" y="320">1 week</text>
      <text x="560" y="320">1 month</text>
    </g>

    <!-- Y axis title -->
    <text x="-50" y="150" font-family="JetBrains Mono, monospace" font-size="11" fill="#1a1612" text-anchor="middle" transform="rotate(-90, -50, 150)" font-weight="700">
      % OF FULL POWER
    </text>

    <!-- X axis title -->
    <text x="290" y="350" font-family="JetBrains Mono, monospace" font-size="11" fill="#1a1612" text-anchor="middle" font-weight="700">
      TIME AFTER SHUTDOWN (logarithmic)
    </text>

    <!-- Critical region overlay (above 2% requires active cooling) -->
    <rect x="0" y="0" width="280" height="180" fill="url(#dh-danger)"/>
    <text x="140" y="30" font-family="Fraunces, serif" font-size="12" font-style="italic" fill="#7d1c0a" text-anchor="middle" font-weight="700">CRITICAL COOLING ZONE</text>
    <text x="140" y="48" font-family="JetBrains Mono, monospace" font-size="9" fill="#7d1c0a" text-anchor="middle">Active cooling required to prevent fuel damage</text>

    <!-- Decay heat curve: realistic power-law decay -->
    <!-- t=0: ~7%, t=10s: ~6.5%, t=1min: ~5%, t=10min: ~3%, t=1hr: ~1.5%, t=1d: ~0.5%, t=1mo: ~0.1% -->
    <path d="M 0,168 L 80,180 L 160,210 L 240,240 L 320,260 L 400,278 L 480,290 L 560,295"
          fill="none" stroke="#d4391d" stroke-width="3" class="decay-curve"/>

    <!-- Area under curve -->
    <path d="M 0,168 L 80,180 L 160,210 L 240,240 L 320,260 L 400,278 L 480,290 L 560,295 L 560,300 L 0,300 Z"
          fill="url(#dh-area)" class="decay-area"/>

    <!-- Key data points -->
    <g class="decay-points">
      <circle cx="0" cy="168" r="5" fill="#d4391d" stroke="#fff" stroke-width="2"/>
      <circle cx="160" cy="210" r="5" fill="#d4391d" stroke="#fff" stroke-width="2"/>
      <circle cx="320" cy="260" r="5" fill="#d4391d" stroke="#fff" stroke-width="2"/>
      <circle cx="400" cy="278" r="5" fill="#d4391d" stroke="#fff" stroke-width="2"/>
    </g>

    <!-- Annotations with arrows -->
    <g font-family="JetBrains Mono, monospace" font-size="10" fill="#1a1612">
      <line x1="20" y1="155" x2="50" y2="100" stroke="#1a1612" stroke-width="1"/>
      <text x="55" y="98" font-weight="700">~7% at t=0</text>
      <text x="55" y="111" fill="#4a423a">Fission stopped</text>
      <text x="55" y="123" fill="#4a423a">but products still hot</text>

      <line x1="320" y1="260" x2="380" y2="80" stroke="#1a1612" stroke-width="1"/>
      <text x="385" y="78" font-weight="700">~1.5% at 1 hour</text>
      <text x="385" y="91" fill="#4a423a">Still ~50 MW thermal</text>
      <text x="385" y="104" fill="#4a423a">on a 3000 MW reactor</text>

      <line x1="400" y1="278" x2="445" y2="135" stroke="#1a1612" stroke-width="1"/>
      <text x="450" y="133" font-weight="700">~0.5% at 1 day</text>
      <text x="450" y="146" fill="#4a423a">Still significant</text>
      <text x="450" y="159" fill="#4a423a">15 MW = a small plant</text>
    </g>

    <!-- Fukushima annotation -->
    <g class="fukushima-marker">
      <line x1="240" y1="240" x2="240" y2="300" stroke="#7d1c0a" stroke-width="2" stroke-dasharray="3,2"/>
      <rect x="180" y="250" width="120" height="35" fill="#7d1c0a" opacity="0.95"/>
      <text x="240" y="265" font-family="JetBrains Mono, monospace" font-size="9" fill="#fff" text-anchor="middle" font-weight="700">FUKUSHIMA</text>
      <text x="240" y="278" font-family="JetBrains Mono, monospace" font-size="8" fill="#fff" text-anchor="middle">Cooling lost ~20 min</text>
    </g>
  </g>
</svg>
`;

// ── REACTOR TYPE COMPARISON ─────────────────────────────────
// Side-by-side cross sections of the major reactor types
// Shows physical differences that matter for safety

const REACTOR_COMPARISON_SVG = `
<svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" class="reactor-svg comparison-svg">
  <defs>
    <linearGradient id="rc-fuel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#d4391d" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#7d1c0a" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <text x="450" y="25" font-family="Fraunces, serif" font-size="18" font-weight="500" fill="#1a1612" text-anchor="middle">
    Four Reactor Designs Side by Side
  </text>
  <text x="450" y="45" font-family="Fraunces, serif" font-size="13" font-style="italic" fill="#4a423a" text-anchor="middle">
    Why design matters: from inherently dangerous to walk-away safe
  </text>

  <!-- ═══ PWR (Pressurized Water Reactor) ═══ -->
  <g transform="translate(40, 80)">
    <text x="90" y="0" font-family="JetBrains Mono, monospace" font-size="11" fill="#1a1612" text-anchor="middle" font-weight="700">PWR</text>
    <text x="90" y="14" font-family="JetBrains Mono, monospace" font-size="9" fill="#4a423a" text-anchor="middle">Gen II — most common</text>

    <!-- Containment dome -->
    <path d="M 0 200 Q 0 50, 90 50 Q 180 50, 180 200 Z" fill="none" stroke="#999186" stroke-width="2"/>

    <!-- Pressure vessel -->
    <rect x="60" y="100" width="60" height="120" rx="4" fill="#5c4a2a" stroke="#1a1612" stroke-width="1.5"/>

    <!-- Fuel core -->
    <rect x="72" y="130" width="36" height="60" fill="url(#rc-fuel)" stroke="#1a1612" stroke-width="1"/>

    <!-- Water -->
    <rect x="62" y="105" width="56" height="113" fill="#4ba0c4" fill-opacity="0.3"/>
    <rect x="72" y="130" width="36" height="60" fill="url(#rc-fuel)" stroke="#1a1612" stroke-width="1"/>

    <!-- Steam generator -->
    <rect x="135" y="80" width="35" height="60" rx="3" fill="#999186" stroke="#1a1612" stroke-width="1"/>

    <!-- Safety rating -->
    <g transform="translate(0, 280)">
      <text x="90" y="0" font-family="JetBrains Mono, monospace" font-size="10" fill="#1a1612" text-anchor="middle" font-weight="700">Safety: GOOD</text>
      <text x="90" y="14" font-family="Fraunces, serif" font-size="10" fill="#4a423a" text-anchor="middle">Negative void coef.</text>
      <text x="90" y="28" font-family="Fraunces, serif" font-size="10" fill="#4a423a" text-anchor="middle">Containment building</text>
      <text x="90" y="42" font-family="Fraunces, serif" font-size="10" fill="#4a423a" text-anchor="middle">Active cooling needed</text>
    </g>

    <!-- Examples -->
    <g transform="translate(0, 350)">
      <rect x="0" y="0" width="180" height="40" fill="#ebe6dc" stroke="#999186" stroke-width="1"/>
      <text x="90" y="14" font-family="JetBrains Mono, monospace" font-size="9" fill="#4a423a" text-anchor="middle">EXAMPLES:</text>
      <text x="90" y="28" font-family="Fraunces, serif" font-size="11" fill="#1a1612" text-anchor="middle" font-style="italic">TMI-2, Davis-Besse</text>
    </g>
  </g>

  <!-- ═══ BWR (Boiling Water Reactor) ═══ -->
  <g transform="translate(250, 80)">
    <text x="90" y="0" font-family="JetBrains Mono, monospace" font-size="11" fill="#1a1612" text-anchor="middle" font-weight="700">BWR</text>
    <text x="90" y="14" font-family="JetBrains Mono, monospace" font-size="9" fill="#4a423a" text-anchor="middle">Gen II — Mark I/II/III</text>

    <!-- Containment (smaller in old Mark I) -->
    <path d="M 20 200 Q 20 60, 90 60 Q 160 60, 160 200 Z" fill="none" stroke="#999186" stroke-width="2"/>

    <!-- Pressure vessel - taller for steam separation -->
    <rect x="65" y="80" width="50" height="140" rx="4" fill="#5c4a2a" stroke="#1a1612" stroke-width="1.5"/>

    <!-- Water and steam separation -->
    <rect x="67" y="85" width="46" height="50" fill="#999186" fill-opacity="0.4"/>
    <text x="90" y="113" font-family="JetBrains Mono, monospace" font-size="8" fill="#1a1612" text-anchor="middle">STEAM</text>

    <rect x="67" y="135" width="46" height="80" fill="#4ba0c4" fill-opacity="0.4"/>

    <!-- Fuel core -->
    <rect x="75" y="155" width="30" height="55" fill="url(#rc-fuel)" stroke="#1a1612" stroke-width="1"/>

    <!-- Suppression pool (Mark I distinctive) -->
    <ellipse cx="90" cy="250" rx="80" ry="20" fill="#4ba0c4" fill-opacity="0.5" stroke="#999186" stroke-width="1"/>
    <text x="90" y="254" font-family="JetBrains Mono, monospace" font-size="8" fill="#1a1612" text-anchor="middle">SUPPRESSION POOL</text>

    <!-- Safety rating -->
    <g transform="translate(0, 280)">
      <text x="90" y="0" font-family="JetBrains Mono, monospace" font-size="10" fill="#1a1612" text-anchor="middle" font-weight="700">Safety: GOOD*</text>
      <text x="90" y="14" font-family="Fraunces, serif" font-size="10" fill="#4a423a" text-anchor="middle">Negative void coef.</text>
      <text x="90" y="28" font-family="Fraunces, serif" font-size="10" fill="#4a423a" text-anchor="middle">Smaller containment</text>
      <text x="90" y="42" font-family="Fraunces, serif" font-size="10" fill="#7d1c0a" text-anchor="middle">*Mark I vulnerable to H₂</text>
    </g>

    <!-- Examples -->
    <g transform="translate(0, 350)">
      <rect x="0" y="0" width="180" height="40" fill="#ebe6dc" stroke="#999186" stroke-width="1"/>
      <text x="90" y="14" font-family="JetBrains Mono, monospace" font-size="9" fill="#4a423a" text-anchor="middle">EXAMPLES:</text>
      <text x="90" y="28" font-family="Fraunces, serif" font-size="11" fill="#1a1612" text-anchor="middle" font-style="italic">Fukushima Daiichi, SL-1</text>
    </g>
  </g>

  <!-- ═══ RBMK (Soviet Graphite-Moderated) ═══ -->
  <g transform="translate(460, 80)">
    <text x="90" y="0" font-family="JetBrains Mono, monospace" font-size="11" fill="#7d1c0a" text-anchor="middle" font-weight="700">RBMK</text>
    <text x="90" y="14" font-family="JetBrains Mono, monospace" font-size="9" fill="#7d1c0a" text-anchor="middle">FLAWED DESIGN</text>

    <!-- NO containment dome — that's the point -->
    <text x="90" y="40" font-family="JetBrains Mono, monospace" font-size="9" fill="#d4391d" text-anchor="middle" font-weight="700">⚠ NO CONTAINMENT</text>

    <!-- Graphite block (the moderator that burns) -->
    <rect x="20" y="80" width="140" height="140" fill="#3d3d3d" stroke="#1a1612" stroke-width="2"/>
    <text x="90" y="100" font-family="JetBrains Mono, monospace" font-size="8" fill="#999186" text-anchor="middle">GRAPHITE</text>

    <!-- Fuel channels (vertical tubes) -->
    <g>
      <rect x="35" y="105" width="6" height="100" fill="url(#rc-fuel)"/>
      <rect x="55" y="105" width="6" height="100" fill="url(#rc-fuel)"/>
      <rect x="75" y="105" width="6" height="100" fill="url(#rc-fuel)"/>
      <rect x="95" y="105" width="6" height="100" fill="url(#rc-fuel)"/>
      <rect x="115" y="105" width="6" height="100" fill="url(#rc-fuel)"/>
      <rect x="135" y="105" width="6" height="100" fill="url(#rc-fuel)"/>
    </g>

    <!-- Steam bubbles indicating positive void coefficient -->
    <circle cx="50" cy="130" r="3" fill="#ffeb3b"/>
    <circle cx="100" cy="155" r="3" fill="#ffeb3b"/>
    <circle cx="125" cy="180" r="3" fill="#ffeb3b"/>

    <!-- Safety rating -->
    <g transform="translate(0, 280)">
      <text x="90" y="0" font-family="JetBrains Mono, monospace" font-size="10" fill="#7d1c0a" text-anchor="middle" font-weight="700">Safety: DANGEROUS</text>
      <text x="90" y="14" font-family="Fraunces, serif" font-size="10" fill="#7d1c0a" text-anchor="middle">+VOID COEFFICIENT</text>
      <text x="90" y="28" font-family="Fraunces, serif" font-size="10" fill="#7d1c0a" text-anchor="middle">No containment</text>
      <text x="90" y="42" font-family="Fraunces, serif" font-size="10" fill="#7d1c0a" text-anchor="middle">Graphite fire risk</text>
    </g>

    <!-- Examples -->
    <g transform="translate(0, 350)">
      <rect x="0" y="0" width="180" height="40" fill="#ebe6dc" stroke="#7d1c0a" stroke-width="1"/>
      <text x="90" y="14" font-family="JetBrains Mono, monospace" font-size="9" fill="#7d1c0a" text-anchor="middle">EXAMPLES:</text>
      <text x="90" y="28" font-family="Fraunces, serif" font-size="11" fill="#1a1612" text-anchor="middle" font-style="italic">Chernobyl (banned)</text>
    </g>
  </g>

  <!-- ═══ SMR (Small Modular Reactor — modern) ═══ -->
  <g transform="translate(680, 80)">
    <text x="90" y="0" font-family="JetBrains Mono, monospace" font-size="11" fill="#b8902a" text-anchor="middle" font-weight="700">SMR</text>
    <text x="90" y="14" font-family="JetBrains Mono, monospace" font-size="9" fill="#4a423a" text-anchor="middle">Gen IV — emerging</text>

    <!-- Underground placement -->
    <rect x="0" y="180" width="180" height="50" fill="#5c4a2a" fill-opacity="0.2"/>
    <text x="90" y="225" font-family="JetBrains Mono, monospace" font-size="8" fill="#4a423a" text-anchor="middle">UNDERGROUND</text>

    <!-- Pool of water -->
    <rect x="20" y="60" width="140" height="170" fill="#4ba0c4" fill-opacity="0.4" stroke="#999186" stroke-width="1"/>
    <text x="90" y="73" font-family="JetBrains Mono, monospace" font-size="8" fill="#1a1612" text-anchor="middle">PASSIVE COOLING POOL</text>

    <!-- Reactor module (small, fully integrated) -->
    <rect x="65" y="100" width="50" height="100" rx="4" fill="#5c4a2a" stroke="#1a1612" stroke-width="2"/>

    <!-- Fuel (small) -->
    <rect x="75" y="130" width="30" height="40" fill="url(#rc-fuel)" stroke="#1a1612" stroke-width="1"/>

    <!-- Containment shell -->
    <rect x="60" y="95" width="60" height="110" fill="none" stroke="#1a1612" stroke-width="1.5" stroke-dasharray="3,2"/>

    <!-- Safety rating -->
    <g transform="translate(0, 280)">
      <text x="90" y="0" font-family="JetBrains Mono, monospace" font-size="10" fill="#b8902a" text-anchor="middle" font-weight="700">Safety: WALK-AWAY</text>
      <text x="90" y="14" font-family="Fraunces, serif" font-size="10" fill="#4a423a" text-anchor="middle">Cannot melt down</text>
      <text x="90" y="28" font-family="Fraunces, serif" font-size="10" fill="#4a423a" text-anchor="middle">No active cooling</text>
      <text x="90" y="42" font-family="Fraunces, serif" font-size="10" fill="#4a423a" text-anchor="middle">No operator action</text>
    </g>

    <!-- Examples -->
    <g transform="translate(0, 350)">
      <rect x="0" y="0" width="180" height="40" fill="#ebe6dc" stroke="#b8902a" stroke-width="1"/>
      <text x="90" y="14" font-family="JetBrains Mono, monospace" font-size="9" fill="#4a423a" text-anchor="middle">EXAMPLES:</text>
      <text x="90" y="28" font-family="Fraunces, serif" font-size="11" fill="#1a1612" text-anchor="middle" font-style="italic">NuScale, BWRX-300</text>
    </g>
  </g>

  <!-- Bottom comparison summary -->
  <text x="450" y="475" font-family="Fraunces, serif" font-size="13" font-style="italic" fill="#4a423a" text-anchor="middle">
    Each generation engineered out the failure modes of the last. SMRs cannot melt down — physics itself prevents it.
  </text>
</svg>
`;
