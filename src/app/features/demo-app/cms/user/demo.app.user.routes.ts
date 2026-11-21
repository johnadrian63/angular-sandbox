import { Routes } from "@angular/router";

export const demoAppCmsUserRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                loadComponent: () => import("./list/demo.app.cms.user.list").then((c) => c.DemoAppCmsUserList),
            },
        ]
    }
];
