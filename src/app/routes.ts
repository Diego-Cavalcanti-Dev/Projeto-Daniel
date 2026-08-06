export const navigationItems = [
  { label: "Início", href: "/" },
  { label: "O escritório", href: "/escritorio" },
  { label: "Áreas de atuação", href: "/areas-de-atuacao" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Contato", href: "/contato" },
] as const;

export function normalizePathname(pathname: string) {
  return pathname.replace(/\/$/, "") || "/";
}
