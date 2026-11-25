import { Routes } from "@angular/router";

import { demoAppCmsUserRoutes } from "./user/demo.app.cms.user.routes";
import { demoAppCmsPostRoutes } from "./post/demo.app.cms.post.routes";
import { demoAppCmsQuoteRoutes } from "./quote/demo.app.cms.quote.routes";

export const demoAppCmsRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                redirectTo: "users",
                pathMatch: "full"
            },
            {
                path: "users",
                children: [
                    ...demoAppCmsUserRoutes
                ]
            },
            {
                path: "posts",
                children: [
                    ...demoAppCmsPostRoutes
                ]
            },
            {
                path: "quotes",
                children: [
                    ...demoAppCmsQuoteRoutes
                ]
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
            },
            {
                path: "**",
                loadComponent: () => import("./404/error.404").then((c) => c.Error404)
            }
        ]
    }
];
