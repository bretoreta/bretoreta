// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/seo",
  ],
  fonts: {
    families: [
      { name: "Plus Jakarta Sans", provider: "google", weights: [400, 800] },
    ],
  },
  app: {
    head: {
      title: "Bret Oreta",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  image: {
    quality: 80,
    format: ["webp"],
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
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
        },
      },
    },
  },
});