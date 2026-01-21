'use client';

import { useState } from 'react';
import { projects, getAllTags } from '@/lib/projects';
import { ProjectCard } from '@/components/project-card';
import { SectionHeader } from '@/components/section-header';
import { motion } from 'framer-motion';
import { useTranslations } from '@/components/locale-provider';

export default function ProjectsPage() {
  const t = useTranslations();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = getAllTags();

  const filteredProjects = selectedTag
    ? projects.filter((p) => p?.tags?.includes(selectedTag))
    : projects;

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader 
        title={t.projects?.title ?? 'Projects'} 
        subtitle={t.projects?.subtitle ?? "A selection of projects I've worked on"} 
      />

      {/* Filter Tags */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
            selectedTag === null
              ? 'bg-foreground text-background'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          {t.projects?.filterAll ?? 'All'}
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              selectedTag === tag
                ? 'bg-foreground text-background'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project?.id ?? index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
