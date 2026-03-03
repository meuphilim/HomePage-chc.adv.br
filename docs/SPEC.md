# SPEC — Especificação Técnica Completa
## Site Institucional · `chc.adv.br` · v0.9.1

---

## 1. Stack e Versões

| Tecnologia | Versão | Função |
|---|---|---|
| Next.js | 16.1.6 | Framework React (App Router + SSR/SSG) |
| React | 19.2.3 | UI Library |
| TypeScript | ^5 | Tipagem estática |
| Tailwind CSS | ^4 | Estilização utility-first |
| GSAP | ^3.14.2 | Animações de scroll e entrada |
| Three.js | ^0.182.0 | Background 3D WebGL |
| @react-three/fiber | ^9.5.0 | React wrapper para Three.js |
| @react-three/drei | ^10.7.7 | Helpers para R3F |
| Framer Motion | ^12.34.3 | Animações declarativas |
| Zod | ^4.3.6 | Validação de schemas |
| Nodemailer | ^8.0.1 | Envio de e-mails |
| next-themes | ^0.4.6 | Troca de tema claro/escuro |
| lucide-react | ^0.563.0 | Ícones SVG |
| Playwright | ^1.58.2 | Testes E2E |

---

## 2. Estrutura de Diretórios

```
chc.adv.br/
├── .agent/                   # Configurações do AI agent (GEMINI.md, skills, agents)
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD para GitHub Pages (output: export)
├── docs/                     # Documentação do projeto
│   ├── PRD.md
│   ├── SPEC.md
│   └── README.md
├── public/                   # Assets estáticos servidos diretamente
│   ├── images/
│   │   ├── books/            # Capas de livros (Amazon, etc.)
│   │   └── published-books/  # Capas gerenciadas localmente (WebP, 6 chars)
│   └── (favicons, og_image, grid-pattern.svg, ...)
├── src/
│   ├── app/                  # App Router (Next.js 13+)
│   │   ├── layout.tsx        # Root layout (ThemeProvider, Header, Footer)
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Estilos globais + variáveis CSS
│   │   ├── error.tsx         # Error boundary global
│   │   ├── not-found.tsx     # Página 404
│   │   ├── our-essence/      # Rota /our-essence
│   │   ├── career/           # Rota /career
│   │   ├── library/
│   │   │   ├── page.tsx      # Hub /library
│   │   │   ├── books/        # Rota /library/books
│   │   │   └── publications/ # Rota /library/publications
│   │   ├── privacy-policy/   # Rota /privacy-policy
│   │   ├── terms-of-use/     # Rota /terms-of-use
│   │   ├── dev/
│   │   │   └── publications/ # DevTool: /dev/publications (apenas dev)
│   │   └── api/
│   │       ├── contact/      # POST /api/contact
│   │       └── dev/
│   │           ├── publications/ # GET+POST /api/dev/publications
│   │           └── upload/       # POST /api/dev/upload
│   ├── components/
│   │   ├── layout/           # Estruturais globais
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── desktop-nav.tsx
│   │   │   └── mobile-menu.tsx
│   │   ├── ui/               # Utilitários reutilizáveis
│   │   │   ├── background-canvas.tsx       # Canvas 3D WebGL
│   │   │   ├── background-canvas-client.tsx # Wrapper client-side
│   │   │   ├── cookie-consent.tsx
│   │   │   ├── developer-credit.tsx
│   │   │   ├── google-analytics.tsx
│   │   │   ├── section-container.tsx       # Wrapper de seção com max-width
│   │   │   ├── toggle-theme.tsx
│   │   │   ├── under-development.tsx       # Placeholder para seções em construção
│   │   │   ├── unified-legal-modal.tsx     # Modal integrado: aviso+disclaimer
│   │   │   └── whatsapp-button.tsx
│   │   └── features/         # Feature components por domínio
│   │       ├── hero/
│   │       ├── about/
│   │       ├── profile/
│   │       ├── practice-areas/
│   │       ├── stats/
│   │       ├── testimonials/
│   │       ├── faq/
│   │       ├── contact/
│   │       ├── essence/
│   │       ├── career/
│   │       ├── library-features/
│   │       │   ├── publications-summary.tsx
│   │       │   └── ...
│   │       └── publications/
│   │           ├── publication-card.tsx
│   │           ├── publications-hero.tsx
│   │           ├── books-section.tsx
│   │           ├── highlighted-articles.tsx
│   │           ├── research-lines.tsx
│   │           └── full-production-accordion.tsx
│   ├── data/
│   │   └── publications.ts   # Fonte de dados estática de todas as publicações
│   ├── hooks/
│   │   └── use-gsap-animation.ts
│   ├── lib/
│   │   ├── asset-path.ts     # Helper: aplica basePath para GitHub Pages
│   │   ├── constants.ts      # SITE, CONTACT, SOCIAL, SERVICES, ANIMATION
│   │   ├── image-loader.ts   # Custom loader do next/image
│   │   ├── schema.ts         # Schemas Zod (formulário de contato)
│   │   ├── analytics.ts      # Helper de eventos GA4
│   │   ├── storage.ts        # Helper LocalStorage
│   │   ├── utils.ts          # Funções utilitárias gerais
│   │   └── services/
│   │       ├── publication-service.ts  # Queries sobre PUBLICATIONS_DATA
│   │       └── mail-service.ts         # Templates e envio de e-mail
│   ├── schemas/
│   │   └── contact.schema.ts
│   └── types/
│       └── publication.ts    # Tipos: Publication, Book, Article, BookChapter
├── tests/                    # Testes Playwright E2E
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── playwright.config.ts
└── package.json
```

---

## 3. Tipos Centrais

### `Publication` (discriminated union)

```ts
type PublicationType = 'book' | 'article' | 'book_chapter';

interface BasePublication {
    id: string;
    type: PublicationType;
    title: string;
    year: number;
    coAuthors?: string[];
}

interface Book extends BasePublication {
    type: 'book';
    publisher: string;
    city?: string;
    pages?: number;
    coverImage?: string;
    purchaseUrl?: string;
    soldOut?: boolean;
}

interface Article extends BasePublication {
    type: 'article';
    journal: string;
    volume?: string;
    pages?: string;
    url?: string;
    researchLine?: ResearchLine;
    highlighted?: boolean;
}

interface BookChapter extends BasePublication {
    type: 'book_chapter';
    bookTitle: string;
    publisher?: string;
    pages?: string;
}

type ResearchLine =
    | 'direito_administrativo'
    | 'direito_digital'
    | 'controle_publico'
    | 'direito_romano'
    | 'direito_constitucional';
```

---

## 4. Camada de Dados

### `publications.ts`
Arquivo TypeScript estático (`PUBLICATIONS_DATA: Publication[]`) que é a única fonte de verdade das publicações. **Não usa banco de dados.**

### `publication-service.ts`
```ts
publicationService.getAll()                 // Publication[]
publicationService.getBooks()               // Book[]
publicationService.getHighlightedArticles() // Article[]
```

### `mail-service.ts`
- Usa **Nodemailer** com credenciais SMTP via variáveis de ambiente.
- Envia e-mail de confirmação ao remetente e notificação ao Dr. Cláudio.
- Templates HTML inline com estilo consistente.

---

## 5. Imagem e Assets

### Custom Image Loader (`image-loader.ts`)
- Para URLs **externas** (`http://` / `https://`): retorna a URL diretamente com `unoptimized={true}` nos componentes.
- Para URLs **locais**: concatena `NEXT_PUBLIC_BASE_PATH` + path + query string `?w=&q=`.

### Pasta `public/images/published-books/`
- Imagens gerenciadas localmente, formato **WebP**, nomeadas com os últimos **6 caracteres alfanuméricos** do nome original.
- Geradas via script `convert-books.mjs` usando **sharp**.

---

## 6. Deploy

### Vercel (Produção Principal)
- SSR habilitado (sem `output: 'export'`).
- `DEPLOY_BASE_PATH` não definida → Next.js em modo padrão.
- Variáveis de ambiente configuradas no painel da Vercel.

### GitHub Pages (Deploy Estático)
- Ativado quando `DEPLOY_BASE_PATH=/web-chc.adv.br` é definido no workflow.
- `output: 'export'` → geração de HTML estático.
- `basePath` e `assetPrefix` ajustados automaticamente via `next.config.ts`.
- Pipeline: `.github/workflows/deploy.yml`.

---

## 7. Variáveis de Ambiente

| Variável | Usado em | Descrição |
|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Client + Server | Base path para assetsno GitHub Pages |
| `DEPLOY_BASE_PATH` | Build (CI) | Ativa static export + basePath |
| `SMTP_HOST` | Server | Servidor SMTP de e-mail |
| `SMTP_PORT` | Server | Porta SMTP |
| `SMTP_USER` | Server | Usuário SMTP |
| `SMTP_PASS` | Server | Senha SMTP |
| `CONTACT_EMAIL` | Server | E-mail de destino do formulário |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Client | ID do Google Analytics (G-XXXXXX) |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Build | Meta tag de verificação do Search Console |
| `NEXT_PUBLIC_TWITTER_HANDLE` | Build | Handle do Twitter para Twitter Card |

---

## 8. Segurança

- **CSP** configurado via `next.config.ts` (`Content-Security-Policy` header).
- **X-Frame-Options: SAMEORIGIN** — proteção contra clickjacking.
- **Strict-Transport-Security** — HSTS com 2 anos.
- **X-Content-Type-Options: nosniff**.
- Rotas `/api/dev/*` bloqueadas em produção via `checkDevEnvironment()`.
- Formulário de contato com validação Zod server-side.

---

## 9. Testes

| Tipo | Ferramenta | Localização |
|---|---|---|
| E2E | Playwright | `tests/` |
| Acessibilidade | axe-core + Playwright | `tests/accessibility/` |
| Performance | Playwright + Lighthouse | `tests/performance/` |

**Comandos:**
```bash
npm run test:e2e            # Todos os testes
npm run test:e2e:chromium   # Apenas Chromium
npm run test:a11y           # Acessibilidade
npm run test:performance    # Performance
npm run test:report         # Relatório HTML
```
