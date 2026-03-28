import { Phone, FileText, Shield, MapPin, Target } from "lucide-react";
import { Button } from "./button";
import ImgCapa from "@/app/Img/imgCapa.jpeg";


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-0 bg-gradient-to-br from-background via-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-4xl md:text-5xl lg:text-5xl leading-tight text-primary p-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Soluções jurídicas para condomínios e regularização de imóveis
                <span className="text-accent"> com segurança e agilidade.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Atuamos com prevenção de conflitos, cobrança e assessoria
                condominial, além de regularização documental para proteger seu
                patrimônio.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-[#68cf67] hover:bg-[#20bd5a] text-white border-2 border-black"
                onClick={() =>
                  window.open("https://wa.me/5541920043413", "_blank")
                }
              >
                <Phone size={20} />
                Atendimento no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contato");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FileText size={20} />
                Solicitar análise do caso
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-primary">Atendimento em</p>
                  <p className="text-sm text-muted-foreground">todo o Brasil</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Shield size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-primary">Especialização</p>
                  <p className="text-sm text-muted-foreground">
                    Condominial e Imobiliário
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Target size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-primary">Atuação</p>
                  <p className="text-sm text-muted-foreground">
                    consultiva e contenciosa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ImgCapa}
                alt="Escritório de advocacia profissional"
                className="w-full h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
