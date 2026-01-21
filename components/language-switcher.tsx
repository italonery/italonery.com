'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useLocale } from './locale-provider';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname?.split('/') ?? [];
    if (segments.length > 1) {
      segments[1] = newLocale;
    }
    router.push(segments.join('/') || `/${newLocale}`);
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'en'
            ? 'text-foreground font-medium'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => switchLocale('pt')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'pt'
            ? 'text-foreground font-medium'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        PT
      </button>
    </div>
  );
}
