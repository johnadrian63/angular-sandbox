import { ReactiveFormsModule } from "@angular/forms";
import { Component, inject, OnInit, signal, WritableSignal } from "@angular/core";
import { NavigationEnd, NavigationStart, Router, RouterModule, RouterOutlet } from "@angular/router";

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
        NavigationHorizontalCdk
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
    public readonly loading: WritableSignal<boolean> = signal<boolean>(false);
    public readonly router: Router = inject<Router>(Router);
    public readonly navigationHorizontalCdkService: LayoutDefaultNavigationHorizontalCdkService = inject<LayoutDefaultNavigationHorizontalCdkService>(LayoutDefaultNavigationHorizontalCdkService);

    public ngOnInit(): void {
        this.navigationHorizontalCdkService.menus.set(layoutDefaultNavigationData);

        this.router
            .events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this.loading.set(true);
                }

                if (event instanceof NavigationEnd) {
                    this.loading.set(false);
                }
            });
    }
}
