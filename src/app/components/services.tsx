import {
  Building2,
  DollarSign,
  FileSignature,
  FileText,
  Home,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

const practiceGroups = [
  {
    id: "condominial",
    icon: Building2,
    title: "Direito Condominial",
    summary:
      "Suporte recorrente para síndicos, administradoras e condomínios com foco em prevenção de conflitos, cobrança e segurança nas deliberações.",
    services: [
      {
        icon: Users,
        title: "Assessoria para síndico e administradora",
        description:
          "Suporte técnico para decisões do dia a dia, assembleias e rotinas condominiais.",
      },
      {
        icon: MessageSquare,
        title: "Notificações e advertências",
        description:
          "Comunicação formal com clareza jurídica para episódios de infração e inadimplência.",
      },
      {
        icon: DollarSign,
        title: "Cobrança de inadimplência",
        description:
          "Atuação extrajudicial e judicial estruturada para recuperar valores com estratégia.",
      },
      {
        icon: FileText,
        title: "Convenção e regimento interno",
        description:
          "Revisão e atualização documental para reduzir riscos e dar previsibilidade à gestão.",
      },
      {
        icon: MessageSquare,
        title: "Mediação e resolução de conflitos",
        description:
          "Condução estratégica de disputas entre moradores, conselho e administração.",
      },
      {
        icon: ShieldCheck,
        title: "Ações judiciais envolvendo condomínio",
        description:
          "Defesa e propositura de medidas judiciais alinhadas aos interesses coletivos do condomínio.",
      },
    ],
  },
  {
    id: "regularizacao",
    icon: Home,
    title: "Regularização de Imóveis",
    summary:
      "Atuação em documentação, matrícula, contratos e organização patrimonial para negócios imobiliários mais seguros e previsíveis.",
    services: [
      {
        icon: FileSignature,
        title: "Regularização documental e registral",
        description:
          "Adequação de documentos e apoio junto ao cartório de registro de imóveis.",
      },
      {
        icon: MapPin,
        title: "Retificação de área e matrícula",
        description:
          "Correção técnica e registral de metragens, confrontações e dados do imóvel.",
      },
      {
        icon: Home,
        title: "Usucapião extrajudicial e judicial",
        description:
          "Condução completa do processo para formalização da posse e aquisição da propriedade.",
      },
      {
        icon: UserCheck,
        title: "Inventário e partilha com foco em imóveis",
        description:
          "Planejamento sucessório e transferência patrimonial com atenção a ativos imobiliários.",
      },
      {
        icon: Search,
        title: "Due diligence imobiliária",
        description:
          "Análise de riscos antes da compra, venda ou investimento em imóveis.",
      },
      {
        icon: FileText,
        title: "Contratos imobiliários",
        description:
          "Elaboração e revisão de instrumentos de compra e venda, locação, cessão e comodato.",
      },
    ],
  },
];

const serviceBadges = [
  "Diagnóstico documental",
  "Plano jurídico claro",
  "Acompanhamento estratégico",
];

export function Services() {
  return (
    <section
      id="servicos"
      className="scroll-mt-28 bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f8_46%,#f7f9fc_100%)] py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Áreas de atuação
            </p>
            <h2
              className="mb-3 text-2xl text-primary sm:mb-4 sm:text-4xl lg:text-[3rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Serviços conduzidos com método, clareza e segurança patrimonial
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A atuação combina consultoria, prevenção e contencioso para
              organizar decisões, reduzir risco e proteger patrimônio em
              contextos condominiais e imobiliários.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/85 bg-white/82 p-5 shadow-[0_20px_55px_rgba(8,26,82,0.08)] backdrop-blur-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Estrutura de atuação
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Cada frente é organizada com leitura de risco, priorização
              documental e definição de próximos passos para reduzir ruído e
              aumentar previsibilidade.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {serviceBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#081a52]/10 bg-[#f8fafc] px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[#445064]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 space-y-4 sm:mt-10 sm:space-y-6">
          {practiceGroups.map((group) => (
            <article
              key={group.id}
              id={group.id === "regularizacao" ? "regularizacao" : undefined}
              className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/92 shadow-[0_28px_70px_rgba(8,26,82,0.08)]"
            >
              <div className="h-1.5 bg-gradient-to-r from-[#c7a24a] via-[#f1d488] to-[#c7a24a]" />

              <div className="p-4 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-5 border-b border-[#081a52]/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[1.35rem] bg-accent/10 text-accent shadow-[inset_0_0_0_1px_rgba(199,162,74,0.12)] sm:h-16 sm:w-16">
                      <group.icon size={26} className="sm:hidden" />
                      <group.icon size={30} className="hidden sm:block" />
                    </div>
                    <div className="max-w-3xl">
                      <h3
                        className="text-xl text-primary sm:text-[2.2rem]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {group.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {group.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:max-w-[19rem] lg:justify-end">
                    <span className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-accent">
                      Consultivo e contencioso
                    </span>
                    <span className="inline-flex rounded-full border border-[#081a52]/10 bg-[#f8fafc] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#445064]">
                      Atendimento estratégico
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
                  {group.services.map((service) => (
                    <div
                      key={service.title}
                      className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#081a52]/10 bg-[linear-gradient(180deg,#fcfdff_0%,#f7f9fc_100%)] p-4 shadow-[0_12px_28px_rgba(8,26,82,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d7b35a]/60 hover:shadow-[0_22px_48px_rgba(199,162,74,0.20)] sm:p-6"
                    >
                      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b35a]/45 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      <div className="mb-4 flex h-12 w-12 self-center items-center justify-center rounded-[1rem] bg-accent/10 text-accent transition-colors group-hover:bg-[#fff1cf]">
                        <service.icon size={22} />
                      </div>
                      <h4 className="text-base font-semibold leading-snug text-primary sm:text-[1.05rem]">
                        {service.title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.97rem]">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
