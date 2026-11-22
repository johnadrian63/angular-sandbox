import { Component, inject, DOCUMENT } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { LayoutDisplayThemeSwitcherService, LayoutTheme } from "./shared/display/theme-switcher/layout.display.theme.switcher.service";

@Component({
    template: ""
})
export abstract class Layout {
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
    }
}
