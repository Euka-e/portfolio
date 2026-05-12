const LANGUAGE_STORAGE_KEY = "portfolio-language";

const applyLanguage = (language) => {
  const nextLanguage = language === "es" ? "es" : "en";
  document.documentElement.dataset.language = nextLanguage;
  document.documentElement.lang = nextLanguage;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  } catch {}

  document.querySelectorAll("[data-language-label]").forEach((element) => {
    element.textContent = nextLanguage.toUpperCase();
  });

  document.querySelectorAll("[data-i18n-placeholder-en][data-i18n-placeholder-es]").forEach((element) => {
    if (element instanceof HTMLInputElement) {
      element.placeholder =
        nextLanguage === "en" ? element.dataset.i18nPlaceholderEn ?? "" : element.dataset.i18nPlaceholderEs ?? "";
    }
  });

  window.dispatchEvent(
    new CustomEvent("portfolio:language-change", {
      detail: { language: nextLanguage },
    }),
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const currentLanguage = document.documentElement.dataset.language || "en";
  applyLanguage(currentLanguage);

  document.querySelectorAll("[data-language-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const activeLanguage = document.documentElement.dataset.language || "en";
      applyLanguage(activeLanguage === "en" ? "es" : "en");
    });
  });
});
