document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
    return;
  }

  const dot = document.getElementById("cursor-dot");
  if (!(dot instanceof HTMLElement)) {
    return;
  }

  window.addEventListener("mousemove", (event) => {
    dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
    dot.style.opacity = "1";
  });

  document.querySelectorAll(".spotlight-card").forEach((element) => {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
      element.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
    });
  });

  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      const isBlocked = element.getAttribute("aria-disabled") === "true";
      dot.classList.add("is-hovered");
      dot.classList.toggle("is-blocked", isBlocked);
    });
    element.addEventListener("mouseleave", () => {
      dot.classList.remove("is-hovered");
      dot.classList.remove("is-blocked");
    });
  });
});
