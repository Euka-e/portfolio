import type { TechIconKey } from "../icons/technologies";

type LocalizedText = {
  es: string;
  en: string;
};

type Technology = {
  name: string;
  icon: TechIconKey;
};

type TechnologyGroup = {
  title: LocalizedText;
  tools: readonly Technology[];
};

export const technologyGroups = [
  {
    title: { es: "Frontend", en: "Frontend" },
    tools: [
      { name: "Angular", icon: "angular" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Astro", icon: "astro" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Redux", icon: "redux" },
    ],
  },
  {
    title: { es: "Backend", en: "Backend" },
    tools: [
      { name: "Node.js", icon: "node" },
      { name: "NestJS", icon: "nest" },
      { name: "Express", icon: "express" },
      { name: "Java", icon: "java" },
      { name: "MongoDB", icon: "mongo" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    title: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
    tools: [
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Git", icon: "git" },
    ],
  },
  {
    title: { es: "Herramientas", en: "Tools" },
    tools: [
      { name: "Figma", icon: "figma" },
      { name: "Jira", icon: "jira" },
      { name: "Postman", icon: "postman" },
      { name: "Scrum", icon: "scrum" },
    ],
  },
] as const satisfies readonly TechnologyGroup[];
