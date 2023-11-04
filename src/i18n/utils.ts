import { langueParDefaut, messages } from "./messages.ts";

export function obtenirLangueSelonUrl(url: URL) {
  const [, langue] = url.pathname.split("/");
  if (langue && langue in messages) return langue as keyof typeof messages;
  return langueParDefaut;
}

export function utiliserTraductions(language: keyof typeof messages) {
  return function t(key: keyof (typeof messages)[typeof langueParDefaut]) {
    return messages[language][key] || messages[langueParDefaut][key];
  };
}

export function utiliserCheminTraduit(language: keyof typeof messages) {
  return function traduireChemin(path: string, l: string = language) {
    return l === langueParDefaut ? path : `/${l}${path}`;
  };
}
