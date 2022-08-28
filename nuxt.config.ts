import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode"
  ],
  colorMode: {
    preference: "light",
    dataValue: "theme",
    classSuffix: ""
  },
  router: {
    options: {
      linkActiveClass: "active"
    }
  }
});
