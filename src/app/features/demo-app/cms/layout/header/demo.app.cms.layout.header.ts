import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faTableColumns, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { SidebarToggler } from "../../../../../layout/shared/sidebar-toggler/sidebar.toggler.directive";
import { demoAppCmsNavigationData, demoAppCmsProfileNavigationData } from "../demo.app.cms.navigation.data";
import { DemoAppCmsHeaderNavigationHorizontalUtility } from "./navigation/horizontal-utility/demo.app.cms.header.navigation.horizontal.utility";
import { DemoAppCmsHeaderNavigationVerticalMenuService } from "./navigation/vertical-menu/demo.app.cms.header.navigation.vertical.menu.service";
import { DemoAppCmsHeaderNavigationVerticalUtilityService } from "./navigation/vertical-utility/demo.app.cms.header.navigation.vertical.utility.service";
import { DemoAppCmsHeaderNavigationHorizontalUtilityService } from "./navigation/horizontal-utility/demo.app.cms.header.navigation.horizontal.utility.service";

@Component({
    selector: "app-demo-app-cms-layout-header",
    styleUrl: "./demo.app.cms.layout.header.css",
    templateUrl: "./demo.app.cms.layout.header.html",
    imports: [
        FaIconComponent,
        RouterModule,
        SidebarToggler,
        DemoAppCmsHeaderNavigationHorizontalUtility,
    ],
    providers: [
        DemoAppCmsHeaderNavigationHorizontalUtilityService,
        DemoAppCmsHeaderNavigationVerticalMenuService,
        DemoAppCmsHeaderNavigationVerticalUtilityService
    ],
})
export class DemoAppCmsLayoutHeader {
    public readonly faTableColumnsIcon: IconDefinition = faTableColumns;
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    private readonly navigationHorizontalUtilityService: DemoAppCmsHeaderNavigationHorizontalUtilityService = inject<DemoAppCmsHeaderNavigationHorizontalUtilityService>(DemoAppCmsHeaderNavigationHorizontalUtilityService);
    private readonly navigationVerticalMenuService: DemoAppCmsHeaderNavigationVerticalMenuService = inject<DemoAppCmsHeaderNavigationVerticalMenuService>(DemoAppCmsHeaderNavigationVerticalMenuService);
    private readonly navigationVerticalUtilityService: DemoAppCmsHeaderNavigationVerticalUtilityService = inject<DemoAppCmsHeaderNavigationVerticalUtilityService>(DemoAppCmsHeaderNavigationVerticalUtilityService);

    public ngOnInit(): void {
        this.navigationVerticalMenuService.menus.set(demoAppCmsNavigationData);

        this.navigationHorizontalUtilityService.menus.set(demoAppCmsProfileNavigationData);
        this.navigationVerticalUtilityService.setMenus(demoAppCmsProfileNavigationData);
    }
}
