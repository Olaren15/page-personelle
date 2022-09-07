import { Page } from "~/models/page";
import { queryContent } from "#imports";

export const usePages = async () => {
  const pagesProjets = await queryContent("projets").find();

  const pages: Page[] = [
    { route: "/", title: "À propos" },
    {
      route: "/projets",
      title: "Projets",
      children: pagesProjets.map(page => {
        return {
          route: page._path,
          title: page.title
        };
      })
    },
    { route: "/contact", title: "Contact" }
  ];

  return {
    getPageFromRoute: (route: string) => {
      let pagesToSearch: Page[] = [...pages];

      for (let i = 0; i < pagesToSearch.length; i++) {
        if (pagesToSearch[i].route === route) {
          return pagesToSearch[i];
        }

        if (pagesToSearch[i].children) {
          pagesToSearch = pagesToSearch.concat(pagesToSearch[i].children);
        }
      }

      return null;
    },
    getPages: () => {
      return pages;
    }
  };
};
