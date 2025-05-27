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
  )
}