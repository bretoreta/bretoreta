// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
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
        weights: [400, 500, 600, 700, 800],
      },
      {
        name: "Caveat",
        provider: "google",
        weights: [500, 600],
      }
    ],
  },
  icon: {
    // Resolve icons from the locally installed collections at build time so
    // prerendered HTML contains the SVGs instead of empty spans.
    serverBundle: "local",
  },
  app: {
    head: {
      title: "Bret Oreta",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: 'theme-color', content: '#008236' },
        { name: 'theme-color', content: '#18181b',
          media: '(prefers-color-scheme: dark)' }
      ]
    },
  },
  image: {
    // Cloudflare Workers cannot run sharp/ipx at request time.
    // Responsive AVIF/WebP variants are generated at build time by
    // `scripts/optimize-images.mjs` and served as static assets.
    provider: "none",
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
      worksFor: { name: "Fairdeal Furniture" },
      image: '/images/bret_oreta.png',
      description: 'Full-stack developer and AI automation specialist based in Mombasa, Kenya. I build conversion-first websites and production-grade automations.',
      url: 'https://bretoreta.me',
      sameAs: [
        'https://github.com/bretoreta',
        'https://x.com/bret_oreta',
        'https://instagram.com/bret_oreta',
        'https://linkedin.com/in/bretoreta'
      ],
    })
  },
  ogImage: {
    // Generated at build time; pages are prerendered so the tags + PNGs
    // are shipped as static assets on Cloudflare Workers.
    zeroRuntime: true,
    security: {
      // The takumi renderer serialises work internally; on a cold build
      // queue the default 15s lock can be exceeded. Fail loudly, not silently.
      renderTimeout: 60_000,
    },
    defaults: {
      width: 1200,
      height: 630,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      concurrency: 2,
      failOnError: true,
      routes: ["/", "/about", "/blog", "/contact", "/project", "/404.html"],
    },
  },
  sitemap: {
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