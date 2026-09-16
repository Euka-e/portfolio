const LANGUAGE_STORAGE_KEY = "portfolio-language";
const TRANSITION_DURATION = 170;

type Language = "es" | "en";

function normalizeLanguage(language: string | undefined): Language {
  return language === "en" ? "en" : "es";
}

function updateToggleLabels(language: Language) {
  document.querySelectorAll<HTMLElement>("[data-language-toggle]").forEach((toggle) => {
    toggle.setAttribute("aria-label", language === "es" ? "Cambiar a inglés" : "Switch to Spanish");
  });
}

function applyLanguage(language: Language) {
  document.documentElement.dataset.language = language;
  document.documentElement.lang = language;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {}

  document.querySelectorAll("[data-i18n-placeholder-en][data-i18n-placeholder-es]").forEach((element) => {
    if (element instanceof HTMLInputElement) {
      element.placeholder =
        language === "en" ? element.dataset.i18nPlaceholderEn ?? "" : element.dataset.i18nPlaceholderEs ?? "";
    }
  });

  updateToggleLabels(language);
  window.dispatchEvent(new CustomEvent<{ language: Language }>("portfolio:language-change", { detail: { language } }));
}

function toggleLanguage() {
  const { documentElement } = document;

  if (documentElement.hasAttribute("data-switching")) {
    return;
  }

  const activeLanguage = normalizeLanguage(documentElement.dataset.language);
  const nextLanguage: Language = activeLanguage === "es" ? "en" : "es";

  documentElement.dataset.switching = "true";
  window.setTimeout(() => {
    applyLanguage(nextLanguage);
    delete documentElement.dataset.switching;
  }, TRANSITION_DURATION);
}

export function initLanguageSwitcher() {
  applyLanguage(normalizeLanguage(document.documentElement.dataset.language));

  document.querySelectorAll<HTMLElement>("[data-language-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", toggleLanguage);
  });
}
