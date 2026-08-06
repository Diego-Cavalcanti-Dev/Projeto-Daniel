import { Clipboard, FileSearch, Phone, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Contato e triagem",
    description:
      "Você entra em contato, relata seu caso e recebe uma primeira leitura da situação.",
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Diagnóstico documental",
    description:
      "Revisamos a documentação necessária e identificamos pontos críticos, riscos e urgências.",
  },
  {
    icon: Clipboard,
    number: "03",
    title: "Plano jurídico + prazos",
    description:
      "Apresentamos estratégia clara, etapas do processo e uma estimativa realista de tempo.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Execução e acompanhamento",
    description:
      "O plano é conduzido com transparência, atualização constante e organização de cada fase.",
  },
];

export function Process() {
  return (
    <section className="bg-[linear-gradient(180deg,#f7f9fc_0%,#eef3f8_100%)] py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-[#081a52] shadow-[0_34px_90px_rgba(8,26,82,0.18)]">
          <div className="grid gap-5 border-b border-white/10 px-5 py-6 sm:gap-6 sm:px-8 sm:py-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-end lg:px-10 lg:py-10">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f1d488]">
                Como funciona
              </p>
              <h2
                className="text-2xl text-white sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Um fluxo claro para transformar dúvida em direção jurídica
              </h2>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f1d488]">
                Processo do escritório
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/74 sm:text-base">
                Cada etapa foi organizada para reduzir insegurança, alinhar
                expectativas e permitir que o cliente entenda o caminho jurídico
                antes de qualquer decisão relevante.
              </p>
            </div>
          </div>

          <div className="px-4 pb-5 pt-5 sm:px-8 sm:pb-8 sm:pt-6 lg:px-10 lg:pb-10">
            <div className="relative">
              <div className="hidden xl:block absolute left-0 right-0 top-20 h-px bg-gradient-to-r from-transparent via-[#d7b35a]/30 to-transparent" />

              <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative h-full">
                    {index < steps.length - 1 && (
                      <div className="absolute bottom-0 left-9 top-24 w-px bg-[#d7b35a]/22 md:hidden" />
                    )}

                    <article className="group relative z-10 flex h-full rounded-[1.65rem] border border-white/10 bg-white p-4 shadow-[0_18px_45px_rgba(4,14,43,0.18)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d7b35a]/60 hover:shadow-[0_22px_50px_rgba(199,162,74,0.18)] sm:p-6">
                      <div className="flex w-full flex-col gap-4 text-center md:gap-5 md:text-left">
                        <div className="flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-accent/10 shadow-[0_10px_24px_rgba(199,162,74,0.12)] sm:h-20 sm:w-20">
                            <span
                              className="text-[1.65rem] text-accent sm:text-[2.1rem]"
                              style={{ fontFamily: "var(--font-heading)" }}
                            >
                              {step.number}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col items-center md:items-start">
                          <div className="mb-3 inline-flex h-16 w-16 items-center justify-center self-center rounded-[1.2rem] bg-accent/8 sm:mb-5 sm:h-20 sm:w-20">
                            <step.icon size={30} className="text-accent sm:hidden" />
                            <step.icon size={38} className="hidden text-accent sm:block" />
                          </div>
                          <h3 className="text-lg font-semibold leading-snug text-primary sm:text-xl">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/8 p-5 text-center backdrop-blur-sm sm:p-6">
              <p className="text-sm leading-relaxed text-white/82 sm:text-base">
                <span className="font-semibold text-white">Importante:</span>{" "}
                você recebe orientações objetivas e um checklist detalhado de
                documentos necessários para o seu caso, sem linguagem confusa e
                com expectativa mais realista de prazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
