import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

export const collections = {
  posts: defineCollection({
    loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
    }),
  }),
  projects: defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
    }),
  }),
}
