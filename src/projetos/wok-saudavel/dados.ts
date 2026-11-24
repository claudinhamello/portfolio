// Conteúdo da página do Wok Saudável.
// Fontes: estudo de caso original (PDF, dez/2023), página do Wix, diagrama de afinidade, post-its do "Como podemos",
// wireframes digitalizados, mapa do fluxo e telas mobile de alta fidelidade.
// As telas mobile foram redesenhadas depois, com apoio de IA. A pesquisa e os testes são de 2023.

const pasta = '/projetos/wok-saudavel';

export const links = {
  prototipo:
    'https://www.figma.com/proto/dLMJMXYs1JgO5bRk70xsgB/App-Wok-Saud%C3%A1vel?node-id=661-2147&p=f&t=wZE1DkWEP2d7zZCm-1&scaling=scale-down&content-scaling=fixed&page-id=53%3A470&starting-point-node-id=658%3A1910',
};

export const hero = {
  rotulo: 'Estudo de caso · App e site responsivo · UX Design',
  titulo: 'Cozinhar bem,',
  tituloDestaque: 'mesmo com pouco tempo.',
  texto:
    'Um app e site responsivo para quem tem a rotina apertada e quer comer melhor: receitas rápidas, simples e que podem ser congeladas, com lembretes e incentivos para manter o hábito.',
  telaFrente: { imagem: `${pasta}/tela-inicio.webp`, altura: 886, alt: 'Tela inicial do Wok Saudável: "Bom dia, Juliana! O que você quer preparar hoje?", busca por receita ou ingrediente e categorias como Receitas fáceis, Hoje só salada e Receitas para congelar' },
  telaFundo: { imagem: `${pasta}/tela-boas-vindas.webp`, altura: 721, alt: 'Tela de boas-vindas do Wok Saudável, com a foto de um wok com legumes e os botões criar conta e entrar' },
};

/** Ficha do projeto no formato de ficha de receita */
export const ficha = [
  { rotulo: 'Tempo de preparo', texto: 'Novembro a dezembro de 2023' },
  { rotulo: 'Rende', texto: 'App e site responsivo' },
  { rotulo: 'Quem cozinhou', texto: 'Eu: pesquisa, ideação, wireframes, protótipos e testes' },
  { rotulo: 'Origem', texto: 'Certificado Google UX Design' },
];

export const entender = {
  rotulo: 'Entender',
  titulo: 'Quem quer comer bem esbarra no tempo e na falta de ideias.',
  texto:
    'Conduzi entrevistas com 8 pessoas sobre hábitos alimentares, dificuldades na cozinha e o uso de apps de receitas, e organizei o que ouvi em mapas de empatia. O resultado: frustração, comida industrializada e a sensação de que cozinhar saudável é complicado demais.',
  dores: [
    'Apps e sites de receitas complexos e confusos',
    'Receitas com ingredientes caros ou difíceis de achar',
    'Falta de criatividade para variar o cardápio',
    'Desânimo para manter uma rotina saudável',
    'Dúvida sobre o que pode ser congelado',
    'Esquecer o horário das refeições',
  ],
};

export const personas = [
  {
    nome: 'Carmem Ferraz',
    perfil: '61 anos · aposentada · São Paulo/SP',
    imagem: `${pasta}/persona-carmem.webp`,
    alt: 'Carmem, uma senhora de cabelos grisalhos, de avental, preparando uma salada na cozinha',
    frase: 'É um desafio ser mãe, avó e ainda ter tempo para manter uma vida saudável. Porém, com esforço é possível.',
    contexto:
      'Ajuda as filhas a criar os netos e, mesmo aposentada, tem a rotina apertada. Não tem computador: vê receitas no celular. Já desistiu de programas de alimentação por causa de receitas complicadas.',
    metas: ['Ver as receitas com praticidade e rapidez', 'Ter incentivo para manter a regularidade'],
    frustracoes: ['Falta força de vontade para cozinhar só para si', 'Rotina apertada cuidando dos netos'],
  },
  {
    nome: 'Juliana Zimmermann',
    perfil: '46 anos · designer de interiores · São Paulo/SP',
    imagem: `${pasta}/persona-juliana.webp`,
    alt: 'Juliana, uma mulher de macacão jeans, comendo uma salada numa mesa cheia de legumes e frutas',
    frase: 'Quero ter uma alimentação que me traga satisfação.',
    contexto:
      'Trabalha com o marido na área de construção e tem uma rotina corrida. Quer comer de forma variada para cuidar melhor do diabetes, em qualquer dispositivo.',
    metas: ['Receitas rápidas e que possam ser congeladas', 'Manter o diabetes equilibrado'],
    frustracoes: ['Enjoa rápido do que cozinha', 'Acaba comprando comida pronta'],
  },
];

export const processo = {
  rotulo: 'Idear e testar',
  titulo: 'Das ideias no papel ao teste com usuários.',
  ideacao: {
    titulo: 'Como podemos…?',
    texto:
      'Transformei as dores em perguntas “Como podemos” e anotei as ideias em post-its. Cada uma ganhou uma etiqueta: o que já existia nos concorrentes e o que seria novo. As novas viraram oito telas desenhadas à mão.',
    postits: {
      imagem: `${pasta}/como-podemos.webp`,
      alt: 'Quadro "Como podemos – App/Site Wok Saudável" com doze post-its de ideias, como buscar receitas pelo ingrediente, player de áudio, receitas para congelar, receitas com pouco açúcar para pessoas diabéticas e marcar a data em que fez a receita, cada um com a etiqueta "Novo" ou "Já existe"',
    },
    rascunhos: {
      imagem: `${pasta}/crazy-eights.webp`,
      alt: 'Oito rascunhos de tela: busca por ingrediente, lista de compras com itens faltantes, receitas para congelar, receitas para diabéticos, programar dia de cozinhar, registrar receita feita com aviso para repetir, receitas encontradas e player de áudio',
      legenda: 'Crazy eights: oito telas em oito minutos, aqui digitalizadas.',
    },
  },
  estudo: {
    titulo: 'Estudo de usabilidade',
    parametros: ['Moderado', 'Remoto, no Brasil', '5 participantes', '30 a 60 minutos'],
    rodadas: [
      {
        titulo: '1ª rodada',
        itens: [
          'Querem digitar os ingredientes que têm em casa e encontrar receitas',
          'Preferem receitas rápidas e que possam ser congeladas',
          'Pedem um lembrete para a hora certa de comer',
        ],
      },
      {
        titulo: '2ª rodada',
        itens: [
          'Um campo de observações para ajustar a receita',
          'Marcar a data do preparo, para não repetir o cardápio',
          'Ouvir a receita em áudio durante o preparo',
        ],
      },
    ],
    afinidade: {
      imagem: `${pasta}/diagrama-de-afinidade.webp`,
      alt: 'Diagrama de afinidade com notas dos participantes em três grupos: Funcionalidade, Usabilidade e Conteúdo. Exemplos: "Preciso de uma função para me ajudar a variar o cardápio" e "Poderia ter receitas com ingredientes apropriados para congelar"',
      legenda: 'As anotações dos testes, agrupadas por funcionalidade, usabilidade e conteúdo.',
    },
  },
  mudancas: [
    {
      titulo: 'Lembretes à vista',
      texto:
        'Os participantes queriam lembretes mais visíveis, como o alarme para comer e o prazo para repetir a receita. Eles saíram do menu de aplicações e foram para o registro do preparo.',
      antes: { imagem: `${pasta}/antes-notificacoes.webp`, alt: 'Antes: wireframe com as notificações escondidas num menu sobreposto' },
      depois: {
        imagem: `${pasta}/tela-registrar-preparo.webp`,
        altura: 703,
        alt: 'Depois: tela de registro do preparo com os campos "Quando deseja repetir essa receita?" e "Ativar lembrete de refeição"',
      },
    },
    {
      titulo: 'Receita para ouvir',
      texto:
        'Para quem tem a visão limitada, ou as mãos ocupadas no fogão, a receita ganhou um player de áudio: o ícone de fone fica ao lado do tempo de preparo.',
      antes: { imagem: `${pasta}/antes-audio.webp`, alt: 'Antes: wireframe da receita só com texto' },
      depois: {
        imagem: `${pasta}/tela-receita.webp`,
        altura: 868,
        alt: 'Depois: receita de frango grelhado com o ícone de fone ao lado do tempo, das porções e do nível',
      },
    },
  ],
};

export interface PassoFluxo {
  titulo: string;
  texto: string;
  imagem: string;
  /** Altura da tela com 360 de largura */
  altura: number;
  alt: string;
}

export const solucao = {
  rotulo: 'A solução',
  titulo: 'Do “o que eu faço hoje?” à receita registrada.',
  texto: 'Siga o modo de preparo: cada passo é uma tela do protótipo de alta fidelidade.',
  passos: [
    {
      titulo: 'Boas-vindas',
      texto: 'Uma entrada curta, com a promessa do app: cozinhar bem transforma a rotina.',
      imagem: `${pasta}/tela-boas-vindas.webp`,
      altura: 721,
      alt: 'Tela de boas-vindas com a foto de um wok com legumes, o título "Bem-vindo ao Wok Saudável" e os botões criar conta e entrar',
    },
    {
      titulo: 'O que preparar hoje',
      texto:
        'Busca por receita ou por ingrediente, para cozinhar com o que já tem em casa. Logo abaixo, as categorias que vieram da pesquisa: fáceis, saladas, para congelar, controle do açúcar e agendar o dia de preparo.',
      imagem: `${pasta}/tela-inicio.webp`,
      altura: 886,
      alt: 'Tela inicial com saudação, busca por receita ou ingrediente e cartões de categorias',
    },
    {
      titulo: 'Sugestões para você',
      texto: 'Para quem está sem ideia, sugestões prontas, com tempo de preparo e dificuldade à vista.',
      imagem: `${pasta}/tela-sugestoes.webp`,
      altura: 886,
      alt: 'Janela "Sugestões para você" com seis receitas, como frango grelhado com legumes em 20 minutos e omelete de espinafre em 10 minutos, todas fáceis',
    },
    {
      titulo: 'Receitas fáceis',
      texto: 'Filtros por tempo, porções, nível e avaliação. Cada receita mostra o essencial antes do clique.',
      imagem: `${pasta}/tela-receitas-faceis.webp`,
      altura: 1113,
      alt: 'Lista de receitas fáceis com filtros no topo e cartões com foto, descrição, tempo, porções, nível e avaliação',
    },
    {
      titulo: 'Receita completa',
      texto:
        'Os ingredientes viram uma lista de seleção: o que faltar vai para a lista de compras. O fone abre o player de áudio, para ouvir a receita enquanto cozinha.',
      imagem: `${pasta}/tela-receita.webp`,
      altura: 868,
      alt: 'Receita de frango grelhado com tempo, porções, nível, ícone de fone, lista de ingredientes com caixas de seleção, botão "Ops, não tenho os ingredientes!" e modo de preparo',
    },
    {
      titulo: 'Registrar o preparo',
      texto:
        'Data, observações (ex.: troquei o frango por tofu), avaliação, quando repetir e lembrete de refeição. Tudo o que os testes pediram, num só lugar.',
      imagem: `${pasta}/tela-registrar-preparo.webp`,
      altura: 703,
      alt: 'Tela para registrar o preparo do frango grelhado, com data, observações, avaliação em estrelas, em quantos dias repetir e um botão para ativar o lembrete de refeição',
    },
    {
      titulo: 'Criando constância',
      texto: 'Cada preparo registrado conta na sequência e libera novas receitas, um incentivo para não desistir.',
      imagem: `${pasta}/tela-consistencia.webp`,
      altura: 703,
      alt: 'Mensagem "Você está criando consistência", com sequência atual de 4 dias e três novas receitas liberadas',
    },
  ] as PassoFluxo[],
  /** Arquitetura da informação: o caminho principal do app */
  arquitetura: {
    titulo: 'O caminho mais curto até o prato',
    texto: 'Poucos níveis e duas portas de entrada. Se faltar ingrediente, o app gera a lista do mercado antes de seguir.',
  },
};

export const componentes = {
  rotulo: 'Mise en place',
  titulo: 'Componentes prontos para usar.',
  texto:
    'Antes de montar as telas, criei no Figma os componentes do app, com variantes para cada estado. Aqui eles foram recriados em código: toque para experimentar.',
  categorias: ['Receitas fáceis', 'Hoje, só salada', 'Vamos de sobremesa', 'Receitas para congelar'],
  infos: ['Até 40min', '4 porções', 'nível fácil', '5 estrelas'],
  acessibilidade: [
    { titulo: 'Receita em áudio', texto: 'Player para ouvir o preparo, com as mãos livres ou com a visão limitada.' },
    { titulo: 'Contraste', texto: 'Cores de texto escolhidas para leitura confortável sobre o creme e o amarelo.' },
    { titulo: 'Área de toque', texto: 'Botões e chips com área suficiente para tocar sem erro.' },
    { titulo: 'Ícone com texto', texto: 'Tempo, porções e nível sempre com rótulo, não só com o ícone.' },
  ],
};

export const aprendizados = {
  rotulo: 'Aprendizados',
  titulo: 'Hora de provar.',
  impacto:
    'Colegas acharam o design simples, as cores agradáveis e a navegação fácil. Na segunda rodada de testes, um dos participantes gostou muito de poder ouvir a receita enquanto cozinha, e outros disseram que programar o dia de cozinhar vai deixar mais tempo livre.',
  aprendi:
    'Aprendi a simplificar fluxos e priorizar o essencial, e também a organizar o arquivo no Figma para que os desenvolvedores entendam o design.',
  proximos: [
    'Uma nova rodada de testes com as telas refinadas',
    'Evoluir a personalização das receitas',
    'Expandir os recursos de engajamento',
  ],
  ia: 'Em 2023, fiz o projeto todo sem IA. Ao trazê-lo para este portfólio, usei IA para apoiar o redesign das telas mobile de alta fidelidade e para enxugar os textos do estudo de caso. A pesquisa, os testes e as decisões de fluxo são do processo original.',
};
