import type { AiIconKey } from "../icons/ai";

type LocalizedText = {
  es: string;
  en: string;
};

type AiTool = {
  name: string;
  description: LocalizedText;
  icon: AiIconKey;
};

export const aiToolsContent = {
  title: {
    es: "Desarrollo asistido por IA",
    en: "AI-Assisted Engineering",
  },
  intro: {
    es: "Uso herramientas de IA para apoyar investigación, planificación e implementación, con revisión técnica y validación en cada etapa.",
    en: "I use AI tools to support research, planning, and implementation, with engineering review and validation at each stage.",
  },
  closing: {
    es: "La IA asiste el trabajo; el criterio de ingeniería sigue siendo responsable de revisar las propuestas, evaluar tradeoffs y comprobar el comportamiento.",
    en: "AI assists the work; engineering judgment remains responsible for reviewing suggestions, evaluating tradeoffs, and verifying behavior.",
  },
} as const satisfies Record<string, LocalizedText>;

export const aiTools = [
  {
    name: "Claude Code",
    description: {
      es: "Investigación, planificación de implementación, integración MCP e iteración de código.",
      en: "Research, implementation planning, MCP integration, and code iteration.",
    },
    icon: "claude",
  },
] as const satisfies readonly AiTool[];
