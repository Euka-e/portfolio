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
    es: "Desarrollo potenciado por IA",
    en: "AI-Powered Development",
  },
  intro: {
    es: "Integro herramientas de IA en cada etapa del flujo de trabajo para entregar más rápido con mayor calidad.",
    en: "I integrate AI tools across every stage of the workflow to deliver faster with higher quality.",
  },
  closing: {
    es: "Usar herramientas de IA no significa reemplazar criterio de ingeniería, sino amplificarlo. Valido cada salida generada por IA, entiendo los tradeoffs y entrego código listo para producción.",
    en: "Using AI tools isn't about replacing engineering judgment - it's about amplifying it. I validate every AI-generated output, understand the tradeoffs, and ship production-ready code.",
  },
} as const satisfies Record<string, LocalizedText>;

export const aiTools = [
  {
    name: "Claude",
    description: {
      es: "Investigación, planificación de implementación e iteración de código.",
      en: "Research, implementation planning, and code iteration.",
    },
    icon: "claude",
  },
  {
    name: "Cursor",
    description: {
      es: "Loops de edición rápidos, navegación de repos y refactors locales.",
      en: "Fast editing loops, repo navigation, and local refactors.",
    },
    icon: "cursor",
  },
  {
    name: "GitHub Copilot",
    description: {
      es: "Aceleración de boilerplate y autocompletado dentro del editor.",
      en: "Boilerplate acceleration and in-editor completions.",
    },
    icon: "copilot",
  },
  {
    name: "v0",
    description: {
      es: "Ideación de UI y exploración rápida de layouts antes de endurecerlos.",
      en: "UI ideation and rapid layout exploration before hardening.",
    },
    icon: "v0",
  },
  {
    name: "Vercel AI SDK",
    description: {
      es: "Features de IA en producción, streaming UX y flujos con herramientas.",
      en: "Production AI features, streaming UX, and tool-enabled flows.",
    },
    icon: "vercelAi",
  },
  {
    name: "OpenAI API",
    description: {
      es: "Embeddings, asistentes y flujos de IA orientados al producto.",
      en: "Embeddings, assistants, and product-facing AI workflows.",
    },
    icon: "openai",
  },
] as const satisfies readonly AiTool[];
