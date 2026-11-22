// Conteúdo da página do redesign de placas de ruas.
// Fontes: apresentação do estudo de caso (Google Drive), respostas do formulário (8 motoristas) e fotos da Claudia.
// Os números vêm direto da planilha de respostas: não arredondar para porcentagens nem extrapolar.

const pasta = '/projetos/placas-de-ruas';

export const hero = {
  rotulo: 'Estudo de caso · UX Research · Design de informação',
  titulo: 'Placas de rua que',
  tituloDestaque: 'ajudam a chegar.',
  texto:
    'Redesign da placa de identificação de ruas de Boituva (SP), a partir de uma pesquisa com motoristas. Do questionário à placa impressa, testada na esquina e apresentada ao órgão de trânsito da cidade.',
  aviso: 'Projeto de extensão · Tecnólogo em Design de Produto · 2024',
  imagem: `${pasta}/claudia-com-a-placa.webp`,
  alt: 'Claudia numa esquina, apontando para a placa que redesenhou, presa no poste logo abaixo da placa antiga',
};

export const ficha = [
  { rotulo: 'Contexto', texto: 'Projeto de extensão do tecnólogo em Design de Produto, baseado nos ODS da ONU' },
  { rotulo: 'Período', texto: 'Julho a dezembro de 2024' },
  { rotulo: 'Meu papel', texto: 'Pesquisa, ideação, design visual, protótipo físico e apresentação' },
  { rotulo: 'Local', texto: 'Boituva, São Paulo' },
];

export const problema = {
  rotulo: 'O problema',
  titulo: 'Quem dirige pela cidade se perde por causa das placas.',
  texto:
    'Placas ausentes, apagadas, danificadas ou escondidas por árvores. Informação desatualizada, sem indicação de sentido nem de pontos de referência. À noite e com chuva, fica pior. O projeto partiu dessas queixas para propor uma placa mais clara e acessível, para motoristas e pedestres.',
};

export const pesquisa = {
  rotulo: 'A pesquisa',
  titulo: 'Oito motoristas, a mesma dificuldade.',
  texto:
    'Montei um questionário on-line com perguntas sobre a frequência dos problemas, as situações mais difíceis e o que as placas deveriam mostrar. Responderam 8 pessoas que dirigem na cidade, de recém-habilitadas a quem dirige há 30 anos.',
  total: 8,
  dados: [
    { valor: 7, texto: 'já tiveram dificuldade para encontrar o destino por falta de informação nas placas' },
    { valor: 6, texto: 'têm dificuldade frequente para encontrar ruas por problemas na sinalização' },
    { valor: 5, texto: 'já tiveram dificuldade para achar hospitais, postos de combustível e outros pontos de interesse' },
  ],
  situacoes: {
    titulo: 'Quando é mais difícil ler as placas',
    itens: [
      { rotulo: 'À noite', valor: 3 },
      { rotulo: 'Em dias de chuva', valor: 3 },
      { rotulo: 'Sem poder parar, no trânsito', valor: 1 },
      { rotulo: 'Em todas essas situações', valor: 1 },
    ],
  },
  falas: [
    'Podas das árvores, que constantemente dificultam a visualização das placas.',
    'Mais placas com informações relevantes e grandes o suficiente para míopes.',
    'Poderiam ter letras maiores, pois algumas ruas possuem nomes estrangeiros e, por serem altas, ficam difíceis de entender.',
    'Material que facilite a visualização noturna.',
  ],
};

export const dores = {
  rotulo: 'Pontos problemáticos',
  titulo: 'Cinco dores que viraram requisitos.',
  itens: [
    { titulo: 'Falta de placas', texto: 'Em várias ruas, a placa simplesmente não existe.' },
    { titulo: 'Visibilidade', texto: 'Placas danificadas, apagadas ou cobertas por árvores, ainda piores à noite e com chuva.' },
    { titulo: 'Desatualização', texto: 'Informações incorretas ou antigas, que confundem e desviam do destino.' },
    { titulo: 'Direção', texto: 'Nada sobre o sentido da via ou as opções de conversão.' },
    { titulo: 'Orientação', texto: 'Nenhuma indicação de pontos importantes, como hospitais e postos de combustível.' },
  ],
};

/** Pontos clicáveis sobre a foto da placa. x e y em % da imagem. */
export const anatomia = {
  rotulo: 'A placa redesenhada',
  titulo: 'Cada elemento responde a uma dor.',
  texto: 'Toque ou passe o mouse nos pontos numerados para ver o porquê de cada decisão.',
  imagem: `${pasta}/placa-redesenhada.webp`,
  largura: 1800,
  altura: 1356,
  alt: 'Placa redesenhada: nome da rua em letras brancas grandes sobre azul-escuro, ícones de ciclovia, numeração 139 e 489 com seta de dois sentidos, ícones de padaria e avenida, e uma faixa clara com bairro, CEP e cidade',
  pontos: [
    {
      x: 62,
      y: 35,
      titulo: 'Nome em destaque',
      texto:
        'Tipografia simples, sem adornos e grande, para ler à distância e em movimento. Branco sobre azul-escuro, para manter o contraste à noite e em dias nublados.',
    },
    {
      x: 15,
      y: 51,
      titulo: 'O que há nesta ponta',
      texto: 'Ícones mostram o que existe em cada extremidade da rua. Deste lado, uma ciclovia.',
    },
    {
      x: 49,
      y: 51,
      titulo: 'Numeração e sentido',
      texto:
        'O primeiro e o último número da quadra ajudam a saber para que lado seguir. A seta dupla avisa que a rua tem dois sentidos de trânsito.',
    },
    {
      x: 81,
      y: 51,
      titulo: 'O que há na outra ponta',
      texto: 'No fim da rua há uma avenida, e o último número é de uma padaria. Os ícones contam isso sem precisar de texto.',
    },
    {
      x: 82,
      y: 86,
      titulo: 'Bairro e CEP',
      texto: 'Uma faixa clara com bairro, CEP e cidade facilita a localização para correios e entregadores.',
    },
  ],
};

export const iconesMotivo =
  'Ícones são entendidos rápido, inclusive por pessoas com baixa alfabetização ou por quem só tem um instante para olhar a placa.';

export const naRua = {
  rotulo: 'Na rua',
  titulo: 'A placa nova, ao lado da antiga.',
  texto:
    'Imprimi a placa e prendi temporariamente no poste, logo abaixo da placa que já estava lá, para fotografar e mostrar a diferença no lugar real.',
  fotos: [
    {
      imagem: `${pasta}/placa-antiga-e-nova.webp`,
      legenda: 'Em cima, a placa antiga, desbotada e só com o nome. Embaixo, a nova.',
      alt: 'Poste com a placa antiga, desbotada, e logo abaixo a placa redesenhada, azul-escura com nome, numeração, ícones, bairro e CEP',
    },
    {
      imagem: `${pasta}/placa-de-longe.webp`,
      legenda:
        'De longe, como se vê de dentro de um carro. A foto mostra que ainda havia espaço para aumentar a tipografia.',
      alt: 'A esquina vista de longe, com a placa no poste ao lado de uma árvore',
    },
  ],
};

export const apresentacao = {
  rotulo: 'Devolutiva à cidade',
  titulo: 'O projeto apresentado a quem cuida das ruas.',
  texto:
    'Como pedia a faculdade, apresentei o redesign ao órgão responsável pelo trânsito da cidade, com a placa impressa em mãos.',
  imagem: `${pasta}/apresentacao-transito.webp`,
  alt: 'Claudia apresentando a placa impressa, presa na parede, para agentes de trânsito da cidade',
};

export const acessibilidade = {
  rotulo: 'Acessibilidade',
  titulo: 'Legível para mais gente.',
  itens: [
    { titulo: 'Contraste e legibilidade', texto: 'Branco sobre azul-escuro, para ler em diferentes condições de luz.' },
    { titulo: 'Tipografia clara', texto: 'Letras simples e grandes, sem adornos.' },
    { titulo: 'Posicionamento e visibilidade', texto: 'Pensar onde a placa fica, para que seja vista de longe e não fique escondida.' },
    { titulo: 'Iconografia informativa', texto: iconesMotivo },
  ],
};

export const aprendizados = {
  rotulo: 'Aprendizados',
  titulo: 'O que levo deste projeto.',
  impacto:
    'Para quem usa as ruas, uma sinalização mais clara facilita encontrar ruas e pontos de interesse e reduz as frustrações do dia a dia.',
  aprendi:
    'Foi a chance de aplicar o design centrado no usuário fora da tela: pesquisar, transformar dores em requisitos, desenhar, testar no lugar real e apresentar para quem decide.',
  ia: 'Não usei IA neste projeto. Todas as ideias vieram de mim, a partir das dores apontadas na pesquisa com os motoristas.',
};
