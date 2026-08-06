# Daniel Cavalcanti Advocacia Imobiliária

Landing page institucional para um escritório de advocacia com foco em direito imobiliário, direito condominial, regularização de imóveis e atendimento consultivo por WhatsApp e formulário.

O projeto atual tem dois blocos principais:

- Frontend em `React` + `Vite`
- Backend simples em `Node.js` para envio do formulário de contato por e-mail via `nodemailer`

## Visão geral

- `React 18`
- `Vite 6`
- Estilos globais com arquivos em `src/styles`
- Ícones com `lucide-react`
- Servidor HTTP nativo em `server/index.mjs`

## Estrutura

- `src/main.tsx` - ponto de entrada da aplicação
- `src/app/App.tsx` - composição da landing page
- `src/app/components` - seções da página
- `src/app/img` - imagens e logos do site
- `src/app/site.ts` - dados institucionais e contatos
- `src/app/navigation.ts` - utilitários de navegação e WhatsApp
- `src/styles` - estilos globais, fontes e tema
- `server/index.mjs` - servidor HTTP, envio de e-mail e entrega dos arquivos compilados

## Seções da página

- Header
- Hero
- Destaques do hero
- Serviços
- Perfis atendidos
- Processo
- Diferenciais
- Conteúdos
- FAQ
- Contato
- Footer

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

Inicie apenas o servidor de API e envio de e-mail:

```powershell
npm run dev:api
```

O Vite encaminha requisições para `/api` para o servidor local.

## Build

```powershell
npm run build
```

O build gera a pasta `dist/`, que é servida pelo servidor Node em produção.

## Produção local

```powershell
npm run start
```

Esse comando inicia `server/index.mjs`, expõe `POST /api/contact` e serve os arquivos compilados em `dist/`.

## Formulário de contato

O formulário envia os dados para `POST /api/contact`.

O servidor:

- valida os campos obrigatórios
- exige aceite da política de privacidade
- monta o e-mail em texto e HTML
- envia a mensagem com `nodemailer`

## Variáveis de ambiente

Crie um arquivo `.env.server` na raiz do projeto com base em `.env.server.example`.

Exemplo:

```env
PORT=3001
SMTP_HOST=smtp.seu-provedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-usuario-smtp
SMTP_PASS=sua-senha-smtp
CONTACT_TO_EMAIL=daniel@cavalcantiadvocacia.adv.br
CONTACT_FROM_EMAIL=site@cavalcantiadvocacia.adv.br
CONTACT_REPLY_TO_EMAIL=daniel@cavalcantiadvocacia.adv.br
ALLOWED_ORIGIN=http://localhost:5173
```

### Significado das variáveis

- `PORT` - porta do servidor Node
- `SMTP_HOST` - host do provedor de e-mail
- `SMTP_PORT` - porta SMTP
- `SMTP_SECURE` - `true` para TLS/SSL, `false` para conexão comum
- `SMTP_USER` - usuário SMTP
- `SMTP_PASS` - senha SMTP
- `CONTACT_TO_EMAIL` - e-mail que recebe os contatos
- `CONTACT_FROM_EMAIL` - remetente usado no envio
- `CONTACT_REPLY_TO_EMAIL` - e-mail de resposta
- `ALLOWED_ORIGIN` - origem permitida para CORS

## Personalização

Os dados institucionais do site estão concentrados em:

- `src/app/site.ts`

As imagens principais ficam em:

- `src/app/img`

## Observações

- O projeto foi pensado para funcionar bem em desktop e mobile.
- O servidor usa `dist/index.html` como fallback para rotas estáticas.
- `dist/` é uma saída gerada e não deve ser editada manualmente.

## Dependências atuais

O projeto hoje usa apenas:

- `react`
- `react-dom`
- `lucide-react`
- `nodemailer`
- `tw-animate-css`

No ambiente de desenvolvimento, também usa:

- `vite`
- `@vitejs/plugin-react`
- `@tailwindcss/vite`
- `tailwindcss`

## Licença

Uso interno ou institucional, conforme a necessidade do projeto.
