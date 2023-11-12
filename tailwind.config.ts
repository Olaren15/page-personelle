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
      "light-background": "#F5F4F2",
      "light-foreground": "#131322",
      "light-accent": "#BD92AD",
      "dark-background": "#2c2c39",
      "dark-foreground": "#FFFFFF",
      "dark-accent": "#786A96",
      main: "#D2A1C1",
      "main-darker": "#bb669d",
    },
  },
  darkMode: ["class", ".theme-sombre"],
  plugins: [],
} satisfies Config;
