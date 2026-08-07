// js/app.js
//
// Minimal hash router. Routes: #/ (home), #/:unitId, #/:unitId/:sectionId
//
// Phase 4.2/4.3 change: swapped the Phase-1 placeholder UNITS array for
// real imports from js/data/unit1.js/unit2.js/unit3.js (flagged as a
// pending swap back in Phase 2's Session Log). This was a genuine
// prerequisite for Phase 4, not scope creep — state.js's progress
// functions need each unit's real `.sections` object to walk, so nav
// decoration (progress bars, checkmarks, home summary) has nothing to
// read from a title/theme-only placeholder. Real per-activity rendering
// (replacing renderComingSoon) is still Phase 5-7 work.

import { renderUnitNav, renderSectionNav } from "./render/navRenderer.js";
import {
  decorateUnitNav,
  decorateSectionNav,
  homeProgressSummaryHTML,
  renderResetControl,
} from "./render/progressRenderer.js";
import { renderSection } from "./render/sectionRenderer.js";
import { unit1 } from "./data/unit1.js";
import { unit2 } from "./data/unit2.js";
import { unit3 } from "./data/unit3.js";
import { initTheme } from "./theme.js";

const UNITS = [unit1, unit2, unit3];

// Section id/label pairs are identical across all three units' real data
// (each exports the same eight section keys), so this stays a plain
// constant rather than being derived per-unit.
const SECTIONS = [
  { id: "vocabulary", label: "Vocabulary" },
  { id: "reading", label: "Reading" },
  { id: "grammar", label: "Grammar" },
  { id: "listening", label: "Listening" },
  { id: "pronunciation", label: "Pronunciation" },
  { id: "speaking", label: "Speaking" },
  { id: "writing", label: "Writing" },
  { id: "wordlist", label: "Word List" },
];

const unitNavEl = document.getElementById("unit-nav");
const sectionNavEl = document.getElementById("section-nav");
const appRoot = document.getElementById("app-root");
const footerActionsEl = document.getElementById("footer-actions");

function parseHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const [unitId, sectionId] = hash.split("/").filter(Boolean);
  return { unitId, sectionId };
}

function findUnit(unitId) {
  return UNITS.find((u) => u.id === unitId) || null;
}

function renderHome() {
  appRoot.innerHTML = `
    <div class="page">
      <h1>English 102 — Interactive Practice</h1>
      <p>Choose a unit above to start practicing. Vocabulary, reading,
      grammar, listening, pronunciation, speaking, and writing activities
      for all three units are coming soon, with your progress saved on
      this device as you go.</p>
      ${homeProgressSummaryHTML(UNITS)}
    </div>
  `;
}


function render() {
  const { unitId, sectionId } = parseHash();
  const unit = findUnit(unitId);

  renderUnitNav(unitNavEl, UNITS, unit ? unit.id : null);
  decorateUnitNav(unitNavEl, UNITS);

  if (!unit) {
    sectionNavEl.innerHTML = "";
    renderHome();
    return;
  }

  const section = SECTIONS.find((s) => s.id === sectionId) || SECTIONS[0];
  renderSectionNav(sectionNavEl, SECTIONS, unit.id, section.id, unit.theme);
  decorateSectionNav(sectionNavEl, unit);
  renderSection(appRoot, unit, section.id);
}


// Rendered once at startup, not per-route — the control's own status line
// and click handler don't depend on which unit/section is active. A
// successful reset re-runs the full router render so unit-tab progress
// bars, section checkmarks, and (on the home view) the progress summary
// all immediately reflect the cleared state.
renderResetControl(footerActionsEl, { onReset: () => render() });

window.addEventListener("hashchange", render);
initTheme();
render();
