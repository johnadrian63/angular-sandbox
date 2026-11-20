import { Component } from "@angular/core";

import { NavigationHorizontalCdk } from "../../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk";
import { DemoAppCmsHeaderNavigationHorizontalUtilityService } from "./demo.app.cms.header.navigation.horizontal.utility.service";
import { NavigationHorizontalCdkService } from "../../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";

@Component({
    selector: "app-demo-app-cms-header-navigation-horizontal-utility",
    templateUrl: "./demo.app.cms.header.navigation.horizontal.utility.html",
    imports: [NavigationHorizontalCdk],
    providers: [
        {
            provide: NavigationHorizontalCdkService,
            useExisting: DemoAppCmsHeaderNavigationHorizontalUtilityService,
        }
    ]
})
export class DemoAppCmsHeaderNavigationHorizontalUtility { }
