// Conteúdo da página do Fast Money.
// Fontes: apresentação do estudo de caso de 2023 (Google Drive) e prints do estudo de caso no Figma Make.
// Regras: os números do Figma Make (86%, NPS, -62% etc.) eram ilustrativos e NÃO entram aqui.
// Dados reais: 7 entrevistas e 1 estudo de usabilidade moderado com 3 participantes.

const pasta = '/projetos/fast-money';

export const links = {
  prototipoMobile:
    'https://www.figma.com/design/6W9joazr9xSCg9YpfkoJTB/Site----Fluxo-de-transfer%C3%AAncia-de-saldo-para-banco?node-id=170-163&t=OB70maJKAtBAh3mQ-1',
  prototipoDesktop:
    'https://www.figma.com/design/6W9joazr9xSCg9YpfkoJTB/Site----Fluxo-de-transfer%C3%AAncia-de-saldo-para-banco?node-id=201-864&t=OB70maJKAtBAh3mQ-1',
};

export const hero = {
  rotulo: 'Estudo de caso · UX/UI Design · Fintech',
  titulo: 'Pix com mais clareza,',
  tituloDestaque: 'para errar menos.',
  texto:
    'Fluxo de transferência via Pix para o site responsivo de um banco fictício, pensado para evitar transferências para a pessoa errada e dar mais segurança antes de confirmar.',
  aviso: 'Projeto do Certificado Google UX Design · banco fictício',
  imagemDesktop: `${pasta}/desktop-confirmacao.webp`,
  altDesktop: 'Tela de confirmação do Pix no desktop, com valor, recebedor, CPF mascarado, banco e data da transação',
  imagemMobile: `${pasta}/mobile-confirmacao.webp`,
  alturaMobile: 709, // 809 px de altura em 411 de largura, convertido para a largura de 360
  altMobile: 'Tela de confirmação do Pix no celular: “Confirme os dados antes de enviar”',
};

export const ficha = [
  { rotulo: 'Produto', texto: 'Site bancário responsivo, desktop e mobile' },
  { rotulo: 'Período', texto: 'Outubro e novembro de 2023' },
  { rotulo: 'Meu papel', texto: 'UX/UI Designer, do início ao fim' },
  { rotulo: 'Ferramentas', texto: 'Figma e FigJam' },
];

/** Os quatro capítulos da história do projeto, na linha do tempo e nas aberturas */
export const capitulos = [
  { id: 'entender', numero: '01', titulo: 'Entender o usuário', resumo: 'Entrevistas, persona e jornada' },
  { id: 'iniciar', numero: '02', titulo: 'Iniciar o design', resumo: 'Fluxo, wireframes e telas' },
  { id: 'refinar', numero: '03', titulo: 'Refinar', resumo: 'Teste de usabilidade e ajustes' },
  { id: 'aprender', numero: '04', titulo: 'Aprender', resumo: 'Acessibilidade e próximos passos' },
] as const;

export const contexto = {
  rotulo: 'Contexto',
  titulo: 'Um Pix enviado errado é difícil de desfazer.',
  paragrafos: [
    'O Fast Money é um banco fictício, criado como projeto do Certificado Google UX Design (Coursera). O desafio: desenhar o fluxo de transferência via Pix do site responsivo do banco.',
    'O Pix é instantâneo, e essa é a sua força e o seu risco. Uma chave digitada errada, um golpe ou um boleto adulterado podem mandar o dinheiro para a pessoa errada, e reverter isso é burocrático.',
  ],
  responsabilidades: [
    'Entrevistas com usuários',
    'Wireframes em papel e digitais',
    'Protótipos de baixa e alta fidelidade',
    'Estudo de usabilidade',
    'Acessibilidade',
    'Iteração e design responsivo',
  ],
};

export const entender = {
  pesquisa: {
    titulo: 'O que as entrevistas mostraram',
    texto:
      'Entrevistei 7 pessoas que fazem transferências com frequência e organizei o que ouvi em mapas de empatia. Quem faz muitos Pix comete erros de digitação e se frustra com a burocracia para pedir o dinheiro de volta.',
    numeros: [
      { valor: '7', rotulo: 'entrevistas com usuários' },
      { valor: '3', rotulo: 'pontos de dor principais' },
    ],
  },
  dores: [
    {
      titulo: 'Erro do usuário',
      texto: 'Transferir para a conta ou a pessoa errada por um erro de digitação na chave.',
    },
    {
      titulo: 'Segurança',
      texto: 'O medo de ser induzido a fazer uma transação, como em golpes e boletos adulterados.',
    },
    {
      titulo: 'Clareza',
      texto: 'Não conseguir ver com clareza os dados que digitou antes de confirmar.',
    },
  ],
  persona: {
    nome: 'Thainá',
    descricao: 'Analista contábil · 28 anos · São Paulo',
    bio: 'Usa o banco para as finanças pessoais e as da empresa onde trabalha. Faz vários Pix por semana.',
    citacao: 'Fico com medo de enviar o Pix para a pessoa errada, porque não aparece uma tela clara de confirmação.',
    objetivos: ['Transferir com segurança', 'Conferir os dados antes do envio', 'Ter um comprovante claro e imediato'],
    frustracoes: ['Medo de digitar a chave errada', 'Não ver os dados do destinatário', 'Botão de confirmar pouco visível'],
  },
  jornada: {
    titulo: 'A jornada de Thainá no Pix',
    texto: 'A tensão aparece justamente nas etapas em que um erro custa caro: a chave, o valor e a confirmação.',
    etapas: [
      { titulo: 'Acessa a conta', sentimento: 'tranquila' },
      { titulo: 'Abre o Pix', sentimento: 'tranquila' },
      { titulo: 'Digita a chave', sentimento: 'tensa' },
      { titulo: 'Informa o valor', sentimento: 'tensa' },
      { titulo: 'Confirma o envio', sentimento: 'tensa' },
      { titulo: 'Recebe o comprovante', sentimento: 'aliviada' },
    ],
  },
};

export const iniciar = {
  fluxo: {
    titulo: 'O fluxo antes das telas',
    texto:
      'Antes de desenhar, mapeei o caminho completo: do login por QR Code ao comprovante, incluindo o erro na senha e a escolha entre salvar ou compartilhar o comprovante.',
    imagem: `${pasta}/fluxo-pix.webp`,
    largura: 2000,
    altura: 1738,
    alt: 'Fluxograma do Pix no Fast Money: início, login por QR Code, home com saldo, dados do destinatário, valor, agendamento, confirmação, processamento, verificação da senha com caminho de erro, comprovante e escolha entre salvar ou compartilhar',
  },
  wireframes: {
    titulo: 'Do papel ao digital',
    texto:
      'Os primeiros esboços foram em papel, para testar ideias rápido. Nos wireframes digitais, duas decisões guiaram o fluxo: um resumo dos dados digitados, em letra fácil de ler, e uma etapa extra de validação antes de finalizar.',
  },
  comparadorConfirmacao: {
    titulo: 'A tela de confirmação, do wireframe ao protótipo',
    texto: 'Arraste a divisória para comparar.',
    antes: { imagem: `${pasta}/confirmacao-wireframe.webp`, rotulo: 'Wireframe', alt: 'Wireframe da tela de confirmação, com textos provisórios e ícones de espaço reservado' },
    depois: { imagem: `${pasta}/desktop-confirmacao.webp`, rotulo: 'Alta fidelidade', alt: 'Tela de confirmação em alta fidelidade, com o resumo dos dados num quadro e os botões Cancelar e Confirmar transferência' },
  },
};

export const refinar = {
  estudo: {
    titulo: 'Testar com quem usa',
    texto: 'Com o protótipo navegável pronto, conduzi um estudo de usabilidade para ver onde o fluxo ainda travava.',
    detalhes: [
      { rotulo: 'Formato', texto: 'Moderado e remoto' },
      { rotulo: 'Participantes', texto: '3 pessoas, no Brasil' },
      { rotulo: 'Duração', texto: '40 a 50 minutos cada' },
    ],
  },
  descobertas: [
    {
      titulo: 'Salvar e compartilhar',
      texto: 'Os participantes queriam salvar e compartilhar o comprovante. Entraram as opções no comprovante.',
    },
    {
      titulo: 'Contraste das fontes',
      texto: 'Alguns textos tinham pouco contraste. As fontes ficaram maiores e os campos, mais fáceis de identificar.',
    },
    {
      titulo: 'Ícones do Pix',
      texto: 'Os títulos dos ícones na página inicial do Pix confundiam os participantes e entraram na lista de ajustes.',
    },
  ],
  comparadorLogin: {
    titulo: 'A tela de acesso, antes e depois',
    texto:
      'Depois do teste, a tela de acesso ganhou um título claro, instruções para usar o QR Code e um aviso de segurança. O texto provisório deu lugar a uma imagem.',
    antes: { imagem: `${pasta}/login-antes.webp`, rotulo: 'Antes', alt: 'Tela de acesso antes do teste: QR Code isolado à direita, texto provisório à esquerda e botões no topo' },
    depois: { imagem: `${pasta}/login-depois.webp`, rotulo: 'Depois', alt: 'Tela de acesso depois do teste: “Acesse sua conta com segurança”, instruções para escanear o QR Code, aviso de segurança e links para baixar o app' },
  },
};

export interface TelaFluxo {
  imagem: string;
  titulo: string;
  alt: string;
  /** Só nas telas de celular: altura em 360 de largura */
  altura?: number;
}

// Altura das telas de celular (exportadas com 411 de largura) convertida para 360
const em360 = (alturaOriginal: number) => Math.round((alturaOriginal * 360) / 411);

export const solucao = {
  rotulo: 'A solução',
  titulo: 'O fluxo completo, tela a tela.',
  texto: 'Navegue pelas etapas do Pix no desktop e no celular.',
  desktop: [
    { imagem: `${pasta}/login-depois.webp`, titulo: 'Acesso', alt: 'Acesso à conta pelo QR Code' },
    { imagem: `${pasta}/desktop-pix-inicio.webp`, titulo: 'Início do Pix', alt: 'Página inicial do Pix com o saldo disponível e as ações Pagar, Receber, Cadastrar chaves, Histórico e Saque' },
    { imagem: `${pasta}/desktop-destinatario.webp`, titulo: 'Destinatário', alt: 'Etapa de dados do destinatário, com o campo da chave e a lista de favoritos' },
    { imagem: `${pasta}/desktop-valor.webp`, titulo: 'Valor', alt: 'Etapa de valor, mostrando quem está recebendo, o valor digitado e o saldo atual' },
    { imagem: `${pasta}/desktop-agendamento.webp`, titulo: 'Data', alt: 'Escolha da data da transação num calendário' },
    { imagem: `${pasta}/desktop-confirmacao.webp`, titulo: 'Confirmação', alt: 'Resumo dos dados para confirmar a transação' },
    { imagem: `${pasta}/desktop-senha.webp`, titulo: 'Senha', alt: 'Campo da senha de seis dígitos para autorizar o Pix' },
    { imagem: `${pasta}/desktop-erro-senha.webp`, titulo: 'Erro', alt: 'Aviso de que não foi possível concluir o Pix, com as opções Tentar novamente e Voltar para o início' },
    { imagem: `${pasta}/desktop-comprovante.webp`, titulo: 'Comprovante', alt: 'Pix enviado, com o resumo, a opção de salvar o comprovante em PDF e o botão Compartilhar' },
  ] satisfies TelaFluxo[],
  mobile: [
    { imagem: `${pasta}/mobile-login.webp`, titulo: 'Acesso', altura: em360(1065), alt: 'Acesso à conta no celular, pelo QR Code ou pelo navegador' },
    { imagem: `${pasta}/mobile-inicio.webp`, titulo: 'Início do Pix', altura: em360(823), alt: 'Página inicial do Pix no celular, com o saldo e as ações rápidas' },
    { imagem: `${pasta}/mobile-destinatario.webp`, titulo: 'Destinatário', altura: em360(913), alt: 'Chave Pix e lista de favoritos no celular' },
    { imagem: `${pasta}/mobile-valor.webp`, titulo: 'Valor', altura: em360(799), alt: 'Etapa de valor no celular, com o saldo disponível ao lado' },
    { imagem: `${pasta}/mobile-saldo-insuficiente.webp`, titulo: 'Sem saldo', altura: em360(799), alt: 'Aviso de saldo insuficiente, mostrando o saldo, o valor e quanto falta, com as opções Ver opções de crédito e Ajustar valor' },
    { imagem: `${pasta}/mobile-confirmacao.webp`, titulo: 'Confirmação', altura: em360(809), alt: 'Confirmação dos dados antes de enviar, com o alerta de que a transferência não poderá ser cancelada' },
    { imagem: `${pasta}/mobile-processando.webp`, titulo: 'Processando', altura: em360(821), alt: 'Transferência em processamento, com o aviso para não fechar o aplicativo' },
    { imagem: `${pasta}/mobile-comprovante.webp`, titulo: 'Comprovante', altura: em360(860), alt: 'Pix enviado com sucesso, com os dados da transação e o botão Compartilhar comprovante' },
  ] satisfies TelaFluxo[],
};

export const aprender = {
  acessibilidade: {
    titulo: 'Acessibilidade desde o desenho',
    itens: [
      { titulo: 'Hierarquia', texto: 'Tamanhos de título diferentes para deixar clara a ordem de leitura.' },
      { titulo: 'Contraste', texto: 'Cores contrastantes para facilitar a leitura dos dados.' },
      { titulo: 'Texto alternativo', texto: 'Descrição das imagens para quem usa leitores de tela.' },
    ],
  },
  impacto: {
    titulo: 'O que os participantes disseram',
    texto:
      'Os participantes acharam o fluxo intuitivo, mais envolvente com as imagens e com uma hierarquia clara das informações.',
  },
  aprendizado: {
    titulo: 'O que levo deste projeto',
    texto:
      'Em produtos financeiros, clareza é segurança. Cada dado visível na hora de confirmar é uma chance a menos de erro, e uma pessoa a menos com medo de apertar o botão.',
  },
  proximosPassos: [
    'Fazer testes não moderados, com mais participantes',
    'Testar as versões mobile e tablet com usuários',
    'Concluir as telas de variação do fluxo',
  ],
  // Confirmar com a Claudia
  ia: 'A pesquisa e o design são de 2023, sem IA. Em 2026, usei o Figma Make para reorganizar a apresentação deste estudo de caso.',
};
