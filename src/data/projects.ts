import type { Project } from "../types/Project";

export const projects = [
  {
    title: {
      es: "Dashboards de KPI e informes asistidos por IA",
      en: "KPI Dashboards and AI-Assisted Reporting",
    },
    context: {
      es: "Experiencia profesional · Código privado",
      en: "Professional experience · Private code",
    },
    description: {
      es: "Trabajo de producto en Zite, con dashboards y análisis para dar contexto a indicadores históricos y facilitar su revisión.",
      en: "Product work at Zite, building dashboards and analysis to add context to historical metrics and make them easier to review.",
    },
    year: "2024",
    tasks: [
      { es: "Implementé vistas de KPI y gráficos.", en: "Implemented KPI views and charts." },
      { es: "Colaboré en resúmenes e informes generados con IA.", en: "Contributed to AI-generated summaries and reports." },
      { es: "Trabajé con tendencias y sugerencias basadas en el análisis histórico.", en: "Worked on trends and suggestions based on historical analysis." },
    ],
  },
  {
    title: {
      es: "Modernización de sistema de facturación",
      en: "Billing System Modernization",
    },
    context: {
      es: "Experiencia profesional · Código privado",
      en: "Professional experience · Private code",
    },
    description: {
      es: "Contribución de equipo para renovar un sistema legado y conservar los workflows de negocio existentes durante la migración.",
      en: "Team contribution to modernize a legacy system while preserving existing business workflows through the migration.",
    },
    year: "2024",
    tasks: [
      { es: "Migración desde PHP y CodeIgniter 3 hacia Next.js y Node.js.", en: "Migration from PHP and CodeIgniter 3 to Next.js and Node.js." },
      { es: "Implementación coordinada con el equipo del proyecto.", en: "Implementation in coordination with the project team." },
    ],
  },
  {
    title: {
      es: "Entrega de funcionalidades full-stack",
      en: "Full-Stack Feature Delivery",
    },
    context: {
      es: "Experiencia profesional · Código privado",
      en: "Professional experience · Private code",
    },
    description: {
      es: "Responsabilidades de ingeniería de producto en Bixlabs, con foco en planificación técnica, arquitectura y flujos de aplicación.",
      en: "Product engineering responsibilities at Bixlabs, focused on technical planning, architecture, and application workflows.",
    },
    year: "2026",
    tasks: [
      { es: "Trabajo con React, TypeScript, NestJS, PostgreSQL y Prisma.", en: "Worked with React, TypeScript, NestJS, PostgreSQL, and Prisma." },
      { es: "Participé en workflows de autenticación, agenda, pagos e integraciones.", en: "Contributed to authentication, scheduling, payment, and integration workflows." },
      { es: "Aporté code reviews y documentación de decisiones de arquitectura.", en: "Contributed code reviews and architecture decision documentation." },
    ],
  },
] as const satisfies readonly Project[];
