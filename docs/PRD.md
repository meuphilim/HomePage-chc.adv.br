# PRD — Visão Completa do Produto
## Site Institucional · Dr. Cláudio Henrique de Castro · `chc.adv.br`

**Versão:** 0.9.1  
**Data:** Março 2026  
**Stack:** Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript  

---

## 1. Objetivo do Produto

Site institucional premium do Dr. Cláudio Henrique de Castro — Pós-Doutor em Ciências Histórico-Jurídicas (Universidade de Lisboa), Advogado desde 1996 e Auditor do TCE-PR. O produto tem como missão:

- Estabelecer autoridade e credibilidade acadêmica e profissional.
- Apresentar serviços jurídicos de forma clara e elegante.
- Exibir a extensa produção intelectual (livros, artigos, capítulos).
- Facilitar o contato de potenciais clientes via formulário e WhatsApp.

---

## 2. Público-Alvo

| Segmento | Perfil |
|---|---|
| Clientes Corporativos | Empresas buscando consultoria em Direito Administrativo, Compliance ou Licitações |
| Clientes Pessoas Físicas | Cidadãos com demandas em Direito do Consumidor ou Direito de Família |
| Academia | Pesquisadores, professores e alunos de Direito |
| Imprensa | Jornalistas buscando fontes especializadas em Direito Público |

---

## 3. Páginas e Rotas

### 3.1 Públicas

| Rota | Descrição |
|---|---|
| `/` | Home — Hero, Perfil, Áreas de Atuação, FAQ, Testemunhos, Contato |
| `/our-essence` | Essência do escritório — Missão, Valores, Visão |
| `/career` | Trajetória profissional e acadêmica |
| `/library` | Hub da biblioteca — links para livros e publicações |
| `/library/books` | Catálogo de livros publicados com capa, editora e link de compra |
| `/library/publications` | Produção acadêmica completa: artigos destacados, linhas de pesquisa, resumo |
| `/privacy-policy` | Política de Privacidade (LGPD) |
| `/terms-of-use` | Termos de Uso |

### 3.2 Rotas de API

| Endpoint | Método | Finalidade |
|---|---|---|
| `/api/contact` | POST | Envio de formulário de contato via Nodemailer |
| `/api/dev/publications` | GET / POST | CRUD de publicações (apenas em `NODE_ENV=development`) |
| `/api/dev/upload` | POST | Upload de capas de livros para `public/images/published-books/` |

### 3.3 DevTools (apenas em desenvolvimento)

| Rota | Descrição |
|---|---|
| `/dev/publications` | Gerenciador visual de publicações com preview ao vivo |

---

## 4. Funcionalidades Principais

### 4.1 Biblioteca de Publicações
- **Livros publicados** com capa (WebP local ou URL externa), editora, ano, link de compra e badge "Esgotado".
- **Artigos em periódicos** agrupados por linhas de pesquisa (Direito Administrativo, Digital, Romano, Controle Público).
- **Artigos em destaque** (flag `highlighted`) exibidos na seção de destaques.
- **Acervo completo** acessível via accordion expansível.

### 4.2 Formulário de Contato
- Validação client-side com **Zod**.
- Envio via **Nodemailer** com templates HTML.
- Proteção via rate-limiting e variáveis de ambiente seguras.

### 4.3 Tema Claro / Escuro
- Alternância com **next-themes**, persistida em `localStorage`.
- Glassmorphism e paleta ouro (`gold-*`) consistente em ambos os temas.

### 4.4 Experiência Visual
- Animações de entrada com **GSAP** + `ScrollTrigger`.
- Fundo animado com Three.js / WebGL (`BackgroundCanvas`).
- Fontes: **Inter** (sans) + **Playfair Display** (serif) via Google Fonts.
- Ícones via **Lucide React**.

### 4.5 Legal e LGPD
- Banner de consentimento de cookies (`CookieConsent`).
- Modal unificado com aviso de segurança e disclaimer legal (`UnifiedLegalModal`).

### 4.6 SEO e Analytics
- Metadados completos por página (title, description, keywords, OG, Twitter Card).
- `robots.txt` configurado via metadata.
- **Google Analytics** integrado via `GoogleAnalytics` component com `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

---

## 5. Requisitos Não-Funcionais

| Aspecto | Meta |
|---|---|
| Performance | LCP < 2.5 s; CLS < 0.1; FID < 100 ms |
| Acessibilidade | WCAG AA — testes com axe-core + Playwright |
| SEO | Score > 90 no Lighthouse |
| Segurança | Headers CSP, X-Frame-Options, HSTS via `next.config.ts` |
| Responsividade | Mobile-first, breakpoints sm / md / lg / xl |

---

## 6. Integrações

| Serviço | Uso |
|---|---|
| Vercel | Deploy principal (produção com SSR) |
| GitHub Pages | Deploy estático (export) via GitHub Actions |
| Google Analytics | Rastreamento de visitas |
| Nodemailer / SMTP | Envio de e-mails de contato |

---

## 7. Roadmap

| Status | Item |
|---|---|
| ✅ Entregue | Home completa, Biblioteca, Contato, DevTools |
| ✅ Entregue | Tema claro/escuro, SEO, LGPD, Analytics |
| ✅ Entregue | Refinar seção `/library` (hub page) |
| 📋 Planejado | Internacionalização (PT-BR / EN) |
| 📋 Planejado | Blog / artigos com MDX |
| 📋 Planejado | Área do cliente autenticada |
