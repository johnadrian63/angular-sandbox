import { Routes } from "@angular/router";

export const demoAppCmsQuoteRoutes: Routes = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {
        path: "list",
        loadComponent: () => import("./demo.app.cms.quote").then((c) => c.DemoAppCmsQuote),
    },
];
