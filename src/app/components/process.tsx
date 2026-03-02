import React from 'react';
import { Phone, FileSearch, Clipboard, TrendingUp } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Contato e triagem',
      description: 'Você entra em contato, relatamos seu caso e fazemos uma primeira análise da situação.',
    },
    {
      icon: FileSearch,
      number: '02',
      title: 'Diagnóstico documental',
      description: 'Revisamos toda documentação necessária e identificamos pontos críticos.',
    },
    {
      icon: Clipboard,
      number: '03',
      title: 'Plano jurídico + prazos',
      description: 'Apresentamos estratégia clara, etapas do processo e estimativa de tempo.',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Execução e acompanhamento',
      description: 'Executamos o plano com transparência e mantemos você informado de cada etapa.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e transparente em 4 etapas
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-accent/20 -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline connector - mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 bottom-0 w-0.5 bg-accent/20"></div>
                )}

                <div className="bg-white p-6 rounded-xl shadow-sm border border-border relative z-10">
                  <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-4">
                    {/* Number badge */}
                    <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                      <span 
                        className="text-2xl text-accent"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {step.number}
                      </span>
                    </div>

                    <div className="flex-1 lg:text-center">
                      <div className="p-2 bg-accent/5 rounded-lg inline-flex mb-3">
                        <step.icon size={24} className="text-accent" />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-accent/5 rounded-xl border border-accent/20 text-center">
          <p className="text-foreground">
            <span className="font-semibold">Importante:</span> Você recebe orientações objetivas 
            e um checklist detalhado de documentos necessários para o seu caso.
          </p>
        </div>
      </div>
    </section>
  );
}
