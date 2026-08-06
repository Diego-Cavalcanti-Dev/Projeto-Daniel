import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import LogoWordmark from "../img/Logo.png";
import { normalizePathname, navigationItems } from "../routes";
import { siteConfig } from "../site";

function getDesktopLinkClass(isActive: boolean) {
  return `rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${
    isActive
      ? "bg-[#081a52] text-white"
      : "text-[#465570] hover:bg-[#f1f4f8] hover:text-[#081a52]"
  }`;
}

function getMobileLinkClass(isActive: boolean) {
  return `rounded-xl px-4 py-3 text-sm font-semibold ${
    isActive ? "bg-[#081a52] text-white" : "text-[#273653] hover:bg-[#f4f6fa]"
  }`;
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = normalizePathname(window.location.pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-[#081a52]/10 bg-white/95 shadow-[0_4px_24px_rgba(8,26,82,.05)] backdrop-blur-xl">
      <div className="h-[3px] bg-[linear-gradient(90deg,#081a52_0%,#c7a24a_42%,#f1d488_50%,#c7a24a_58%,#081a52_100%)]" />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="flex h-[76px] items-center justify-between gap-4 sm:h-[84px]">
          <a href="/" className="flex items-center gap-3" aria-label="Página inicial">
            <span className="flex size-11 items-center justify-center rounded-xl border border-[#081a52]/8 bg-[#f8fafc]">
              <img
                src={LogoWordmark}
                alt="Daniel Cavalcanti Advocacia Imobiliária"
                className="h-7 w-auto object-contain"
              />
            </span>
            <span className="hidden leading-tight md:block">
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9a7640]">
                Advocacia imobiliária
              </span>
              <span className="mt-1 block text-sm font-semibold text-[#081a52]">
                Daniel Cavalcanti
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Navegação principal">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={getDesktopLinkClass(currentPath === item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#081a52] px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-[#102b75] xl:inline-flex"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-[#081a52]/12 text-[#081a52] xl:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-[#081a52]/8 bg-white px-5 py-4 shadow-xl xl:hidden">
          <nav className="mx-auto flex max-w-[1320px] flex-col gap-1" aria-label="Navegação mobile">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={getMobileLinkClass(currentPath === item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#e5f5e8] px-4 py-3 text-sm font-semibold text-[#1e6c38]"
            >
              <MessageCircle size={18} />
              Falar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
