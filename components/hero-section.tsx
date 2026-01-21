'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLocale, useTranslations } from './locale-provider';

export function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground text-lg">
            {t.hero?.greeting ?? "Hi, I'm"}
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {t.hero?.name ?? 'Italo Nery'}
            <span className="text-blue-500">.</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
            {t.hero?.title ?? 'Software Engineer'}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t.hero?.subtitle ?? 'Full-Stack Developer with a backend-first approach'}
          </p>
          
          <p className="text-muted-foreground max-w-xl">
            {t.hero?.description ?? ''}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t.hero?.cta ?? 'Get in touch'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              {t.hero?.viewWork ?? 'View my work'}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
