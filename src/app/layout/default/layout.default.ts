import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Component, inject, OnInit, signal, WritableSignal } from "@angular/core";
import { NavigationEnd, NavigationStart, Router, RouterModule, RouterOutlet } from "@angular/router";

import { Layout } from "../layout";
import { layoutDefaultNavigationData } from "./layout.default.navigation.data";
import { LayoutDefaultNavigationHorizontalCdkService } from "./layout.default.navigation.horizontal.service";
import { NavigationHorizontalCdk } from "../../features/shared/navigation/horizontal/cdk/navigation.horizontal.cdk";
import { LayoutDefaultThemeSwitcherService, LayoutTheme } from "./display/theme-switcher/layout.default.theme.switcher.service";
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
    public readonly themeControl = new FormControl("light");
    public readonly loading: WritableSignal<boolean> = signal<boolean>(false);
    public readonly router: Router = inject<Router>(Router);
    public readonly navigationHorizontalCdkService: LayoutDefaultNavigationHorizontalCdkService = inject<LayoutDefaultNavigationHorizontalCdkService>(LayoutDefaultNavigationHorizontalCdkService);
    private readonly themeSwitcherService: LayoutDefaultThemeSwitcherService = inject<LayoutDefaultThemeSwitcherService>(LayoutDefaultThemeSwitcherService);

    constructor() {
        super();

        this.themeSwitcherService.getTheme()
            .pipe(takeUntilDestroyed())
            .subscribe((theme: LayoutTheme) => {
                this.document.documentElement.classList.remove("system", "light", "dark");

                this.document.documentElement.classList.add(theme);
            });
    }
    public override ngOnInit(): void {
        super.ngOnInit();

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
