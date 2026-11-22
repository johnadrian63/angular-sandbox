import { Component, inject, OnInit } from "@angular/core";

import { demoAppCmsNavigationData } from "../demo.app.cms.navigation.data";
import { NavigationCollapsible } from "../../../../shared/navigation/collapsible/navigation.collapsible";
import { NavigationCollapsibleService } from "../../../../shared/navigation/collapsible/navigation.collapsible.service";
import { DemoAppCmsLayoutSidebarNavigationService } from "./demo.app.cms.layout.sidebar.navigation.service";

@Component({
    selector: "app-demo-app-cms-layout-sidebar",
    styleUrl: "./demo.app.cms.layout.sidebar.css",
    templateUrl: "./demo.app.cms.layout.sidebar.html",
    imports: [NavigationCollapsible],
    providers: [
        DemoAppCmsLayoutSidebarNavigationService,
        {
            provide: NavigationCollapsibleService,
            useExisting: DemoAppCmsLayoutSidebarNavigationService
        }
    ]
})
export class DemoAppCmsLayoutSidebar implements OnInit {
    private readonly navigationCollapsibleResolverService: DemoAppCmsLayoutSidebarNavigationService = inject<DemoAppCmsLayoutSidebarNavigationService>(DemoAppCmsLayoutSidebarNavigationService);

    public ngOnInit(): void {
        this.navigationCollapsibleResolverService.menus.set(demoAppCmsNavigationData);
    }
}
