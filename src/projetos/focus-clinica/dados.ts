// Conteúdo da página da Focus Clínica. Fonte: especificação de conteúdo enviada pela Claudia.
// Regras: projeto fictício, em voluntariado; sem métricas, pesquisas ou resultados inventados.

const pasta = '/projetos/focus-clinica';

export const links = {
  landingPage: 'https://focus-clinica.vercel.app',
  figma: 'https://www.figma.com/design/ctNGaNMeS665UBKFjH1aiX/Focus-Clinica---LP?node-id=53-7&t=MAVVDoGOOJBESSwt-1',
  postLinkedin: 'https://lnkd.in/p/dZ5aaYHA',
};

export const hero = {
  rotulo: 'Estudo de caso · Landing page · Focus Clínica',
  titulo: 'Uma landing page para',
  tituloDestaque: 'apresentar um SaaS de gestão clínica.',
  texto:
    'Projeto voluntário na Focus Tecnologia: do briefing à interface no Figma, com acompanhamento da implementação junto a três desenvolvedores juniores.',
  aviso: 'Projeto fictício · desenvolvido em voluntariado',
  // Captura do header e do hero da landing page, numa janela de navegador
  imagem: `${pasta}/detalhe-hero.webp`,
  largura: 1895,
  altura: 899,
  alt: 'Header e hero da landing page da Focus Clínica: “Cuidar de pessoas também é organizar melhor.”, com uma médica e a prévia da agenda da plataforma',
};

export const ficha = [
  { rotulo: 'Meu papel', texto: 'UI/UX Design e acompanhamento da implementação' },
  { rotulo: 'Equipe', texto: 'Eu no design e três desenvolvedores juniores' },
  { rotulo: 'Prazo', texto: '14 dias, do briefing à landing page' },
  { rotulo: 'Ferramentas', texto: 'Figma e IA como apoio na organização de ideias' },
];

export const contexto = {
  rotulo: 'Contexto',
  titulo: 'Um sistema fictício, uma página de verdade.',
  paragrafos: [
    'O Focus Clínica é o conceito de um sistema que centraliza as atividades administrativas e operacionais de clínicas e profissionais da saúde. É um projeto fictício, criado em contexto de voluntariado na Focus Tecnologia.',
    'Meu trabalho foi a landing page institucional que apresenta essa proposta: comunicar as funcionalidades, mostrar a interface e convidar quem visita a conhecer a plataforma.',
  ],
  publico: {
    rotulo: 'Público definido no briefing',
    itens: ['Clínicas', 'Gestores de clínicas', 'Profissionais da saúde'],
  },
};

export const desafio = {
  rotulo: 'O desafio',
  titulo: 'Transformar um briefing em uma página clara, profissional e atrativa.',
  texto: 'O trabalho partiu de um briefing já definido. A página precisava equilibrar três objetivos:',
  objetivos: [
    'Comunicar rapidamente o que é o sistema e para quem ele foi pensado.',
    'Apresentar funcionalidades e benefícios sem sobrecarregar a experiência.',
    'Usar demonstrações visuais da plataforma para tornar a proposta mais tangível.',
  ],
};

export const atuacao = {
  rotulo: 'Minha atuação',
  titulo: 'Do briefing à interface, e da interface ao código.',
  texto:
    'Fui responsável pela concepção da interface no Figma e pelo acompanhamento da implementação junto à equipe de desenvolvimento.',
  grupos: [
    {
      titulo: 'Estrutura',
      itens: [
        'Interpretação do briefing e organização dos requisitos',
        'Estruturação das seções da landing page',
        'Hierarquia visual e organização dos conteúdos',
        'Wireframes',
      ],
    },
    {
      titulo: 'Interface',
      itens: [
        'Proposta visual no Figma',
        'Identidade da Focus Clínica: verde, azul-petróleo e branco',
        'Tipografia moderna e legível',
        'Componentes e elementos visuais',
      ],
    },
    {
      titulo: 'Entrega',
      itens: [
        'Versões desktop, tablet e mobile',
        'Revisão e apresentação da proposta antes da implementação',
        'Acompanhamento da implementação',
      ],
    },
  ],
};

export const solucao = {
  rotulo: 'A solução',
  titulo: 'A página publicada, em três tamanhos de tela.',
  texto:
    'A versão publicada ficou mais completa que o escopo inicial do briefing. Role dentro de cada tela para ver a página inteira.',
  versoes: [
    { id: 'desktop', rotulo: 'Desktop', imagem: `${pasta}/pagina-desktop.webp`, largura: 'max-w-[1040px]' },
    { id: 'tablet', rotulo: 'Tablet', imagem: `${pasta}/pagina-tablet.webp`, largura: 'max-w-[600px]' },
    { id: 'mobile', rotulo: 'Mobile', imagem: `${pasta}/pagina-mobile.webp`, largura: 'max-w-[340px]' },
  ],
  estruturaRotulo: 'O que a página apresenta',
  estrutura: [
    { titulo: 'Header e navegação', texto: 'Identidade visual, links entre as seções e acesso à plataforma.' },
    {
      titulo: 'Hero',
      texto: 'Proposta de valor, com título de impacto, texto de apoio, chamadas para ação e a interface em destaque.',
    },
    {
      titulo: 'Apresentação do produto',
      texto: 'Como a centralização das informações contribui para uma rotina clínica mais organizada.',
    },
    {
      titulo: 'Funcionalidades',
      texto:
        'Agenda e agendamentos, notificações e lembretes, especialidades, prontuários e histórico, informações administrativas e financeiras.',
    },
    { titulo: 'Demonstração da plataforma', texto: 'Capturas e composições da interface que contextualizam as funcionalidades.' },
    {
      titulo: 'Benefícios',
      texto: 'Organização, praticidade, informações centralizadas e menos tarefas repetitivas.',
    },
    { titulo: 'Chamada para ação', texto: 'Convite para conhecer a plataforma e iniciar o contato.' },
    { titulo: 'Rodapé', texto: 'Identificação do projeto, navegação complementar e informações institucionais.' },
  ],
  avisoNumeros: 'Os números exibidos na landing page são ilustrativos: o Focus Clínica não é um produto em operação.',
};

export const decisoes = {
  rotulo: 'Decisões de design',
  titulo: 'Uma experiência coerente com tecnologia aplicada à saúde.',
  texto:
    'As cores vieram do briefing da Focus Tecnologia. A estrutura, a hierarquia e as demais escolhas visuais da página foram propostas minhas.',
  // Não inventar justificativas: só o que a Claudia confirmou
  aspectos: [
    { titulo: 'Identidade e paleta', texto: 'Verde, azul-petróleo e branco, definidos no briefing da Focus Tecnologia.' },
    { titulo: 'Hierarquia da informação', texto: 'Organização dos conteúdos para leitura rápida.' },
    { titulo: 'Texto e interface juntos', texto: 'Relação entre o conteúdo textual e as demonstrações da plataforma.' },
    { titulo: 'Consistência visual', texto: 'Os mesmos padrões de elementos ao longo da página.' },
    { titulo: 'Chamadas para ação', texto: 'Organização dos convites para conhecer a plataforma.' },
    { titulo: 'Responsividade', texto: 'Adaptação do conteúdo para desktop, tablet e mobile.' },
  ],
  apresentacao: {
    rotulo: 'Como apresentei no Figma',
    titulo: 'As três versões lado a lado, sem depender de um protótipo.',
    texto:
      'Com um prazo de 14 dias, escolhi concentrar o tempo nas interfaces em vez de um protótipo navegável. Organizei desktop, tablet e mobile em frames verticais completos, lado a lado, para comparar as adaptações de layout e ver a experiência inteira sem depender de interações, e sem que a avaliação dependesse de um protótipo funcionando bem ao abrir.',
  },
  paleta: {
    rotulo: 'Paleta · tema claro e tema escuro',
    imagens: [
      {
        imagem: `${pasta}/paleta-light.webp`,
        alt: 'Paleta da Focus Clínica no tema claro: primária #1B6B51, secundária #4C6359, terciária #3E6374, erro #BA1A1A e cores de superfície',
      },
      {
        imagem: `${pasta}/paleta-dark.webp`,
        alt: 'Paleta da Focus Clínica no tema escuro: primária #8BD6B6, secundária #B3CCBF, terciária #A6CCDE, erro #FFB4AB e cores de superfície',
      },
    ],
  },
};

export const colaboracao = {
  rotulo: 'Colaboração com desenvolvimento',
  titulo: 'O design não terminou na entrega do Figma.',
  texto:
    'Acompanhei três desenvolvedores juniores na implementação da proposta aprovada. As decisões técnicas e a programação foram deles; o meu papel foi manter o design e o código conversando.',
  itens: [
    'Esclarecer dúvidas sobre a interface',
    'Alinhar decisões com os desenvolvedores',
    'Acompanhar a implementação',
    'Verificar a fidelidade visual em relação ao Figma',
    'Orientar os ajustes necessários durante a construção',
  ],
  // Cargos como aparecem no rodapé da própria landing page
  equipe: [
    { nome: 'Danielle Braga', papel: 'Full Stack Developer · Front End', linkedin: 'https://www.linkedin.com/in/daniellebbraga/' },
    { nome: 'José Luiz Neto', papel: 'Desenvolvedor Web Full Stack', linkedin: 'https://www.linkedin.com/in/joseluizneto/' },
    {
      nome: 'Jonathan Laureano Lima',
      papel: 'Desenvolvimento de Aplicações Web',
      linkedin: 'https://www.linkedin.com/in/jonathan-laureano-lima/',
    },
  ],
};

export const resultado = {
  rotulo: 'Resultado',
  titulo: 'Uma landing page publicada e responsiva.',
  texto:
    'A página apresenta o produto, demonstra a plataforma e organiza as informações em uma navegação que se adapta ao tamanho da tela.',
  detalhes: [
    { imagem: `${pasta}/detalhe-funcionalidades.webp`, legenda: 'Funcionalidades' },
    { imagem: `${pasta}/detalhe-demonstracao.webp`, legenda: 'Demonstração da plataforma' },
    { imagem: `${pasta}/detalhe-beneficios.webp`, legenda: 'Benefícios' },
    { imagem: `${pasta}/detalhe-cta.webp`, legenda: 'Chamada para ação' },
  ],
};

export const aprendizados = {
  rotulo: 'Aprendizados',
  titulo: 'O que levo deste projeto.',
  reflexoes: [
    {
      titulo: 'Autonomia e colaboração podem caminhar juntas.',
      texto:
        'Conduzir o design não significa deixar de ouvir outras perspectivas. Algumas contribuições enriqueceram o resultado e me lembraram de manter abertura ao diálogo, mesmo à frente das decisões de design.',
    },
    {
      titulo: 'Flexibilidade também faz parte do processo de design.',
      texto:
        'Nem sempre a direção escolhida é exatamente a que imaginamos no início. Saber acolher decisões, me adaptar e buscar a melhor solução possível também é crescer como profissional.',
    },
  ],
  divergencia: {
    rotulo: 'Na prática',
    texto:
      'Eu preferia o tema claro, que representa melhor uma clínica; parte do grupo preferia uma proposta mais voltada ao tema escuro. Apresentei meus motivos, ouvi os argumentos de cada um e, juntos, concluímos que o tema claro era o melhor para o SaaS.',
  },
  tecnicos: [
    'Transformar um briefing em uma experiência digital estruturada',
    'Desenhar a apresentação de um produto SaaS',
    'Equilibrar comunicação, hierarquia visual e conversão',
    'Acompanhar a implementação e lidar com ajustes durante o desenvolvimento',
  ],
  post: 'Compartilhei essas reflexões no LinkedIn',
};
