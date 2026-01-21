'use client';

import { SectionHeader } from '@/components/section-header';
import { motion } from 'framer-motion';
import { MapPin, Globe, Server, Layout, Database, Wrench } from 'lucide-react';
import { useTranslations } from '@/components/locale-provider';

const techStack = {
  backend: ['C# / .NET', '.NET Framework', 'ASP.NET / ASP.NET Core', 'Entity Framework', 'REST APIs', 'Clean Architecture'],
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Blazor'],
  databases: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  tools: ['Git', 'Docker', 'Azure DevOps', 'xUnit', 'CI/CD'],
};

export default function AboutPage() {
  const t = useTranslations();

  const strengths = [
    {
      title: t.about?.strength1Title ?? 'Backend-First Mindset',
      description: t.about?.strength1Desc ?? '',
      icon: Server,
    },
    {
      title: t.about?.strength2Title ?? 'Full-Stack Capability',
      description: t.about?.strength2Desc ?? '',
      icon: Layout,
    },
    {
      title: t.about?.strength3Title ?? 'Global Perspective',
      description: t.about?.strength3Desc ?? '',
      icon: Globe,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader title={t.about?.title ?? 'About Me'} />

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4 mb-16 max-w-3xl"
      >
        <p className="text-xl text-foreground leading-relaxed">
          {t.about?.intro ?? ''}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {t.about?.bio1 ?? ''}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {t.about?.bio2 ?? ''}
        </p>
      </motion.div>

      {/* Location Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4 mb-16"
      >
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-muted-foreground">{t.about?.location ?? 'Location'}</span>
          </div>
          <p className="text-lg font-medium">{t.about?.locationValue ?? 'Salvador, Brazil'}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-muted-foreground">{t.about?.openTo ?? 'Open to'}</span>
          </div>
          <p className="text-lg font-medium">{t.about?.openToValue ?? 'Remote & International Opportunities'}</p>
        </div>
      </motion.div>

      {/* Strengths */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-8">{t.about?.strengths ?? 'What I Bring'}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-muted-foreground/30 transition-all"
            >
              <strength.icon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-semibold mb-2">{strength.title}</h3>
              <p className="text-sm text-muted-foreground">{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-8">{t.about?.techStack ?? 'Tech Stack'}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { key: 'backend' as const, icon: Server, items: techStack.backend },
            { key: 'frontend' as const, icon: Layout, items: techStack.frontend },
            { key: 'databases' as const, icon: Database, items: techStack.databases },
            { key: 'tools' as const, icon: Wrench, items: techStack.tools },
          ].map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold">{t.about?.[category.key] ?? category.key}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
