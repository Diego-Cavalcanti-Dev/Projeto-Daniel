import { ArrowRight, BookOpen } from "lucide-react";
import Img2 from "../img/administrador.jpeg";
import Img3 from "../img/predio.jpeg";
import Img1 from "../img/reuniao.jpeg";

const posts = [
  {
    title:
      "Quando a briga no condomínio passa do limite? 5 sinais para acender alerta",
    summary:
      "Após caso trágico em Caldas Novas, especialistas discutem limites do síndico, deveres de gestão e sinais graves que exigem atuação imediata.",
    image: Img1,
    category: "Direito condominial",
    link: "https://vivaocondominio.com.br/noticias/dia-a-dia/conflitos-condominio-limites-legais-quando-acionar-justica/",
  },
  {
    title:
      "Assembleias e prestação de contas exigem atenção redobrada no início do ano",
    summary:
      "Troca de síndicos, circulação de documentos e conferência financeira tornam esse período especialmente sensível para condomínios.",
    image: Img2,
    category: "Documentação",
    link: "https://vivaocondominio.com.br/noticias/dia-a-dia/prestacao-contas-condominio-riscos-assembleia/",
  },
  {
    title:
      "IPTU e condomínio em atraso podem comprometer o imóvel: o que fazer antes disso",
    summary:
      "Um panorama direto sobre riscos patrimoniais, negociação preventiva e cuidados para evitar agravamento da inadimplência.",
    image: Img3,
    category: "Regularização",
    link: "https://vivaocondominio.com.br/noticias/inadimplencia/iptu-condominio-risco-perda-imovel-dividas/",
  },
];

export function Blog() {
  return (
    <section
      id="conteudos"
      className="bg-[linear-gradient(180deg,#eef3f8_0%,#e6edf5_42%,#f8fafc_100%)] py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Leituras selecionadas
            </p>
            <h2
              className="mb-3 text-2xl text-primary sm:mb-4 sm:text-4xl lg:text-[3rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Conteúdos úteis para decisões mais seguras
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Artigos e notícias escolhidos para oferecer mais contexto sobre
              conflitos condominiais, documentação e proteção patrimonial.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/85 bg-white/82 p-5 shadow-[0_20px_55px_rgba(8,26,82,0.08)] backdrop-blur-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Curadoria do escritório
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Conteúdos práticos para orientar clientes antes de decisões de
              compra, gestão, regularização ou cobrança.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group overflow-hidden rounded-[1.8rem] border border-white/85 bg-white shadow-[0_22px_55px_rgba(8,26,82,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d7b35a]/60 hover:shadow-[0_22px_50px_rgba(199,162,74,0.20)] ${
                index === 0 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="relative h-44 overflow-hidden sm:h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07153f]/78 via-[#07153f]/18 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/20 bg-white/16 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold leading-snug text-primary transition-colors group-hover:text-primary/85 sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[0.97rem]">
                  {post.summary}
                </p>
                <div className="mt-5 flex items-center text-sm font-medium uppercase tracking-[0.08em] text-accent">
                  <BookOpen size={16} className="mr-2" />
                  Ler conteúdo
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
