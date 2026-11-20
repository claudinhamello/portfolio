# Portfólio — Claudia Mello

Portfólio de Claudia Mello, Product Designer Jr. | UX/UI Designer (Indaiatuba, SP). Domínio
claudiamellodesigner.com, repo público `claudinhamello/portfolio`. Substitui o site do Wix.
Objetivo: um portfólio "fora da caixa", que mostre processo e maturidade sem parecer template.

## Projeto

- React 18 + Vite 5 + TS + Tailwind 3 (`lucide-react` para ícones). Gerado no Bolt.diy, deploy futuro na Vercel.
- Site, conversa e commits em pt-BR.
- O disco é NTFS e lento: não use `optimizeDeps.exclude` em pacotes grandes (isso deixou o dev em branco).
- A `main` ainda tem o template falso do Bolt ("Luciana Silva"). Não publique antes do merge de `redesign-header-hero`.
- Pendente: `vercel.json` + React Router quando existirem páginas de projeto (a primeira é o BeReady em `/beready-app`),
  com links reais em `projetosMenu` (Header) e nos cards. Em todas as páginas: header de vidro, voltar ao topo
  e navegação entre projetos.

## Regras de conteúdo

- Nunca inventar métricas, números, clientes, depoimentos ou anos de experiência. A experiência dela é acadêmica,
  autoral e voluntária. Não afirmar NPS/CSAT, analytics, e-commerce, ágil, "WCAG AAA" ou "Material Design 3".
- Os textos aprovados são literais: não reescreva sem pedir.
- Os projetos tiveram profundidades diferentes. Cada case mostra o contexto e só as etapas que de fato fez,
  e inclui "Onde usei IA neste projeto".
- Nunca retoque a foto dela. Prefira fotos reais a imagens geradas por IA.
- Não coloque no repo dados pessoais além do contato profissional.

## Identidade visual

- Editorial, minimalista e tecnológica, com toque cinematográfico. Seções claras, gradientes pontuais, sem sombras pesadas
  nem enfeites sem função (ícones de banco, blobs).
- **Instrument Serif** em todos os títulos e **Manrope** no resto. Nenhum texto de leitura abaixo de 14px nem tag abaixo de 12px.
- Cores no `tailwind.config.js`. Gradiente de ação roxo → teal (`.btn-acao`), de destaque roxo → azul → teal (`.texto-gradiente`).
- Logo: "C" de Claudia. Os cortes diagonais simbolizam construção. Ele se desenha uma vez ao carregar e respeita `prefers-reduced-motion`.

## Home

Ordem: Header → Hero → Projetos selecionados → Sobre mim → Como trabalho → Ferramentas e competências →
Vamos conversar → Rodapé. Os textos de cada seção estão nos componentes em `src/components/`.

- **Header:** cápsula "Liquid Glass" alinhada ao conteúdo, com "Claudia / Mello" ao lado do C. Menu: Início (nunca "Home"),
  Projetos (submenu), Sobre mim, Como trabalho, Ferramentas. Contato só pelo CTA. Menu completo a partir de 1024px (`lg`). Item ativo com traço de 2px em gradiente. CTA "Vamos conversar".
- **Hero:** "Você vê o resultado. / Eu mostro o caminho inteiro.", com foto à direita e ticker só de texto (`itensTicker`).
- **Projetos:** BeReady (nome provisório, vai mudar), Focus Clínica, Fast Money e Redesign de placas de ruas. Passos de Luz não entra na Home.
- **Como trabalho:** fundo escuro, autoplay contínuo. O contorno do card ativo usa a mesma cor do número ativo. Pausa com hover
  (só mouse), foco por teclado ou toque. Sem botão de pausa (decisão dela). Não avança sozinho com movimento reduzido.
- **Ferramentas:** 7 competências, todos os cards do mesmo tamanho (sem esticar card para fechar a última fileira),
  com logos (`public/*_logo.svg`) e rodapé "Usado em". Hover/foco/toque numa ferramenta acende os cards que a usam.
  Projetos fora da Home (Wok Saudável, SouJunior, Prothera, Passos de Luz) terão página em "Ver todos os projetos".
- **Contato:** LinkedIn e e-mail como botões outlined iguais, sem "Fale comigo". Dados em `src/conteudo.ts`.
- Imagens em `public/` (WebP): capas 16:9, `sobre-mim-claudia-3x2`, `faixa-urubici-3x1`, `claudia-hero`.
