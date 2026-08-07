// js/render/progressRenderer.js
//
// Decorates the nav (built by render/navRenderer.js) with progress
// indicators, renders the home-view progress summary, and provides the
// "Reset my progress" control — per IMPLEMENTATION_PLAN.md §4.2/4.3.
//
// This module does not build any nav DOM itself — navRenderer.js already
// owns that (unit-tab / section-tab elements, each carrying a
// data-unit-id / data-section-id attribute as of the Phase 4.2 change to
// that file). Every function here reads progress from state.js (real
// unit data objects in, computed percentages out — state.js already
// knows nothing about specific unit ids, and this module doesn't either)
// and either appends small decoration elements onto existing tabs or
// returns/injects a standalone block of markup.
//
// IMPORTANT ordering dependency: decorateUnitNav/decorateSectionNav must
// be called immediately after navRenderer.js's renderUnitNav/
// renderSectionNav on every re-render (both of those functions already
// reset the container via `container.innerHTML = ""` before drawing
// fresh tabs), not before and not with a stale container. Because the
// container is always freshly rebuilt first, these decorate functions
// don't need to guard against or clean up a previous decoration — there
// isn't one to find.

import {
  getUnitProgress,
  getSectionProgress,
  resetProgress,
} from "../state.js";
import { THEME_VAR } from "./navRenderer.js";

/**
 * Adds a thin progress bar (+ visually-hidden percentage text for screen
 * readers) inside each already-rendered unit tab.
 * @param {HTMLElement} container - the unit-nav element navRenderer.js just rendered into
 * @param {Array<object>} unitsData - the real unit data objects (unit1, unit2, unit3 — each has .id/.sections)
 */
export function decorateUnitNav(container, unitsData) {
  const tabs = container.querySelectorAll(".unit-tab[data-unit-id]");
  tabs.forEach((tab) => {
    const unitData = unitsData.find((u) => u.id === tab.dataset.unitId);
    if (!unitData) return;
    const progress = getUnitProgress(unitData);

    const bar = document.createElement("span");
    bar.className = "unit-tab__progress";
    bar.setAttribute("aria-hidden", "true");
    const fill = document.createElement("span");
    fill.className = "unit-tab__progress-fill";
    fill.style.width = `${progress.percentComplete}%`;
    bar.appendChild(fill);
    tab.appendChild(bar);

    const srText = document.createElement("span");
    srText.className = "visually-hidden";
    srText.textContent = ` — ${progress.percentComplete}% complete`;
    tab.appendChild(srText);
  });
}

/**
 * Adds a completion checkmark (icon + visually-hidden text, never color
 * alone, per plan §8.2) to each already-rendered section tab whose
 * section is fully attempted. Sections with zero gradable activities
 * (currently just wordlist — see state.js's own getSectionProgress/
 * summarize docs) are never marked complete, since isComplete requires
 * total > 0.
 * @param {HTMLElement} container - the section-nav element navRenderer.js just rendered into
 * @param {object|null} unitData - the active unit's real data object, or null on the home view
 */
export function decorateSectionNav(container, unitData) {
  if (!unitData) return;
  const tabs = container.querySelectorAll(".section-tab[data-section-id]");
  tabs.forEach((tab) => {
    const progress = getSectionProgress(unitData, tab.dataset.sectionId);
    if (!progress.isComplete) return;

    const check = document.createElement("span");
    check.className = "section-tab__check";
    check.setAttribute("aria-hidden", "true");
    check.textContent = " \u2713";
    tab.appendChild(check);

    const srText = document.createElement("span");
    srText.className = "visually-hidden";
    srText.textContent = " (complete)";
    tab.appendChild(srText);
  });
}

/**
 * Builds the home-view "overall completion" markup (plan §4.2's third
 * requirement) — one row per unit with its title, a progress bar, and a
 * percent-complete readout, each linking to that unit. Returns an HTML
 * string for the caller (app.js's renderHome) to interpolate into its
 * existing template-literal innerHTML assignment, matching how that
 * function already builds the rest of the home page. Unit titles are
 * this app's own trusted data (not user input), so no escaping is
 * needed here, consistent with how renderComingSoon already interpolates
 * unit.title/section.label directly.
 *
 * This is a modest version of the eventual plan §8.4 "unit picker cards"
 * (title/theme-color/overall-progress-% cards + a how-this-works blurb)
 * — that's explicitly a later Phase 8 step with its own visual-design
 * pass; this function only satisfies 4.2's narrower "overall completion
 * on the home view" requirement, done in a shape 8.4 can restyle or
 * extend later without changing this function's data contract.
 * @param {Array<object>} unitsData - the real unit data objects, in display order
 * @returns {string}
 */
export function homeProgressSummaryHTML(unitsData) {
  const rows = unitsData
    .map((unit) => {
      const progress = getUnitProgress(unit);
      const varName = THEME_VAR[unit.theme];
      const colorStyle = varName ? ` style="--tab-color: var(${varName});"` : "";
      return `
        <li class="home-progress__row">
          <a class="home-progress__unit" href="#/${unit.id}"${colorStyle}>
            <span class="home-progress__title">${unit.title}</span>
            <span class="home-progress__bar" aria-hidden="true"><span class="home-progress__bar-fill" style="width: ${progress.percentComplete}%;"></span></span>
            <span class="home-progress__pct">${progress.percentComplete}% complete</span>
          </a>
        </li>`;
    })
    .join("");
  return `<ul class="home-progress" aria-label="Progress by unit">${rows}</ul>`;
}

/**
 * Renders the "Reset my progress" control (plan §4.3) into `container`.
 * Uses the browser's native confirm() dialog rather than a custom modal
 * — this app has no other modal/dialog UI anywhere, confirm() works
 * fully offline via file:// with zero added markup/state, and the plan
 * only requires "with confirmation," not a specific confirmation UI.
 * Calls state.js's resetProgress() directly (clears every unit's
 * recorded answers/checkmarks; deliberately leaves openResponse.js's own
 * saved Speaking/Writing drafts untouched — see resetProgress()'s own
 * header comment) and shows a brief status line reporting how many
 * records were cleared. After a successful reset, calls `onReset` (if
 * given) so the caller can re-render whatever else displays progress
 * (unit-tab bars, section checkmarks, the home summary) — this module
 * only owns the control itself, not the rest of the page.
 * @param {HTMLElement} container
 * @param {{onReset?: (clearedCount:number) => void}} [options]
 */
export function renderResetControl(container, { onReset } = {}) {
  container.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "reset-control";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn--reset";
  button.textContent = "Reset my progress";

  const status = document.createElement("p");
  status.className = "reset-status";
  status.setAttribute("role", "status");

  button.addEventListener("click", () => {
    const confirmed = window.confirm(
      "Reset all saved progress for every unit? This clears your recorded " +
        "answers and checkmarks. It does NOT delete anything you've written " +
        "in the Speaking/Writing boxes. This cannot be undone."
    );
    if (!confirmed) return;
    const cleared = resetProgress();
    status.textContent =
      cleared > 0
        ? `Progress reset — ${cleared} unit record${cleared === 1 ? "" : "s"} cleared.`
        : "Nothing to reset — no progress was saved yet.";
    if (typeof onReset === "function") onReset(cleared);
  });

  wrapper.appendChild(button);
  wrapper.appendChild(status);
  container.appendChild(wrapper);
}
