'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/projects';
import { ProjectCard } from './project-card';
import { useLocale, useTranslations } from './locale-provider';

export function FeaturedProjects() {
  const t = useTranslations();
  const locale = useLocale();
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            {t.featured?.title ?? 'Featured Work'}
          </h2>
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.featured?.viewAll ?? 'View all projects'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project?.id ?? index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
