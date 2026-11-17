import { Component, computed, inject } from "@angular/core";
import { NgClass } from "@angular/common";
import { CdkMenuTrigger } from "@angular/cdk/menu";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { isActive, Router, RouterModule } from "@angular/router";

import { NavigationDisplay } from "../../../../display/navigation.display";
import { NavigationHorizontalCdkDropdownItem } from "../item/navigation.horizontal.cdk.dropdown.item";

@Component({
    selector: "app-navigation-horizontal-cdk-dropdown-link",
    styleUrl: "./navigation.horizontal.cdk.dropdown.link.css",
    templateUrl: "./navigation.horizontal.cdk.dropdown.link.html",
    imports: [
        RouterModule,
        CdkMenuTrigger,
        NgClass,
        FaIconComponent,
        NavigationHorizontalCdkDropdownItem,
    ],
})
export class NavigationHorizontalCdkDropdownLink extends NavigationDisplay {

    public get currentClasses(): string {
        let classes = this.classes;

        if (this.isSettingsActive()) {
            classes += ` ${this.activeClass}`;
        }

        return classes;
    }

    public expandIcon = faAngleDown;

    public menuClass: string = "";

    public activeClass: string = "underline";

    private readonly router: Router = inject<Router>(Router);

    public readonly isSettingsActive = computed(() => {
        const path = this.menu().path;

        const processedPath = path && Array.isArray(path) ? this.router.createUrlTree(path) : path;

        if (!processedPath) {
            return false;
        }

        const active = isActive(processedPath, this.router, {
            paths: 'subset',
            queryParams: 'ignored',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });

        return active();
    });
}
