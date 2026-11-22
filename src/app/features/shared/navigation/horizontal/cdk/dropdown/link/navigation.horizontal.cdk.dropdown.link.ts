import { Component, computed, inject } from "@angular/core";
import { NgClass } from "@angular/common";
import { CdkMenuTrigger } from "@angular/cdk/menu";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { Router, RouterModule } from "@angular/router";

import { NavigationDisplay } from "../../../../display/navigation.display";
import { isRouteActive } from "../../../../../util/router.isactive.util";
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

        return path ? isRouteActive(this.router, path) : false;
    });
}
