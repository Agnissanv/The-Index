import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.enum([
      'writing',
      'image',
      'video',
      'audio',
      'coding',
      'productivity',
      'research',
      'design',
    ]),
    pricing: z.enum(['free', 'freemium', 'paid']),
    startingPrice: z.string().optional(),
    website: z.string().url(),
    affiliateUrl: z.string().url().optional(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    bestFor: z.string(),
    featured: z.boolean().default(false),
    catalogNo: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.enum([
      'writing', 'image', 'video', 'audio', 'coding',
      'productivity', 'research', 'design',
    ]).optional(),
  }),
});

export const collections = { tools, posts };