import { defineCollection, defineContentConfig } from '@nuxt/content'
import { defineRobotsSchema } from '@nuxtjs/robots/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { defineOgImageSchema } from 'nuxt-og-image/content'
import { defineSchemaOrgSchema } from 'nuxt-schema-org/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: {
        include: "blog/*.md",
        prefix: "/blog",
      },
      schema: z.object({
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
        robots: defineRobotsSchema(),
        sitemap: defineSitemapSchema(),
        ogImage: defineOgImageSchema(),
        schemaOrg: defineSchemaOrgSchema(),
      }),
    }),
    project: defineCollection({
      type: 'page',
      source: {
        include: "project/*.md",
        prefix: "/project",
      },
      schema: z.object({
        title: z.string(),
        link: z.string().url(),
        description: z.string(),
        category: z.string(),
        image: z.string(),
        date: z.date(),
        status: z.string(),
        published: z.boolean(),
        featured: z.boolean().optional().default(false),
        path: z.string(),
        client_name: z.string(),
        client_logo: z.string(),
        tags: z.array(z.string()).optional().default([]),
        stack: z.array(z.string()).optional().default([]),
        robots: defineRobotsSchema(),
        sitemap: defineSitemapSchema(),
        ogImage: defineOgImageSchema(),
        schemaOrg: defineSchemaOrgSchema(),
      }),
    }),
  },
})