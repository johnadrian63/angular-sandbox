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
        loadComponent: () => import("./header/demo.app.cms.header").then((c) => c.DemoAppCmsPostHeader)
    },
    {
        path: "",
        outlet: "sidebar",
        loadComponent: () => import("./sidebar/demo.app.cms.sidebar").then((c) => c.DemoAppCmsSidebar)
    },
    {
        path: "",
        outlet: "footer",
        loadComponent: () => import("./footer/demo.app.cms.footer").then((c) => c.DemoAppCmsFooter)
    }
];