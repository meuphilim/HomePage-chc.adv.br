# README — Manual Técnico
## Site Institucional · `chc.adv.br`

> Manual de desenvolvimento, configuração e deploy do site do Dr. Cláudio Henrique de Castro.

---

## Pré-requisitos

| Ferramenta | Versão mínima |
|---|---|
| Node.js | >= 20.x |
| npm | >= 10.x |
| Git | qualquer |

---

## 1. Instalação

```bash
# Clone o repositório
git clone https://github.com/Meuphilim/web-chc.adv.br.git
cd web-chc.adv.br

# Instale as dependências
npm install
```

---

## 2. Variáveis de Ambiente

Copie o arquivo de exemplo e preencha os valores:

```bash
cp .env.example .env.local
```

**Variáveis obrigatórias para desenvolvimento local:**

```env
# E-mail (Nodemailer)
SMTP_HOST=smtp.seuservidor.com
SMTP_PORT=587
SMTP_USER=seu@email.com
SMTP_PASS=suasenha
CONTACT_EMAIL=destino@email.com

# Google Analytics (opcional em dev)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> **Atenção:** `DEPLOY_BASE_PATH` e `NEXT_PUBLIC_BASE_PATH` são usados **apenas** no deploy para GitHub Pages. Não os defina em desenvolvimento local.

---

## 3. Desenvolvimento Local

```bash
npm run dev
```

O servidor inicia em `http://localhost:3000`.

### DevTools (apenas em desenvolvimento)

| URL | Descrição |
|---|---|
| `http://localhost:3000/dev/publications` | Gerenciador visual de publicações |

O DevTool permite editar, adicionar e remover entradas em `src/data/publications.ts` com preview ao vivo e upload de capas.

---

## 4. Estrutura de Scripts

```bash
npm run dev              # Servidor de desenvolvimento com hot-reload
npm run build            # Build de produção
npm run start            # Inicia o servidor de produção (após build)
npm run lint             # ESLint em src/
npm run test:e2e         # Testes E2E com Playwright (todos os browsers)
npm run test:e2e:ui      # Playwright com interface gráfica
npm run test:a11y        # Testes de acessibilidade (axe-core)
npm run test:performance # Testes de performance (Lighthouse)
npm run test:report      # Abre o relatório HTML do Playwright
```

---

## 5. Adicionando ou Editando Publicações

Todas as publicações estão em **`src/data/publications.ts`**.

### Via DevTool (recomendado)
1. Inicie `npm run dev`
2. Acesse `http://localhost:3000/dev/publications`
3. Use o botão **Add Publicação** ou edite/delete entradas existentes
4. Alterações são gravadas automaticamente no arquivo

### Via edição direta
Edite o array `PUBLICATIONS_DATA` em `src/data/publications.ts` seguindo os tipos em `src/types/publication.ts`.

#### Estrutura de um Livro
```ts
{
    id: "book-2025-01",
    type: "book",
    title: "Título do Livro",
    year: 2025,
    publisher: "Nome da Editora",
    city: "Curitiba",
    pages: 200,
    coverImage: "/images/published-books/abcdef.webp", // ou URL externa
    purchaseUrl: "https://...",
    soldOut: false
}
```

#### Estrutura de um Artigo
```ts
{
    id: "art-1",
    type: "article",
    title: "Título do Artigo",
    year: 2024,
    journal: "Nome da Revista",
    volume: "v. 10",
    pages: "10-30",
    researchLine: "direito_administrativo",
    highlighted: true // exibe na seção de destaques
}
```

---

## 6. Gerenciamento de Imagens de Capa

As capas de livros ficam em `public/images/published-books/`.

### Upload via DevTool
1. No DevTool, abra o editor de um livro
2. Use a área de drag-and-drop para fazer upload
3. O arquivo é salvo automaticamente na pasta correta

### Conversão manual para WebP (script utilitário)
```bash
# O script convert-books.mjs converte todas as imagens para WebP
# e renomeia para os últimos 6 caracteres alfanuméricos
node convert-books.mjs
```

> Imagens externas (URLs `http://`) são renderizadas com `unoptimized={true}` — não precisam ser baixadas localmente.

---

## 7. Configuração do Next.js

O arquivo `next.config.ts` gerencia dois modos de deploy:

| Modo | Condição | Comportamento |
|---|---|---|
| **Vercel / Local** | `DEPLOY_BASE_PATH` não definida | SSR normal, sem `basePath` |
| **GitHub Pages** | `DEPLOY_BASE_PATH=/web-chc.adv.br` | `output: 'export'`, `basePath` e `assetPrefix` configurados |

```ts
// next.config.ts (simplificado)
const basePath = process.env.DEPLOY_BASE_PATH || '';

const nextConfig: NextConfig = {
    ...(basePath ? { output: 'export' } : {}),
    ...(basePath ? { basePath, assetPrefix: basePath } : {}),
    trailingSlash: true,
    images: {
        loader: 'custom',
        loaderFile: './src/lib/image-loader.ts',
    },
};
```

---

## 8. Deploy

### Vercel (produção — automático)

1. Vincule o repositório ao projeto na Vercel
2. Configure as variáveis de ambiente no painel da Vercel
3. Push para `main` → deploy automático

### GitHub Pages (manual / via CI)

```bash
# O workflow .github/workflows/deploy.yml roda automaticamente
# em push para a branch main.
# Para disparar manualmente:
git push origin main
```

O workflow:
1. Faz checkout + instala dependências
2. Define `DEPLOY_BASE_PATH=/web-chc.adv.br`
3. Executa `npm run build` (gera pasta `out/`)
4. Publica a pasta `out/` no GitHub Pages

---

## 9. Testes

```bash
# Certifique-se que o servidor está rodando
npm run dev

# Em outro terminal:
npm run test:e2e          # Suite completa
npm run test:e2e:chromium # Apenas Chrome
npm run test:a11y         # Acessibilidade (WCAG AA)
npm run test:performance  # Lighthouse via Playwright
npm run test:report       # Relatório HTML
```

Configurações de timeout, browsers e viewports em `playwright.config.ts`.

---

## 10. Lint e Qualidade de Código

```bash
npm run lint   # ESLint (src/ apenas)
```

O ESLint usa `eslint-config-next` com regras adicionais de TypeScript.

> Arquivos em `src/app/dev/` e `src/app/api/dev/` possuem `eslint-disable` para regras de `any` — são ferramentas de desenvolvimento e não entram em produção.

---

## 11. Estrutura de Constantes

Edite `src/lib/constants.ts` para atualizar informações institucionais usadas em todo o site:

```ts
export const SITE = { NAME, URL, DESCRIPTION }
export const CONTACT = { EMAIL, PHONE, WHATSAPP, ADDRESS }
export const SOCIAL = { LINKEDIN, LATTES, ... }
```

---

## 12. Controle de Versão e Commits

### `.gitignore` inclui
- `.env.local` e `.env*.local`
- `node_modules/`
- `.next/`
- `out/` (build estático)
- Arquivos de lint temporários (`lint_*.txt`)

### A pasta `docs/` está incluída nos commits
Os arquivos `docs/PRD.md`, `docs/SPEC.md` e `docs/README.md` são rastreados pelo Git e devem ser mantidos atualizados a cada ciclo de sprint.

---

## 13. Contato e Manutenção

| Responsável | Função |
|---|---|
| Dr. Cláudio Henrique de Castro | Cliente / Product Owner |
| Equipe de Desenvolvimento | Manutenção técnica e evoluções |

Para dúvidas técnicas, consulte a documentação oficial:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Playwright Docs](https://playwright.dev/docs/intro)
