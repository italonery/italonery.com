# italonery.com

🚀 My personal portfolio as a .NET Software Engineer.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Internationalization:** Custom i18n (EN/PT)
- **Theme:** Dark/Light mode with next-themes

## Features

- ✅ Bilingual support (English / Portuguese)
- ✅ Dark and Light mode
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Contact form with email notifications
- ✅ SEO optimized

## Project Structure

```
├── app/
│   ├── [locale]/          # Localized pages (en, pt)
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   └── page.tsx       # Home
│   └── api/
│       └── contact/       # Contact form API
├── components/            # React components
├── lib/
│   ├── articles.ts        # Posts/articles data
│   ├── projects.ts        # Projects data
│   └── translations.ts    # i18n strings
└── public/                # Static assets
```

## Customization

### Adding Projects

Edit `lib/projects.ts`:

```typescript
{
  id: 'my-project',
  name: 'Project Name',
  description: {
    en: 'English description',
    pt: 'Descrição em português'
  },
  language: 'C#',
  github: 'https://github.com/...',
  website: 'https://...',
  featured: true,
  isPrivate: false,
  tags: ['.NET', 'React']
}
```

### Adding Posts

Edit `lib/articles.ts`:

```typescript
{
  id: 'my-post',
  title: {
    en: 'Post Title',
    pt: 'Título do Post'
  },
  description: {
    en: 'Description',
    pt: 'Descrição'
  },
  url: 'https://linkedin.com/...',
  publishedAt: '2026-01-21',
  tags: ['.NET', 'C#']
}
```

## License

MIT

---

Made by [Italo Nery](https://linkedin.com/in/italonery)
