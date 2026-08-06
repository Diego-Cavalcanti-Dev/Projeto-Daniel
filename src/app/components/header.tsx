import { Menu, MessageCircle, PhoneCall, X } from "lucide-react";
import { type MouseEvent, useState } from "react";
import LogoWordmark from "../img/Logo.png";
import { openWhatsApp, scrollToSection } from "../navigation";
import { siteConfig } from "../site";

const menuItems = [
  { label: "Início", href: "#topo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#topo");

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    scrollToSection(href);
    setActiveHref(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#0b1f56]/8 bg-white/78 backdrop-blur-xl">
      <div className="h-[3px] bg-[linear-gradient(90deg,#081a52_0%,#c7a24a_34%,#f1d488_50%,#c7a24a_66%,#081a52_100%)]" />

      <div className="relative mx-auto max-w-[1480px] px-4 sm:px-7 lg:px-10 xl:px-12">
        <div className="flex min-h-[72px] items-center justify-between gap-3 py-2 sm:min-h-[84px] sm:gap-5">
          <a
            href="#topo"
            onClick={(event) => handleNavigation(event, "#topo")}
            className="group flex min-w-0 items-center gap-3 rounded-2xl py-1 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl border border-[#081a52]/8 bg-[linear-gradient(180deg,#ffffff_0%,#eef3f9_100%)] shadow-[0_8px_22px_rgba(8,26,82,0.08)] ring-1 ring-white/60">
              <img
                src={LogoWordmark}
                alt={siteConfig.name}
                className="h-7 w-auto object-contain"
              />
            </span>

            <span className="hidden min-w-0 flex-col leading-none md:flex">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8b95a7]">
                Escritório
              </span>
              <span className="mt-1 text-sm font-semibold text-[#081a52] transition-colors group-hover:text-[#0e2d7a]">
                {siteConfig.name}
              </span>
            </span>
          </a>

          <nav className="hidden items-center rounded-full border border-[#081a52]/8 bg-[linear-gradient(180deg,#fbfcfe_0%,#f1f5fa_100%)] p-1.5 shadow-[0_10px_24px_rgba(8,26,82,0.06)] xl:flex">
            {menuItems.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.href)}
                  className={`relative inline-flex h-10 items-center rounded-full px-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                    isActive
                      ? "bg-[#081a52] text-white shadow-[0_8px_18px_rgba(8,26,82,0.22)]"
                      : "text-[#516076] hover:bg-white hover:text-[#081a52]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={siteConfig.contact.whatsappUrl}
              onClick={(event) => {
                event.preventDefault();
                openWhatsApp(siteConfig.contact.whatsappUrl);
              }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#081a52]/10 bg-white px-5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#081a52] shadow-[0_8px_20px_rgba(8,26,82,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c7a24a]/45 hover:bg-[#fffaf1]"
            >
              <PhoneCall size={15} />
              Fale conosco
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#081a52]/10 bg-white px-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#081a52] shadow-[0_8px_20px_rgba(8,26,82,0.06)] transition-all duration-200 hover:border-[#c7a24a]/45 hover:bg-[#fffaf1] xl:hidden"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span>{isMobileMenuOpen ? "Fechar" : "Menu"}</span>
            {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute inset-x-3 top-[calc(100%+0.5rem)] overflow-hidden rounded-[1.5rem] border border-[#081a52]/10 bg-white shadow-[0_24px_60px_rgba(8,26,82,0.16)] sm:inset-x-6 xl:hidden">
            <div className="border-b border-[#081a52]/8 bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f8_100%)] px-5 py-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#6b7587]">
                Navegação
              </p>
              <p className="mt-1 text-sm text-[#081a52]">
                Acesse rapidamente as principais seções.
              </p>
            </div>

            <nav id="mobile-navigation" className="flex flex-col gap-2 p-3">
              {menuItems.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavigation(event, item.href)}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "bg-[#081a52] text-white shadow-[0_8px_18px_rgba(8,26,82,0.18)]"
                        : "text-[#243252] hover:bg-[#f4f7fb]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <button
                type="button"
                className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#55ae68]/30 bg-[#eaf7ed] px-6 text-sm font-semibold text-[#1e6c38] transition-colors hover:bg-[#d7f0de]"
                onClick={() => openWhatsApp(siteConfig.contact.whatsappUrl)}
              >
                <MessageCircle size={17} />
                Fale conosco
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
