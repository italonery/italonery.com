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
      en: 'Parses text-based logic into an Abstract Syntax Tree (AST) and compiles it at runtime using System.Linq.Expressions for zero-reflection execution.',
      pt: 'Converte lógicas textuais em uma Árvore de Sintaxe Abstrata (AST) e as compila em tempo de execução via System.Linq.Expressions, entregando uma execução nativa e livre de overhead de reflexão.'
    },
    language: 'C#',
    github: 'https://github.com/italonery/dynamic-ast-rule-engine',
    website: null,
    featured: true,
    isPrivate: false,
    tags: ['.NET', 'Compiler', 'Metaprogramming', 'AST']
  },
  {
    id: 'tcp-gateway',
    name: 'Zero Allocation TCP Gateway',
    description: {
      en: 'Built with System.IO.Pipelines and memory pooling to parse continous binary telemetry streams without Garbage Collector pressure.',
      pt: 'Desenvolvido com System.IO.Pipelines e memory pooling para processar fluxos contínuos de telemetria binária sem gerar pressão no Garbage Collector.'
    },
    language: 'C#',
    github: 'https://github.com/italonery/zero-alloc-tcp-gateway',
    website: null,
    featured: true,
    isPrivate: false,
    tags: ['.NET', 'TCP', 'Memory Management', 'Gateway', 'Pipelines']
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
