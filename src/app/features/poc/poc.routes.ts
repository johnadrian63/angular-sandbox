import { Routes } from "@angular/router";

export const pocRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./poc").then((c) => c.Poc),
        children: [
            {
                path: "",
                redirectTo: "nested-handler",
                pathMatch: "full"
            },
            {
                path: "nested-handler",
                loadComponent: () => import("./nested-handler/poc.nested.handler").then((c) => c.PocNestedHandler),
            }
        ]
    }
];