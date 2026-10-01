# ONG Mãos que Cuidam 🤝

Projeto extensionista Cruzeiro do Sul - Desenvolvimento de um site para cadastro de voluntários e divulgação de projetos sociais.

 🔗 Site no ar: https://ong-maos-que-cuidam.vercel.app
**Aluna:** Francieli Alves - Análise e Desenvolvimento de Sistemas

## 🚀 Tecnologias
- HTML5 semântico com landmarks e ARIA
- CSS3 responsivo com contraste WCAG 2.1
- JavaScript (SPA, Storage, Validação de Formulário)
- Vite + Vercel CI/CD

## 🌱 Estrutura de Branches (GitFlow)
- `main` - branch principal, código estável e em produção
- `develop` - branch de desenvolvimento
- `feature/cadastro-voluntarios` - funcionalidade de cadastro

## 🏷️ Releases (Versionamento Semântico)
- `v0.1.0` - feat: estrutura inicial do projeto
- `v0.2.0` - feat: páginas de cadastro e projetos
- `v1.0.0` - release estável com deploy

## 📂 Como rodar o projeto
1. Clone o repositório: `git clone https://github.com/francieliAlves674-blip/ong-maos-que-cuidam.git`
2. Instale: `npm install`
3. Rode: `npm run dev`

## 🚀 Estratégia de Deploy e Roteamento

Este projeto é uma SPA (Single Page Application) feita com Vite.

- **Build:** `npm run build` gera arquivos minificados com Vite.
- **Roteamento:** Utiliza History API. Para garantir que rotas internas não deem 404 após o deploy, foi configurado o `vercel.json` com `rewrites` apontando todas as rotas para `/index.html`.
- **Alternativa:** Poderia usar "hash routing" (ex: `/#/projetos`) que é mais simples para estático, mas optei por History API + rewrites para URLs mais limpas.
- **Imagens:** Uso WebP com fallback em `<picture>` e SVG para melhor performance e consumo de dados.
- **Acessibilidade:** Validada com navegação por teclado (TAB), foco visível, landmarks e WAI-ARIA em componentes dinâmicos.
