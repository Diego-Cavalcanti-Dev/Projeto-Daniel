import { Building, Home, UserCircle } from "lucide-react";

const personas = [
  {
    icon: UserCircle,
    title: "Síndicos",
    subtitle: "Gestão segura e decisões assertivas",
    pains: [
      "Reduzir conflitos entre moradores",
      "Evitar passivo jurídico para o condomínio",
      "Ter segurança nas decisões de assembleia",
      "Cobrança eficiente de inadimplência",
      "Prestação de contas sem custo ao condomínio",
    ],
    cta: "Quero orientação para síndico",
  },
  {
    icon: Building,
    title: "Administradoras",
    subtitle: "Padronização e suporte especializado",
    pains: [
      "Padronizar processos jurídicos",
      "Receber pareceres técnicos confiáveis",
      "Ter suporte ágil para cobrança",
      "Atualizar documentos condominiais",
    ],
    cta: "Quero suporte para administradora",
  },
  {
    icon: Home,
    title: "Proprietários e compradores",
    subtitle: "Proteção patrimonial e segurança jurídica",
    pains: [
      "Regularizar imóveis sem complicação",
      "Evitar surpresas na matrícula",
      "Resolver pendências documentais",
      "Ter segurança antes da compra",
      "Blindagem patrimonial",
      "Acompanhamento em arrematação judicial ou extrajudicial",
    ],
    cta: "Quero regularizar meu imóvel",
  },
];

export function Personas() {
  return (
    <section
      id="para-sindicos"
      className="scroll-mt-28 bg-[linear-gradient(180deg,#eef3f8_0%,#f8fafc_52%,#edf2f8_100%)] py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Perfis atendidos
            </p>
            <h2
              className="mb-3 text-2xl text-primary sm:mb-4 sm:text-4xl lg:text-[3rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Atendimento ajustado ao contexto real de cada cliente
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A abordagem muda conforme o perfil, mas a lógica permanece a
              mesma: clareza, organização documental e estratégia compatível com
              o estágio do problema.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/85 bg-white/82 p-5 shadow-[0_20px_55px_rgba(8,26,82,0.08)] backdrop-blur-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Atendimento sob medida
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Síndicos, administradoras, proprietários e compradores recebem
              orientação direcionada ao risco, ao tipo de patrimônio envolvido e
              ao nível de urgência da decisão.
            </p>
          </div>
        </div>

        <div
          className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
          id="para-condominos"
        >
          {personas.map((persona) => (
            <article
              key={persona.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/85 bg-white/92 p-5 shadow-[0_24px_60px_rgba(8,26,82,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d7b35a]/60 hover:shadow-[0_22px_48px_rgba(199,162,74,0.18)] sm:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#c7a24a] via-[#f1d488] to-[#c7a24a]" />

              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[1.35rem] bg-accent/10 text-accent shadow-[inset_0_0_0_1px_rgba(199,162,74,0.12)] sm:h-16 sm:w-16">
                  <persona.icon size={28} className="sm:hidden" />
                  <persona.icon size={32} className="hidden sm:block" />
                </div>
                <div>
                  <h3
                    className="text-xl text-primary sm:text-2xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {persona.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {persona.subtitle}
                  </p>
                </div>
              </div>

              <div className="mb-6 flex-1 space-y-3">
                {persona.pains.map((pain) => (
                  <div
                    key={pain}
                    className="flex items-start gap-3 rounded-[1rem] border border-[#081a52]/6 bg-[#f8fafc] px-4 py-3"
                  >
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-accent" />
                    <p className="text-sm leading-relaxed text-foreground">
                      {pain}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 border-t border-[#081a52]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex w-fit rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  {persona.cta}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#6a7688]">
                  Perfil prioritário
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
