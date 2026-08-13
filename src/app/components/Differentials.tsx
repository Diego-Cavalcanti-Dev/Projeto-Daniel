import {
  CalendarCheck,
  Eye,
  FolderCheck,
  Heart,
  MessageCircle,
  Target,
} from "lucide-react";

const differentials = [
  {
    icon: MessageCircle,
    title: "Linguagem simples, sem juridiquês",
    description:
      "Cada etapa é explicada com clareza para facilitar decisão, acompanhamento e priorização.",
  },
  {
    icon: Eye,
    title: "Transparência de etapas e prazos",
    description:
      "O cliente entende o caminho jurídico, os marcos relevantes e o que esperar de cada fase.",
  },
  {
    icon: Target,
    title: "Estratégia preventiva e contenciosa",
    description:
      "A atuação previne problemas quando possível e responde com firmeza quando o conflito já existe.",
  },
  {
    icon: FolderCheck,
    title: "Organização documental",
    description:
      "Documentos, evidências e registros são tratados como parte central da proteção patrimonial.",
  },
  {
    icon: Heart,
    title: "Atendimento próximo e humano",
    description:
      "Escuta, orientação e ritmo de comunicação pensados para reduzir insegurança do cliente.",
  },
  {
    icon: CalendarCheck,
    title: "Vivência prática na rotina condominial",
    description:
      "As recomendações consideram assembleias, inadimplência, regimento e a operação real da gestão.",
  },
];

const pillars = [
  "Clareza de comunicação",
  "Estratégia com contexto",
  "Organização antes da reação",
];

export function Differentials() {
  return (
    <section
      id="sobre"
      className="scroll-mt-28 bg-[linear-gradient(180deg,#ffffff_0%,#f5f7fb_54%,#eef3f8_100%)] py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Diferenciais
            </p>
            <h2
              className="mb-3 text-2xl text-primary sm:mb-4 sm:text-4xl lg:text-[3rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Uma advocacia que organiza o problema antes de reagir a ele
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              O escritório foi desenhado para transmitir segurança,
              previsibilidade e postura estratégica, sem perder proximidade com
              o cliente.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-[#081a52]/10 bg-[linear-gradient(180deg,#f9fbfe_0%,#f2f6fb_100%)] p-5 shadow-[0_18px_45px_rgba(8,26,82,0.06)] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Método de trabalho
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Diagnóstico, organização documental, plano de ação e
                acompanhamento claro. O foco é reduzir ruído e aumentar
                qualidade de decisão.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="rounded-full border border-[#081a52]/10 bg-white px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[#445064]"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {differentials.map((item, index) => (
              <article
                key={item.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[#081a52]/10 bg-white p-4 shadow-[0_18px_45px_rgba(8,26,82,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d7b35a]/60 hover:shadow-[0_22px_48px_rgba(199,162,74,0.18)] sm:p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c7a24a]/0 via-[#c7a24a] to-[#c7a24a]/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-accent/10 text-accent transition-colors group-hover:bg-[#fff1cf]">
                    <item.icon size={24} />
                  </div>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/22 bg-accent/8 text-sm font-semibold text-accent"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-semibold leading-snug text-primary sm:text-[1.02rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.97rem]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
