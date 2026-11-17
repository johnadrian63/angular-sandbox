import { Component, inject } from "@angular/core";
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
    public expandIcon = faAngleDown;

    public menuClass: string = "";

    private readonly router: Router = inject<Router>(Router);


    public get isSettingsActive() {
        return isActive(this.menu().path as string, this.router, {
            paths: 'subset',
            queryParams: 'ignored',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }
}
