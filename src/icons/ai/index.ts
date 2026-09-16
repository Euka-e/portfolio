import Claude from "./claude.astro";
import Copilot from "./copilot.astro";
import Cursor from "./cursor.astro";
import OpenAI from "./openai.astro";
import V0 from "./v0.astro";
import VercelAi from "./vercel-ai.astro";

export const aiIcons = {
  claude: Claude,
  copilot: Copilot,
  cursor: Cursor,
  openai: OpenAI,
  v0: V0,
  vercelAi: VercelAi,
} as const;

export type AiIconKey = keyof typeof aiIcons;
