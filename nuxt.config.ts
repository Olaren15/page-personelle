import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  router: {
    options: {
      linkActiveClass: "active",
    },
  },
  runtimeConfig: {
    smtp: {
      host: "localhost",
      port: 2525,
      username: "replace me",
      password: "replace me",
    },
  },
  head: {
    meta: [
      {
        name: "theme-color",
        content: "#3D4451",
        media: "(prefers-color-scheme: light)",
      },
      {
        name: "theme-color",
        content: "#191D24",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
});
