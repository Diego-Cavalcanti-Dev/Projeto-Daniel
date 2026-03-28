import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import Img1 from "../img/reuniao.jpeg"
import Img2 from "../img/analise_arquivos.jpeg"
import Img3 from "../img/predio.jpeg"

export function Blog() {
  const posts = [
    {
      title:
        "Quando a briga no condomínio passa do limite? 5 sinais para acender alerta",
      summary:
        "Após caso trágico em Caldas Novas, especialista explica limites do síndico, direitos dos moradores e 5 sinais graves que exigem ação imediata",
      image:Img1,
      category: "Direito Condominial",
      link: "https://vivaocondominio.com.br/noticias/dia-a-dia/conflitos-condominio-limites-legais-quando-acionar-justica/",
    },
    {
      title:
        "Início das assembleias acende alerta para riscos de falhas internas e desvios em condomínios",
      summary:
        "Prestação de contas, troca de síndicos e circulação de documentos tornam o primeiro trimestre um período crítico para a saúde financeira dos condomínios, alerta especialista.",
      image: Img2,
      category: "Documentos",
      link: "https://vivaocondominio.com.br/noticias/dia-a-dia/prestacao-contas-condominio-riscos-assembleia/",
    },
    {
      title:
        "Fique atento: atraso de IPTU e condomínio pode levar à perda de imóvel; entenda",
      summary:
        "Entenda os riscos que o não pagamento dessas duas taxas implicam e negocie antes de perder o bem.",
      image: Img3,
      category: "Regularização",
      link: "https://vivaocondominio.com.br/noticias/inadimplencia/iptu-condominio-risco-perda-imovel-dividas/",
    },
  ];

  return (
    <section id="conteudos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Conteúdos úteis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artigos e insights para te ajudar a tomar melhores decisões
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.summary}
                </p>
                <div className="flex items-center text-accent font-medium text-sm">
                  <BookOpen size={16} className="mr-2" />
                  Ler artigo
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
            onClick={() => {}}
          >
            Ver mais artigos
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
