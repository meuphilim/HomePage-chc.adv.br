# Dr. Cláudio Henrique de Castro | Advocacia & Consultoria

Este é o repositório da plataforma institucional premium do **Dr. Cláudio Henrique de Castro** — Pós-Doutor em Ciências Histórico Jurídicas, Professor Universitário e Auditor do TCEPR. O projeto foi desenvolvido com tecnologias de ponta para oferecer uma experiência imersiva e de alta performance.

## 🚀 Tecnologias

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações:** [GSAP](https://greensock.com/gsap/) & [Framer Motion](https://www.framer.com/motion/)
- **3D Background:** [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **SEO & Schema:** [JSON-LD](https://schema.org/) (LegalService, Attorney, Book, Person)
- **Qualidade:** Playwright (E2E), Axe-core (Acessibilidade)

## 📁 Estrutura do Projeto

```
src/
├── app/                 # Rotas e Layouts (App Router)
│   ├── (home)           # Página principal (Hero, About, PracticeAreas)
│   ├── autor/           # Seção Acadêmica (/biblioteca, /publicacoes, /livros)
│   ├── career/          # Trajetória Profissional
│   └── compliance/      # Políticas e Termos
├── components/          # Componentes organizados por features
├── data/                # Bases de dados estáticas (TS)
├── hooks/               # Custom hooks (Animações, Modais)
├── lib/                 # Utilitários, Analytics e Schemas SEO
└── types/               # Definições de tipos TypeScript
```

## 🛠️ Desenvolvimento

1.  **Instalar dependências:**
    ```bash
    npm install
    ```

2.  **Executar servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Build (Static Export):**
    ```bash
    npm run build
    ```
    *Gera o diretório `./out` para deploy estático.*

## ✨ Diferenciais do Projeto

- **Arquitetura Static Export:** Otimizado para GitHub Pages sem abrir mão de interatividade.
- **Design Gold/Dark:** Estética premium alinhada ao posicionamento de autoridade do Dr. Cláudio.
- **Produção Acadêmica:** Sistema de filtragem e exibição de +2.000 obras e artigos.
- **SEO Avançado:** Implementação completa de Rich Snippets para máxima visibilidade.
- **Performance:** Carregamento progressivo de elementos 3D e animações ScrollTrigger.

## 📄 Licença

Uso restrito e institucional.
