import { Routes } from "@angular/router";

export const demoAppCmsRecipeRoutes: Routes = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {
        path: "list",
        loadComponent: () => import("./list/demo.app.cms.recipe.list").then((c) => c.DemoAppCmsRecipeList),
    },
];
