import { Routes } from "@angular/router";

export const pocRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./poc").then((c) => c.Poc),
        children: [
            {
                path: "",
                redirectTo: "dynamic-navigation",
                pathMatch: "full"
            },
            {
                path: "dynamic-navigation",
                loadComponent: () => import("./dynamic-navigation/poc.dynamic.navigation").then((c) => c.PocDynamicNavigation),
            },
            {
                path: "nested-handler",
                loadComponent: () => import("./nested-handler/poc.nested.handler").then((c) => c.PocNestedHandler),
            }
        ]
    }
];