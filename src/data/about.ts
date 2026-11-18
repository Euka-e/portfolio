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
      es: "Soy ingeniero full-stack con más de 5 años de experiencia combinada entre trabajo independiente y equipos de producto. Trabajo principalmente con TypeScript, React, Node.js, NestJS y PostgreSQL; también participo en decisiones de arquitectura, planificación técnica y acompañamiento de equipos.",
      en: "I'm a full-stack engineer with 5+ years of combined experience across independent work and product teams. I work primarily with TypeScript, React, Node.js, NestJS, and PostgreSQL, and contribute to architecture decisions, technical planning, and team development.",
    },
    {
      es: "Incorporo herramientas de IA en investigación, planificación, implementación y documentación. En Kabeli facilité la adopción de Claude Code y MCP con developers y referentes técnicos. Reviso las propuestas, verifico el comportamiento y mantengo el criterio de ingeniería en cada decisión.",
      en: "I use AI tools for research, planning, implementation, and documentation. At Kabeli, I helped engineers and technical leaders adopt Claude Code and MCP. I review suggestions, verify behavior, and keep engineering judgment central to each decision.",
    },
  ],
  skillsLabel: {
    es: "Habilidades clave",
    en: "Top skills",
  },
  skills: ["TypeScript", "React", "Node.js", "NestJS", "PostgreSQL", "System Design", "Technical Leadership"],
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
    ],
  },
  {
    title: { es: "Idiomas", en: "Languages" },
    items: [
      { es: "Español nativo.", en: "Spanish — native." },
      { es: "Inglés B2 — Cambridge English: First (FCE).", en: "English B2 — Cambridge English: First (FCE)." },
    ],
  },
] as const satisfies readonly AboutSection[];

export const certifications = [
  { title: "Reactive Architecture Foundations", issuer: "IBM", date: "Nov 2026" },
  { title: "Design Thinking Professional Certification (DTPC®)", issuer: "CertiProf", date: "Feb 2025" },
  { title: "JavaScript", issuer: "freeCodeCamp", date: "Nov 2026" },
  { title: "Node.js (Intermediate)", issuer: "HackerRank Campus Club, FCDS", date: "Nov 2026" },
  { title: "Claude Academy: Claude Code in Action", issuer: "Anthropic", date: "Nov 2026" },
  { title: "Claude Academy: Building Effective Human-Agent Teams (beta)", issuer: "Anthropic", date: "Nov 2026" },
] as const;
