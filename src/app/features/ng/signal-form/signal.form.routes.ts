import { Routes } from "@angular/router";

export const signalFormRoutes: Routes = [
    {
        path: "",
        redirectTo: "using-submit",
        pathMatch: "full"
    },
    {
        path: "using-submit",
        loadComponent: () => import("./submit/signal.form.submit").then((c) => c.SignalFormSubmit),
    },
    {
        path: "using-form-root",
        loadComponent: () => import("./form-root/signal.form.form.root").then((c) => c.SignalFormFormRoot),
    },
];
