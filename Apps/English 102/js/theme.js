// js/theme.js
// Manages Dark Mode toggle and persistence.

import { storageGet, storageSet } from "./utils/helpers.js";

const THEME_KEY = "themePref";

export function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  // 1. Check local storage first.
  // 2. If no storage, check the OS-level system preference.
  const storedTheme = storageGet(THEME_KEY);
  const osPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  let isDark = storedTheme === "dark" || (!storedTheme && osPrefersDark);

  function applyTheme() {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      toggleBtn.textContent = "☀️";
      toggleBtn.setAttribute("aria-label", "Switch to light mode");
    } else {
      document.documentElement.removeAttribute("data-theme");
      toggleBtn.textContent = "🌙";
      toggleBtn.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  // Apply immediately on load
  applyTheme();

  // Listen for clicks
  toggleBtn.addEventListener("click", () => {
    isDark = !isDark;
    storageSet(THEME_KEY, isDark ? "dark" : "light");
    applyTheme();
  });
}
