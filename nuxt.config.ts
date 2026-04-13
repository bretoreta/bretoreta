// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

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
      script: [
        {
          src: "https://analytics.bretoreta.me/api/script.js",
          async: true,
          defer: true,
          "data-site-id": "1",
        },
      ],
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
});
