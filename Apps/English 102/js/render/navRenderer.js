// js/render/navRenderer.js
//
// Draws the top-level unit tabs and the section sub-tabs. Each unit's
// `theme` picks which --color-unitN custom property (defined in
// css/variables.css) the active tab renders in, via an inline --tab-color
// override that layout.css reads.
//
// THEME_VAR is exported (Phase 4.2 addition) so progressRenderer.js can
// resolve the same theme -> CSS-var mapping when coloring the home-view
// progress bars, instead of duplicating this lookup table a second time.
// Each rendered tab also now carries a data-unit-id / data-section-id
// attribute (Phase 4.2 addition) so progressRenderer.js can find and
// decorate the right tab with a progress bar / completion checkmark
// after this module renders the nav, without progressRenderer.js needing
// to know anything about how the tabs are built.

export const THEME_VAR = {
  education: "--color-unit1",
  nature: "--color-unit2",
  work: "--color-unit3",
};

/**
 * @param {HTMLElement} container
 * @param {Array<{id:string, title:string, theme:string}>} units
 * @param {string|null} activeUnitId
 */
export function renderUnitNav(container, units, activeUnitId) {
  container.innerHTML = "";
  units.forEach((unit) => {
    const a = document.createElement("a");
    a.href = `#/${unit.id}`;
    a.className = "unit-tab" + (unit.id === activeUnitId ? " is-active" : "");
    a.dataset.unitId = unit.id;
    a.textContent = unit.title;
    if (unit.id === activeUnitId) {
      a.setAttribute("aria-current", "page");
    }
    const varName = THEME_VAR[unit.theme];
    if (varName) {
      a.style.setProperty("--tab-color", `var(${varName})`);
    }
    container.appendChild(a);
  });
}

/**
 * @param {HTMLElement} container
 * @param {Array<{id:string, label:string}>} sections
 * @param {string} unitId
 * @param {string} activeSectionId
 * @param {string} theme
 */
export function renderSectionNav(container, sections, unitId, activeSectionId, theme) {
  container.innerHTML = "";
  if (!unitId) return;
  const varName = THEME_VAR[theme];
  sections.forEach((section) => {
    const a = document.createElement("a");
    a.href = `#/${unitId}/${section.id}`;
    a.className = "section-tab" + (section.id === activeSectionId ? " is-active" : "");
    a.dataset.sectionId = section.id;
    a.textContent = section.label;
    if (section.id === activeSectionId) {
      a.setAttribute("aria-current", "page");
    }
    if (varName) {
      a.style.setProperty("--tab-color", `var(${varName})`);
    }
    container.appendChild(a);
  });
}
