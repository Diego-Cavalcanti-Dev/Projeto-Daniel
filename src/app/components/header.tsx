import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Para Síndicos", href: "#para-sindicos" },
    { label: "Para Condôminos", href: "#para-condominos" },
    { label: "Regularização", href: "#regularizacao" },
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
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#001155]/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className="text-xl md:text-2xl"
              style={{ fontFamily: "'Bookman Old Style', serif" }}
            >
              <span className="text-white">Daniel Cavalcanti</span>
              <span className="text-white/70 text-sm md:text-base block">
                Advocacia Imobiliária
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm text-white/90 hover:text-accent transition-colors"
                style={{ fontFamily: "'Bookman Old Style', serif" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5541920043413"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/90 hover:text-accent transition-colors"
              style={{ fontFamily: "'Bookman Old Style', serif" }}
            >
              Agendar consulta
            </a>
            <Button
              variant="outline"
              className="bg-[#0eb54c] hover:bg-[#20bd5a] text-white border-2 border-black"
              size="sm"
              onClick={() =>
                window.open("https://wa.me/5541920043413", "_blank")
              }
            >
              <Phone size={16} />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-white/90 hover:text-accent transition-colors py-2"
                  style={{ fontFamily: "'Bookman Old Style', serif" }}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
                <a
                  href="https://wa.me/5541920043413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-accent transition-colors"
                  style={{ fontFamily: "'Bookman Old Style', serif" }}
                >
                  Agendar consulta
                </a>
                <Button
                  variant="whatsapp"
                  size="md"
                  onClick={() =>
                    window.open("https://wa.me/5541920043413", "_blank")
                  }
                >
                  <Phone size={18} />
                  Falar no WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
