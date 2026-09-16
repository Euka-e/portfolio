import type { Experience, LocalizedExperience } from "../types/Experience";

const experiencesEN: Experience[] = [
  { company: "Bixlabs", role: "Ssr. Software Engineer", period: "Apr 2026 - Present", location: "Uruguay", summary: "Building production-grade product experiences, aligning engineering execution with business goals, and accelerating delivery through AI-assisted workflows and strong code review standards." },
  { company: "Kabeli", role: "Full Stack Developer", period: "Feb 2026 - Apr 2026", location: "Chile", summary: "Delivered full-stack features across frontend and backend layers, moving quickly in a product environment while maintaining clean integrations and reliable implementation quality." },
  { company: "AppWise Innovations", role: "Full Stack Engineer", period: "Aug 2025 - Feb 2026", location: "Argentina", summary: "Built and iterated on end-to-end product flows, collaborating across teams on scalable architecture, polished UI, and integrations that supported fast feature release cycles." },
  { company: "Freelance", role: "Software Engineer", period: "Mar 2021 - Feb 2026", location: "Remote", summary: "Delivered custom web solutions for different clients, from MVP builds to production improvements, covering architecture, APIs, automation, and UX refinement over five years." },
  { company: "Continental Venture Capital", role: "Software Engineer", period: "Dec 2024 - Jul 2025", location: "USA", summary: "Owned project setup, deployment workflows, and frontend leadership for internal products, reducing friction in delivery and raising quality through process and mentoring." },
  { company: "Quality Soft Service", role: "Web Developer", period: "Nov 2024 - Dec 2024", location: "Colombia", summary: "Supported feature implementation and frontend delivery with a focus on responsive interfaces, collaboration, and practical execution under short timelines." },
  { company: "Scrum LATAM", role: "Web Developer", period: "Aug 2024 - Dec 2024", location: "Colombia", summary: "Developed full-stack sprint deliverables, improved deployment workflows, and contributed to user-focused product increments in an agile environment." },
  { company: "Zite", role: "Web Developer", period: "Sep 2024 - Nov 2024", location: "Argentina", summary: "Worked on investment workflow features for a financing platform, contributing to product usability and technical execution during an internship engagement." },
  { company: "Henry", role: "Teaching Assistant", period: "Jun 2024 - Aug 2024", location: "Argentina", summary: "Mentored 50+ students on full-stack development, debugging, and communication skills while supporting learning outcomes in a high-intensity bootcamp setting." },
];

const experiencesES: Experience[] = [
  { company: "Bixlabs", role: "Ssr. Software Engineer", period: "Abr 2026 - Actualidad", location: "Uruguay", summary: "Construyendo experiencias de producto productivas, alineando ejecución técnica con objetivos de negocio y acelerando la entrega mediante workflows asistidos por IA y code reviews sólidos." },
  { company: "Kabeli", role: "Full Stack Developer", period: "Feb 2026 - Abr 2026", location: "Chile", summary: "Entregué features full-stack en frontend y backend, moviéndome rápido en un entorno de producto mientras mantenía integraciones limpias y calidad de implementación." },
  { company: "AppWise Innovations", role: "Full Stack Engineer", period: "Ago 2025 - Feb 2026", location: "Argentina", summary: "Construí e iteré flujos end-to-end de producto, colaborando con equipos en arquitectura escalable, UI pulida e integraciones que soportaban ciclos de entrega rápidos." },
  { company: "Freelance", role: "Software Engineer", period: "Mar 2021 - Feb 2026", location: "Remoto", summary: "Entregué soluciones web personalizadas para distintos clientes, desde MVPs hasta mejoras en producción, cubriendo arquitectura, APIs, automatización y refinamiento UX durante cinco años." },
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
  range: { es: "2021 — Actualidad", en: "2021 — Present" },
  showMore: { es: "Ver 4 anteriores", en: "Show 4 earlier roles" },
  showLess: { es: "Ocultar anteriores", en: "Hide earlier roles" },
} as const;
