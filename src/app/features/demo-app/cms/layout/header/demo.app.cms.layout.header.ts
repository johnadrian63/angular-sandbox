import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faTableColumns, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { IMenuItem } from "../../../../shared/navigation/navigation.model";
import { demoAppCmsNavigationData } from "./demo.app.cms.layout.navigation.data";
import { WithSidebarToggle } from "../../../../../layout/with-sidebar/shared/directive/with.sidebar.toggle.directive";
import { LayoutDisplayThemeSwitcherHandler } from "../../../../../layout/shared/display/theme-switcher/layout.display.theme.switcher.handler";
import { DemoAppCmsHeaderNavigationHorizontalMenu } from "./navigation/horizontal-menu/demo.app.cms.header.navigation.horizontal.menu";
import { DemoAppCmsHeaderNavigationHorizontalUtility } from "./navigation/horizontal-utility/demo.app.cms.header.navigation.horizontal.utility";
import { DemoAppCmsHeaderNavigationHorizontalMenuService } from "./navigation/horizontal-menu/demo.app.cms.header.navigation.horizontal.menu.service";
import { DemoAppCmsHeaderNavigationHorizontalUtilityService } from "./navigation/horizontal-utility/demo.app.cms.header.navigation.horizontal.utility.service";
import { DemoAppCmsHeaderNavigationVerticalMenuService } from "./navigation/vertical-menu/demo.app.cms.header.navigation.vertical.menu.service";
import { DemoAppCmsHeaderNavigationVerticalUtilityService } from "./navigation/vertical-utility/demo.app.cms.header.navigation.vertical.utility.service";
import { DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler } from "./navigation/horizontal-utility/demo.app.cms.header.navigation.horizontal.utility.display.handler";

@Component({
    selector: "app-demo-app-cms-layout--header",
    styleUrl: "./demo.app.cms.layout.header.css",
    templateUrl: "./demo.app.cms.layout.header.html",
    imports: [
        FaIconComponent,
        RouterModule,
        DemoAppCmsHeaderNavigationHorizontalMenu,
        DemoAppCmsHeaderNavigationHorizontalUtility,
        WithSidebarToggle
    ],
    providers: [
        DemoAppCmsHeaderNavigationHorizontalMenuService,
        DemoAppCmsHeaderNavigationHorizontalUtilityService,
        DemoAppCmsHeaderNavigationVerticalMenuService,
        DemoAppCmsHeaderNavigationVerticalUtilityService
    ],
})
export class DemoAppCmsLayoutHeader {
    public readonly faTableColumnsIcon: IconDefinition = faTableColumns;
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    private readonly navigationHorizontalMenuService: DemoAppCmsHeaderNavigationHorizontalMenuService = inject<DemoAppCmsHeaderNavigationHorizontalMenuService>(DemoAppCmsHeaderNavigationHorizontalMenuService);
    private readonly navigationHorizontalUtilityService: DemoAppCmsHeaderNavigationHorizontalUtilityService = inject<DemoAppCmsHeaderNavigationHorizontalUtilityService>(DemoAppCmsHeaderNavigationHorizontalUtilityService);
    private readonly navigationVerticalMenuService: DemoAppCmsHeaderNavigationVerticalMenuService = inject<DemoAppCmsHeaderNavigationVerticalMenuService>(DemoAppCmsHeaderNavigationVerticalMenuService);
    private readonly navigationVerticalUtilityService: DemoAppCmsHeaderNavigationVerticalUtilityService = inject<DemoAppCmsHeaderNavigationVerticalUtilityService>(DemoAppCmsHeaderNavigationVerticalUtilityService);

    public ngOnInit(): void {
        this.navigationHorizontalMenuService.menus.set(demoAppCmsNavigationData);
        this.navigationVerticalMenuService.menus.set(demoAppCmsNavigationData);

        const profileNavigationData: IMenuItem[] = [
            {
                label: "",
                text: "",
                handler: LayoutDisplayThemeSwitcherHandler
            },
            {
                label: "john",
                text: "John",
                handler: DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler,
                children: [
                    {
                        label: "profile",
                        text: "Profile",
                    },
                    {
                        label: "logout",
                        text: "Logout",
                    },
                ]
            },
        ];

        this.navigationHorizontalUtilityService.menus.set(profileNavigationData);
        this.navigationVerticalUtilityService.initializeData(profileNavigationData);
    }
}
