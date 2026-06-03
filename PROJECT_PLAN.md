# Nuclear Safety Project — Master Plan

## The Project

**"From SL-1 to SMRs: How Nuclear Safety Engineering
Solved Each Disaster That Defined Public Perception"**

An interactive web application that walks visitors through five
defining nuclear incidents, explains what went wrong using clear
visualizations, and demonstrates how modern reactor designs have
eliminated each failure mode.

## The Narrative Arc

Each incident teaches a different category of failure. The project
shows that nuclear safety isn't accidental — it's the result of
60+ years of learning from mistakes and engineering them out.

| Year | Incident      | Failure Mode              | Modern Mitigation |
|------|---------------|---------------------------|-------------------|
| 1961 | SL-1          | Single-operator criticality | Mandatory two-person actions |
| 1979 | Three Mile Island | Confusing operator interfaces | Modern HMI design |
| 1986 | Chernobyl     | Bad design + culture       | Inherent safety in Gen III/IV |
| 2002 | Davis-Besse   | Hidden corrosion          | Continuous monitoring/AI inspection |
| 2011 | Fukushima     | Inadequate disaster prep   | Passive safety, flood-proof designs |

## The Comparison Layer

After visitors understand each incident, show the data they don't
hear about:
- Deaths per TWh (nuclear vs coal vs oil vs solar)
- Total nuclear incident deaths vs other industrial disasters
- Improvement in safety metrics over time
- Cost-benefit analysis of nuclear vs alternatives

## Tech Stack

```
Frontend: HTML + CSS + JavaScript
Visualization: D3.js (industry standard for data viz)
Animation: GSAP for smooth transitions
Hosting: GitHub Pages (free, professional)
Data analysis: Python for processing (separate from frontend)
```

## File Structure

```
nuclear-safety/
├── index.html              # Main page
├── css/
│   ├── main.css           # Core styling
│   └── animations.css     # Animation styles
├── js/
│   ├── main.js            # App logic
│   ├── timeline.js        # Interactive timeline
│   ├── incident.js        # Incident detail views
│   └── comparisons.js     # Energy comparison charts
├── data/
│   ├── incidents.json     # Incident details
│   ├── reactor-types.json # Reactor design data
│   └── energy-stats.json  # Comparative energy data
├── assets/
│   └── (images, icons)
└── README.md              # Project documentation
```

## Development Phases

### Phase 1 — Research & Data (Weeks 1-2)
Goal: Comprehensive, accurate incident data
- Read primary sources for each incident
- IAEA reports, NRC documents, peer-reviewed papers
- Document sources for credibility
- Build incidents.json with detailed information

### Phase 2 — Foundation (Weeks 3-4)
Goal: Working website with basic structure
- Build HTML/CSS skeleton
- Create timeline navigation
- Style for professional appearance
- Mobile-responsive layout

### Phase 3 — Incident Pages (Weeks 5-8)
Goal: Each incident has a detailed, animated explainer
- One incident per week of focused work
- Clear timeline of events
- Animated diagrams of what happened
- "Modern mitigation" section for each

### Phase 4 — Comparison Layer (Weeks 9-10)
Goal: Data-driven comparisons that change minds
- Deaths per TWh interactive chart
- Reactor generation comparisons
- Public perception vs reality data

### Phase 5 — Polish (Weeks 11-12)
Goal: Production-ready
- Performance optimization
- Accessibility checks
- Final design pass
- Deploy to public URL

## Success Criteria

The project succeeds if:
1. A non-technical visitor leaves understanding nuclear safety better
2. The visualizations are accurate and not misleading
3. It looks professional enough to share publicly
4. You can explain every part of it confidently
5. It can be referenced in college essays as a meaningful project

## What Makes This College-Application-Worthy

This isn't just a website. It's:
- Evidence of independent learning beyond classroom
- Quantitative thinking (stats, comparisons)
- Communication of complex ideas
- Initiative and follow-through (months of work)
- Genuine passion (you don't build this if you don't care)
- Counters misconceptions (intellectual leadership)

When you write college essays you can say:
"I built a tool to address a misconception that's killing
the cleanest energy source we have. In researching nuclear
safety incidents I discovered that public fear has grown
even as the actual risks have shrunk. Here's what I learned..."

That's a great essay opening. The project IS your evidence.
