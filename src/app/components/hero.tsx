import {
  ArrowRight,
  Building2,
  FileText,
  Shield,
  Users,
} from "lucide-react";
import HeroImage from "../img/capa-site.png";

const heroHighlights = [
  {
    icon: Building2,
    title: "Direito imobiliário",
    description: "Soluções completas para negócios, disputas e regularização.",
  },
  {
    icon: FileText,
    title: "Contratos",
    description: "Elaboração e revisão com segurança jurídica e visão prática.",
  },
  {
    icon: Users,
    title: "Assessoria",
    description: "Atendimento próximo para pessoas físicas, síndicos e empresas.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteção patrimonial com estratégia, clareza e previsibilidade.",
  },
];

const heroPills = [
  "Atendimento claro desde o primeiro contato",
  "Atuação consultiva e contenciosa",
  "Condomínios, contratos e regularização",
  "Comunicação objetiva em cada etapa",
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative min-h-[460px] overflow-hidden bg-[#081a52] sm:min-h-[540px] lg:min-h-[620px]"
    >
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Escritório de advocacia imobiliária"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,19,60,0.98)_0%,rgba(5,19,60,0.94)_32%,rgba(5,19,60,0.84)_48%,rgba(5,19,60,0.62)_68%,rgba(5,19,60,0.3)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_18%,rgba(255,255,255,0.1),transparent_20%),radial-gradient(circle_at_18%_82%,rgba(255,255,255,0.06),transparent_28%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[460px] max-w-[1480px] items-center px-5 py-12 sm:min-h-[540px] sm:px-8 sm:py-14 lg:min-h-[620px] lg:px-10 lg:py-16 xl:px-12">
        <div className="w-full">
          <div className="max-w-[44rem] text-white">
            <div className="mb-4 sm:mb-5">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/88 sm:text-sm">
                Advocacia imobiliária
              </p>
              <span className="mt-3 block h-px w-16 bg-[#d7b35a] sm:mt-4 sm:w-20" />
            </div>

            <h1
              className="max-w-[31rem] text-[2.35rem] leading-[0.96] text-white sm:text-[3.5rem] lg:text-[4.3rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Segurança jurídica para seus melhores negócios.
            </h1>

            <p className="mt-4 max-w-[32rem] text-sm leading-relaxed text-white/84 sm:mt-5 sm:text-[1.05rem]">
              Assessoria completa em direito imobiliário com soluções
              estratégicas e personalizadas para pessoas físicas, empresas e
              condomínios.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href="/contato"
                className="inline-flex items-center justify-center gap-3 rounded-[1.05rem] border border-[#d7b35a] bg-[#d7b35a] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#07153f] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f1d488] hover:shadow-[0_14px_32px_rgba(6,17,51,0.22)] sm:gap-4 sm:px-8 sm:py-3.5 sm:text-sm"
              >
                Saiba mais
                <ArrowRight size={18} className="sm:hidden" />
                <ArrowRight size={20} className="hidden sm:block" />
              </a>
            </div>

            <div className="mt-5 flex max-w-[38rem] flex-wrap justify-start gap-2 sm:mt-6 sm:gap-2.5">
              {heroPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/76 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.12em]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroHighlights() {
  return (
    <section aria-label="Destaques" className="relative bg-[#f8fafc] py-8 sm:py-10">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[1.7rem] border border-[#081a52]/10 bg-white shadow-[0_28px_70px_rgba(8,26,82,0.14)] sm:grid-cols-2 lg:grid-cols-4">
          {heroHighlights.map((item, index) => (
            <article
              key={item.title}
              className={`group relative flex h-full items-start gap-4 bg-white px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#fffdf7] hover:shadow-[inset_0_0_0_2px_rgba(199,162,74,0.5)] sm:px-6 sm:py-6 ${
                index < heroHighlights.length - 1
                  ? "border-b border-[#081a52]/10 sm:border-r sm:border-b-0"
                  : ""
              }`}
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#f7f9fc] text-[#081a52] transition-all duration-200 group-hover:bg-[#fff4d7] group-hover:text-[#c7a24a]">
                <item.icon size={30} strokeWidth={1.9} />
              </div>

              <div className="max-w-[17rem]">
                <p className="text-[1rem] font-semibold uppercase tracking-[0.1em] text-[#101828]">
                  {item.title}
                </p>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-[#475467]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
