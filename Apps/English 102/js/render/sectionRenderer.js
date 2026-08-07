// js/render/sectionRenderer.js
//
// Core dispatcher for Phase 5–7 assembly: given a unit data object and
// a section id, renders the full section content into `container` —
// including any reference intro text (grammar/pronunciation/writing),
// the activity list (each activity routed to its engine module), and the
// word-list glossary. Called by app.js's render() once for every section
// view.
//
// Engine contract (per IMPLEMENTATION_PLAN.md §3): every engine exports
// render(container, activityData, onAnswered) where onAnswered(id, isCorrect)
// is called exactly once per activity after the student submits. Here we
// bind state.js's recordAnswer as that callback, so every answer is
// persisted to localStorage immediately.
//
// readingPassage / listeningTranscript composite types: each owns a
// passage/transcript + a nested questions[] array. The section renderer
// renders the passage/transcript first (expandable for listening, inline
// for reading), then renders each nested question using its own engine
// (always mcq or trueFalse — no others appear in the real data).

import { recordAnswer } from "../state.js";
import * as mcqEngine from "../engine/mcq.js";
import * as trueFalseEngine from "../engine/trueFalse.js";
import * as matchingEngine from "../engine/matching.js";
import * as fillBlankEngine from "../engine/fillBlank.js";
import * as anagramEngine from "../engine/anagram.js";
import * as hangmanEngine from "../engine/hangman.js";
import * as phoneticSymbolEngine from "../engine/phoneticSymbol.js";
import * as vowelTickboxEngine from "../engine/vowelTickbox.js";
import * as transcriptionSpellingEngine from "../engine/transcriptionSpelling.js";
import * as diphthongMatchEngine from "../engine/diphthongMatch.js";
import * as openResponseEngine from "../engine/openResponse.js";
import * as dialogueFillBlankEngine from "../engine/dialogueFillBlank.js";

// ---------------------------------------------------------------------------
// Lightweight markdown-to-HTML converter
// Handles the subset of markdown used in section intro fields (per plan §2.1):
//   ## Heading 2, ### Heading 3
//   **bold**
//   - bullet list items (converted to <ul><li>)
//   | pipe | tables | (header row + data rows)
//   Blank lines → paragraph breaks
// ---------------------------------------------------------------------------
function markdownToHTML(md) {
  if (!md) return "";

  const lines = md.split("\n");
  const out = [];
  let inList = false;
  let inTable = false;
  let tableHeaderDone = false;

  function closeList() {
    if (inList) { out.push("</ul>"); inList = false; }
  }
  function closeTable() {
    if (inTable) { out.push("</tbody></table>"); inTable = false; tableHeaderDone = false; }
  }

  function inlineFormat(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  }

  lines.forEach((raw) => {
    const line = raw.trimEnd();

    // Heading 3
    if (/^###\s/.test(line)) {
      closeList(); closeTable();
      out.push(`<h3>${inlineFormat(line.replace(/^###\s+/, ""))}</h3>`);
      return;
    }
    // Heading 2
    if (/^##\s/.test(line)) {
      closeList(); closeTable();
      out.push(`<h2>${inlineFormat(line.replace(/^##\s+/, ""))}</h2>`);
      return;
    }
    // Bullet list item
    if (/^-\s/.test(line)) {
      closeTable();
      if (!inList) { out.push("<ul>"); inList = true; }
      out.push(`<li>${inlineFormat(line.replace(/^-\s+/, ""))}</li>`);
      return;
    }
    // Table row (starts and ends with |)
    if (/^\|/.test(line)) {
      closeList();
      const cells = line.split("|").slice(1, -1).map(c => c.trim());
      // separator row (all dashes) — skip
      if (cells.every(c => /^-+$/.test(c))) return;
      if (!inTable) {
        out.push('<div class="intro__table-wrap"><table class="intro__table">');
        out.push("<thead><tr>" + cells.map(c => `<th>${inlineFormat(c)}</th>`).join("") + "</tr></thead>");
        out.push("<tbody>");
        inTable = true;
        tableHeaderDone = true;
        return;
      }
      out.push("<tr>" + cells.map(c => `<td>${inlineFormat(c)}</td>`).join("") + "</tr>");
      return;
    }
    // Blank line
    if (line === "") {
      closeList(); closeTable();
      return;
    }
    // Plain paragraph line
    closeList(); closeTable();
    out.push(`<p>${inlineFormat(line)}</p>`);
  });

  closeList();
  closeTable();
  return out.join("\n");
}

// ---------------------------------------------------------------------------
// Engine routing: map activity.type → engine module
// ---------------------------------------------------------------------------
const ENGINE_MAP = {
  mcq: mcqEngine,
  trueFalse: trueFalseEngine,
  matching: matchingEngine,
  fillBlank: fillBlankEngine,
  anagram: anagramEngine,
  hangman: hangmanEngine,
  phoneticSymbol: phoneticSymbolEngine,
  vowelTickbox: vowelTickboxEngine,
  transcriptionSpelling: transcriptionSpellingEngine,
  diphthongMatch: diphthongMatchEngine,
  openResponse: openResponseEngine,
  dialogueFillBlank: dialogueFillBlankEngine,
};

function renderActivity(container, activity, unitId) {
  const engine = ENGINE_MAP[activity.type];
  if (!engine) {
    const p = document.createElement("p");
    p.textContent = `[Unknown activity type: ${activity.type}]`;
    container.appendChild(p);
    return;
  }
  const slot = document.createElement("div");
  slot.className = "activity-slot";
  container.appendChild(slot);
  engine.render(slot, activity, (id, isCorrect) => {
    recordAnswer(unitId, id, isCorrect);
  });
}

// ---------------------------------------------------------------------------
// Reading passage renderer
// ---------------------------------------------------------------------------
function renderReadingPassage(container, activity, unitId) {
  const article = document.createElement("article");
  article.className = "reading-passage";
  article.dataset.activityId = activity.id;

  const h3 = document.createElement("h3");
  h3.className = "reading-passage__title";
  h3.textContent = activity.title;
  article.appendChild(h3);

  const passageEl = document.createElement("div");
  passageEl.className = "reading-passage__text";
  // Split on double-newline for paragraphs
  activity.passage.split(/\n\n+/).forEach(para => {
    const p = document.createElement("p");
    p.textContent = para.trim();
    passageEl.appendChild(p);
  });
  article.appendChild(passageEl);

  if (activity.questions && activity.questions.length > 0) {
    const qSection = document.createElement("div");
    qSection.className = "reading-passage__questions";
    const qHead = document.createElement("h4");
    qHead.className = "reading-passage__questions-heading";
    qHead.textContent = "Comprehension Questions";
    qSection.appendChild(qHead);
    activity.questions.forEach(q => renderActivity(qSection, q, unitId));
    article.appendChild(qSection);
  }

  container.appendChild(article);
}

// ---------------------------------------------------------------------------
// Listening transcript renderer
// ---------------------------------------------------------------------------
function renderListeningTranscript(container, activity, unitId) {
  const article = document.createElement("article");
  article.className = "listening-transcript";
  article.dataset.activityId = activity.id;

  const header = document.createElement("div");
  header.className = "listening-transcript__header";

  const h3 = document.createElement("h3");
  h3.className = "listening-transcript__title";
  h3.textContent = activity.title;
  header.appendChild(h3);

  const toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.className = "btn btn--toggle-transcript";
  toggleBtn.setAttribute("aria-expanded", "false");
  toggleBtn.textContent = "Show transcript";
  header.appendChild(toggleBtn);

  if (activity.audioSrc) {
    const audioWrap = document.createElement("div");
    audioWrap.className = "listening-transcript__audio-wrap";
    
    const audioEl = document.createElement("audio");
    audioEl.controls = true;
    audioEl.preload = "metadata";
    
    // Simply use the native audio player with the single concatenated file
    audioEl.src = activity.audioSrc;
    
    audioWrap.appendChild(audioEl);
    header.appendChild(audioWrap);
  }

  article.appendChild(header);

  const transcriptEl = document.createElement("div");
  transcriptEl.className = "listening-transcript__dialogue";
  transcriptEl.hidden = true;
  transcriptEl.id = `transcript-${activity.id}`;

  if (activity.transcript && activity.transcript.length > 0) {
    const dl = document.createElement("dl");
    dl.className = "listening-transcript__dl";
    activity.transcript.forEach(({ speaker, line }) => {
      const dt = document.createElement("dt");
      dt.className = "listening-transcript__speaker";
      dt.textContent = speaker;
      const dd = document.createElement("dd");
      dd.className = "listening-transcript__line";
      dd.textContent = line;
      dl.appendChild(dt);
      dl.appendChild(dd);
    });
    transcriptEl.appendChild(dl);
  }

  toggleBtn.setAttribute("aria-controls", transcriptEl.id);
  toggleBtn.addEventListener("click", () => {
    const isExpanded = transcriptEl.hidden === false;
    transcriptEl.hidden = isExpanded;
    toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    toggleBtn.textContent = isExpanded ? "Show transcript" : "Hide transcript";
  });

  article.appendChild(transcriptEl);

  if (activity.questions && activity.questions.length > 0) {
    const note = document.createElement("p");
    note.className = "listening-transcript__note";
    note.textContent = "Read the transcript above, then answer the questions below.";
    article.appendChild(note);

    const qSection = document.createElement("div");
    qSection.className = "listening-transcript__questions";
    activity.questions.forEach(q => renderActivity(qSection, q, unitId));
    article.appendChild(qSection);
  }

  container.appendChild(article);
}

// ---------------------------------------------------------------------------
// Word List glossary renderer
// ---------------------------------------------------------------------------
function renderWordList(container, section) {
  if (!section.terms || section.terms.length === 0) return;

  const glossaryEl = document.createElement("div");
  glossaryEl.className = "wordlist";

  // Search bar
  const searchWrap = document.createElement("div");
  searchWrap.className = "wordlist__search-wrap";
  const searchLabel = document.createElement("label");
  searchLabel.className = "wordlist__search-label";
  searchLabel.htmlFor = "wordlist-search";
  searchLabel.textContent = "Search terms:";
  const searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.id = "wordlist-search";
  searchInput.className = "wordlist__search";
  searchInput.placeholder = "Type to filter…";
  searchInput.setAttribute("aria-controls", "wordlist-grid");
  searchWrap.appendChild(searchLabel);
  searchWrap.appendChild(searchInput);
  glossaryEl.appendChild(searchWrap);

  // Grid of flip-cards
  const grid = document.createElement("div");
  grid.className = "wordlist__grid";
  grid.id = "wordlist-grid";
  grid.setAttribute("role", "list");

  section.terms.forEach(({ term, pos, definition, arabic }) => {
    const card = document.createElement("div");
    card.className = "wordlist__card";
    card.setAttribute("role", "listitem");
    card.dataset.term = term.toLowerCase();

    const inner = document.createElement("div");
    inner.className = "wordlist__card-inner";

    const front = document.createElement("div");
    front.className = "wordlist__card-front";
    const termEl = document.createElement("span");
    termEl.className = "wordlist__term";
    termEl.textContent = term;
    const posEl = document.createElement("span");
    posEl.className = "wordlist__pos";
    posEl.textContent = pos;
    front.appendChild(termEl);
    front.appendChild(posEl);

    const back = document.createElement("div");
    back.className = "wordlist__card-back";
    
    const defEl = document.createElement("p");
    defEl.textContent = definition;
    back.appendChild(defEl);

    if (arabic) {
      const arEl = document.createElement("p");
      arEl.className = "wordlist__arabic-translation";
      arEl.setAttribute("dir", "rtl");
      arEl.setAttribute("lang", "ar");
      arEl.textContent = arabic;
      back.appendChild(arEl);
    }

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("is-flipped");
      }
    });

    grid.appendChild(card);
  });

  glossaryEl.appendChild(grid);

  // No-results message
  const noResults = document.createElement("p");
  noResults.className = "wordlist__no-results";
  noResults.hidden = true;
  noResults.textContent = "No terms match your search.";
  glossaryEl.appendChild(noResults);

  // Search filtering
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    let count = 0;
    grid.querySelectorAll(".wordlist__card").forEach(card => {
      const matches = !q || card.dataset.term.includes(q);
      card.hidden = !matches;
      if (matches) count++;
    });
    noResults.hidden = count > 0;
  });

  container.appendChild(glossaryEl);
}

// ---------------------------------------------------------------------------
// Main export: renderSection
// ---------------------------------------------------------------------------

/**
 * Renders a full section's content into `container`.
 * @param {HTMLElement} container - emptied and rendered into
 * @param {object} unitData - the real unit data object (e.g. unit1)
 * @param {string} sectionId - e.g. "vocabulary", "reading", …
 */
export function renderSection(container, unitData, sectionId) {
  container.innerHTML = "";

  const section = unitData.sections[sectionId];
  if (!section) {
    const p = document.createElement("p");
    p.textContent = "Section not found.";
    container.appendChild(p);
    return;
  }

  const page = document.createElement("div");
  page.className = "page";

  // Section title heading (h1 on the page level per plan SEO note)
  const h1 = document.createElement("h1");
  h1.className = "section-heading";
  h1.textContent = `${unitData.title} — ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`;
  page.appendChild(h1);

  // Render intro/reference content (grammar, pronunciation, writing have this)
  if (section.intro) {
    const introEl = document.createElement("div");
    introEl.className = "section-intro";
    introEl.innerHTML = markdownToHTML(section.intro);
    page.appendChild(introEl);
  }

  // Word List section — special case (no `activities`, has `terms`)
  if (sectionId === "wordlist") {
    renderWordList(page, section);
    container.appendChild(page);
    return;
  }

  // Regular activities list
  if (section.activities && section.activities.length > 0) {
    const activitiesEl = document.createElement("div");
    activitiesEl.className = "section-activities";

    section.activities.forEach((activity) => {
      if (activity.type === "readingPassage") {
        renderReadingPassage(activitiesEl, activity, unitData.id);
      } else if (activity.type === "listeningTranscript") {
        renderListeningTranscript(activitiesEl, activity, unitData.id);
      } else {
        renderActivity(activitiesEl, activity, unitData.id);
      }
    });

    page.appendChild(activitiesEl);
  }

  container.appendChild(page);
}
