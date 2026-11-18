import { initLanguageSwitcher } from "./language-switcher";
import { initReveal } from "./reveal";
import { initScrollProgress } from "./scroll-progress";
import { initTypewriter } from "./typewriter";

function initGlobalScripts() {
  initLanguageSwitcher();
  initReveal();
  initScrollProgress();
  initTypewriter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGlobalScripts, { once: true });
} else {
  initGlobalScripts();
}
