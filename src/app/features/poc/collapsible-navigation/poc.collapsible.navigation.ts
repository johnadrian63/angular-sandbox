import { Component, inject, OnInit } from "@angular/core";

import { pocCollapsibleNavigationData } from "./poc.collapsible.navigation.data";
import { PocCollapsibleNavigationResolverService } from "./poc.collapsible.navigation.service";
import { NavigationCollapsible } from "../../shared/navigation/collapsible/navigation.collapsible";
import { NavigationCollapsibleService } from "../../shared/navigation/collapsible/navigation.collapsible.service";

@Component({
    imports: [NavigationCollapsible],
    selector: "app-poc.collapsible.navigation",
    templateUrl: "./poc.collapsible.navigation.html",
    providers: [
        PocCollapsibleNavigationResolverService,
        {
            provide: NavigationCollapsibleService,
            useExisting: PocCollapsibleNavigationResolverService
        }
    ]
})
export class PocCollapsibleNavigation implements OnInit {
    private readonly navigationCollapsibleService: PocCollapsibleNavigationResolverService = inject<PocCollapsibleNavigationResolverService>(PocCollapsibleNavigationResolverService);

    public ngOnInit(): void {
        this.navigationCollapsibleService.menus.set(pocCollapsibleNavigationData);
    }
}
