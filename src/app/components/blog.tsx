import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      title: 'Como cobrar inadimplência sem gerar conflito',
      summary: 'Estratégias eficazes para recuperar valores em atraso mantendo o bom relacionamento com os condôminos.',
      image: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBsYXd5ZXJ8ZW58MXx8fHwxNzcwODE4MzczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Direito Condominial',
    },
    {
      title: 'Regimento interno: o que costuma dar problema',
      summary: 'Pontos críticos que geram disputas e como prevenir conflitos através de um regimento bem estruturado.',
      image: 'https://images.unsplash.com/photo-1657727534676-cac1bb160d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGRlc2slMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwODE4Mzc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Documentos',
    },
    {
      title: 'Matrícula do imóvel: sinais de irregularidade',
      summary: 'Aprenda a identificar problemas documentais antes de comprar um imóvel e evite surpresas desagradáveis.',
      image: 'https://images.unsplash.com/photo-1747555094127-9a922d56a64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwZmFjYWRlJTIwdXJiYW58ZW58MXx8fHwxNzcwODE4MzczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Regularização',
    },
  ];

  return (
    <section id="conteudos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Conteúdos úteis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artigos e insights para te ajudar a tomar melhores decisões
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
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
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
            onClick={() => {
              // Navegação para blog
            }}
          >
            Ver mais artigos
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
