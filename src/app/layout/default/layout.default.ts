import { ReactiveFormsModule } from "@angular/forms";
import { Component, inject, OnInit } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatProgressBar } from "@angular/material/progress-bar";

import { Layout } from "../layout";
import { layoutDefaultNavigationData } from "./layout.default.navigation.data";
import { LayoutDefaultNavigationHorizontalCdkService } from "./layout.default.navigation.horizontal.service";
import { NavigationHorizontalCdk } from "../../features/shared/navigation/horizontal/cdk/navigation.horizontal.cdk";
import { NavigationHorizontalCdkService } from "../../features/shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";

@Component({
    selector: "app-layout-default",
    styleUrl: "./layout.default.css",
    templateUrl: "./layout.default.html",
    imports: [
        RouterModule,
        RouterOutlet,
        ReactiveFormsModule,
        NavigationHorizontalCdk,
        MatProgressBar
    ],
    providers: [
        LayoutDefaultNavigationHorizontalCdkService,
        {
            provide: NavigationHorizontalCdkService,
            useExisting: LayoutDefaultNavigationHorizontalCdkService,

        }
    ]
})
export class LayoutDefault extends Layout implements OnInit {
    public readonly navigationHorizontalCdkService: LayoutDefaultNavigationHorizontalCdkService = inject<LayoutDefaultNavigationHorizontalCdkService>(LayoutDefaultNavigationHorizontalCdkService, {
        self: true
    });

    public ngOnInit(): void {
        this.navigationHorizontalCdkService.menus.set(layoutDefaultNavigationData);
    }
}
