type LocalizedText = {
  es: string;
  en: string;
};

export const contactContent = {
  heading: {
    es: "Hablemos",
    en: "Let's talk",
  },
  statement: {
    es: "¿Listo para construir algo sólido?",
    en: "Ready to build something strong?",
  },
  body: {
    es: "Estoy abierto a roles full-time, trabajo por contrato y equipos de producto técnicamente ambiciosos. Estoy basado en Argentina y me siento cómodo colaborando entre zonas horarias con workflows async-friendly.",
    en: "I'm open to full-time roles, contract work, and technically ambitious product teams. Based in Argentina and comfortable collaborating across time zones with async-friendly workflows.",
  },
  hire: {
    es: "Contrátame →",
    en: "Hire me →",
  },
  share: {
    es: "Compartir portfolio",
    en: "Share portfolio",
  },
} as const satisfies Record<string, LocalizedText>;

export const contactLinks = [
  {
    label: "ericdiazeuka@gmail.com",
    href: "mailto:ericdiazeuka@gmail.com",
  },
  {
    label: "linkedin.com/in/eric-diaz-euka",
    href: "https://www.linkedin.com/in/eric-diaz-euka/",
  },
  {
    label: "github.com/Euka-e",
    href: "https://github.com/Euka-e",
  },
] as const;

export const footerContent = {
  top: { es: "Arriba", en: "Top" },
  copyright: "© 2026 — Argentina",
} as const satisfies {
  top: LocalizedText;
  copyright: string;
};
