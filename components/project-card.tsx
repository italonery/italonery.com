'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Lock } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { useLocale, useTranslations } from './locale-provider';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const languageColors: Record<string, string> = {
  'Java': 'bg-orange-500',
  'C#': 'bg-purple-500',
  'JavaScript': 'bg-yellow-500',
  'TypeScript': 'bg-blue-500',
  'PHP': 'bg-indigo-500',
  'HTML': 'bg-red-500',
  'Python': 'bg-green-500',
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const locale = useLocale();
  const t = useTranslations();

  const description = project?.description?.[locale] ?? project?.description?.en ?? '';
  const languageColor = languageColors[project?.language ?? ''] ?? 'bg-gray-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-muted-foreground/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
              {project?.name ?? 'Unnamed Project'}
            </h3>
            {project?.isPrivate && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                <Lock className="w-3 h-3" />
                {t.projects?.private ?? 'Private'}
              </span>
            )}
            {project?.featured && (
              <span className="text-xs text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">
                {t.projects?.featured ?? 'Featured'}
              </span>
            )}
          </div>
          {project?.language && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className={`w-2 h-2 rounded-full ${languageColor}`} />
              {project.language}
            </div>
          )}
        </div>
        
        {(project?.github || project?.website) && (
          <div className="flex items-center gap-1">
            {project?.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label={t.projects?.viewCode ?? 'View Code'}
                title="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project?.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label={t.projects?.viewDemo ?? 'Live Demo'}
                title="Website"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        )}
      </div>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>

      {(project?.tags?.length ?? 0) > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
