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
      es: "Soy ingeniero full-stack con más de 5 años de experiencia construyendo productos digitales escalables en startups, agencias y equipos de producto. Actualmente trabajo en Bixlabs, donde me enfoco en entregar soluciones pulidas con ejecución técnica fuerte, buen criterio UX y velocidad pragmática.",
      en: "I'm a full-stack engineer with 5+ years of experience building scalable digital products across startups, agencies, and product teams. I currently work at Bixlabs, where I focus on shipping polished solutions with strong technical execution, thoughtful UX, and pragmatic delivery speed.",
    },
    {
      es: "Uso IA como multiplicador de fuerza en discovery, implementación, QA y documentación. Ese workflow me ayuda a moverme más rápido, pero el estándar sigue siendo el mismo: entender los tradeoffs, validar el resultado y entregar código listo para producción.",
      en: "I use AI as a force multiplier across discovery, implementation, QA, and documentation. That workflow helps me move faster, but the standard stays the same: understand the tradeoffs, validate the output, and ship code that is production-ready.",
    },
  ],
  skillsLabel: {
    es: "Habilidades clave",
    en: "Top skills",
  },
  skills: ["Prisma", "Microservices", "Java", "System Design", "CI/CD"],
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
        es: "EF SET English, C2 Proficient.",
        en: "EF SET English, C2 Proficient.",
      },
      {
        es: "Certificado en Design Thinking, Certiprof.",
        en: "Design Thinking Certificate, Certiprof.",
      },
    ],
  },
] as const satisfies readonly AboutSection[];
