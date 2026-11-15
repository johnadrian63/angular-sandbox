import { Component, inject, DOCUMENT } from "@angular/core";
import { RouterModule } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { LayoutDefaultThemeSwitcherService, LayoutTheme } from "./default/display/theme-switcher/layout.default.theme.switcher.service";

@Component({
    template: "",
    imports: [RouterModule],
})
export abstract class Layout {
    protected readonly document: Document = inject<Document>(DOCUMENT);
    protected readonly themeKey: string = "theme";
    protected theme: string = "theme";

    private readonly themeSwitcherService: LayoutDefaultThemeSwitcherService = inject<LayoutDefaultThemeSwitcherService>(LayoutDefaultThemeSwitcherService);

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