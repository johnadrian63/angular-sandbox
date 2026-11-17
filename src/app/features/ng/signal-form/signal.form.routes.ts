import { Routes } from "@angular/router";

export const signalFormRoutes: Routes = [
    {
        path: "",
        redirectTo: "basic",
        pathMatch: "full"
    },
    {
        path: "basic",
        loadComponent: () => import("./basic/signal.form.basic").then((c) => c.SignalFormBasic),
    },
];
