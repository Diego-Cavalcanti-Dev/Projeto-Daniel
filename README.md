# Daniel Cavalcanti Advocacia Imobiliária

Site institucional responsivo para o escritório Daniel Cavalcanti Advocacia Imobiliária, voltado a direito imobiliário, direito condominial, contratos e regularização de imóveis. O canal de conversão usado pela interface é o WhatsApp.

## Tecnologias

- React 18 com TypeScript
- Vite 7
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

As rotas são resolvidas no cliente em `src/app/App.tsx`, sem uma biblioteca de roteamento externa. O build também cria uma página HTML com metadados próprios para cada rota.

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação e desenvolvimento

```powershell
npm install
npm run dev
```

O Vite disponibiliza o site, normalmente em `http://localhost:5173`.

## Produção

```powershell
npm run build
npm run start
```

O build limpa e recria `dist/`, incluindo as páginas pré-geradas. O comando `start` serve esse conteúdo; URLs sem um arquivo correspondente recebem a aplicação principal como fallback.

## Estrutura do projeto

```text
src/
├── app/
│   ├── components/       # Componentes React em PascalCase
│   ├── img/              # Logos e imagens institucionais
│   ├── App.tsx           # Casca da aplicação e seleção da página
│   ├── pages.tsx         # Composição das páginas
│   ├── routes.ts         # Navegação e normalização de URL
│   ├── seo.tsx/json      # Metadados por rota
│   └── site.ts           # Dados institucionais e de contato
├── styles/               # Fontes, tema e estilos globais
└── main.tsx              # Ponto de entrada do React
scripts/
└── prerender-routes.mjs  # Geração das páginas estáticas por rota
server/
└── index.mjs             # Servidor estático da versão de produção
```

## Personalização

- Atualize telefone, e-mail, endereço e URL do WhatsApp em `src/app/site.ts`.
- Substitua logos e imagens em `src/app/img/`.
- Altere textos e a composição das páginas em `src/app/pages.tsx` e `src/app/components/`.
- Configure os links reais de LinkedIn e Instagram em `src/app/components/Footer.tsx`; os atuais são genéricos.

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite |
| `npm run typecheck` | Verifica a tipagem TypeScript |
| `npm run build` | Limpa e gera a versão de produção em `dist/` |
| `npm run start` | Serve o build de produção |

Não há scripts de testes ou lint configurados atualmente. Para verificar a compilação, execute `npm run build`.

## Licença

Uso interno ou institucional, conforme a necessidade do projeto.
