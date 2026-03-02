import React from "react";
import { UserCircle, Building, Home } from "lucide-react";
import { Button } from "./button";

export function Personas() {
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
        "Prestação de conts SEM CUSTO AO CONDOMÍNIO",
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
      title: "Proprietários e Compradores",
      subtitle: "Proteção patrimonial e segurança jurídica",
      pains: [
        "Regularizar imóveis sem complicação",
        "Evitar surpresas na matrícula",
        "Resolver pendências documentais",
        "Ter segurança antes da compra",
        "Blindagem patrimonial",
        "Acompanhamento em arrematação de imóvel (judicial ou extrajudicial)",
      ],
      cta: "Quero regularizar meu imóvel",
    },
  ];

  return (
    <section id="para-sindicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Para quem ajudamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções personalizadas para cada perfil de cliente
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8" id="para-condominos">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  <persona.icon size={40} className="text-accent" />
                </div>
                <h3
                  className="text-2xl text-primary mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {persona.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {persona.subtitle}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {persona.pains.map((pain, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">✓</span>
                    <p className="text-sm text-foreground">{pain}</p>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                size="md"
                className="w-full"
                onClick={() => {
                  const element = document.querySelector("#contato");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {persona.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
