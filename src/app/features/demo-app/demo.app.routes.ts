import { Routes } from "@angular/router";

export const demoAppRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./demo.app").then((c) => c.DemoApp),
        children: [
            {
                path: "",
                redirectTo: "tennis-live-score",
                pathMatch: "full"
            },
            {
                path: "tennis-live-score",
                loadComponent: () => import("./tennis-live-score/demo.app.tennis.live.score").then((c) => c.DemoAppTennisLiveScore),
            }
        ]
    }
];
