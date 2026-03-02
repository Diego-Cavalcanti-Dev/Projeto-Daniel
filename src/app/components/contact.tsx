import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { Button } from './button';

export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    perfil: '',
    assunto: '',
    mensagem: '',
    aceitaPrivacidade: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a integração com backend
    console.log('Formulário enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nome: '',
        whatsapp: '',
        email: '',
        perfil: '',
        assunto: '',
        mensagem: '',
        aceitaPrivacidade: false,
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Fale com um advogado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Envie seu caso e receba um direcionamento inicial. Retornamos em até 1 dia útil.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info + WhatsApp */}
          <div className="space-y-8">
            <div>
              <h3 
                className="text-2xl text-primary mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Entre em contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">WhatsApp</p>
                    <p className="text-muted-foreground">(41) 92004-3413</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">E-mail</p>
                    <p className="text-muted-foreground">daniel@cavalcantiadvocacia.adv.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Horário de atendimento</p>
                    <p className="text-muted-foreground">Segunda a sexta, 8h às 18h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Localização</p>
                    <p className="text-muted-foreground">Atendimento em todo Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-accent to-accent/80 rounded-2xl text-white">
              <h4 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Precisa de atendimento imediato?
              </h4>
              <p className="mb-6 text-white/90">
                Clique no botão abaixo e fale diretamente com nossa equipe pelo WhatsApp
              </p>
              <Button
                variant="primary"
                size="lg"
                className="w-full bg-white text-accent hover:bg-white/90"
                onClick={() => window.open('https://wa.me/5541920043413', '_blank')}
              >
                <Phone size={20} />
                WhatsApp agora
              </Button>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background p-8 rounded-2xl border border-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Mensagem enviada!
                </h3>
                <p className="text-muted-foreground">
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-primary mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-primary mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="(41) 92004-3413"
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="perfil" className="block text-sm font-medium text-primary mb-2">
                      Seu perfil *
                    </label>
                    <select
                      id="perfil"
                      name="perfil"
                      required
                      value={formData.perfil}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Selecione...</option>
                      <option value="sindico">Síndico</option>
                      <option value="administradora">Administradora</option>
                      <option value="proprietario">Proprietário</option>
                      <option value="comprador">Comprador</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-primary mb-2">
                      Assunto *
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      required
                      value={formData.assunto}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Selecione...</option>
                      <option value="condominial">Condominial</option>
                      <option value="regularizacao">Regularização</option>
                      <option value="contratos">Contratos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-primary mb-2">
                    Descreva seu caso *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="aceitaPrivacidade"
                    name="aceitaPrivacidade"
                    required
                    checked={formData.aceitaPrivacidade}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-accent border-border rounded focus:ring-accent"
                  />
                  <label htmlFor="aceitaPrivacidade" className="text-sm text-muted-foreground">
                    Concordo com a{' '}
                    <a href="#" className="text-accent hover:underline">
                      Política de Privacidade
                    </a>{' '}
                    e autorizo o uso dos meus dados para contato.
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  <Send size={20} />
                  Enviar mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
