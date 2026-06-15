// ═══════════════════════════════════════════════════════════════
// FROM SL-1 TO SMRS · INTERACTIVITY (Phase 2)
// ═══════════════════════════════════════════════════════════════

function buildTimeline() {
  const grid = document.getElementById('timeline-grid');
  if (!grid) return;

  grid.innerHTML = INCIDENTS.map(incident => `
    <article class="timeline-card tc-ines-${incident.ines}" data-incident="${incident.id}">
      <span class="tc-ines tc-ines-${incident.ines}">INES ${incident.ines}</span>
      <div class="tc-year">${incident.year}</div>
      <h3 class="tc-name">${incident.name}</h3>
      <div class="tc-location">${incident.location}</div>
      <p class="tc-summary">${incident.teaserSummary}</p>
      <div class="tc-meta">
        <div class="tc-meta-item">
          <span class="tc-meta-num">${incident.deaths}</span>
          <span>Direct deaths</span>
        </div>
        <div class="tc-meta-item">
          <span class="tc-meta-num">${incident.failures.length}</span>
          <span>Failures</span>
        </div>
        <div class="tc-meta-item">
          <span class="tc-meta-num">${incident.modernChanges.length}</span>
          <span>Fixes</span>
        </div>
      </div>
      <span class="tc-arrow">→ Read case study</span>
    </article>
  `).join('');

  grid.querySelectorAll('.timeline-card').forEach(card => {
    card.addEventListener('click', () => openIncident(card.dataset.incident));
  });
}

function openIncident(id) {
  const incident = INCIDENTS.find(i => i.id === id);
  if (!incident) return;

  const modal = document.getElementById('incident-modal');
  const content = document.getElementById('modal-content');
  const diagram = (typeof REACTOR_DIAGRAMS !== 'undefined' && REACTOR_DIAGRAMS[id]) || '';

  content.innerHTML = `
    <button class="modal-close" onclick="closeIncident()">CLOSE ×</button>

    <header class="m-header">
      <div class="m-eyebrow">CASE STUDY · ${incident.year}</div>
      <h2 class="m-title">${incident.name}</h2>
      <div class="m-meta">
        <span>${incident.date}</span>
        <span>·</span>
        <span>${incident.location}</span>
        <span>·</span>
        <span>${incident.reactorType}</span>
      </div>
    </header>

    <section class="m-section">
      <p class="m-summary">${incident.summary}</p>
    </section>

    ${diagram ? `
      <section class="m-section m-diagram-section">
        <div class="m-diagram">${diagram}</div>
      </section>
    ` : ''}

    <section class="m-section">
      <h3 class="m-section-title">By the numbers</h3>
      <div class="m-stats-grid">
        <div class="m-stat">
          <span class="m-stat-num">${incident.stats.ines}</span>
          <span class="m-stat-label">INES Scale</span>
        </div>
        <div class="m-stat">
          <span class="m-stat-num">${incident.stats.deaths}</span>
          <span class="m-stat-label">Direct Deaths</span>
        </div>
        <div class="m-stat">
          <span class="m-stat-num">${incident.stats.release}</span>
          <span class="m-stat-label">Release</span>
        </div>
      </div>
    </section>

    <section class="m-section">
      <h3 class="m-section-title">What went wrong</h3>
      <ul class="m-failure-list m-failure-list-compact">
        ${incident.failures.map(f => `
          <li><span class="m-factor">${f.factor}</span></li>
        `).join('')}
      </ul>
    </section>

    <section class="m-section">
      <h3 class="m-section-title">How modern reactors fixed it</h3>
      <ul class="m-changes-list">
        ${incident.modernChanges.slice(0, 3).map(c => `<li>${c}</li>`).join('')}
      </ul>
    </section>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  content.scrollTop = 0;
}

function closeIncident() {
  const modal = document.getElementById('incident-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelector('.modal-backdrop')?.addEventListener('click', closeIncident);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeIncident();
});

function animateDeathBars() {
  const bars = document.querySelectorAll('.death-bar');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.getPropertyValue('--target-width');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  bars.forEach(bar => {
    bar.style.width = '0';
    observer.observe(bar);
  });
}

function insertDiagrams() {
  if (typeof GENERATIONS_SVG !== 'undefined') {
    const gen = document.getElementById('generations-diagram');
    if (gen) gen.innerHTML = GENERATIONS_SVG;
  }
  if (typeof DEFENSE_DEPTH_SVG !== 'undefined') {
    const def = document.getElementById('defense-depth-diagram');
    if (def) def.innerHTML = DEFENSE_DEPTH_SVG;
  }
  if (typeof DECAY_HEAT_SVG !== 'undefined') {
    const dh = document.getElementById('decay-heat-diagram');
    if (dh) dh.innerHTML = DECAY_HEAT_SVG;
  }
  if (typeof REACTOR_COMPARISON_SVG !== 'undefined') {
    const rc = document.getElementById('reactor-comparison-diagram');
    if (rc) rc.innerHTML = REACTOR_COMPARISON_SVG;
  }
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

function initRiskChart() {
  const chartWrap = document.querySelector('.risk-chart-wrap');
  if (!chartWrap) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        chartWrap.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(chartWrap);
}

document.addEventListener('DOMContentLoaded', () => {
  buildTimeline();
  animateDeathBars();
  insertDiagrams();
  initScrollReveal();
  initRiskChart();
});
