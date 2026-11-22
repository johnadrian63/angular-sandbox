import { Component } from "@angular/core";

import { NavigationHorizontalCdk } from "../../../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk";
import { NavigationHorizontalCdkService } from "../../../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { DemoAppCmsHeaderNavigationHorizontalMenuService } from "./demo.app.cms.header.navigation.horizontal.menu.service";

/**
 * @deprecated
 * I will be using sidebar instead of header navigation
 */
@Component({
    selector: "app-demo-app-cms-header-navigation-horizontal-menu",
    templateUrl: "./demo.app.cms.header.navigation.horizontal.menu.html",
    imports: [NavigationHorizontalCdk],
    providers: [
        {
            provide: NavigationHorizontalCdkService,
            useExisting: DemoAppCmsHeaderNavigationHorizontalMenuService,
        }
    ],
})
export class DemoAppCmsHeaderNavigationHorizontalMenu { }
