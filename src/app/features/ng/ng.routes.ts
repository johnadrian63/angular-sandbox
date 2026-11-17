import { Routes } from "@angular/router";

import { signalFormRoutes } from "./signal-form/signal.form.routes";

export const ngRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./ng").then((c) => c.Ng),
        children: [
            {
                path: "",
                redirectTo: "vcr",
                pathMatch: "full"
            },
            {
                path: "vcr",
                loadComponent: () => import("./vcr/ng.vcr").then((c) => c.NgVcr),
            },
            {
                path: "signal-form",
                loadComponent: () => import("./signal-form/signal.form").then((c) => c.SignalForm),
                children: [
                    ...signalFormRoutes
                ]
            }
        ]
    }
];
