import { Component, inject, Signal } from "@angular/core";

import { IMenuItem } from "../navigation.model";
import { NavigationCollapsibleMain } from "./main/navigation.collapsible.main";
import { NavigationCollapsibleService } from "./navigation.collapsible.service";

@Component({
    selector: "app-navigation-collapsible",
    templateUrl: "./navigation.collapsible.html",
    imports: [
        NavigationCollapsibleMain
    ]
})
export class NavigationCollapsible {

    public get menus(): Signal<IMenuItem[]> {
        return this.navigationCollapsibleService.menus.asReadonly();
    }

    private readonly navigationCollapsibleService: NavigationCollapsibleService = inject<NavigationCollapsibleService>(NavigationCollapsibleService);
}
