import type { Project } from "../types/Project";

export const projects = [
  {
    title: {
      es: "Plataforma de Workflow de Inversión",
      en: "Investment Workflow Platform",
    },
    description: {
      es: "Trabajo de producto para una plataforma financiera enfocada en mejorar la interacción entre emprendedores e inversores a lo largo del flujo de evaluación e inversión.",
      en: "Product work for a financing platform focused on improving how entrepreneurs and investors interact across project evaluation and investment workflows.",
    },
    year: "2024",
    tasks: [
      {
        es: "Construí features frontend y backend para el ciclo de inversión",
        en: "Built frontend and backend features for the investment lifecycle",
      },
      {
        es: "Mejoré la claridad de evaluación de proyectos y flujos operativos",
        en: "Improved clarity across project evaluation and operational flows",
      },
      {
        es: "Colaboré en calidad de implementación dentro de un entorno de producto real",
        en: "Collaborated on implementation quality inside a real product environment",
      },
    ],
  },
  {
    title: {
      es: "Dashboard de Analítica y Performance",
      en: "Performance Analytics Dashboard",
    },
    description: {
      es: "Trabajo orientado a dashboards para monitorear releases, comportamiento de producto y visibilidad operativa en equipos de alta velocidad.",
      en: "Dashboard-oriented work for monitoring releases, product behavior, and operational visibility in fast-moving teams.",
    },
    year: "2025",
    tasks: [
      {
        es: "Estructuré vistas analíticas para insights más claros de producto y despliegues",
        en: "Structured analytics views for clearer product and deployment insights",
      },
      {
        es: "Mejoré workflows de reporting y visibilidad para toma de decisiones",
        en: "Improved reporting workflows and decision-making visibility",
      },
      {
        es: "Puse foco en usabilidad, responsividad y arquitectura frontend mantenible",
        en: "Focused on usability, responsiveness, and maintainable frontend architecture",
      },
    ],
  },
  {
    title: {
      es: "Plataforma de Aprendizaje y Mentoría",
      en: "Learning and Mentorship Platform",
    },
    description: {
      es: "Flujos orientados a training y soporte construidos alrededor de coaching, debugging guidance y enablement de developers.",
      en: "Training-oriented product and support workflows built around coaching, debugging guidance, and developer enablement.",
    },
    year: "2024",
    tasks: [
      {
        es: "Creé materiales y recorridos de aprendizaje para temas full-stack",
        en: "Created materials and guided learning paths for full-stack topics",
      },
      {
        es: "Acompañé workflows de debugging y revisión para developers junior y estudiantes",
        en: "Supported debugging and review workflows for junior developers and students",
      },
      {
        es: "Conecté product thinking con coaching técnico práctico",
        en: "Connected product thinking with practical engineering coaching",
      },
    ],
  },
] as const satisfies readonly Project[];
