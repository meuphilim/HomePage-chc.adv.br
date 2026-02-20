# Dr. Cláudio Henrique de Castro | Advocacia & Consultoria

Este repositório contém o código-fonte da plataforma institucional do **Dr. Cláudio Henrique de Castro**, desenvolvida com tecnologias de ponta para garantir performance, segurança e uma experiência de usuário premium.

## 🚀 Stack Tecnológica

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **3D/Gráficos**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Deployment**: GitHub Pages (Static Export)

## 📋 Pré-requisitos

- **Node.js**: Versão 20 ou superior recomendada.
- **Gerenciador de Pacotes**: npm (ou pnpm/yarn).

## 🛠️ Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-da-pasta>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` e adicione seu ID do Google Analytics:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse: [http://localhost:3000](http://localhost:3000)

## 📦 Build e Deploy

Este projeto utiliza **Static Export** (`output: 'export'`), o que significa que ele gera arquivos HTML/CSS/JS estáticos prontos para serem servidos por qualquer servidor web, como o GitHub Pages.

### Gerar Build Estático
```bash
npm run build
```
O conteúdo será gerado na pasta `/out`.

### Deploy Automático (GitHub Actions)
O projeto já está configurado com um workflow de CI/CD para o GitHub Pages.
- Ao fazer push para a branch `main`, o build é processado automaticamente.
- Verifique a pasta `.github/workflows/deploy.yml` para detalhes da configuração.

## ⚖️ LGPD & Privacidade
O site foi construído com conformidade à LGPD:
- Banner de Consentimento de Cookies integrado.
- Gerenciamento de preferências de rastreamento.
- Google Analytics 4 desativado por padrão (só ativa após consentimento).

## 📄 Licença
Todo o conteúdo intelectual e código-fonte são de propriedade exclusiva de Cláudio Henrique de Castro Advocacia.

---
*Desenvolvido com foco em excelência jurídica e tecnológica.*
