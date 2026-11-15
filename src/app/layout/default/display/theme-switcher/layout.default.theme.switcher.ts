import { NgClass } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormControl } from "@angular/forms";

import { NavigationDisplay } from "../../../../features/shared/navigation/display/navigation.display";
import { LayoutDefaultThemeSwitcherService, LayoutTheme } from "./layout.default.theme.switcher.service";

@Component({
    selector: "app-layout-default-theme-switcher",
    styleUrl: "./layout.default.theme.switcher.css",
    templateUrl: "./layout.default.theme.switcher.html",
    imports: [
        ReactiveFormsModule,
        NgClass,
    ],
})
export class LayoutDefaultThemeSwitcher extends NavigationDisplay implements OnInit {
    public readonly themeControl = new FormControl<LayoutTheme>("light");

    private readonly switcherService: LayoutDefaultThemeSwitcherService = inject<LayoutDefaultThemeSwitcherService>(LayoutDefaultThemeSwitcherService);

    public ngOnInit(): void {
        this.themeControl
            .valueChanges
            .subscribe((theme: LayoutTheme | null) => {
                this.switcherService.setTheme(theme!);
            });

        this.switcherService.getTheme()
            .subscribe((theme: LayoutTheme) => {
                this.themeControl.setValue(theme, { emitEvent: false });
            });
    }
}
