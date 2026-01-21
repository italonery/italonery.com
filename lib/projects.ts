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
    name: 'WebMonitor',
    description: {
      en: 'Application for monitoring digital services (web applications, APIs and databases) built with .NET and React.',
      pt: 'Aplicação para monitoramento de serviços digitais (aplicações web, APIs e banco de dados) utilizando .NET e React.'
    },
    language: 'C#',
    github: null,
    website: 'https://google.com',
    featured: true,
    isPrivate: true,
    tags: ['.NET', 'React', 'Monitoring', 'APIs']
  },
  {
    id: 'tech-library',
    name: 'Tech Library',
    description: {
      en: 'A backend API for a Tech Library management system, built with C# and .NET. Features JWT authentication, bcrypt password hashing, and SQLite database.',
      pt: 'Uma API backend para sistema de gerenciamento de biblioteca técnica, construída com C# e .NET. Possui autenticação JWT, hash de senha bcrypt e banco SQLite.'
    },
    language: 'C#',
    github: 'https://github.com/italonery/tech-library',
    website: null,
    featured: true,
    isPrivate: false,
    tags: ['.NET', 'C#', 'JWT', 'SQLite']
  },
  {
    id: 'sales-web-mvc',
    name: 'Sales Web MVC',
    description: {
      en: 'A web sales system for managing sellers and departments. Built with ASP.NET Core and Entity Framework, following MVC architecture.',
      pt: 'Sistema web de vendas para gerenciar vendedores e departamentos. Construído com ASP.NET Core e Entity Framework, seguindo arquitetura MVC.'
    },
    language: 'C#',
    github: 'https://github.com/italonery/sales-web-mvc',
    website: null,
    featured: true,
    isPrivate: false,
    tags: ['ASP.NET Core', 'Entity Framework', 'MVC']
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
