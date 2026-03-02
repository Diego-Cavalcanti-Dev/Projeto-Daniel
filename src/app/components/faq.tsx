import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Vocês atendem minha cidade?',
      answer: 'Sim! Atuamos em todo o Brasil, tanto de forma presencial quanto online. Para questões que exigem comparecimento em cartório ou audiências, trabalhamos com correspondentes locais.',
    },
    {
      question: 'Regularização sempre precisa de processo judicial?',
      answer: 'Não necessariamente. Muitas regularizações podem ser feitas de forma extrajudicial, diretamente no cartório de registro de imóveis. Fazemos uma análise inicial para identificar a melhor via para seu caso.',
    },
    {
      question: 'Quais documentos preciso para iniciar um processo de usucapião?',
      answer: 'Geralmente são necessários: documentos pessoais, comprovantes de posse (contas, IPTU), declarações de vizinhos, fotos do imóvel e planta de localização. Fornecemos um checklist completo após análise do caso.',
    },
    {
      question: 'Como funciona a cobrança de inadimplência condominial?',
      answer: 'Iniciamos com notificações extrajudiciais. Se não houver acordo, partimos para ação de cobrança judicial. O condomínio tem privilégios legais que facilitam a recuperação dos valores.',
    },
    {
      question: 'Vocês participam de assembleias condominiais?',
      answer: 'Sim! Oferecemos assessoria presencial ou online em assembleias, ajudando o síndico a conduzir votações, esclarecer dúvidas jurídicas e garantir que as decisões estejam em conformidade com a lei.',
    },
    {
      question: 'Qual o prazo médio de uma regularização de imóvel?',
      answer: 'Varia bastante conforme a complexidade. Regularizações extrajudiciais podem levar de 60 a 120 dias. Processos judiciais podem demorar de 12 a 24 meses. Sempre informamos estimativas realistas após análise.',
    },
    {
      question: 'Posso contratar apenas uma análise documental sem processo completo?',
      answer: 'Sim! Oferecemos serviço de due diligence imobiliária, onde analisamos toda documentação e emitimos parecer detalhado sobre riscos e irregularidades encontradas.',
    },
    {
      question: 'Como são calculados os honorários?',
      answer: 'Depende do tipo de serviço. Consultorias podem ter valor fixo, enquanto processos judiciais geralmente combinam valor fixo + percentual de êxito. Apresentamos proposta clara antes de iniciar qualquer trabalho.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-primary pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-accent flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
