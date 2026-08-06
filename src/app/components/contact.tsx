import {
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { openWhatsApp } from "../navigation";
import { siteConfig } from "../site";
import { Button } from "./button";

const contactItems = [
  {
    icon: MapPin,
    title: "Endereço",
    value: siteConfig.contact.address.full,
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: siteConfig.contact.phone,
  },
  {
    icon: Mail,
    title: "E-mail",
    value: siteConfig.contact.email,
  },
  {
    icon: Clock,
    title: "Atendimento",
    value: siteConfig.contact.hours,
  },
  {
    icon: MapPin,
    title: "Abrangência",
    value: "Atendimento em todo o Brasil",
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="bg-[linear-gradient(180deg,#f0f3f6_0%,#e8edf4_48%,#f8fafc_100%)] py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#081a52] text-white shadow-[0_34px_90px_rgba(8,26,82,0.18)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_14%_90%,rgba(215,179,90,0.12),transparent_25%)]" />

          <div className="relative grid gap-6 p-5 sm:gap-8 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:p-10 xl:p-12">
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f1d488]">
                  Contato
                </p>
                <h2
                  className="max-w-xl text-2xl text-white sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Fale com um advogado com clareza desde o primeiro contato
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg">
                  Conte brevemente o que precisa pelo WhatsApp. A primeira
                  orientação ajuda a definir os próximos passos, documentos e a
                  melhor estratégia para o seu caso.
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <div className="rounded-[1.5rem] border border-[#d7b35a]/25 bg-[#0d235f] p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-[#f1d488]">
                      <ShieldCheck size={21} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f1d488]">
                        Retorno inicial
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/84">
                        Em até 1 dia útil, com orientação objetiva sobre próximos
                        passos, documentos e estratégia possível para o caso.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="mt-5 w-full border-[#55ae68]/40 bg-[#e7f6ea] text-[#1e6c38] hover:bg-[#d1efd8] sm:w-auto"
                  onClick={() => openWhatsApp(siteConfig.contact.whatsappUrl)}
                >
                  <Phone size={22} />
                  Falar agora no WhatsApp
                </Button>
              </div>
            </div>

            <div className="grid content-center gap-4 sm:grid-cols-2">
              {contactItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.35rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm transition-colors duration-200 hover:bg-white/12 last:sm:col-span-2 sm:p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-[#f1d488]/12 text-[#f1d488]">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
