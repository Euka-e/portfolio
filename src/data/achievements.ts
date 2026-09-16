export const achievements = [
  {
    metric: 40,
    suffix: "%",
    es: {
      label: "Reducción de despliegues",
      description: "Reduje tiempos de despliegue mediante automatización de workflows y pipelines de release más limpios.",
    },
    en: {
      label: "Deployment reduction",
      description: "Reduced deployment time through workflow automation and cleaner release pipelines.",
    },
  },
  {
    metric: 60,
    suffix: "%",
    es: {
      label: "Entrega de producto más rápida",
      description: "Recorté tiempos de entrega de trabajo de calidad al pasar de una implementación totalmente manual a workflows de desarrollo asistidos por IA.",
    },
    en: {
      label: "Faster product delivery",
      description: "Cut delivery time for quality product work by moving from fully manual implementation to AI-assisted development workflows.",
    },
  },
  {
    metric: 25,
    suffix: "%",
    es: {
      label: "Mejora en engagement UX",
      description: "Mejoré el engagement con mejores sistemas de componentes, más pulido de interacciones y correcciones de usabilidad.",
    },
    en: {
      label: "UX engagement lift",
      description: "Improved engagement through better component systems, interaction polish, and usability fixes.",
    },
  },
  {
    metric: 50,
    suffix: "+",
    es: {
      label: "Estudiantes guiados",
      description: "Acompañé a developers y estudiantes en debugging, hábitos de entrega e implementación full-stack.",
    },
    en: {
      label: "Students mentored",
      description: "Coached developers and students on debugging, delivery habits, and full-stack implementation.",
    },
  },
] as const;

export const achievementsCopy = {
  title: {
    es: "Logros clave",
    en: "Key Achievements",
  },
} as const;
