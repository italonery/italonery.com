export interface Project {
  id: string;
  name: string;
  description: {
    en: string;
    pt: string;
  };
  language: string;
  github: string | null;
  website: string | null;
  featured: boolean;
  isPrivate: boolean;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'webmonitor',
    name: 'Web Monitor',
    description: {
      en: 'Obervability engineering application for monitoring digital services (health chekcs for Web Apps, APIs, and Databases) built with .NET and React.',
      pt: 'Aplicação de engenharia de observabilidade para monitoramento de serviços digitais (health checks de Aplicações Web, APIs, e Bancos de Dados) desenvolvido com .NET e React.'
    },
    language: 'C#',
    github: 'https://github.com/italonery/web-monitor',
    website: null,
    featured: true,
    isPrivate: false,
    tags: ['.NET', 'ASP.NET Core', 'Web API', 'EF Core', 'React', 'TypeScript', 'MySQL']
  },
  {
    id: 'tech-library',
    name: 'Tech Library',
    description: {
      en: 'A backend API for a Tech Library management system, built with C# and .NET. Features JWT authentication, bcrypt password hashing, and SQLite database.',
      pt: 'Uma API backend para sistema de gerenciamento de biblioteca técnica, construída com C# e .NET. Possui autenticação JWT, hash de senha com bcrypt e banco SQLite.'
    },
    language: 'C#',
    github: 'https://github.com/italonery/tech-library',
    website: null,
    featured: false,
    isPrivate: false,
    tags: ['.NET', 'ASP.NET Core', 'Web API', 'EF Core', 'SQLite']
  },
  {
    id: 'sales-web-mvc',
    name: 'Sales Web',
    description: {
      en: 'A web sales system for managing sellers and departments. Built with ASP.NET Core and EF Core, following MVC architecture.',
      pt: 'Sistema web de vendas para gerenciar vendedores e departamentos. Construído com ASP.NET Core e EF Core, seguindo arquitetura MVC.'
    },
    language: 'C#',
    github: 'https://github.com/italonery/sales-web-mvc',
    website: null,
    featured: false,
    isPrivate: false,
    tags: ['.NET', 'ASP.NET Core', 'MVC', 'Razor', 'EF Core']
  },
];

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  projects.forEach(p => p.tags?.forEach(t => tags.add(t)));
  return Array.from(tags).sort();
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};
