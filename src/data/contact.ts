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
    es: "Estoy abierto a roles remotos full-time y por contrato como Senior Full-Stack Engineer o Technical Lead. Estoy basado en Argentina y puedo colaborar con equipos en distintas zonas horarias.",
    en: "I'm open to remote full-time and contract roles as a Senior Full-Stack Engineer or Technical Lead. I'm based in Argentina and can work with teams across time zones.",
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
