type LocalizedText = {
  es: string;
  en: string;
};

export const shareCopy = {
  title: { es: "Compartir", en: "Share" },
  close: { es: "Cerrar diálogo de compartir", en: "Close share dialog" },
  copy: { es: "Copiar", en: "Copy" },
  share: { es: "Compartir…", en: "Share…" },
  download: { es: "Descargar CV", en: "Download CV" },
  copied: { es: "Link copiado", en: "Link copied" },
} as const satisfies Record<string, LocalizedText>;
