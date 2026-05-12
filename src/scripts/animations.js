const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealElements = () => {
  const items = document.querySelectorAll("[data-animate]");

  if (prefersReducedMotion) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -40px 0px" },
  );

  items.forEach((item) => observer.observe(item));
};

const initializeCounters = () => {
  const counters = document.querySelectorAll("[data-counter]");

  if (counters.length === 0) {
    return;
  }

  const animateCounter = (element) => {
    const target = Number(element.dataset.counter ?? "0");
    const suffix = element.dataset.counterSuffix ?? "";
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const currentValue = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      element.textContent = `${currentValue}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    window.requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 },
  );

  counters.forEach((counter) => observer.observe(counter));
};

document.addEventListener("DOMContentLoaded", () => {
  revealElements();
  initializeCounters();
});
