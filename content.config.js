import { defineCollection, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  category: z.string(),
  date: z.date(),
  path: z.string(),
  published: z.boolean(),
  author: z.object({
    name: z.string(),
    role: z.string(),
    imageUrl: z.string().url(),
    href: z.string().url(),
  }),
})

const projectSchema = z.object({
  title: z.string(),
  link: z.string().url(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
  date: z.date(),
  status: z.string(),
  published: z.boolean(),
  featured: z.boolean(),
  path: z.string(),
  client_name: z.string(),
  client_logo: z.string(),
  tags: z.array(),
  stack: z.array(),
})

export const collections = {
  blog: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'blog/*.md',
        prefix: '/blog',
      },
      schema: blogSchema,
    }),
  ),
  project: defineCollection(
    asSeoCollection({
      type: 'page',
      source: {
        include: 'project/*.md',
        prefix: '/project',
      },
      schema: projectSchema,
    }),
  ),
}