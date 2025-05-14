import { defineCollection, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

const blogSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
  image: z.string().url(),
  readingTime: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
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