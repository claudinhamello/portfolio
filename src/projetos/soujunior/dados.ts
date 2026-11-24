// Conteúdo da página do Hackathon SouJunior (landing page do Apoia.se).
// Fontes: desafio, briefing de produto e regulamento oficiais (hackathon.soujunior.tech, edição set/2026),
// classificação da banca (PDF), auditoria competitiva, documentação de handoff, telas do Figma e relato da Claudia.
// Regras: não afirmar que a LP foi implementada pela SouJunior (só a vencedora seria adotada ou usada como
// referência). Os números que aparecem nas telas da LP são da LP, não afirmações deste case.

const pasta = '/projetos/soujunior';

export const links = {
  prototipo: 'https://play-scuff-51684122.figma.site/',
  briefing: 'https://hackathon.soujunior.tech/#/edicoes/2026-09/4_briefing_de_produto_novo_soujunior',
  apoiase: 'https://apoia.se/soujunior',
};

export const hero = {
  rotulo: 'Estudo de caso · Hackathon SouJunior · Landing page',
  titulo: 'Minha primeira squad:',
  tituloDestaque: 'uma landing page em 15 dias.',
  texto:
    'No primeiro hackathon da SouJunior, desenhei a landing page de doações da comunidade no Apoia.se, lado a lado com produto, desenvolvimento e QA. Squad multidisciplinar, remota e com prazo de verdade.',
  selo: 'Primeira experiência em squad multidisciplinar',
  imagem: `${pasta}/lp-hero.webp`,
  alt: 'Hero da landing page: "Pequenos apoios, grandes oportunidades" em fonte pixelada, com o mascote da SouJunior de mago e quatro personagens em pixel art olhando um castelo à noite',
  cracha: {
    imagem: `${pasta}/cracha.webp`,
    alt: 'Crachá do Hackathon SouJunior 2026 com o nome Clau Mello e o cargo UX/UI Designer, ao lado do mascote da SouJunior',
  },
};

export const ficha = [
  { rotulo: 'Contexto', texto: '1º Hackathon SouJunior, para profissionais juniores' },
  { rotulo: 'Período', texto: '11 a 24 de setembro de 2026' },
  { rotulo: 'Meu papel', texto: 'UX/UI Design: LP desktop e mobile, protótipo interativo e handoff' },
  { rotulo: 'Squad', texto: 'DevLevelUp: PM, PO, mentor, UX/UI, devs e QA' },
];

export const squad = {
  rotulo: 'A squad',
  titulo: 'Cada decisão passou por produto, design, código e qualidade.',
  texto:
    'Foi a minha primeira vez trabalhando em uma squad multidisciplinar. Reuniões on-line, dailys e um objetivo comum: entregar, em 15 dias, uma landing page que convencesse a comunidade a apoiar a SouJunior.',
  foto: {
    imagem: `${pasta}/daily-squad.webp`,
    alt: 'Videochamada da daily da Squad DevLevelUp, com nove integrantes sorrindo para a câmera',
    legenda: 'Uma das nossas dailys, por videochamada. Estou no canto superior esquerdo.',
  },
  /** Os papéis como personagens: os mesmos que desenhamos para a seção "Squad RPG co-op" da LP */
  papeis: [
    {
      papel: 'Product Manager',
      imagem: `${pasta}/personagem-pm.webp`,
      texto: 'Conduziu a direção da LP a partir do briefing e aprovou a versão final do design.',
    },
    {
      papel: 'UX/UI Designer',
      imagem: `${pasta}/personagem-ux-ui.webp`,
      texto: 'Meu papel: a LP no desktop e no mobile, o protótipo interativo e o handoff para os devs.',
      eu: true,
    },
    {
      papel: 'Developers',
      imagem: `${pasta}/personagem-dev.webp`,
      texto: 'Implementaram a LP. Acompanhei de perto para que o código seguisse fielmente o Figma.',
    },
    {
      papel: 'QA',
      imagem: `${pasta}/personagem-qa.webp`,
      texto: 'Testaram a entrega antes da submissão.',
    },
  ],
  apoio: ['Product Owner', 'Mentor'],
  /** Backlog de UX/UI no Notion da equipe de design (recriado a partir do print da época; o Notion saiu do ar) */
  backlog: {
    titulo: 'O backlog de UX/UI',
    texto:
      'Criei o espaço da equipe de design no Notion para organizar as entregas. No fim do hackathon, as sete estavam concluídas.',
    itens: [
      { titulo: 'Arquitetura e Lo-Fi', eu: true },
      { titulo: 'Wireframe Lo-Fi', eu: true },
      { titulo: 'Definição da paleta de cores', eu: true },
      { titulo: 'Definição tipográfica', eu: true },
      { titulo: 'Prototipagem em alta fidelidade', eu: true },
      { titulo: 'Construção do protótipo interativo', eu: true },
      { titulo: 'Ilustração do mascote', eu: false },
    ],
    legendaOutra: 'Outra pessoa de UX/UI, a partir do que pedi',
    direcoes:
      'Para o PM ter duas direções para escolher, numa call à noite ensinei a outra pessoa de UX/UI a escrever prompts e gerar uma segunda versão da LP. As duas ficaram parecidas, e a squad decidiu apresentar só a que eu construí.',
  },
  /** Como a squad trabalhou, do começo ao fim */
  rituais: [
    { titulo: 'Kickoff', texto: 'Na primeira reunião, a squad leu o briefing e definiu a direção da LP.' },
    { titulo: 'Dailys', texto: 'Encontros curtos por videochamada para alinhar o andamento e destravar o time.' },
    { titulo: 'Aprovação', texto: 'Fui iterando o design até chegar à versão que o PM aprovou.' },
    { titulo: 'Handoff', texto: 'Tokens de cor e tipografia documentados e um protótipo interativo para as animações.' },
    { titulo: 'Acompanhamento', texto: 'Mesmo longe de casa, orientei os devs pelo WhatsApp até a entrega.' },
  ],
};

export const desafio = {
  rotulo: 'O desafio',
  titulo: 'Uma landing page que transforme visitantes em apoiadores.',
  texto:
    'A SouJunior é uma comunidade voluntária que prepara juniores para o mercado com projetos reais e mentorias. Ela se mantém com o apoio da própria comunidade no Apoia.se, a partir de R$ 2,00. A equipe vencedora teria sua LP adotada ou usada como referência para a campanha oficial.',
  citacao: 'Não estamos buscando um formulário simples de doação. Queremos uma experiência visual e narrativa marcante!',
  fonteCitacao: 'Desafio oficial do hackathon',
  personas: [
    { titulo: 'Apoiador júnior', texto: 'Contribui com um valor simbólico e quer ver a comunidade crescer.' },
    { titulo: 'Voluntário ou mentor', texto: 'Já doa tempo e conhecimento; pode apoiar e engajar sua rede.' },
    { titulo: 'Empresas', texto: 'Querem entender o impacto real antes de patrocinar.' },
  ],
  criterios: [
    { titulo: 'UX/UI, criatividade e propósito', peso: 30 },
    { titulo: 'Qualidade de software e arquitetura', peso: 30 },
    { titulo: 'Acessibilidade e responsividade', peso: 20 },
    { titulo: 'Dinâmica de equipe e integração', peso: 20 },
  ],
  auditoria: {
    titulo: 'Uma auditoria que ninguém pediu',
    texto:
      'Antes de desenhar, analisei como comunidades e campanhas parecidas pedem apoio. O briefing não pedia isso, mas foi o que guiou as primeiras decisões.',
    linhas: [
      { ponto: 'Apoio financeiro', mercado: 'Botão de doação discreto, perdido no rodapé.', proposta: 'Meta e progresso da campanha à vista, mostrando onde cada real é investido.' },
      { ponto: 'As quatro disciplinas', mercado: 'Foco só em código.', proposta: 'Mostrar como produto, UX/UI, dev e QA trabalham juntos nas squads.' },
      { ponto: 'Acessibilidade', mercado: 'Modo escuro com pouco contraste e botões pequenos no celular.', proposta: 'Contraste mínimo de 4,5:1, área de toque de 48px e navegação por teclado.' },
      { ponto: 'Chamadas para ação', mercado: '"Clique aqui" e "Saiba mais".', proposta: 'CTAs claros, que dizem o que acontece: apoiar a partir de R$ 2,00.' },
    ],
  },
};

export interface SecaoLP {
  id: string;
  nome: string;
  requisito: string;
  texto: string;
  imagem: string;
  largura: number;
  altura: number;
  alt: string;
}

export const solucao = {
  rotulo: 'A landing page',
  titulo: 'Apoiar como quem sobe de nível.',
  texto:
    'Ser júnior é começar no nível 1. A LP conta a SouJunior como um jogo cooperativo em pixel art: a squad é um grupo de RPG, a carreira é uma jornada de níveis e cada apoio é o XP que faltava.',
  lema: 'Mais que apoio, é o próximo nível.',
  secoes: [
    {
      id: 'hero',
      nome: 'Hero',
      requisito: 'Responder em 5 segundos: por que apoiar?',
      texto: 'Título curto, a causa em uma frase e o CTA principal com o valor mínimo. Os personagens já apresentam o universo do jogo.',
      imagem: `${pasta}/lp-hero.webp`,
      largura: 1440,
      altura: 760,
      alt: 'Hero com o título "Pequenos apoios, grandes oportunidades", os botões "Apoiar a partir de R$ 2,00" e "Ver jornada de evolução" e o mascote de mago',
    },
    {
      id: 'comparacao',
      nome: 'Comparação de impacto',
      requisito: 'Transparência: para onde vai o dinheiro',
      texto: 'Doação desconectada lado a lado com um ecossistema ativo: o contraste explica o valor do apoio sem textão.',
      imagem: `${pasta}/lp-comparacao.webp`,
      largura: 1440,
      altura: 949,
      alt: 'Dois cartões comparando "Doação desconectada" e "Ecossistema ativo e transparente", com um CTA logo abaixo',
    },
    {
      id: 'jornada',
      nome: 'Jornada de evolução',
      requisito: 'Contar a causa com storytelling',
      texto: 'Cinco níveis, do iniciante ao pronto para o mercado. Os próximos aparecem bloqueados: o apoio é o que destrava.',
      imagem: `${pasta}/lp-jornada.webp`,
      largura: 1440,
      altura: 828,
      alt: 'Carrossel "Todo mundo começa pequeno: a jornada de evolução", com cinco cartões de nível e os quatro últimos bloqueados',
    },
    {
      id: 'squad-rpg',
      nome: 'Squad RPG co-op',
      requisito: 'Mostrar como a comunidade funciona',
      texto: 'PM, UX/UI, dev e QA como personagens de um mesmo grupo, na mesma plataforma: a ideia que veio da auditoria.',
      imagem: `${pasta}/lp-squad.webp`,
      largura: 1440,
      altura: 630,
      alt: 'Seção "Squad RPG co-op" com quatro personagens em pixel art identificados como Product Manager, UX/UI Designer, Developer e QA Engineer',
    },
    {
      id: 'impacto',
      nome: 'Impacto em números',
      requisito: 'Mural de dados e impacto real',
      texto: 'Contadores na fonte pixelada da marca do jogo, para os números da comunidade serem lidos de relance.',
      imagem: `${pasta}/lp-impacto.webp`,
      largura: 1440,
      altura: 600,
      alt: 'Três cartões de números: projetos em andamento, mentores ativos e colocações de mercado',
    },
    {
      id: 'vozes',
      nome: 'Vozes da comunidade',
      requisito: 'Prova social',
      texto: 'Depoimentos em carrossel, com selos de nível e de apoiador que conversam com o sistema de XP.',
      imagem: `${pasta}/lp-vozes.webp`,
      largura: 1440,
      altura: 870,
      alt: 'Carrossel de depoimentos com o cartão do meio em destaque',
    },
    {
      id: 'meta',
      nome: 'Meta e planos',
      requisito: 'CTA e níveis de contribuição',
      texto: 'A meta mensal como barra de progresso e três níveis de apoio, com o mais popular destacado.',
      imagem: `${pasta}/lp-meta.webp`,
      largura: 1440,
      altura: 860,
      alt: 'Seção "Meta de sustentabilidade e expansão" com uma barra de progresso da meta mensal e três cartões de apoio: básico, squad e patrocinador',
    },
    {
      id: 'rodape',
      nome: 'Rodapé',
      requisito: 'Integração com o ecossistema',
      texto: 'Links para Apoia.se, Discord, WhatsApp e GitHub, e o CTA mais uma vez, para quem chegou até o fim.',
      imagem: `${pasta}/lp-footer.webp`,
      largura: 1440,
      altura: 430,
      alt: 'Rodapé com links da comunidade, transparência e canais oficiais, e o botão "Apoiar a partir de R$ 2,00"',
    },
  ] as SecaoLP[],
  mobile: {
    titulo: 'No celular, uma página contínua',
    texto:
      'A versão mobile foi desenhada como um fluxo único, do hero ao rodapé: cartões empilhados, carrosséis com setas grandes e CTAs na largura da tela, fáceis de tocar com o polegar.',
    imagem: `${pasta}/lp-mobile.webp`,
    alt: 'Landing page completa no celular: hero com o título pixelado, comparação de impacto, jornada de evolução, banner de XP, squad RPG, números, depoimentos, meta de sustentabilidade com três planos e rodapé',
  },
};

export const designSystem = {
  rotulo: 'Design system e handoff',
  titulo: 'Um sistema enxuto, do tamanho de 15 dias.',
  texto:
    'Sem tempo para uma biblioteca completa, documentei o essencial para os devs: cores, tipografia por seção e o comportamento dos componentes.',
  cores: [
    { nome: 'Dark Obsidian', hex: '#090D16', uso: 'Fundo' },
    { nome: 'Ciano Neon', hex: '#00F0FF', uso: 'Primária, CTAs e destaques' },
    { nome: 'Violeta Elétrico', hex: '#8B5CF6', uso: 'Secundária e selos' },
    { nome: 'Vidro', hex: '#0F172A', uso: 'Cartões com 85% de opacidade' },
    { nome: 'Texto', hex: '#F8FAFC', uso: 'Títulos' },
    { nome: 'Texto de apoio', hex: '#CBD5E1', uso: 'Subtítulos e corpo' },
  ],
  fontes: [
    { nome: 'Press Start 2P', uso: 'Título do hero e contadores: a voz do jogo' },
    { nome: 'Plus Jakarta Sans', uso: 'Títulos de seção e CTAs' },
    { nome: 'Roboto Flex', uso: 'Textos corridos e subtítulos' },
    { nome: 'Sora', uso: 'Selos e badges' },
  ],
  mascote: {
    titulo: 'O mascote, em pixel art',
    texto: 'Para caber no universo do jogo, o mascote oficial da SouJunior ganhou uma versão em pixel art, usada no menu, nos CTAs e, de mago, no hero.',
    oficial: { imagem: `${pasta}/mascote-oficial.webp`, alt: 'Mascote oficial da SouJunior: um axolote azul de óculos, abraçando um coração' },
    pixel: { imagem: `${pasta}/mascote-pixel.webp`, alt: 'Versão em pixel art do mascote, de óculos e camiseta da SouJunior' },
  },
  prototipo: {
    titulo: 'Um protótipo para mostrar o movimento',
    texto:
      'Telas estáticas não mostram animação. Montei uma versão interativa no Figma Make para os devs verem como cada seção poderia se mover: contadores, carrosséis, estados de hover e a barra da meta.',
  },
  capa: {
    imagem: `${pasta}/capa-figma.webp`,
    alt: 'Capa do arquivo no Figma: "Squad DevLevelUp – Landing page do Apoia.se", com selos de nível, barra de XP e os papéis PM, UX/UI, Dev e QA',
    legenda: 'A capa que criei para o arquivo do Figma, com a identidade da squad.',
  },
};

export const aprendizados = {
  rotulo: 'Resultado e aprendizados',
  titulo: 'O que uma squad ensina.',
  resultado:
    'A 1ª edição reuniu 28 equipes e 149 participantes. Na avaliação da banca, UX/UI, criatividade e propósito foi o critério com a maior nota da nossa squad.',
  itens: [
    {
      titulo: 'Decidir em grupo',
      texto: 'O design deixa de ser só meu: a direção nasce na conversa com produto e vira acordo com devs e QA.',
    },
    {
      titulo: 'Comunicar à distância',
      texto: 'Com o time remoto e eu viajando, combinar canais e responder rápido manteve a implementação fiel ao Figma.',
    },
    {
      titulo: 'Prazo curto pede foco',
      texto: 'Em 15 dias, priorizar o que o briefing exigia e documentar só o necessário fez a entrega caber no tempo.',
    },
  ],
  ia: 'O hackathon começou na semana das minhas férias em Santa Catarina, com trilhas já programadas. Para conseguir entregar, passei ao Figma AI a direção definida pela squad e o briefing da banca, e fui pedindo ajustes até a versão que o PM aprovou. Também usei o Figma Make para o protótipo interativo das animações. As ilustrações em pixel art, como os personagens e o castelo, foram geradas com IA pelo PM da squad.',
};
