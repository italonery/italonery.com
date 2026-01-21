export interface Article {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  url: string;
  publishedAt: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: 'new-dotnet-lts',
    title: {
      en: 'Why Actually Changed for Developers in the New .NET LTS',
      pt: 'O Que Realmente Mudou para Desenvolvedores na Nova Versão LTS do .NET'
    },
    description: {
      en: 'An in-depth look at the practical changes in .NET 10 LTS that actually impact developers daily work and productivity.',
      pt: 'Uma análise aprofundada das mudanças práticas no .NET 10 LTS que realmente impactam o trabalho diário e a produtividade dos desenvolvedores.'
    },
    url: 'https://www.linkedin.com/pulse/why-actually-changed-developers-new-net-lts-%C3%ADtalo-ravel-nery-de-souza-3g5zf/',
    publishedAt: '2026-01-21',
    tags: ['.NET', 'C#', 'LTS']
  }
];
