import { Component, inject, DOCUMENT, signal, WritableSignal } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { LayoutDisplayThemeSwitcherService, LayoutTheme } from "./shared/display/theme-switcher/layout.display.theme.switcher.service";

@Component({
    template: ""
})
export abstract class Layout {
    public readonly loading: WritableSignal<boolean> = signal<boolean>(false);
    public readonly router: Router = inject<Router>(Router);

    protected readonly document: Document = inject<Document>(DOCUMENT);
    protected readonly themeKey: string = "theme";
    protected theme: string = "theme";

    private readonly themeSwitcherService: LayoutDisplayThemeSwitcherService = inject<LayoutDisplayThemeSwitcherService>(LayoutDisplayThemeSwitcherService);

    constructor() {
        this.themeSwitcherService.getTheme()
            .pipe(takeUntilDestroyed())
            .subscribe((theme: LayoutTheme) => {
                this.document.documentElement.classList.remove("light", "dark");

                if (theme) {
                    this.document.documentElement.classList.add(theme);
                }
            });

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
