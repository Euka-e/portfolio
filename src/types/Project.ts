export type LocalizedText = {
  es: string;
  en: string;
};

export interface Project {
  title: LocalizedText;
  description: LocalizedText;
  year: string;
  tasks: readonly LocalizedText[];
}
