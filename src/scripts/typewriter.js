document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[data-typewriter]");
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const audioZone = document.getElementById("typewriter-audio-zone");

  let phrases = [];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId;
  let audioContext;
  let pointerState = { x: -9999, y: -9999 };
  let soundEnabled = false;
  const maxDistance = 220;

  const getAudioVolume = () => {
    if (!(audioZone instanceof HTMLElement)) {
      return 0;
    }

    const rect = audioZone.getBoundingClientRect();
    const closestX = Math.max(rect.left, Math.min(pointerState.x, rect.right));
    const closestY = Math.max(rect.top, Math.min(pointerState.y, rect.bottom));
    const distance = Math.hypot(pointerState.x - closestX, pointerState.y - closestY);

    if (distance >= maxDistance) {
      return 0;
    }

    const normalized = 1 - distance / maxDistance;
    return Math.max(0, Math.min(0.08, normalized * normalized * 0.08));
  };

  const ensureAudioContext = async () => {
    if (!soundEnabled) {
      return null;
    }

    if (!audioContext) {
      const Context = window.AudioContext || window["webkitAudioContext"];
      if (!Context) {
        return null;
      }
      audioContext = new Context();
    }

    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    return audioContext;
  };

  const createClickBuffer = (context, deleting) => {
    const duration = deleting ? 0.028 : 0.036;
    const frameCount = Math.floor(context.sampleRate * duration);
    const buffer = context.createBuffer(1, frameCount, context.sampleRate);
    const channel = buffer.getChannelData(0);

    for (let index = 0; index < frameCount; index += 1) {
      const progress = index / frameCount;
      const decay = Math.pow(1 - progress, deleting ? 3.4 : 2.8);
      const noise = (Math.random() * 2 - 1) * decay;
      const knock = Math.sin(progress * Math.PI * 18) * (deleting ? 0.08 : 0.12) * decay;
      channel[index] = noise * 0.9 + knock;
    }

    return buffer;
  };

  const playTypeSound = async () => {
    const volume = getAudioVolume();
    if (volume <= 0.002) {
      return;
    }

    const context = await ensureAudioContext();
    if (!context) {
      return;
    }

    const now = context.currentTime;
    const source = context.createBufferSource();
    const highpass = context.createBiquadFilter();
    const lowpass = context.createBiquadFilter();
    const gain = context.createGain();

    source.buffer = createClickBuffer(context, isDeleting);

    highpass.type = "highpass";
    highpass.frequency.setValueAtTime(isDeleting ? 780 : 950, now);

    lowpass.type = "lowpass";
    lowpass.frequency.setValueAtTime(isDeleting ? 2400 : 3100, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (isDeleting ? 0.032 : 0.04));

    source.connect(highpass);
    highpass.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(context.destination);

    source.start(now);
    source.stop(now + (isDeleting ? 0.036 : 0.045));
  };

  const getPhrases = (language) => {
    const phraseString =
      language === "es" ? target.dataset.phrasesEs ?? "" : target.dataset.phrasesEn ?? "";
    return phraseString.split("|").filter(Boolean);
  };

  const tick = () => {
    const currentPhrase = phrases[phraseIndex] ?? "";
    charIndex += isDeleting ? -1 : 1;
    target.textContent = currentPhrase.slice(0, charIndex);
    playTypeSound();

    let delay = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 1400;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % Math.max(phrases.length, 1);
      delay = 260;
    }

    timeoutId = window.setTimeout(tick, delay);
  };

  const reset = (language) => {
    window.clearTimeout(timeoutId);
    phrases = getPhrases(language);
    phraseIndex = 0;
    charIndex = 0;
    isDeleting = false;
    target.textContent = "";
    tick();
  };

  window.addEventListener("portfolio:language-change", (event) => {
    reset(event.detail?.language === "es" ? "es" : "en");
  });

  window.addEventListener("mousemove", (event) => {
    pointerState = { x: event.clientX, y: event.clientY };
  });

  if (audioZone instanceof HTMLElement) {
    const activateSound = async () => {
      soundEnabled = true;
      await ensureAudioContext();
    };

    audioZone.addEventListener("mouseenter", activateSound, { once: true });
    audioZone.addEventListener("mousemove", activateSound, { once: true });
  }

  reset(document.documentElement.dataset.language === "es" ? "es" : "en");
});
