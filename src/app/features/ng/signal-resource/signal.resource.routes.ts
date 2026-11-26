import { Routes } from "@angular/router";

export const signalResourceRoutes: Routes = [
    {
        path: "",
        redirectTo: "resource",
        pathMatch: "full"
    },
    {
        path: "resource",
        loadComponent: () => import("./resource/ng.signal.resource.resource").then((c) => c.NgSignalResourceResource),
    },
    {
        path: "http",
        loadComponent: () => import("./http/ng.signal.resource.http").then((c) => c.NgSignalResourceHttp),
    },
];
