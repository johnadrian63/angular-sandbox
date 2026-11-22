import { Routes } from "@angular/router";

import { demoAppCmsRoutes } from "./cms/demo.app.cms.routes";

export const demoAppRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./demo.app").then((c) => c.DemoApp),
        children: [
            {
                path: "",
                redirectTo: "cms",
                pathMatch: "full"
            },
            {
                path: "cms",
                children: [
                    ...demoAppCmsRoutes
                ]
            },
        ]
    }
];
