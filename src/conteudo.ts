// Dados compartilhados entre as páginas. Edite aqui.

export const contato = {
  linkedin: 'https://www.linkedin.com/in/claudia-ferreira-de-mello',
  email: 'claudinha.fer28@yahoo.com.br',
};

export const rotas = {
  home: '/',
  beready: '/beready-app',
};

/** Item de navegação: `id` é a seção (para o destaque do item ativo), `href` é o destino */
export interface ItemMenu {
  id: string;
  rotulo: string;
  href: string;
}

// Submenu "Projetos" do header. Projetos sem página ainda levam à seção de projetos da Home.
export const projetosMenu = [
  { rotulo: 'BeReady', href: rotas.beready },
  { rotulo: 'Focus Clínica', href: '/#projetos' },
  { rotulo: 'Fast Money', href: '/#projetos' },
  { rotulo: 'Redesign de placas de ruas', href: '/#projetos' },
];
export const verTodosProjetos = { rotulo: 'Ver todos os projetos', href: '/#projetos' };
