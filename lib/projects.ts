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
    id: 'dynamic-ast',
    name: 'Dynamic AST Rule Engine',
    description: {
      en: 'A high-performance, dynamic rule engine for .NET. Parses text-based logic into an Abstract Syntax Tree (AST) and compiles it at runtime using System.Linq.Expressions for zero-reflection execution.',
      pt: 'Motor de regras dinâmico e de alta performance para o ecosistema .NET. Converte lógicas textuais em uma Árvore de Sintaxe Abstrata (AST) e as compila em tempo de execução via System.Linq.Expressions, entregando uma execução nativa e livre de overhead de reflexão.'
    },
    language: 'C#',
    github: 'https://github.com/italonery/dynamic-ast-rule-engine',
    website: null,
    featured: true,
    isPrivate: false,
    tags: ['.NET', 'Compiler', 'Metaprogramming', 'AST']
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
