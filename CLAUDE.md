# Portfólio — Claudia Mello

Portfólio de Claudia Mello, Product Designer Jr. | UX/UI Designer (Indaiatuba, SP). Domínio
claudiamellodesigner.com, repo público `claudinhamello/portfolio`. Substitui o site do Wix.
Objetivo: um portfólio "fora da caixa", que mostre processo e maturidade sem parecer template.

## Projeto

- React 18 + Vite 5 + TS + Tailwind 3 (`lucide-react` para ícones). Gerado no Bolt.diy, deploy futuro na Vercel.
- Site, conversa e commits em pt-BR.
- O disco é NTFS e lento: não use `optimizeDeps.exclude` em pacotes grandes (isso deixou o dev em branco).
- A `main` ainda tem o template falso do Bolt ("Luciana Silva"). Não publique antes do merge de `redesign-header-hero`.
- Em todas as páginas: header de vidro, voltar ao topo e (pendente) navegação entre projetos.

## Páginas e estrutura

- Rotas (React Router) em `src/App.tsx`; endereços em `rotas` (`src/conteudo.ts`). `vercel.json` faz o rewrite de SPA.
- `src/paginas/`: uma página por arquivo. Cada página passa ao Header os links das suas seções (`inicio` + `secoes`) e ao Rodapé.
- Páginas de projeto: conteúdo em `src/projetos/<projeto>/dados.ts`, seções no mesmo diretório. Paleta híbrida: esqueleto do
  portfólio + destaques do projeto via `--acento` / `--acento-2` (classes `text-acento`, `bg-acento-2` etc.), definidos na página.
- Imagens: `public/home/`, `public/comum/` (compartilhadas, logos), `public/projetos/<projeto>/`. Telas de app: 360×852,
  na moldura `src/projetos/Celular.tsx`. Imagem que ainda não existe mostra um espaço reservado (`ImagemComReserva`).
- Cases: BeReady (`/beready-app`, celulares 3D e coverflow), Focus Clínica (`/focus-clinica`, janela de navegador
  e vitrine desktop/tablet/mobile), Fast Money (`/fast-money`, capítulos, comparador antes/depois e notebook de aço)
  e Placas de ruas (`/redesign-placas-de-ruas`, ensaio fotográfico, pictogramas da pesquisa e placa com pontos
  clicáveis) e Wok Saudável (`/wok-saudavel`, linguagem de receita: ficha, modo de preparo, mise en place com
  componentes recriados em código). Cada case deve variar a linguagem visual em relação aos outros.
- Fast Money: os números do estudo do Figma Make eram ilustrativos; só valem 7 entrevistas e 3 testes de usabilidade.
- Wok Saudável: pesquisa e testes de 2023 (8 entrevistas, 5 no estudo de usabilidade); telas mobile redesenhadas com IA.
  Não mencionar que tablet/desktop não foram redesenhadas. Fora da Home por ora (só no menu Projetos).
- Placas: os números vêm da planilha de respostas (8 motoristas). Fotos sem EXIF (as originais tinham GPS).
- Focus Clínica é fictício e voluntário: sempre deixar isso claro; números da landing page são ilustrativos.
- Links: use `Ancora` (`#secao` na página; `/rota` ou `/#secao` para outra página, sem recarregar).

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
- Largura: sempre `max-w-pagina` (containers) / `max-w-conteudo` (cápsula do header). Crescem com a tela (25% da sobra lateral), mantendo header, títulos e foto alinhados.
- Cores no `tailwind.config.js`. Gradiente de ação roxo → teal (`.btn-acao`), de destaque roxo → azul → teal (`.texto-gradiente`).
- Logo: "C" de Claudia. Os cortes diagonais simbolizam construção. Ele se desenha uma vez ao carregar e respeita `prefers-reduced-motion`.

## Home

Ordem: Header → Hero → Projetos selecionados → Sobre mim → Como trabalho → Ferramentas e competências →
Vamos conversar → Rodapé. Os textos de cada seção estão nos componentes em `src/components/`.

- **Header:** cápsula de vidro levemente jateado, cor sólida (sem gradiente nem brilhos), alinhada ao conteúdo, com "Claudia / Mello" ao lado do C. Menu: Início (nunca "Home"),
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
