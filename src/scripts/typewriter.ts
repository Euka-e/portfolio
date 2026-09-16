type Language = "es" | "en";

const WRITE_DELAY = 62;
const DELETE_DELAY = 34;
const COMPLETE_DELAY = 1700;
const NEXT_PHRASE_DELAY = 320;

function currentLanguage(): Language {
  return document.documentElement.dataset.language === "en" ? "en" : "es";
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initTypewriter() {
  const target = document.querySelector<HTMLElement>("[data-typewriter]");

  if (!target) {
    return;
  }

  let phraseIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;
  let timeoutId: number | undefined;

  const phrasesFor = (language: Language) => {
    const phraseString = language === "es" ? target.dataset.phrasesEs : target.dataset.phrasesEn;
    return phraseString?.split("|").filter(Boolean) ?? [];
  };

  const renderStaticPhrase = () => {
    target.textContent = phrasesFor(currentLanguage())[0] ?? "";
  };

  const tick = () => {
    if (prefersReducedMotion()) {
      renderStaticPhrase();
      return;
    }

    const phrases = phrasesFor(currentLanguage());
    const phrase = phrases[phraseIndex] ?? "";

    characterIndex += isDeleting ? -1 : 1;
    target.textContent = phrase.slice(0, characterIndex);

    let delay = isDeleting ? DELETE_DELAY : WRITE_DELAY;

    if (!isDeleting && characterIndex === phrase.length) {
      delay = COMPLETE_DELAY;
      isDeleting = true;
    } else if (isDeleting && characterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % Math.max(phrases.length, 1);
      delay = NEXT_PHRASE_DELAY;
    }

    timeoutId = window.setTimeout(tick, delay);
  };

  const reset = () => {
    if (timeoutId !== undefined) {
      window.clearTimeout(timeoutId);
    }

    phraseIndex = 0;
    characterIndex = 0;
    isDeleting = false;

    if (prefersReducedMotion()) {
      renderStaticPhrase();
      return;
    }

    target.textContent = "";
    tick();
  };

  window.addEventListener("portfolio:language-change", reset);
  reset();
}
