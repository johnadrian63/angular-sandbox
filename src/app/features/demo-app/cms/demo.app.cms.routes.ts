import { Routes } from "@angular/router";

import { demoAppCmsUserRoutes } from "./user/demo.app.user.routes";
import { demoAppCmsPostRoutes } from "./post/demo.app.post.routes";

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
        ]
    }
];
