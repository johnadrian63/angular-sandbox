import { Component, inject, OnInit } from "@angular/core";

import { demoAppCmsNavigationData } from "../demo.app.cms.navigation.data";
import { NavigationCollapsible } from "../../../../shared/navigation/collapsible/navigation.collapsible";
import { NavigationCollapsibleService } from "../../../../shared/navigation/collapsible/navigation.collapsible.service";
import { DemoAppCmsLayoutSidebarNavigationCollapsibleResolverService } from "./demo.app.cms.layout.sidebar.navigation.collapsible.service";

@Component({
    selector: "app-demo-app-cms-layout-sidebar",
    styleUrl: "./demo.app.cms.layout.sidebar.css",
    templateUrl: "./demo.app.cms.layout.sidebar.html",
    imports: [NavigationCollapsible],
    providers: [
        DemoAppCmsLayoutSidebarNavigationCollapsibleResolverService,
        {
            provide: NavigationCollapsibleService,
            useExisting: DemoAppCmsLayoutSidebarNavigationCollapsibleResolverService
        }
    ]
})
export class DemoAppCmsLayoutSidebar implements OnInit {
    private readonly navigationCollapsibleResolverService: DemoAppCmsLayoutSidebarNavigationCollapsibleResolverService = inject<DemoAppCmsLayoutSidebarNavigationCollapsibleResolverService>(DemoAppCmsLayoutSidebarNavigationCollapsibleResolverService);

    public ngOnInit(): void {
        this.navigationCollapsibleResolverService.menus.set(demoAppCmsNavigationData);
    }
}
