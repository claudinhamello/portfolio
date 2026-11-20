// Conteúdo da página do BeReady. Textos vindos da versão do Wix (prints em Documentos/Claudia/prints).

const pasta = '/projetos/beready';
// Telas do app: 360 px de largura no Figma; `altura` é a altura da tela exportada.

export const links = {
  // Preencha com o link do protótipo. Vazio = o botão "Ver protótipo no Figma" não aparece.
  prototipoFigma: '',
};

export const hero = {
  rotulo: 'Estudo de caso · App Android · BeReady',
  titulo: 'Sua família,',
  tituloDestaque: 'sempre preparada.',
  texto:
    'O BeReady ajuda famílias a montar, organizar e manter mochilas de emergência: o que falta, o que vence e quando agir, sem complicação e sem desperdício.',
  status: 'Em desenvolvimento · alta fidelidade em andamento',
  imagem: `${pasta}/hero-inicio.webp`,
  altura: 852,
};

export const ficha = [
  { rotulo: 'Meu papel', texto: 'UX/UI: pesquisa, fluxos, protótipo, testes de usabilidade e decisões de experiência' },
  { rotulo: 'Equipe', texto: 'Eu no design e Fabiano no desenvolvimento Android nativo' },
  { rotulo: 'Ferramentas', texto: 'Figma, Material Design 3, Google Forms, Trello e IA como apoio à análise' },
  { rotulo: 'Período', texto: 'Pesquisa e testes em 2026 · hoje na alta fidelidade' },
];

export const problema = {
  rotulo: 'O problema',
  titulo: ['Montar a mochila cansa.', 'Manter, quase ninguém mantém.'],
  cards: [
    {
      titulo: 'Não sabem por onde começar',
      texto: 'O assunto parece grande demais, e a falta de um primeiro passo claro faz muita gente adiar.',
    },
    {
      titulo: 'Caro e demorado',
      texto: 'Preparar o kit custa tempo e dinheiro, principalmente em famílias com mais de quatro pessoas.',
    },
    {
      titulo: 'A manutenção é esquecida',
      texto: 'Água, alimentos e remédios têm validade, e ninguém acompanha isso no dia a dia.',
    },
    {
      titulo: 'Vencido só na hora de usar',
      texto: 'Muita gente descobre o vencimento quando precisa do item, além do desperdício de comprar de novo.',
    },
  ],
  surpresa: {
    rotulo: 'O que mais me surpreendeu',
    texto:
      'Eu esperava que montar a mochila fosse a parte fácil. Nas entrevistas, o que ouvi foi o contrário: dá tanto trabalho que alguns ainda nem tinham uma.',
  },
};

export const pesquisa = {
  rotulo: 'Pesquisa e testes',
  titulo: 'Do que as pessoas disseram ao que elas conseguiram fazer.',
  metricas: [
    { valor: '7', legenda: 'respostas na pesquisa qualitativa' },
    { valor: '13', legenda: 'respostas na pesquisa quantitativa' },
    { valor: '7', legenda: 'formulários de teste de usabilidade (ago-set/2026)' },
  ],
  texto:
    'Os testes foram remotos e sem moderador, aplicados por Google Forms entre agosto e setembro de 2026, com uma etapa por fluxo. Cada participante recebeu um código, sem identificação por nome. Usei IA para apoiar a análise das respostas, e as decisões de produto continuam sendo minhas.',
  resultados: [
    {
      titulo: 'Onboarding',
      texto:
        'Os 5 participantes descreveram corretamente para que serve o app só com as telas iniciais. O interesse em criar a primeira mochila ficou em 4,0 de 5, em média.',
    },
    { titulo: 'Criar mochila', texto: 'Os 5 avaliaram a navegação como fluida, e a facilidade ficou em 4,2 de 5.' },
    { titulo: 'Adicionar item', texto: 'Recebeu notas 4 e 5.' },
  ],
  fluxosIntro: 'Os fluxos centrais foram entendidos sem esforço. Os testes cobriram:',
  fluxos: ['Onboarding', 'Criar mochila', 'Adicionar item', 'Etiqueta', 'Alertas', 'Internet (Google Shopping)', 'Lista'],
};

export const produto = {
  rotulo: 'O produto',
  titulo: 'Cada tela existe para reduzir um esforço.',
  telas: [
    {
      titulo: 'Início',
      texto: 'Alertas de validade e mochilas com pendências, com ação rápida para resolver.',
      imagem: `${pasta}/tela-inicio.webp`,
      altura: 876,
    },
    {
      titulo: 'Uma mochila por pessoa',
      texto: 'Cada membro da família tem a sua, com itens, etiquetas de localização e validade.',
      imagem: `${pasta}/tela-mochila.webp`,
      altura: 816,
    },
    {
      titulo: 'Montagem guiada',
      texto: 'Dê um nome, escolha uma lista pronta ou monte a sua.',
      imagem: `${pasta}/tela-criar-mochila.webp`,
      altura: 1212,
    },
    {
      titulo: 'Status de cada item',
      texto: 'Vencido, vencendo, ok ou faltando, com edição direta.',
      imagem: `${pasta}/tela-status-itens.webp`,
      altura: 818,
    },
    {
      titulo: 'Listas reutilizáveis',
      texto: 'Padrão, Idoso, Criança ou personalizada, prontas para novas mochilas.',
      imagem: `${pasta}/tela-listas.webp`,
      altura: 910,
    },
    {
      titulo: 'Alertas e nuvem',
      texto: 'Avisos com 7, 15 ou 30 dias de antecedência e sincronização na nuvem.',
      imagem: `${pasta}/tela-configuracoes.webp`,
      altura: 800,
    },
  ],
};

export const iteracoes = {
  rotulo: 'Iterações após os testes',
  titulo: 'O que os testes mostraram e o que vamos mudar.',
  texto:
    'Cada etapa teve entre 1 e 9 respostas, então trato tudo como sinal qualitativo para orientar decisões, não como estatística. Aqui está tudo o que foi apontado. As mudanças serão aplicadas quando eu construir as telas de alta fidelidade, junto com o novo visual.',
  itens: [
    {
      curto: 'Etiquetas',
      titulo: 'Etiquetas: boa ideia, conceito escondido',
      apareceu:
        '2 de 5 participantes ficaram em dúvida ao criar a mochila: um queria criar etiquetas depois de escolher uma lista pronta e não conseguiu, outro não entendeu para que serviam, já que existe a lista de itens. No teste dedicado, 1 de 3 não achou a aba Etiquetas e estranhou a separação entre Itens e Etiquetas. Ele também duvidou que alguém consulte o app numa emergência, enquanto os outros dois disseram que saber o bolso exato ajuda muito.',
      direcao:
        'A etiqueta vira um atributo opcional do próprio item, adicionada ao tocar nele, com um nome mais direto (por exemplo, “Local na mochila”), explicada na primeira vez que aparece e disponível também quando a mochila nasce de uma lista pronta.',
    },
    {
      curto: 'Ao salvar, ver a lista',
      titulo: 'Ao salvar, as pessoas querem ver a lista',
      apareceu:
        '4 de 5 esperavam ver a lista detalhada de itens logo após salvar a mochila. Um esperava voltar à tela inicial.',
      direcao: 'Levar direto para a mochila recém-criada, com acesso rápido à tela inicial.',
    },
    {
      curto: 'Data de validade',
      titulo: 'Data de validade: atrito no ponto central',
      apareceu:
        'Um participante relatou que o protótipo travou ao informar a validade, e outro citou “colocar data” como dificuldade ao adicionar item. Na criação de lista, um não percebeu que marcar “É perecível” leva ao pedido da data.',
      direcao:
        'Um seletor de data mais simples, com atalhos para os casos comuns (por exemplo, só mês e ano), e o rótulo “É perecível” trocado por algo como “Tem data de validade?”, com uma frase de apoio.',
    },
    {
      curto: 'Notificações',
      titulo: 'Notificações precisam de contexto',
      apareceu:
        '3 de 5 escolheram “Agora não” ao pedido de notificações no fim do onboarding, preferindo explorar o app antes de dar permissões. Na etapa de alertas, uma pessoa teve receio de excesso de notificações e dúvida se o lembrete havia sido salvo (resposta de um só participante, a validar no próximo teste).',
      direcao:
        'Pedir a permissão quando ela faz sentido, por exemplo ao cadastrar o primeiro item com validade, com confirmação visível ao salvar um lembrete e controle de frequência.',
    },
    {
      curto: 'Ações externas',
      titulo: 'Ações externas precisam ser transparentes',
      apareceu:
        'Os dois participantes que usaram o botão do Google Shopping só perceberam que sairiam do app depois de clicar. Um achou muito útil, outro preferiria pesquisar por conta própria. As sugestões foram um botão simples de remover o item vencido e a opção de adiar a reposição, para quem prefere comprar presencialmente.',
      direcao:
        'Indicar com rótulo e ícone que é um link externo e oferecer remover, adiar e comprar como ações de peso equivalente.',
    },
    {
      curto: 'Listas',
      titulo: 'Listas: partir de uma base',
      apareceu:
        'Um participante teve dificuldade para achar onde criar uma lista personalizada, e outro queria usar uma lista pronta e só ajustar alguns itens. Dois sentiram falta de perfis como animais de estimação e pessoas com deficiência.',
      direcao:
        'Criar lista a partir de uma lista existente e deixar a ação “Criar lista” mais visível. Novos perfis entram no backlog.',
    },
    {
      curto: 'Nome da mochila',
      titulo: 'Nome da mochila',
      apareceu:
        'Dois participantes não conseguiram digitar o nome da mochila, porque o campo estava fixo no protótipo. Foi uma limitação da prototipação, não do fluxo.',
      direcao: 'Na alta fidelidade o campo será editável e o fluxo volta a ser testado.',
    },
  ],
  tambemOuvi: {
    rotulo: 'Também ouvi',
    titulo: 'Ideias para depois',
    texto:
      'Um participante quis criar mochilas para todos da família e ver, numa lista única, o que deve ter em casa, para comprar de uma vez o que se repete. Guardei para uma próxima versão. Dois comentaram a cor do onboarding, o que entra na definição do visual.',
  },
};

export const designSystem = {
  rotulo: 'Design system',
  titulo: 'Uma base visual para a alta fidelidade.',
  texto:
    'O design system da alta fidelidade parte do Material Design 3, com modo claro e escuro. Os componentes serão construídos junto com as telas, e aqui já estão as fundações: tipografia e cores.',
  tipografia: {
    titulo: 'Tipografia',
    texto:
      'Quatro papéis: Kanit para destaques, Plus Jakarta Sans para títulos, Roboto para o corpo e Roboto Condensed para etiquetas. Pedi uma direção de tipografia pensada para o produto e, depois de assistir a vídeos de designers mais experientes sobre o tema, escolhi entre as opções as que mais gostamos visualmente.',
    imagem: `${pasta}/ds-tipografia.webp`,
    alt: 'Card de tipografia do BeReady: Kanit (display), Plus Jakarta Sans (títulos), Roboto (corpo) e Roboto Condensed (etiquetas), com pesos e tamanhos.',
  },
  cores: {
    titulo: 'Cores, no claro e no escuro',
    texto:
      'Primária, secundária e terciária mudam com o tema. Já as cores de status dos itens (âmbar para vencendo, vermelho para vencidos, laranja para faltando) são fixas: o significado não muda com o tema. Item vencido também nunca usa a cor de erro do sistema, para não misturar uma falha de validação com o estado de um item.',
    claro: {
      imagem: `${pasta}/ds-cores-claro.webp`,
      alt: 'Color System do BeReady no modo claro: primária #65558F, secundária #006876, terciária #006973, camadas de superfície e cores de status dos itens.',
    },
    escuro: {
      imagem: `${pasta}/ds-cores-escuro.webp`,
      alt: 'Color System do BeReady no modo escuro: primária #CFBDFE, secundária #82D3E2, terciária #81D3DF, camadas de superfície e cores de status dos itens.',
    },
  },
};

export const proximosPassos = {
  rotulo: 'Próximos passos',
  titulo: 'O projeto segue em andamento.',
  cards: [
    {
      titulo: 'Alta fidelidade',
      texto: 'Construir as telas aplicando as mudanças dos testes, com o novo visual e os componentes do design system.',
    },
    {
      titulo: 'Nova rodada de testes',
      texto: 'Depois das telas, um teste focado em etiquetas, data de validade e alertas, as etapas com menos respostas.',
    },
    { titulo: 'Google Play', texto: 'É um app real, e a publicação na Play Store está nos planos.' },
    {
      titulo: 'Backlog',
      texto:
        'Lista única da casa para toda a família, novos perfis de lista (animais de estimação e pessoas com deficiência) e a recomendação de compra online de itens vencidos, ainda em discussão.',
    },
  ],
};

export const equipe = {
  rotulo: 'A equipe',
  pessoas: [
    {
      nome: 'Claudia Ferreira de Mello',
      cargo: 'UX/UI Designer · Product Designer',
      texto: 'Da pesquisa inicial ao teste de usabilidade, tudo menos o código.',
      linkedin: 'https://www.linkedin.com/in/claudia-ferreira-de-mello',
    },
    {
      nome: 'Fabiano Augusto de Mello',
      cargo: 'Engenheiro de software',
      texto: 'Android nativo com Kotlin, Jetpack Compose e acessibilidade.',
      linkedin: 'https://www.linkedin.com/in/fabiano-augusto-de-mello',
    },
  ],
};
