import React from "react";
import { Linkedin, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Para Síndicos", href: "#para-sindicos" },
    { label: "Regularização", href: "#regularizacao" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Conteúdos", href: "#conteudos" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Daniel Cavalcanti
            </h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Escritório de advocacia especializado em Direito Condominial e
              Regularização de Imóveis, atuando com foco em soluções práticas e
              segurança jurídica.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={16} />
                <span>(41) 92004-3413</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail size={16} />
                <span>advdaniel.cavalcanti@outlook.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Daniel Cavalcanti Advocacia imobiliária.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/50 mt-6 text-center md:text-left">
            Este site tem caráter informativo e não substitui consulta jurídica.
            Os resultados dependem das particularidades de cada caso.
          </p>
        </div>
      </div>
    </footer>
  );
}
