import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Vocês atendem minha cidade?",
    answer:
      "Sim. O atendimento pode ocorrer em todo o Brasil, de forma online ou presencial, conforme a necessidade do caso. Quando há cartório, assembleia ou audiência, a condução é organizada com o apoio adequado.",
  },
  {
    question: "Regularização sempre exige processo judicial?",
    answer:
      "Não. Muitas demandas podem ser resolvidas de forma extrajudicial, especialmente em cartório. A escolha do caminho depende da documentação, do histórico do imóvel e do nível de conflito envolvido.",
  },
  {
    question: "Quais documentos são úteis para iniciar uma análise?",
    answer:
      "Em geral, documentos pessoais, matrícula do imóvel, contratos, comprovantes de posse, notificações e registros fotográficos já ajudam a estruturar o diagnóstico inicial.",
  },
  {
    question: "Como funciona a cobrança de inadimplência condominial?",
    answer:
      "Normalmente o fluxo começa por notificação extrajudicial, tentativa de composição e organização da documentação. Se necessário, o caso evolui para cobrança judicial com estratégia adequada ao cenário do condomínio.",
  },
];

const faqPills = [
  "Atendimento em todo o Brasil",
  "Análise inicial objetiva",
  "Orientação documental clara",
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[linear-gradient(180deg,#07153f_0%,#081a52_56%,#0a1f63_100%)] py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="rounded-[1.9rem] border border-white/10 bg-white/8 p-5 text-white shadow-[0_28px_70px_rgba(4,14,43,0.22)] backdrop-blur-sm sm:p-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f1d488]">
              Dúvidas frequentes
            </p>
            <h2
              className="text-2xl text-white sm:text-4xl lg:text-[3rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Perguntas que costumam surgir antes da decisão
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              Respostas diretas para orientar o primeiro passo com mais clareza
              e menos incerteza.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {faqPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/12 bg-white/10 px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-white/80"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#d7b35a]/24 bg-[#0c225d] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f1d488]">
                Ainda não encontrou a sua dúvida?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-base">
                O envio do caso permite uma leitura inicial do contexto, dos
                documentos e do melhor caminho para a demanda.
              </p>
              <a
                href="#contato"
                className="mt-5 inline-flex h-11 items-center rounded-full border border-[#d7b35a]/55 px-5 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/8"
              >
                Falar com o escritório
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[1.6rem] border bg-white shadow-[0_24px_60px_rgba(5,15,45,0.18)] transition-all duration-200 ${
                    isOpen
                      ? "border-[#d7b35a]/45"
                      : "border-white/12 hover:border-[#d7b35a]/30"
                  }`}
                >
                  <button
                  className={`group flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors sm:px-7 sm:py-6 ${
                      isOpen ? "bg-[#fffaf0]" : "hover:bg-[#fffaf0]"
                    }`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="pr-3 text-sm font-semibold leading-snug text-primary sm:pr-8 sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-accent transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#081a52]/10 px-4 py-4 text-sm leading-relaxed text-muted-foreground sm:px-7 sm:py-5 sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
