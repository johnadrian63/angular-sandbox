import { Component } from "@angular/core";

import { NavigationVertical } from "../../../../../../shared/navigation/vertical/navigation.vertical";
import { NavigationVerticalService } from "../../../../../../shared/navigation/vertical/navigation.vertical.service";
import { DemoAppCmsHeaderNavigationVerticalMenuService } from "./demo.app.cms.header.navigation.vertical.menu.service";

@Component({
    selector: "app-demo-app-cms-header-navigation-vertical-menu",
    templateUrl: "./demo.app.cms.header.navigation.vertical.menu.html",
    imports: [NavigationVertical],
    providers: [
        {
            provide: NavigationVerticalService,
            useExisting: DemoAppCmsHeaderNavigationVerticalMenuService,
        }
    ],
})
export class DemoAppCmsHeaderNavigationVerticalMenu { }
