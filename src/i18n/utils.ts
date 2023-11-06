import { langueParDefaut, messages } from "./messages.ts";

export function obtenirLangueSelonUrl(url: URL) {
  const [, langue] = url.pathname.split("/");
  if (langue && langue in messages) return langue as keyof typeof messages;
  return langueParDefaut;
}

export function obtenirLangueOpposee(langue: keyof typeof messages) {
  return (langue === "fr" ? "en" : "fr") as keyof typeof messages;
}

export function utiliserTraductions(langue: keyof typeof messages) {
  return function t(key: keyof (typeof messages)[typeof langueParDefaut]) {
    return messages[langue][key] || messages[langueParDefaut][key];
  };
}

export function utiliserCheminTraduit(langue: keyof typeof messages) {
  return function traduireChemin(chemin: string, cheminLangue: string = langue) {
    return cheminLangue === langueParDefaut ? chemin : `/${cheminLangue}${chemin}`;
  };
}
