import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { navigationItems } from "../routes";
import { siteConfig } from "../site";

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-[#06133c] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-10 border-b border-white/12 pb-10 lg:grid-cols-[1.2fr_.7fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#f1d488]">
              Daniel Cavalcanti
            </p>
            <h2
              className="mt-3 max-w-md text-3xl leading-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Estratégia jurídica para proteger o seu patrimônio.
            </h2>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-white/15 p-3 text-white/80 transition hover:border-[#f1d488] hover:text-[#f1d488]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[.18em] text-white/56">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/76">
              {navigationItems.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-[#f1d488]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[.18em] text-white/56">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/76">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-[#f1d488]" />
                <span>
                  {siteConfig.contact.address.lines[0]}
                  <br />
                  {siteConfig.contact.address.lines[1]}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-[#f1d488]" />
                {siteConfig.contact.phone}
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-[#f1d488]" />
                {siteConfig.contact.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs leading-relaxed text-white/48 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}.</p>
          <p>Este site tem caráter informativo e não substitui consulta jurídica.</p>
        </div>
      </div>
    </footer>
  );
}
