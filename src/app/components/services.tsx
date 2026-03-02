import React from 'react';
import { 
  Building2, 
  Users, 
  DollarSign, 
  FileText, 
  Scale, 
  MessageSquare,
  Home,
  MapPin,
  Clock,
  UserCheck,
  Search,
  FileSignature
} from 'lucide-react';

export function Services() {
  const condominialServices = [
    {
      icon: Users,
      title: 'Assessoria jurídica para síndico e administradora',
      description: 'Suporte completo nas decisões do dia a dia e gestão condominial.',
    },
    {
      icon: MessageSquare,
      title: 'Notificações e advertências',
      description: 'Documentos formais para comunicação com condôminos inadimplentes.',
    },
    {
      icon: DollarSign,
      title: 'Cobrança de inadimplência',
      description: 'Atuação extrajudicial e judicial para recuperação de valores.',
    },
    {
      icon: FileText,
      title: 'Convenção e regimento interno',
      description: 'Revisão, atualização e elaboração de documentos condominiais.',
    },
    {
      icon: MessageSquare,
      title: 'Mediação e resolução de conflitos',
      description: 'Solução de disputas entre condôminos de forma estratégica.',
    },
    {
      icon: Scale,
      title: 'Ações judiciais envolvendo condomínio',
      description: 'Defesa e propositura de ações para proteção dos interesses.',
    },
  ];

  const regularizacaoServices = [
    {
      icon: FileSignature,
      title: 'Regularização documental e registral',
      description: 'Adequação de documentos junto ao cartório de registro de imóveis.',
    },
    {
      icon: MapPin,
      title: 'Retificação de área e matrícula',
      description: 'Correção de metragens e dados cadastrais do imóvel.',
    },
    {
      icon: Home,
      title: 'Usucapião (extrajudicial e judicial)',
      description: 'Regularização de posse prolongada para aquisição de propriedade.',
    },
    {
      icon: UserCheck,
      title: 'Inventário e partilha com foco em imóveis',
      description: 'Planejamento sucessório e transferência patrimonial eficiente.',
    },
    {
      icon: Search,
      title: 'Due diligence imobiliária',
      description: 'Análise detalhada de riscos antes de compra ou investimento.',
    },
    {
      icon: FileText,
      title: 'Contratos: compra e venda, locação, cessão, comodato',
      description: 'Elaboração e revisão de instrumentos contratuais com segurança.',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Serviços especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em Direito Condominial e Regularização de Imóveis
          </p>
        </div>

        <div className="space-y-16">
          {/* Direito Condominial */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Building2 size={32} className="text-accent" />
              <h3 
                className="text-2xl md:text-3xl text-primary"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Direito Condominial
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {condominialServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <service.icon size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.description}
                      </p>
                      <a
                        href="#contato"
                        className="text-sm text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector('#contato');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Entender como funciona
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regularização de Imóveis */}
          <div id="regularizacao">
            <div className="flex items-center gap-3 mb-8">
              <Home size={32} className="text-accent" />
              <h3 
                className="text-2xl md:text-3xl text-primary"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Regularização de Imóveis
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularizacaoServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <service.icon size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.description}
                      </p>
                      <a
                        href="#contato"
                        className="text-sm text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector('#contato');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Entender como funciona
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
