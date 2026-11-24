import { Routes } from "@angular/router";

import { postResolver } from "./demo.app.cms.post.resolver";

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
            {
                path: "view/:id",
                loadComponent: () => import("./view/demo.app.cms.post.view").then((c) => c.DemoAppCmsPostView),
                resolve: {
                    post: postResolver,
                }
            },
            {
                path: "tags",
                loadComponent: () => import("./tags/demo.app.cms.post.tags").then((c) => c.DemoAppCmsPostTags),
            }
        ]
    }
];
