type LocalizedText = {
  es: string;
  en: string;
};

type AboutSection = {
  title: LocalizedText;
  items: readonly LocalizedText[];
};

export const aboutContent = {
  title: {
    es: "Sobre mí",
    en: "About Me",
  },
  heading: {
    es: "Lo que impulsa mi trabajo",
    en: "What drives my work",
  },
  paragraphs: [
    {
      es: "Soy ingeniero full-stack con más de 5 años de experiencia construyendo productos digitales escalables en startups, agencias y equipos de producto. Mi experiencia reciente incluye liderazgo técnico en Bixlabs y desarrollo full-stack para productos en distintos mercados, con foco en ejecución técnica fuerte, buen criterio UX y velocidad pragmática.",
      en: "I'm a full-stack engineer with 5+ years of experience building scalable digital products across startups, agencies, and product teams. My recent experience includes technical leadership at Bixlabs and full-stack product development across markets, with a focus on strong technical execution, thoughtful UX, and pragmatic delivery speed.",
    },
    {
      es: "Uso IA como multiplicador de fuerza en discovery, implementación, QA y documentación. Además de aplicarla en mi trabajo, facilité la adopción de Claude Code, ChatGPT y MCP para developers y líderes. El estándar sigue siendo el mismo: entender los tradeoffs, validar el resultado y entregar código listo para producción.",
      en: "I use AI as a force multiplier across discovery, implementation, QA, and documentation. Beyond applying it in my work, I facilitated adoption of Claude Code, ChatGPT, and MCP for engineers and leaders. The standard stays the same: understand the tradeoffs, validate the output, and ship code that is production-ready.",
    },
  ],
  skillsLabel: {
    es: "Habilidades clave",
    en: "Top skills",
  },
  skills: ["Technical Leadership", "CI/CD", "MCP", "System Design", "Prisma"],
} as const satisfies {
  title: LocalizedText;
  heading: LocalizedText;
  paragraphs: readonly LocalizedText[];
  skillsLabel: LocalizedText;
  skills: readonly string[];
};

export const aboutSections = [
  {
    title: { es: "Workflow IA", en: "AI workflow" },
    items: [
      {
        es: "Investigación y encuadre de solución antes de implementar.",
        en: "Research and solution framing before implementation.",
      },
      {
        es: "Iteración más rápida sobre UI, contratos de API y edge cases.",
        en: "Faster iteration on UI, API contracts, and edge cases.",
      },
      {
        es: "Validación mediante code review, testing y QA manual.",
        en: "Validation through code review, testing, and manual QA.",
      },
    ],
  },
  {
    title: { es: "Educación y crecimiento", en: "Education & growth" },
    items: [
      {
        es: "Henry Full Stack Bootcamp, más de 800 horas de formación.",
        en: "Henry Full Stack Bootcamp, 800+ training hours.",
      },
      {
        es: "Argentina Programa, recorrido Angular y Java.",
        en: "Argentina Programa, Angular and Java path.",
      },
      {
        es: "Cambridge English: First (FCE), B2.",
        en: "Cambridge English: First (FCE), B2.",
      },
      {
        es: "Certificado en Design Thinking, Certiprof.",
        en: "Design Thinking Certificate, Certiprof.",
      },
    ],
  },
] as const satisfies readonly AboutSection[];
