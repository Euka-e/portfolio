import type { Experience, LocalizedExperience } from "../types/Experience";

const experiencesEN: Experience[] = [
  { company: "Bixlabs", role: "Senior Software Engineer", period: "Feb 2026 - Sep 2026", location: "Uruguay", summary: "Led technical planning and execution for full-stack features, defining approaches across frontend, backend, data, authentication, payments, and third-party integrations while strengthening delivery through code review and documentation." },
  { company: "Kabeli", role: "Full Stack Developer", period: "Feb 2026 - Apr 2026", location: "Chile", summary: "Led adoption of AI-assisted development with Claude Code and MCP integrations, completing selected tasks in 2–3 days that previously took around a week and training engineers and company leaders on the workflows." },
  { company: "AppWise Innovations", role: "Full Stack Engineer", period: "Aug 2025 - Feb 2026", location: "Argentina", summary: "Built and iterated on end-to-end product flows, collaborating across teams on scalable architecture, polished UI, and integrations that supported fast feature release cycles." },
  { company: "Freelance", role: "Software Engineer", period: "Jul 2020 - Present", location: "Remote", summary: "Deliver end-to-end web applications for clients, from requirements analysis and technical planning to deployment and maintenance, covering architecture, APIs, automation, and UX refinement." },
  { company: "Continental Venture Capital", role: "Software Engineer", period: "Dec 2024 - Jul 2025", location: "USA", summary: "Owned project setup, deployment workflows, and frontend leadership for internal products, reducing friction in delivery and raising quality through process and mentoring." },
  { company: "Quality Soft Service", role: "Web Developer", period: "Nov 2024 - Dec 2024", location: "Colombia", summary: "Supported feature implementation and frontend delivery with a focus on responsive interfaces, collaboration, and practical execution under short timelines." },
  { company: "Scrum LATAM", role: "Web Developer", period: "Aug 2024 - Dec 2024", location: "Colombia", summary: "Developed full-stack sprint deliverables, improved deployment workflows, and contributed to user-focused product increments in an agile environment." },
  { company: "Zite", role: "Web Developer", period: "Sep 2024 - Nov 2024", location: "Argentina", summary: "Worked on investment workflow features for a financing platform, contributing to product usability and technical execution during an internship engagement." },
  { company: "Henry", role: "Teaching Assistant", period: "Jun 2024 - Aug 2024", location: "Argentina", summary: "Mentored 50+ students on full-stack development, debugging, and communication skills while supporting learning outcomes in a high-intensity bootcamp setting." },
];

const experiencesES: Experience[] = [
  { company: "Bixlabs", role: "Senior Software Engineer", period: "Feb 2026 - Sep 2026", location: "Uruguay", summary: "Lideré la planificación y ejecución técnica de features full-stack, definiendo enfoques de frontend, backend, datos, autenticación, pagos e integraciones, y fortaleciendo la entrega con code review y documentación." },
  { company: "Kabeli", role: "Full Stack Developer", period: "Feb 2026 - Abr 2026", location: "Chile", summary: "Lideré la adopción de desarrollo asistido por IA con Claude Code e integraciones MCP, completando tareas seleccionadas en 2–3 días que antes requerían alrededor de una semana y capacitando a developers y líderes." },
  { company: "AppWise Innovations", role: "Full Stack Engineer", period: "Ago 2025 - Feb 2026", location: "Argentina", summary: "Construí e iteré flujos end-to-end de producto, colaborando con equipos en arquitectura escalable, UI pulida e integraciones que soportaban ciclos de entrega rápidos." },
  { company: "Freelance", role: "Software Engineer", period: "Jul 2020 - Actualidad", location: "Remoto", summary: "Entrego aplicaciones web end-to-end para clientes, desde análisis de requerimientos y planificación técnica hasta despliegue y mantenimiento, cubriendo arquitectura, APIs, automatización y refinamiento UX." },
  { company: "Continental Venture Capital", role: "Software Engineer", period: "Dic 2024 - Jul 2025", location: "USA", summary: "Lideré setup de proyectos, workflows de despliegue y liderazgo frontend para productos internos, reduciendo fricción de entrega y elevando calidad mediante proceso y mentoring." },
  { company: "Quality Soft Service", role: "Web Developer", period: "Nov 2024 - Dic 2024", location: "Colombia", summary: "Apoyé implementación de features y entrega frontend con foco en interfaces responsive, colaboración y ejecución práctica en plazos cortos." },
  { company: "Scrum LATAM", role: "Web Developer", period: "Ago 2024 - Dic 2024", location: "Colombia", summary: "Desarrollé entregables full-stack de sprint, mejoré workflows de despliegue y contribuí a incrementos de producto orientados al usuario en un entorno ágil." },
  { company: "Zite", role: "Web Developer", period: "Sep 2024 - Nov 2024", location: "Argentina", summary: "Trabajé en features de workflow de inversión para una plataforma financiera, aportando usabilidad de producto y ejecución técnica durante una pasantía." },
  { company: "Henry", role: "Teaching Assistant", period: "Jun 2024 - Ago 2024", location: "Argentina", summary: "Mentoreé a más de 50 estudiantes en desarrollo full-stack, debugging y habilidades de comunicación, acompañando su aprendizaje en un bootcamp intensivo." },
];

export const experienceEntries: LocalizedExperience[] = experiencesEN.map((entry, index) => ({
  en: entry,
  es: experiencesES[index]!,
}));

export const experienceCopy = {
  title: { es: "Experiencia profesional", en: "Professional Experience" },
  range: { es: "2020 — Actualidad", en: "2020 — Present" },
  showMore: { es: "Ver 4 anteriores", en: "Show 4 earlier roles" },
  showLess: { es: "Ocultar anteriores", en: "Hide earlier roles" },
} as const;
