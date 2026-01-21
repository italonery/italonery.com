'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, FileText } from 'lucide-react';
import { useLocale, useTranslations } from './locale-provider';
import { articles } from '@/lib/articles';
import { SectionHeader } from './section-header';

function formatDate(dateString: string, locale: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const months = locale === 'pt' 
    ? ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  if (locale === 'pt') {
    return `${day} de ${months[month - 1]} de ${year}`;
  }
  return `${months[month - 1]} ${day}, ${year}`;
}

export function ArticlesSection() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title={t.articles.title}
          subtitle={t.articles.subtitle}
        />

        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block group"
            >
              <article className="bg-card border border-border rounded-xl p-6 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={article.publishedAt}>
                        {formatDate(article.publishedAt, locale)}
                      </time>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-500 transition-colors mb-2">
                      {article.title[locale]}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {article.description[locale]}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-blue-500/10 text-blue-500 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-sm text-blue-500 flex items-center gap-2 group-hover:underline">
                    <FileText className="w-4 h-4" />
                    {t.articles.readMore}
                  </span>
                </div>
              </article>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
