# From SL-1 to SMRs

> An interactive examination of five defining nuclear incidents
> and how modern reactor design eliminated each failure mode.

## What This Is

A web project built as a college portfolio piece. Each major nuclear incident from 1961-2011 is presented with:
- What actually happened
- Why it happened (technical and human factors)
- What modern engineering does to prevent recurrence

The goal: counter public misconceptions about nuclear safety with rigorous, source-based analysis that's also visually compelling.

## How To Run It

The project is pure HTML/CSS/JavaScript — no build step required.

**To preview locally:**
1. Open `index.html` in any modern browser
2. That's it

**To deploy to GitHub Pages (free, public URL):**
1. Create a new GitHub repository
2. Upload all files in this folder (preserve directory structure)
3. Go to Settings → Pages
4. Select "main" branch and save
5. Your site will be live at `username.github.io/repo-name`

## File Structure

```
nuclear-safety/
├── index.html              ← Main page
├── css/
│   └── main.css           ← All styling
├── js/
│   ├── incidents-data.js  ← Incident data
│   └── main.js            ← Interactivity
├── data/
│   └── incidents.json     ← Source data (full version)
└── README.md              ← This file
```

## What's Working Now (Phase 1)

- Hero section with editorial title treatment
- Prologue setting up the paradox
- Five interactive timeline cards (click to read full case study)
- Modal with detailed incident analysis
- Animated death-per-TWh comparison chart
- Epilogue tying together the lessons learned
- Responsive design (works on mobile)
- Custom typography (Fraunces serif + JetBrains Mono)
- Editorial scientific aesthetic (no AI slop)

## What's Next (Phases 2-5)

### Phase 2: Add Visual Diagrams
- SVG diagrams of each reactor type
- Animated explainer of what went wrong at each incident
- Cross-section view of containment building evolution
- Timeline visualization of safety improvement

### Phase 3: Deep Technical Detail
- Reactivity coefficient explanation (positive vs negative void)
- Decay heat over time (interactive chart)
- Comparison of Gen I → Gen II → Gen III → Gen IV reactors
- Defense-in-depth visualization

### Phase 4: Add SMR (Small Modular Reactor) Section
- How NuScale, BWRX-300, and other SMR designs work
- Why they're inherently safer
- Walk-away safe operation explanation

### Phase 5: Polish & Launch
- Performance optimization
- Accessibility audit (WCAG AA)
- SEO meta tags
- Open Graph for social sharing
- Final design pass

## Sources Used

All incident data verified against primary sources:
- IAEA reports (especially INSAG-7 for Chernobyl)
- US Nuclear Regulatory Commission documents
- Kemeny Report (Three Mile Island)
- National Diet of Japan Fukushima report
- WHO/UNSCEAR studies for casualty figures
- Idaho National Laboratory documents (SL-1)
- *Our World in Data* for energy comparison statistics

## Why This Matters

Nuclear power has the lowest deaths-per-TWh of any major energy source — yet public perception treats it as one of the most dangerous. This gap between perception and reality has cost millions of lives by delaying nuclear deployment in favor of more harmful alternatives.

This project doesn't argue that nuclear is perfect. It documents what went wrong historically and shows how engineers solved each problem. Readers should leave with a more accurate mental model of how nuclear safety actually works.

## For The Author

This project demonstrates:
- Independent research on a complex technical topic
- Quantitative thinking (statistics, comparisons)
- Communication of complex ideas to non-technical audiences
- Web development skills (HTML/CSS/JS)
- Information design and visualization
- Long-form project execution

Use it in:
- College application essays (the "passion project" example)
- Common App activities section
- Interviews for engineering programs
- Conversations with admissions counselors

The project is genuinely useful regardless of admissions outcome. Anyone can read it and learn something real about nuclear engineering.
