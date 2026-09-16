const selector = "[data-reveal], [data-rail]";

export function initReveal() {
  const elements = document.querySelectorAll<HTMLElement>(selector);

  if (elements.length === 0) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
  );

  elements.forEach((element) => observer.observe(element));
}
