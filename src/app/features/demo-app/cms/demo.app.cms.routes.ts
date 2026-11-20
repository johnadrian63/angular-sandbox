import { Routes } from "@angular/router";

export const demoAppCmsRoutes: Routes = [
    {
        path: "",
        redirectTo: "posts",
        pathMatch: "full"
    },
    {
        path: "posts",
        loadComponent: () => import("./post/demo.app.cms.post").then((c) => c.DemoAppCmsPost)
    },
    {
        path: "",
        outlet: "header",
        loadComponent: () => import("./layout/header/demo.app.cms.layout.header").then((c) => c.DemoAppCmsLayoutHeader)
    },
    {
        path: "",
        outlet: "sidebar",
        loadComponent: () => import("./layout/sidebar/demo.app.cms.layout.sidebar").then((c) => c.DemoAppCmsLayoutSidebar)
    },
    {
        path: "",
        outlet: "footer",
        loadComponent: () => import("./layout/footer/demo.app.cms.layout.footer").then((c) => c.DemoAppCmsFooter)
    }
];
