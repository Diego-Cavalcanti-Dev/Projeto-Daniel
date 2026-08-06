export function scrollToSection(sectionId: string) {
  document
    .querySelector(sectionId)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function openWhatsApp(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}
