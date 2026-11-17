import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";

import { materialNavigationData } from "./material.navigation.data";
import { MaterialNavigationService } from "./material.navigation.service";
import { NavigationHorizontalCdkService } from "../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { NavigationHorizontalCdk } from "../shared/navigation/horizontal/cdk/navigation.horizontal.cdk";

@Component({
    selector: "app-material",
    styleUrl: "./material.css",
    templateUrl: "./material.html",
    imports: [RouterOutlet, RouterModule, NavigationHorizontalCdk],
    providers: [
        MaterialNavigationService,
        {
            provide: NavigationHorizontalCdkService,
            useExisting: MaterialNavigationService,
        }
    ]
})
export class Material implements OnInit {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    public readonly navigationService: MaterialNavigationService = inject<MaterialNavigationService>(MaterialNavigationService);

    public ngOnInit(): void {
        this.navigationService.menus.set(materialNavigationData);
    }
}
