# d2f.dev

Site institucional da **D2F Software House** ([d2f.dev](https://d2f.dev)): home, empresa, projetos, serviços e contato, com tema claro/escuro.

## Stack

- [Next.js 16](https://nextjs.org) (Pages Router para as páginas, App Router apenas para `robots.txt` e `sitemap.xml`), Turbopack
- React 19, TypeScript 5.9
- SCSS Modules, next/font (Nunito), next/image
- framer-motion (animações de entrada), animejs (grade de pontos do hero)
- react-hook-form + zod (formulário de contato), react-toastify
- ESLint 9 com `eslint-config-next` (flat config em `eslint.config.mjs`)

## Requisitos

- **Node.js 22** (há um `.nvmrc`; com nvm basta `nvm use`). O Node 20.18 ou anterior falha na checagem de engines das dependências.
- **yarn 1**. O `yarn.lock` é o lockfile de referência.

## Rodando localmente

```bash
yarn install
yarn dev      # http://localhost:3000
```

Outros scripts:

```bash
yarn build    # build de produção (também roda a checagem de tipos)
yarn start    # serve o build
yarn lint     # eslint .
```

## Variáveis de ambiente

Crie um `.env` na raiz com:

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_DISCORD_URL` | Webhook do Discord que recebe as mensagens do formulário de contato (`/api/contact`) |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | ID do Google Analytics (gtag), injetado em `_document.tsx` |

## Estrutura

```
src/
  pages/          rotas (index, empresa, projetos, contato, servicos/[slug], api/contact)
  app/            robots.ts e sitemap.ts (metadata routes)
  modules/        composição de cada página (sidebar + main + footer)
  components/     componentes e seus dados, estilos e interfaces
  styles/         globals.css (variáveis de tema e utilitários)
public/
  project-imgs/   thumbnails dos projetos (640x360)
```

Convenções: aspas simples, sem ponto e vírgula, imports via alias (`@/components/...`, `@/modules/...`). Cada componente fica em uma pasta com `nome.tsx`, `nome.module.scss` e, quando precisa, `nome.data.ts` e `nome.interface.ts`.

## Onde alterar

| O quê | Onde |
| --- | --- |
| Telefone, WhatsApp, e-mail e endereço | `src/components/contact/contact.data.ts` (usado no botão flutuante, na seção de contato, no cabeçalho e no footer) |
| Projetos | `src/components/projects/projects.data.ts` + imagem em `public/project-imgs/` (640x360, JPEG) |
| Serviços | `src/modules/servicos/servicos.data.tsx` (gera as páginas `/servicos/[slug]` e o sitemap) |
| Itens do menu | `src/components/sidebar/sidebar.data.ts` |
| Redes sociais | `src/components/navHeading/components/myLinks/myLinks.data.tsx` |
| Cores dos temas | `src/styles/globals.css` (`:root` para o escuro, `:root[data-theme="light"]` para o claro) |

## Tema claro/escuro

O escuro é o padrão. O botão no cabeçalho (ao lado dos ícones sociais) alterna para o claro aplicando `data-theme="light"` no `<html>` e salvando a escolha no `localStorage`. Um script inline em `_document.tsx` reaplica o tema antes da primeira pintura, evitando flash. O hook `useTheme` (`src/components/themeToggle/useTheme.ts`) expõe o tema atual para componentes que precisam reagir a ele.

## Licença

[MIT](LICENSE)
