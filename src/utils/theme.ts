export type Theme = "clair" | "sombre";
const classeThemeSombre = "theme-sombre";

export function appliquerTheme(theme: Theme) {
  if (theme === "sombre") {
    document.documentElement.classList.add(classeThemeSombre);
  } else {
    document.documentElement.classList.remove(classeThemeSombre);
  }
}

export function obtenirPreferenceTheme(): Theme {
  return localStorage.theme === "sombre" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? "sombre"
    : "clair";
}

export function sauvegarderPreferenceTheme(theme: Theme) {
  localStorage.theme = theme;
}
