import type { Experience, LocalizedExperience } from "../types/Experience";

const experiencesEN: Experience[] = [
  { company: "Freelance / Independent", role: "Full-Stack Engineer", period: "Jul 2020 - Present", location: "Remote · Argentina", summary: "Build and maintain web applications for clients, from requirements and technical planning through APIs, database integrations, deployment, and ongoing improvements." },
  { company: "Bixlabs", role: "Senior Software Engineer", period: "Feb 2026 - Sep 2026", location: "Remote", summary: "Led technical planning and delivery across React, TypeScript, NestJS, PostgreSQL, and Prisma. Contributed to authentication, scheduling, payment and integration workflows, code reviews, and architecture documentation." },
  { company: "Kabeli", role: "Full Stack Developer", period: "Dec 2025 - Feb 2026", location: "Remote", summary: "Led adoption of AI-assisted development with Claude Code and MCP design-system integrations, and trained engineers and technical leaders. Selected implementation tasks took approximately 2–3 days, compared with around one week previously." },
  { company: "AppWise Innovations", role: "Full Stack Engineer", period: "Aug 2025 - Feb 2026", location: "Remote", summary: "Built and maintained full-stack application features from product and stakeholder requirements, including REST APIs and database integrations, while coordinating delivery with developers and stakeholders." },
  { company: "Continental Venture Capital", role: "Full Stack Engineer", period: "Dec 2024 - Jul 2025", location: "Remote · United States", summary: "Set up application architecture and frontend delivery, coordinated contributors, and implemented GitHub Actions workflows for AWS deployments. Also contributed to QA, documentation, and mentoring." },
  { company: "Quality Soft Service", role: "Web Developer", period: "Nov 2024 - Dec 2024", location: "Remote", summary: "Contributed to a team modernization of a legacy billing system, migrating workflows from PHP and CodeIgniter 3 to Next.js and Node.js while preserving existing business processes." },
  { company: "Scrum LATAM Comunidad", role: "Web Developer", period: "Aug 2024 - Dec 2024", location: "Remote", summary: "Worked on authentication features, collaborated in an Agile/Scrum environment, and shared practical knowledge about AI tools with the team." },
  { company: "Zite (formerly Dealflow)", role: "Web Developer", period: "Sep 2024 - Nov 2024", location: "Remote", summary: "Built KPI dashboards and charts, and contributed to AI-generated summaries and reports, historical KPI analysis, trend insights, and suggested actions." },
  { company: "Henry", role: "Teaching Assistant", period: "Jun 2024 - Aug 2024", location: "Argentina", summary: "Helped students with JavaScript, debugging, pair programming, and collaborative learning." },
];

const experiencesES: Experience[] = [
  { company: "Freelance / Independiente", role: "Ingeniero Full-Stack", period: "Jul 2020 - Actualidad", location: "Remoto · Argentina", summary: "Desarrollo y mantengo aplicaciones web para clientes, desde el relevamiento y la planificación técnica hasta las APIs, integraciones con bases de datos, despliegues y mejoras continuas." },
  { company: "Bixlabs", role: "Senior Software Engineer", period: "Feb 2026 - Sep 2026", location: "Remoto", summary: "Lideré la planificación y entrega técnica con React, TypeScript, NestJS, PostgreSQL y Prisma. Participé en flujos de autenticación, agenda, pagos e integraciones, además de code reviews y documentación de arquitectura." },
  { company: "Kabeli", role: "Full Stack Developer", period: "Dic 2025 - Feb 2026", location: "Remoto", summary: "Lideré la adopción de desarrollo asistido por IA con Claude Code e integraciones MCP para sistemas de diseño, y capacité a developers y referentes técnicos. Algunas tareas de implementación pasaron de tomar cerca de una semana a aproximadamente 2–3 días." },
  { company: "AppWise Innovations", role: "Full Stack Engineer", period: "Ago 2025 - Feb 2026", location: "Remoto", summary: "Desarrollé y mantuve funcionalidades full-stack a partir de requerimientos de producto y stakeholders, incluidas APIs REST e integraciones con bases de datos, en coordinación con el equipo." },
  { company: "Continental Venture Capital", role: "Full Stack Engineer", period: "Dic 2024 - Jul 2025", location: "Remoto · Estados Unidos", summary: "Configuré la arquitectura inicial y la entrega frontend, coordiné colaboradores e implementé workflows de GitHub Actions para despliegues en AWS. También participé en QA, documentación y mentoría." },
  { company: "Quality Soft Service", role: "Web Developer", period: "Nov 2024 - Dic 2024", location: "Remoto", summary: "Colaboré con el equipo en la modernización de un sistema de facturación legado, migrando workflows de PHP y CodeIgniter 3 a Next.js y Node.js mientras se preservaban los procesos de negocio existentes." },
  { company: "Scrum LATAM Comunidad", role: "Web Developer", period: "Ago 2024 - Dic 2024", location: "Remoto", summary: "Trabajé en funcionalidades de autenticación, colaboré en un entorno Agile/Scrum y compartí conocimientos prácticos sobre herramientas de IA con el equipo." },
  { company: "Zite (antes Dealflow)", role: "Web Developer", period: "Sep 2024 - Nov 2024", location: "Remoto", summary: "Desarrollé dashboards y gráficos de KPI, y colaboré en resúmenes e informes generados con IA, análisis histórico de KPI, tendencias y sugerencias de acciones." },
  { company: "Henry", role: "Teaching Assistant", period: "Jun 2024 - Ago 2024", location: "Argentina", summary: "Acompañé a estudiantes con JavaScript, debugging, pair programming y dinámicas de aprendizaje colaborativo." },
];

export const experienceEntries: LocalizedExperience[] = experiencesEN.map((entry, index) => ({
  en: entry,
  es: experiencesES[index]!,
}));

export const experienceCopy = {
  title: { es: "Experiencia profesional", en: "Professional Experience" },
  range: { es: "2020 - Actualidad", en: "2020 - Present" },
  showMore: { es: "Ver 4 anteriores", en: "Show 4 earlier roles" },
  showLess: { es: "Ocultar anteriores", en: "Hide earlier roles" },
} as const;
