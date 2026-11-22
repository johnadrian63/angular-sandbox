import { Component } from "@angular/core";

import { NavigationVertical } from "../../../../../../shared/navigation/vertical/navigation.vertical";
import { NavigationVerticalService } from "../../../../../../shared/navigation/vertical/navigation.vertical.service";
import { DemoAppCmsHeaderNavigationVerticalUtilityService } from "./demo.app.cms.header.navigation.vertical.utility.service";

@Component({
    selector: "app-demo-app-cms-header-navigation-vertical-utility",
    templateUrl: "./demo.app.cms.header.navigation.vertical.utility.html",
    imports: [NavigationVertical],
    providers: [
        {
            provide: NavigationVerticalService,
            useExisting: DemoAppCmsHeaderNavigationVerticalUtilityService,
        }
    ],
})
export class DemoAppCmsHeaderNavigationVerticalUtility { }
