import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    modified: z.coerce.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
    draft: z.boolean().default(false),
    navigation: z.object({
      label: z.string(),
      order: z.number().default(100),
    }).optional(),
    author: z.object({
      name: z.string(),
      bio: z.string(),
      avatar: z.string(),
      avatarAlt: z.string(),
      location: z.string().optional(),
      links: z.array(z.object({
        label: z.string(),
        href: z.string(),
        rel: z.string().optional(),
      })).default([]),
    }).optional(),
  }),
});

const mathNotes = defineCollection({
  loader: glob({ base: './src/content/math-notes', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    markmap: z.record(z.string(), z.unknown()).default({}),
  }),
});

export const collections = { blog, pages, mathNotes };
