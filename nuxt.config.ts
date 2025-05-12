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
  ],
  fonts: {
    families: [{ name: "Plus Jakarta Sans", provider: "google" }],
  },
  app: {
    head: {
      title: "Bret Oreta",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
