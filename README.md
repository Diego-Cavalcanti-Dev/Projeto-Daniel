# Daniel Cavalcanti Advocacia Imobiliária

Site institucional responsivo para o escritório Daniel Cavalcanti Advocacia Imobiliária, voltado a direito imobiliário, direito condominial, contratos e regularização de imóveis.

O projeto oferece páginas institucionais para apresentação do escritório, áreas de atuação, conteúdos e contato. O canal de conversão usado pela interface é o WhatsApp.

## Tecnologias

- React 18 com TypeScript
- Vite 6
- Tailwind CSS 4
- Lucide React para ícones
- Node.js nativo para servir a versão compilada em produção

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Página inicial, destaques, apresentação e processo de trabalho |
| `/escritorio` | Posicionamento e diferenciais do escritório |
| `/areas-de-atuacao` | Serviços e perfis atendidos |
| `/conteudos` | Artigos e materiais informativos |
| `/contato` | Dados de contato, FAQ e acesso ao WhatsApp |

As rotas são resolvidas no cliente em `src/app/App.tsx`, sem uma biblioteca de roteamento externa.

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação

```powershell
npm install
```

## Desenvolvimento

Inicie o frontend:

```powershell
npm run dev
```

O Vite disponibiliza o site, normalmente em `http://localhost:5173`.

## Produção

Gere os arquivos estáticos e inicie o servidor Node:

```powershell
npm run build
npm run start
```

O comando `start` serve o conteúdo de `dist/`. URLs que não correspondem a arquivos estáticos recebem `dist/index.html`, permitindo carregar as rotas do site diretamente.

## Contato

O contato da interface é feito pelo WhatsApp. Telefone, e-mail institucional, endereço e URL do WhatsApp ficam centralizados em `src/app/site.ts`.

## Estrutura do projeto

```text
src/
├── app/
│   ├── components/       # Seções e componentes da interface
│   ├── img/              # Logos e imagens institucionais
│   ├── App.tsx           # Seleção da página pela rota atual
│   ├── navigation.ts     # Abertura do WhatsApp e rolagem suave
│   ├── pages.tsx         # Composição das páginas
│   └── site.ts           # Dados institucionais e de contato
├── styles/               # Fontes, tema e estilos globais
└── main.tsx              # Ponto de entrada do React
server/
└── index.mjs             # Servidor estático da versão de produção
```

## Personalização

- Atualize telefone, e-mail, endereço e URL do WhatsApp em `src/app/site.ts`.
- Substitua logos e imagens em `src/app/img/`.
- Altere textos e a composição das páginas em `src/app/pages.tsx` e em `src/app/components/`.
- Configure os links reais de LinkedIn e Instagram em `src/app/components/footer.tsx`; os atuais são genéricos.

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run start` | Serve o build e a API com Node.js |

Não há scripts de testes ou lint configurados atualmente. Para verificar a compilação, execute `npm run build`.

## Licença

Uso interno ou institucional, conforme a necessidade do projeto.
