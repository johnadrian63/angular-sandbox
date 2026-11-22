import { Component, inject, Signal, signal } from "@angular/core";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { isRouteActive } from "../../../../util/router.isactive.util";
import { NavigationCollapsibleNestedBase } from "../../navigation.collapsible.base";
import { NavigationDisplayText } from "../../../display/text/navigation.display.text";

@Component({
    selector: "app-navigation-collapsible-main-display-nested",
    templateUrl: "./navigation.collapsible.main.display.nested.html",
    styleUrl: "../navigation.collapsible.main.display.css",
    imports: [
        FaIconComponent,
        NgClass,
        NavigationDisplayText
    ]
})
export class NavigationCollapsibleMainDisplayNested extends NavigationCollapsibleNestedBase {
    private readonly router: Router = inject<Router>(Router);

    public get isActive(): Signal<boolean> {
        const routeActive = isRouteActive(this.router, this.menu().path!);
        const active = signal<boolean>(routeActive);

        return active.asReadonly();
    }
}
