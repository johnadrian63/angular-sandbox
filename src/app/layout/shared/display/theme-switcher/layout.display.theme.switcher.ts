import { NgClass } from "@angular/common";
import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormControl } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { NavigationDisplay } from "../../../../features/shared/navigation/display/navigation.display";
import { LayoutDisplayThemeSwitcherService, LayoutTheme } from "./layout.display.theme.switcher.service";

@Component({
    selector: "app-layout-display-theme-switcher",
    templateUrl: "./layout.display.theme.switcher.html",
    imports: [
        ReactiveFormsModule,
        NgClass
    ],
})
export class LayoutDisplayThemeSwitcher extends NavigationDisplay implements OnInit {
    public readonly themeControl = new FormControl<LayoutTheme>("light");

    private readonly switcherService: LayoutDisplayThemeSwitcherService = inject<LayoutDisplayThemeSwitcherService>(LayoutDisplayThemeSwitcherService);
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);

    public ngOnInit(): void {
        this.themeControl
            .valueChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((theme: LayoutTheme | null) => {
                this.switcherService.setTheme(theme!);
            });

        this.switcherService.getTheme()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((theme: LayoutTheme) => {
                this.themeControl.setValue(theme, { emitEvent: false });
            });
    }
}
