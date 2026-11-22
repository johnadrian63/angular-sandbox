import { Routes } from "@angular/router";

export const demoAppCmsUserRoutes: Routes = [
    {
        path: "",
        children: [
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
                path: "view",
                loadComponent: () => import("./view/demo.app.cms.user.view").then((c) => c.DemoAppCmsUserView),
            },
        ]
    }
];
