import { Routes } from "@angular/router";

export const demoAppCmsPostRoutes: Routes = [
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
                loadComponent: () => import("./list/demo.app.cms.post.list").then((c) => c.DemoAppCmsPostList),
            },
        ]
    }
];
