const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function writeCounterValue(element: HTMLElement) {
  const target = Number(element.dataset.counter ?? "0");
  const suffix = element.dataset.counterSuffix ?? "";
  element.textContent = `${target}${suffix}`;
}

function animateCounter(element: HTMLElement) {
  const target = Number(element.dataset.counter ?? "0");
  const suffix = element.dataset.counterSuffix ?? "";
  const duration = 1300;
  const start = performance.now();

  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const currentValue = Math.round(target * (1 - Math.pow(1 - progress, 3)));
    element.textContent = `${currentValue}${suffix}`;

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  };

  window.requestAnimationFrame(tick);
}

export function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>("[data-counter]");

  if (counters.length === 0) {
    return;
  }

  if (prefersReducedMotion) {
    counters.forEach(writeCounterValue);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => observer.observe(counter));
}
