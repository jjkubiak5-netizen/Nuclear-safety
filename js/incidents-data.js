// Incident data — embedded for static site
// Source data verified against IAEA, NRC, and government reports

const INCIDENTS = [
  {
    id: "sl1",
    name: "SL-1",
    fullName: "Stationary Low-Power Reactor Number One",
    year: 1961,
    date: "January 3, 1961",
    location: "Idaho Falls, Idaho — USA",
    reactorType: "Experimental BWR",
    ines: 4,
    deaths: 3,
    summary: "First fatal nuclear reactor accident in US history. During a routine maintenance procedure, a single operator manually withdrew the central control rod too far, causing prompt criticality. The reactor went from shutdown to roughly 20 gigawatts of power in 4 milliseconds, producing a steam explosion that killed all three operators present.",
    teaserSummary: "A single operator withdrew a control rod too far during maintenance. The reactor went from shutdown to 20 gigawatts in 4 milliseconds.",
    failures: [
      {
        factor: "Single-rod criticality possible",
        explanation: "The reactor's design allowed manual movement of a single control rod to insert enough reactivity to cause prompt criticality. No one had calculated how far the rod could be safely withdrawn."
      },
      {
        factor: "Manual rod withdrawal required",
        explanation: "Operators had to physically lift the central control rod by hand during maintenance. The rod was supposed to be raised 4 inches; it was raised 20+ inches."
      },
      {
        factor: "No containment building",
        explanation: "The SL-1 had no proper containment structure. Modern reactors require multiple containment barriers."
      },
      {
        factor: "Inadequate operator training",
        explanation: "The operators were military personnel with limited reactor physics training. They didn't fully understand the consequences of rapid rod withdrawal."
      }
    ],
    lessons: [
      {
        lesson: "Single-operator criticality must be impossible",
        solution: "Modern reactors require multiple control rods to be moved to reach criticality. No single rod or single action can cause a criticality event."
      },
      {
        lesson: "Containment is not optional",
        solution: "All commercial reactors now have multi-layer containment: reactor vessel, primary containment, and secondary containment in reinforced concrete buildings designed to withstand commercial airliner impacts."
      },
      {
        lesson: "Maximum reactivity insertion must be calculated",
        solution: "Reactor designs must demonstrate that no credible accident can insert more reactivity than the reactor can safely absorb."
      }
    ],
    modernChanges: [
      "Inherently safe negative reactivity coefficients",
      "Multiple independent shutdown systems",
      "No single operator action can cause criticality",
      "Robust containment buildings with multiple barriers",
      "Licensed operators with extensive training",
      "Real-time monitoring and automatic safety systems"
    ],
    stats: {
      ines: 4,
      deaths: 3,
      release: "1,100 Ci"
    }
  },
  {
    id: "tmi",
    name: "Three Mile Island",
    fullName: "Three Mile Island Unit 2",
    year: 1979,
    date: "March 28, 1979",
    location: "Middletown, Pennsylvania — USA",
    reactorType: "Pressurized Water Reactor (906 MW)",
    ines: 5,
    deaths: 0,
    summary: "Equipment failures and operator errors led to a partial meltdown of the reactor core. A stuck-open relief valve allowed coolant to escape, but operators misread their instruments and shut off emergency cooling. About half the reactor core melted, but containment held and minimal radiation was released. The accident transformed nuclear regulation in the US.",
    teaserSummary: "A stuck valve plus confused operators caused a partial meltdown — but containment held. The accident transformed how nuclear is regulated.",
    failures: [
      {
        factor: "Stuck-open pilot-operated relief valve",
        explanation: "A valve that should have closed after a brief pressure release stuck open for over 2 hours. Coolant escaped, but the indicator light only showed if the valve was COMMANDED to close, not whether it actually closed."
      },
      {
        factor: "Misleading control panel instruments",
        explanation: "Operators saw rising water level in the pressurizer and concluded there was too much water. In reality, the reactor was losing coolant. They shut off the high-pressure injection emergency cooling — exactly the wrong response."
      },
      {
        factor: "Cascade of unprioritized alarms",
        explanation: "Within seconds of the accident starting, over 100 alarms went off simultaneously. There was no way to tell which alarms were important. Critical alerts were buried in noise."
      },
      {
        factor: "Inadequate operator training for accidents",
        explanation: "Operators had been trained on procedures but not on recognizing this specific accident scenario. Their training emphasized procedure-following over understanding what was actually happening."
      }
    ],
    lessons: [
      {
        lesson: "Human-machine interface design matters enormously",
        solution: "Modern control rooms have completely redesigned displays. Critical information is highlighted, alarms are prioritized by importance, and the most important system status is always visible."
      },
      {
        lesson: "Defense in depth must include human factors",
        solution: "Modern reactors are designed assuming operators may make mistakes. Safety systems are automatic and don't rely on correct human action in the first 30 minutes of any event."
      },
      {
        lesson: "Industry-wide learning is essential",
        solution: "INPO (Institute of Nuclear Power Operations) was founded after TMI. All US nuclear utilities now share operational experience and lessons learned in real time."
      }
    ],
    modernChanges: [
      "Advanced control room design with prioritized alarms",
      "Symptom-based emergency operating procedures",
      "Operator licensing and continuous training",
      "Direct valve position indicators",
      "Automatic safety systems that override operator actions",
      "Industry-wide operational experience sharing (INPO)",
      "Severe accident management guidelines"
    ],
    stats: {
      ines: 5,
      deaths: 0,
      release: "1.4 mrem avg"
    }
  },
  {
    id: "chernobyl",
    name: "Chernobyl",
    fullName: "Chernobyl Nuclear Power Plant Reactor 4",
    year: 1986,
    date: "April 26, 1986",
    location: "Pripyat — Soviet Union (now Ukraine)",
    reactorType: "RBMK-1000 (3,200 MW)",
    ines: 7,
    deaths: 31,
    summary: "During a poorly-planned safety test, operators violated procedures and disabled safety systems on a flawed reactor design. The combination of bad design and operator errors caused a steam explosion and graphite fire. The lack of containment allowed massive radiation release that contaminated large parts of Europe. Considered the worst nuclear disaster in history.",
    teaserSummary: "A flawed Soviet reactor design plus a reckless safety test plus disabled safety systems. No containment building. Worst nuclear disaster in history.",
    failures: [
      {
        factor: "Fundamentally flawed reactor design (RBMK)",
        explanation: "The RBMK had a 'positive void coefficient' — when coolant boiled into steam, the nuclear reaction sped up instead of slowing down. This positive feedback loop is unstable. No Western reactor was ever built with this characteristic."
      },
      {
        factor: "Graphite-tipped control rods triggered the explosion",
        explanation: "When operators pressed the emergency SCRAM button, the graphite tips of the control rods initially DISPLACED water and INCREASED reactivity for the first few seconds. The 'safety system' triggered the explosion."
      },
      {
        factor: "Reckless safety test procedure",
        explanation: "The test plan required violating multiple safety procedures, including operating below the minimum allowed power level. Operators repeatedly disabled emergency cooling and other safety systems."
      },
      {
        factor: "No containment structure",
        explanation: "Unlike Western reactors, the RBMK had no proper containment building. When the explosion occurred, radioactive material was vented directly to the atmosphere, contaminating much of Europe."
      },
      {
        factor: "Operator culture of compliance over safety",
        explanation: "The Soviet nuclear program prioritized procedural compliance over independent safety judgment. Operators were not trained to refuse unsafe orders or recognize design vulnerabilities."
      }
    ],
    lessons: [
      {
        lesson: "Reactor designs must have negative void coefficients",
        solution: "All Western and modern designs have negative void/temperature coefficients. If coolant overheats or boils, the reaction SLOWS automatically. This is inherent passive safety."
      },
      {
        lesson: "Containment is mandatory",
        solution: "All modern reactors have robust containment buildings designed to withstand even severe accidents. RBMK-style reactors are no longer built; existing ones have been modified extensively."
      },
      {
        lesson: "Safety culture must be independent",
        solution: "International safety standards (IAEA), peer review (WANO), and regulatory independence are now mandatory worldwide. Operators are trained to STOP unsafe operations regardless of management pressure."
      },
      {
        lesson: "Control rod design must fail safe",
        solution: "Modern control rods cannot temporarily increase reactivity. Most reactors use gravity-fed rod insertion that physically cannot fail in the wrong direction."
      }
    ],
    modernChanges: [
      "Negative temperature/void coefficient (mandatory)",
      "Robust containment buildings (mandatory worldwide)",
      "Independent safety culture and regulatory bodies",
      "Fail-safe control rod systems",
      "Multiple redundant shutdown systems",
      "International incident reporting (WANO, IAEA)",
      "Severe accident management procedures"
    ],
    stats: {
      ines: 7,
      deaths: 31,
      release: "5,300 PBq"
    }
  },
  {
    id: "davis-besse",
    name: "Davis-Besse",
    fullName: "Davis-Besse Reactor Head Corrosion",
    year: 2002,
    date: "March 2002",
    location: "Oak Harbor, Ohio — USA",
    reactorType: "Pressurized Water Reactor (925 MW)",
    ines: 3,
    deaths: 0,
    summary: "During a routine inspection, workers discovered that boric acid had eaten through 6 inches of the carbon steel reactor pressure vessel head, leaving only a 3/8-inch stainless steel liner holding back high-pressure radioactive coolant. The corrosion had been developing undetected for years. This near-miss revealed industry-wide inspection failures and led to major regulatory reforms.",
    teaserSummary: "Boric acid had eaten a football-sized hole through 6 inches of reactor steel — leaving only a 3/8-inch liner between the operator and disaster. Discovered in time.",
    failures: [
      {
        factor: "Years of undetected boric acid corrosion",
        explanation: "Small leaks of boric acid (used in coolant) had been seeping out of cracked control rod drive nozzles for years. The boric acid slowly ate through the carbon steel reactor head, creating a football-sized cavity 6 inches deep."
      },
      {
        factor: "Inadequate inspection regime",
        explanation: "Inspections were primarily visual and didn't account for gradual corrosion. Boric acid deposits were treated as cosmetic issues rather than warning signs of underlying corrosion."
      },
      {
        factor: "Production-over-safety culture",
        explanation: "FirstEnergy (the operator) had a documented pattern of prioritizing operational uptime over maintenance. Multiple opportunities to discover the problem earlier were missed."
      },
      {
        factor: "Industry-wide complacency",
        explanation: "Other US reactors had documented similar corrosion issues, but the industry treated them as isolated problems rather than recognizing systematic risk."
      }
    ],
    lessons: [
      {
        lesson: "Predictive monitoring beats reactive maintenance",
        solution: "All US reactors now require advanced monitoring of head penetrations, including ultrasonic testing, eddy current inspection, and continuous chemistry monitoring."
      },
      {
        lesson: "Boric acid leaks are NOT cosmetic",
        solution: "Any boric acid deposits now trigger mandatory investigation and removal. The 'small leak' concept is gone — every leak must be characterized and addressed."
      },
      {
        lesson: "Safety culture audits required",
        solution: "NRC now conducts regular safety culture assessments. Plants with poor safety culture face escalating regulatory action including potential shutdown."
      }
    ],
    modernChanges: [
      "Continuous online monitoring of head penetrations",
      "Replacement reactor heads with corrosion-resistant materials",
      "Mandatory safety culture assessments",
      "Stricter inspection protocols",
      "AI-assisted predictive maintenance",
      "Enhanced operating experience sharing"
    ],
    stats: {
      ines: 3,
      deaths: 0,
      release: "None"
    }
  },
  {
    id: "fukushima",
    name: "Fukushima Daiichi",
    fullName: "Fukushima Daiichi Nuclear Power Plant",
    year: 2011,
    date: "March 11, 2011",
    location: "Okuma, Fukushima — Japan",
    reactorType: "BWR Mark I (multiple units)",
    ines: 7,
    deaths: 1,
    summary: "A magnitude 9.0 earthquake automatically shut down all operating reactors. However, the resulting tsunami (around 14 meters high) overtopped the seawall (designed for 5.7m) and flooded backup diesel generators. With no power for cooling, three reactor cores melted down over the following days. The disaster exposed assumptions about 'beyond design basis' events and led to global safety upgrades.",
    teaserSummary: "Earthquake and tsunami flooded backup generators. Three cores melted over several days. No radiation deaths from the accident itself — but the disaster reshaped global nuclear safety.",
    failures: [
      {
        factor: "Seawall designed for wrong tsunami size",
        explanation: "The site was designed assuming a maximum tsunami of 5.7 meters. Historical records showed larger tsunamis had occurred in the region centuries earlier (the 869 Jōgan tsunami), but these warnings were dismissed as too speculative."
      },
      {
        factor: "Backup generators in vulnerable location",
        explanation: "Emergency diesel generators were located in basement areas inundated by the tsunami. Unit 6's generator survived only because it was located higher than the others."
      },
      {
        factor: "Station Blackout planning inadequate",
        explanation: "The plant was designed to handle 8 hours of station blackout. The actual blackout lasted days. There was no realistic plan for extended loss of all power."
      },
      {
        factor: "Hydrogen explosions damaged buildings",
        explanation: "As fuel overheated, zirconium cladding reacted with steam producing hydrogen. The Mark I containment design vented hydrogen into the reactor building (not externally), where it accumulated and exploded."
      },
      {
        factor: "Weak regulatory oversight",
        explanation: "TEPCO had a documented history of falsifying safety reports. Japanese regulators (NISA) were not independent enough to challenge utility companies."
      }
    ],
    lessons: [
      {
        lesson: "Design basis must include extreme natural events",
        solution: "Post-Fukushima, all nuclear plants worldwide reassessed external hazards. Many plants raised seawalls, relocated backup power, and added new emergency capabilities."
      },
      {
        lesson: "Passive safety systems save lives",
        solution: "Generation III+ reactors (AP1000, ESBWR) use passive safety systems that don't require electrical power. Cooling continues for days using gravity, natural circulation, and pre-positioned water."
      },
      {
        lesson: "Hydrogen control is critical",
        solution: "All US reactors now have passive autocatalytic hydrogen recombiners that prevent hydrogen accumulation. Filtered containment vents allow controlled release without explosions."
      },
      {
        lesson: "FLEX equipment for severe accidents",
        solution: "All US plants now have 'FLEX' portable equipment (pumps, generators, cables) at multiple locations on each site, plus regional response centers."
      }
    ],
    modernChanges: [
      "Passive cooling systems that work without electricity",
      "Filtered containment vents",
      "Hydrogen recombiners",
      "FLEX portable emergency equipment",
      "Reassessment of external hazards (tsunamis, earthquakes)",
      "Higher seawalls and flood protection",
      "Backup generators on elevated positions",
      "Multiple independent ways to add water to reactors"
    ],
    stats: {
      ines: 7,
      deaths: 1,
      release: "520 PBq"
    }
  }
];
