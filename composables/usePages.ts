import {Page} from "~/models/page";

export const usePages = () => {
    const pages: Page[] = [
        {route: '/', title: 'À propos'},
        {route: '/projets', title: 'Projets'},
        {route: '/contact', title: 'Contact'}
    ]

    return {
        getPageFromRoute: (route: string) => {
            return pages.find((page) => page.route === route);
        },
        getPages: () => {
            return pages;
        }
    }
}
