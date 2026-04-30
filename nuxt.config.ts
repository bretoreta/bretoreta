// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/assets/css/main.css"],
  modules: [
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/ui",
    "@vueuse/motion/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
    'nuxt-skew-protection',
    'nuxt-ai-ready'
  ],
  fonts: {
    families: [
      {
        name: "Plus Jakarta Sans",
        provider: "google",
        weights: [400, 600, 800],
      },
    ],
  },
  app: {
    head: {
      title: "Bret Oreta",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: 'theme-color', content: '#00dc82' },
        { name: 'theme-color', content: '#18181b',
          media: '(prefers-color-scheme: dark)' }
      ]
    },
  },
  image: {
    quality: 80,
    format: ["avif", "webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    domains: ["bretoreta.me"],
  },
  site: {
    url: "https://bretoreta.me",
    name: "Bret Oreta",
  },
  seo: {
    meta: {
      description: 'A web developer and AI automation expert helping businesses launch stunning websites and automate repetitive tasks with AI',
    },
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
        },
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
          },
          preload: [
            "json",
            "js",
            "ts",
            "html",
            "css",
            "vue",
            "diff",
            "shell",
            "markdown",
            "mdc",
            "yaml",
            "bash",
            "ini",
            "dotenv",
            "php",
          ],
        },
      },
    }
  },
  schemaOrg: {
    identity: definePerson({
      name: 'Bret Oreta',
      jobTitle: "Team Lead - Web Development",
      worksFor: "Fairdeal Furniture",
      image: '/bret_oreta.png',
      description: 'Just another full stack web developer, I love Laravel, Hono JS, Vue JS and React JS',
      url: 'bretoreta.me',
      sameAs: [
        'https://github.com/bretoreta',
        'https://x.com/bret_oreta',
        'https://instagram.com/bret_oreta',
        'https://linkedin.com/in/bretoreta'
      ],
    })
  },
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    '/blog': { isr: 3600 },
    // Blog post page generated on demand once until next deployment, cached on CDN
    '/blog/**': { isr: true },
    // Projects page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    '/project': { isr: 3600 },
    // Project post page generated on demand once until next deployment, cached on CDN
    '/project/**': { isr: true },
  },
  ogImage: {
    zeroRuntime: true
  },

  // Remove after issue is fixed
  hooks: {
    'nitro:config'(nitroConfig) {
      const imports = (nitroConfig as { imports?: { imports?: Array<{ name?: string }> } }).imports;
      if (!imports?.imports) {
        return;
      }
      imports.imports = imports.imports.filter((i) => i?.name !== 'useAppConfig');
    },
  },
});