import { Routes } from "@angular/router";

import { userResolver } from "./demo.app.cms.user.resolver";

export const demoAppCmsUserRoutes: Routes = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {
        path: "list",
        loadComponent: () => import("./list/demo.app.cms.user.list").then((c) => c.DemoAppCmsUserList),
    },
    {
        path: "view/:id",
        loadComponent: () => import("./view/demo.app.cms.user.view").then((c) => c.DemoAppCmsUserView),
        resolve: {
            user: userResolver
        }
    }
];
