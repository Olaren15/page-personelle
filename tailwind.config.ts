import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ["Urbanist Variable", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "light-background": "#f5f4f2",
      "light-foreground": "#131322",
      "light-accent": "#bd92ad",
      "dark-background": "#2c2c39",
      "dark-foreground": "#ffffff",
      "dark-accent": "#786a96",
      main: "#d2a1c1",
      "main-darker": "#bb669d",
    },
  },
  darkMode: ["class", ".theme-sombre"],
  plugins: [],
} satisfies Config;
