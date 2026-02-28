# Dr. Cláudio Henrique de Castro | Advocacia & Consultoria

Repositório Oficial da Plataforma Institucional e Acadêmica Premium do **Dr. Cláudio Henrique de Castro** — Pós-Doutor em Ciências Histórico Jurídicas, Professor Universitário, Advogado e Auditor do TCEPR.

O projeto foi construído sobre uma arquitetura estática agressivamente otimizada para o **GitHub Pages**, aliando performance impecável, segurança (Zero vazamento via env vars e gitignore polido), compliance LGPD nativo, e um visual Dark/Gold imersivo que atesta a sua autoridade.

## 🚀 Stack & Tecnologias

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Static Export Ativado)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Validações:** Zod (Formulários Seguros e Tipagens Dinâmicas)
- **Animações (UX/UI):** GSAP (ScrollTrigger) & Framer Motion (Modais e Transições)
- **3D Background:** Three.js & React Three Fiber (Dynamic Client-side import)
- **SEO & Tracking:** Schema.org JSON-LD gerado programaticamente e GA4 (Gated Analytics)

## 📁 Estrutura de Domínio de Negócio

```text
src/
├── app/                  # Roteamento Funcional (Pages & Layouts)
│   ├── (home)            # Landing Page de Conversão (Hero, Prática, Contato)
│   ├── library/          # Domínio do Autor (Livros, Obras Raras, Publicações)
│   ├── areas-de-atuacao/ # Domínio de Consultoria Específica
│   ├── career/           # Domínio Acadêmico e Histórico de Vida
│   └── our-essence/      # Visão e Filosofia Institucional
├── components/           # UI Reutilizável
│   ├── features/         # (Acoplados a Contexto: FAQ, Timeline, Stats)
│   ├── layout/           # (Footers e Navbar dinâmicos)
│   └── ui/               # (Botão de WhatsApp, LGPD Banner, Modais Legais, Renderização Canvas)
├── data/                 # Dados Imutáveis do Sistema (Bibliografias, Áreas, Carreiras mockadas em TS)
├── hooks/                # Hooks customizados para interceptações complexas
├── lib/                  # Lógicas vitais: Gerador JSON-LD, Proxy Analytics, Env Validation, Formatação cn
└── schemas/              # Configurações de Schemas (Zod)
```

## 🛠️ Como Executar o Projeto Localmente

1. **Clonar e Inicializar Dependências:**
   ```bash
   npm install
   ```

2. **Gerar Variáveis de Ambiente:**
   Copie a estrutura definida para injetar seus dados confidenciais de forma segura.
   ```bash
   cp .env.example .env.local
   ```
   > Preencha o `.env.local` com os dados Reais (ID do Analytics, Metadados JSON-LD, Configurações OAB, Links Redes Sociais). **Nota: O arquivo `.env.local` está configurado no `.gitignore` e nunca deverá subir para repositórios remotos.**

3. **Rodar o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Gerar pacote para Produção (Static Export):**
   ```bash
   npm run build
   ```
   *O Next.js gerará toda a estrutura pura em `./out` finalizando com status de `Exit Code 0` comprovando ausência de quebras.*

## ✨ Entregáveis e Metas Finalizadas

- **Sanidade do Ambiente**: Documentações obsoletas apagadas e logs ignorados. Arquitetura 100% aderente ao seu design. 
- **Engajamento**: Custom fallback no GitHub para a página estática de erro (404), garantindo navegação viva.
- **Rigorosidade de UI**: Adequação visual da atribuição do autor final ("Built with passion by Celso Cavalheiro"), garantindo legibilidade e proporção sem agredir os olhos do usuário.
- **Auditoria Plena**: Arquitetura inspecionada arquivo por arquivo; Imports fantasma removidos, consistência de JSON-LDs utilizando os ENV corretos, e botões sem comportamentos inesperados.

## 📄 Documentação Interna

Para um exame profundo das decisões arquiteturais e objetivos do produto:
- Leia a **[Visão Completa do Produto (PRD)](docs/PRD.md)**.
- Leia da **[Especificação Técnica Completa (SPEC)](docs/SPEC.md)**.

> Implementação Final. Uso exclusivo da Advocacia.
