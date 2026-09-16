export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
}

export interface LocalizedExperience {
  en: Experience;
  es: Experience;
}
