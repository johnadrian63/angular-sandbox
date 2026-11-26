import { Routes } from "@angular/router";

export const pocRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./poc").then((c) => c.Poc),
        children: [
            {
                path: "",
                redirectTo: "table-builder",
                pathMatch: "full"
            },
            {
                path: "table-builder",
                loadComponent: () => import("./table-builder/poc.table.builder").then((c) => c.PocTableBuilder),
            },
            {
                path: "dynamic-navigation",
                loadComponent: () => import("./dynamic-navigation/poc.dynamic.navigation").then((c) => c.PocDynamicNavigation),
            },
            {
                path: "collapsible-navigation",
                loadComponent: () => import("./collapsible-navigation/poc.collapsible.navigation").then((c) => c.PocCollapsibleNavigation),
            },
            {
                path: "nested-handler",
                loadComponent: () => import("./nested-handler/poc.nested.handler").then((c) => c.PocNestedHandler),
            },
            {
                path: "resource-service",
                loadComponent: () => import("./resource/poc.resource").then((c) => c.PocResource),
            },
            {
                path: "websocket",
                loadComponent: () => import("./websocket/poc.websocket").then((c) => c.PocWebsocket),
            },
        ]
    }
];
