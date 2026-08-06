import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { type MouseEvent } from "react";
import { scrollToSection } from "../navigation";
import { siteConfig } from "../site";

const quickLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Para síndicos", href: "#para-sindicos" },
  { label: "Regularização", href: "#regularizacao" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="bg-[linear-gradient(180deg,#07153f_0%,#061232_100%)] text-primary-foreground">
      <div className="mx-auto max-w-[1480px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-10">
        <div className="mb-8 rounded-[1.9rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm sm:mb-10 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
                Daniel Cavalcanti
              </p>
              <h3
                className="text-2xl text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Advocacia imobiliária com postura estratégica e comunicação clara
              </h3>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-white/72 sm:text-base lg:justify-self-end">
              Atuação orientada por clareza, organização documental e segurança
              patrimonial em demandas condominiais e imobiliárias.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.25fr_0.78fr_0.9fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              Presença digital
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d7b35a]/45 hover:bg-[#d7b35a]/12 hover:text-[#f1d488]"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d7b35a]/45 hover:bg-[#d7b35a]/12 hover:text-[#f1d488]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                  onClick={(event) => handleNavigation(event, link.href)}
                    className="text-white/70 transition-colors hover:text-[#f1d488]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              Contato
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/72">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#f1d488]" />
                <span>
                  {siteConfig.contact.address.lines[0]}
                  <br />
                  {siteConfig.contact.address.lines[1]}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/72">
                <Phone size={16} className="mt-0.5 text-[#f1d488]" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-white/72">
                <Mail size={16} className="mt-0.5 text-[#f1d488]" />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              Atendimento
            </h4>
            <p className="text-sm leading-relaxed text-white/72">
              Segunda a sexta, das 8h às 18h, com atendimento online e suporte
              em demandas imobiliárias e condominiais em todo o Brasil.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/60">
              © {currentYear} {siteConfig.name}.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="#"
                className="text-sm text-white/60 transition-colors hover:text-[#f1d488]"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-white/60 transition-colors hover:text-[#f1d488]"
              >
                Termos de Uso
              </a>
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-white/46">
            Este site possui caráter informativo e não substitui consulta
            jurídica. A análise adequada depende das circunstâncias e da
            documentação de cada caso concreto.
          </p>
        </div>
      </div>
    </footer>
  );
}
