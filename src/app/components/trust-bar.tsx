import React from "react";
import { Clock, Lightbulb, FolderOpen, Shield, TrendingUp } from "lucide-react";

export function TrustBar() {
  const features = [
    {
      icon: Clock,
      title: "Atendimento rápido",
      description: "Retorno em até 1 dia útil",
    },
    {
      icon: Lightbulb,
      title: "Clareza na estratégia",
      description: "Sem juridiquês",
    },
    {
      icon: FolderOpen,
      title: "Documentação organizada",
      description: "Processos estruturados",
    },
    {
      icon: Shield,
      title: "Prevenção de litígios",
      description: "Atuação preventiva",
    },
    {
      icon: TrendingUp,
      title: "Foco em resultados",
      description: "Estratégias eficazes",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                <feature.icon size={40} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-primary">{feature.title}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
