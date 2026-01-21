'use client';

import React, { createContext, useContext, useMemo } from 'react';
import type { Locale } from '@/lib/i18n';
import { getTranslations, type Translations } from '@/lib/translations';

interface LocaleContextType {
  locale: Locale;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const value = useMemo(() => ({
    locale,
    t: getTranslations(locale),
  }), [locale]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  const context = useContext(LocaleContext);
  return context?.locale ?? 'en';
}

export function useTranslations(): Translations {
  const context = useContext(LocaleContext);
  return context?.t ?? getTranslations('en');
}
