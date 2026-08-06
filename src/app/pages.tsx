import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Landmark,
} from "lucide-react";
import OfficeImage from "./img/predio.jpeg";
import { Blog } from "./components/blog";
import { Contact } from "./components/contact";
import { Differentials } from "./components/differentials";
import { FAQ } from "./components/faq";
import { Hero, HeroHighlights } from "./components/hero";
import { Personas } from "./components/personas";
import { Process } from "./components/process";
import { Services } from "./components/services";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const officePrinciples = [
  "Diagnóstico antes de qualquer medida relevante",
  "Estratégia compatível com a urgência e o patrimônio envolvido",
  "Acompanhamento com etapas e expectativas claras",
];

const pathways = [
  {
    icon: Building2,
    title: "Para condomínios",
    text: "Decisões, assembleias, cobrança e rotinas com respaldo jurídico.",
    href: "/areas-de-atuacao",
  },
  {
    icon: Landmark,
    title: "Para imóveis",
    text: "Regularização, contratos e análise de risco para proteger o patrimônio.",
    href: "/areas-de-atuacao",
  },
  {
    icon: FileCheck2,
    title: "Conteúdo útil",
    text: "Informação selecionada para decisões mais seguras no dia a dia.",
    href: "/conteudos",
  },
];

function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-[#081a52] py-10 text-white sm:py-12 lg:py-16">
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_10%_8%,rgba(241,212,136,.22),transparent_24%),radial-gradient(circle_at_90%_88%,rgba(255,255,255,.10),transparent_26%)]" />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f1d488] sm:text-sm">
          {eyebrow}
        </p>
        <h1
          className="mt-3 max-w-3xl text-3xl leading-[1.08] text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/76 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}

function HomeOverview() {
  return (
    <section className="bg-[#f8fafc] py-14 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b28a2f]">
              Atuação estratégica
            </p>
            <h2
              className="mt-3 text-3xl leading-tight text-[#081a52] sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A orientação certa começa por entender o contexto.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-[#536178] sm:text-lg lg:justify-self-end">
            Conheça as frentes de atuação, a forma de trabalho do escritório e os
            conteúdos que ajudam você a tomar decisões com mais segurança.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {pathways.map(({ icon: Icon, title, text, href }) => (
            <a
              key={title}
              href={href}
              className="group rounded-[1.6rem] border border-[#081a52]/10 bg-white p-6 shadow-[0_16px_38px_rgba(8,26,82,.07)] transition hover:-translate-y-1 hover:border-[#c7a24a]/60 hover:shadow-[0_20px_45px_rgba(199,162,74,.16)]"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f8efd8] text-[#a27821]">
                <Icon size={23} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#081a52]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5e6a7d]">{text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[#a27821]">
                Conhecer
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeCallout() {
  return (
    <section className="bg-[#f8fafc] px-5 pb-14 sm:px-8 sm:pb-20 lg:px-10">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] bg-[#ede4ce] p-7 sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b731d]">
            Primeiro contato
          </p>
          <h2
            className="mt-3 max-w-2xl text-3xl leading-tight text-[#081a52] sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Clareza para decidir o próximo passo do seu caso.
          </h2>
        </div>
        <a
          href="/contato"
          className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-[#081a52] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#102b75] lg:mt-0"
        >
          Falar com o escritório
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <HeroHighlights />
      <HomeOverview />
      <Process />
      <HomeCallout />
    </>
  );
}

export function OfficePage() {
  return (
    <>
      <PageIntro
        eyebrow="O escritório"
        title="Advocacia imobiliária guiada por clareza e estratégia."
        description="Uma atuação próxima, técnica e organizada para proteger decisões, relações e patrimônio."
      />
      <section className="bg-[#f8fafc] py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(8,26,82,.15)]">
            <img
              src={OfficeImage}
              alt="Edifício no centro de Curitiba"
              className="h-[300px] w-full object-cover sm:h-[420px]"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b28a2f]">
              Nossa postura
            </p>
            <h2
              className="mt-3 text-3xl leading-tight text-[#081a52] sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Segurança jurídica sem perder de vista as pessoas.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#536178] sm:text-lg">
              Cada demanda recebe leitura cuidadosa do cenário, dos documentos e dos
              impactos práticos. A comunicação é objetiva, para que cada cliente saiba
              o que está acontecendo e quais são as alternativas.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-[#34425e] sm:text-base">
              {officePrinciples.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#b28a2f]" size={20} />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Differentials />
    </>
  );
}

export function AreasPage() {
  return (
    <>
      <PageIntro
        eyebrow="Áreas de atuação"
        title="Soluções jurídicas para decisões imobiliárias mais seguras."
        description="Atuação consultiva e contenciosa para condomínios, administradoras, proprietários e compradores."
      />
      <Services />
      <Personas />
      <Process />
    </>
  );
}

export function ContentPage() {
  return (
    <>
      <PageIntro
        eyebrow="Conteúdos"
        title="Informação clara para ajudar nas suas decisões."
        description="Leituras selecionadas sobre direito condominial, documentação e proteção patrimonial."
      />
      <Blog />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contato"
        title="Vamos entender o seu caso com clareza desde o início."
        description="Envie uma mensagem. A primeira orientação ajuda a organizar documentos, prazos e os próximos passos."
      />
      <Contact />
      <FAQ />
    </>
  );
}
