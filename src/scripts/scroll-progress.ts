export function initScrollProgress() {
  const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");

  if (!progress) {
    return;
  }

  const updateProgress = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, value))}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });
}
