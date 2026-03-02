import React from 'react';
import { MessageCircle, Eye, Target, FolderCheck, Heart, CalendarCheck } from 'lucide-react';

export function Differentials() {
  const differentials = [
    {
      icon: MessageCircle,
      title: 'Linguagem simples (sem juridiquês)',
      description: 'Comunicação clara e direta para que você entenda cada etapa sem complicação.',
    },
    {
      icon: Eye,
      title: 'Transparência de etapas e prazos',
      description: 'Você acompanha todo o processo com informações atualizadas constantemente.',
    },
    {
      icon: Target,
      title: 'Atuação estratégica (preventiva + contenciosa)',
      description: 'Evitamos problemas antes que aconteçam e atuamos com eficiência quando necessário.',
    },
    {
      icon: FolderCheck,
      title: 'Organização de documentos e evidências',
      description: 'Mantemos tudo estruturado e acessível para agilizar processos e decisões.',
    },
    {
      icon: Heart,
      title: 'Atendimento humanizado',
      description: 'Valorizamos cada cliente com escuta ativa e soluções personalizadas.',
    },
    {
      icon: CalendarCheck,
      title: 'Rotina condominial na prática',
      description: 'Participamos de assembleias, gerenciamos notificações e apoiamos na gestão de conflitos.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Nossos diferenciais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que nos torna referência em Direito Condominial e Imobiliário
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-xl border border-border hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <item.icon size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
