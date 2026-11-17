import { Component, inject, OnInit } from "@angular/core";

import { pocDynamicNavigationData } from "./poc.dynamic.navigation.data";
import { PocDynamicNavigationHorizontalCdkService } from "./poc.dynamic.navigation.horizontal.service";
import { NavigationHorizontalCdk } from "../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk";
import { NavigationHorizontalCdkService } from "../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";

@Component({
    selector: "app-poc-dynamic-navigation",
    styleUrl: "./poc.dynamic.navigation.css",
    templateUrl: "./poc.dynamic.navigation.html",
    imports: [NavigationHorizontalCdk],
    providers: [
        PocDynamicNavigationHorizontalCdkService,
        {
            provide: NavigationHorizontalCdkService,
            useExisting: PocDynamicNavigationHorizontalCdkService
        }
    ]
})
export class PocDynamicNavigation implements OnInit {
    private readonly navigationService: PocDynamicNavigationHorizontalCdkService = inject<PocDynamicNavigationHorizontalCdkService>(PocDynamicNavigationHorizontalCdkService);

    public ngOnInit(): void {
        this.navigationService.menus.set(pocDynamicNavigationData);
    }
}
