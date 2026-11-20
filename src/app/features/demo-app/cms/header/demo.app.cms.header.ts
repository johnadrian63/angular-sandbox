import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faTableColumns, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { IMenuItem } from "../../../shared/navigation/navigation.model";
import { demoAppCmsNavigationData } from "./demo.app.cms.navigation.data";
import { LayoutDisplayThemeSwitcherHandler } from "../../../../layout/shared/display/theme-switcher/layout.display.theme.switcher.handler";
import { DemoAppCmsHeaderNavigationHorizontalMenu } from "./navigation/horizontal-menu/demo.app.cms.header.navigation.horizontal.menu";
import { DemoAppCmsHeaderNavigationHorizontalUtility } from "./navigation/horizontal-utility/demo.app.cms.header.navigation.horizontal.utility";
import { DemoAppCmsHeaderNavigationHorizontalMenuService } from "./navigation/horizontal-menu/demo.app.cms.header.navigation.horizontal.menu.service";
import { DemoAppCmsHeaderNavigationHorizontalUtilityService } from "./navigation/horizontal-utility/demo.app.cms.header.navigation.horizontal.utility.service";
import { DemoAppCmsHeaderNavigationVerticalMenuService } from "./navigation/vertical-menu/demo.app.cms.header.navigation.vertical.menu.service";
import { DemoAppCmsHeaderNavigationVerticalUtilityService } from "./navigation/vertical-utility/demo.app.cms.header.navigation.vertical.utility.service";
import { DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler } from "./navigation/horizontal-utility/demo.app.cms.header.navigation.horizontal.utility.display.handler";

@Component({
    selector: "app-demo-app-cms-header",
    styleUrl: "./demo.app.cms.header.css",
    templateUrl: "./demo.app.cms.header.html",
    imports: [
        FaIconComponent,
        RouterModule,
        DemoAppCmsHeaderNavigationHorizontalMenu,
        DemoAppCmsHeaderNavigationHorizontalUtility
    ],
    providers: [
        DemoAppCmsHeaderNavigationHorizontalMenuService,
        DemoAppCmsHeaderNavigationHorizontalUtilityService,
        DemoAppCmsHeaderNavigationVerticalMenuService,
        DemoAppCmsHeaderNavigationVerticalUtilityService
    ],
})
export class DemoAppCmsPostHeader {
    public readonly faTableColumnsIcon: IconDefinition = faTableColumns;
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    private readonly navigationHorizontalMenuService: DemoAppCmsHeaderNavigationHorizontalMenuService = inject<DemoAppCmsHeaderNavigationHorizontalMenuService>(DemoAppCmsHeaderNavigationHorizontalMenuService);
    private readonly navigationHorizontalUtilityService: DemoAppCmsHeaderNavigationHorizontalUtilityService = inject<DemoAppCmsHeaderNavigationHorizontalUtilityService>(DemoAppCmsHeaderNavigationHorizontalUtilityService);
    private readonly navigationVerticalMenuService: DemoAppCmsHeaderNavigationVerticalMenuService = inject<DemoAppCmsHeaderNavigationVerticalMenuService>(DemoAppCmsHeaderNavigationVerticalMenuService);
    private readonly navigationVerticalUtilityService: DemoAppCmsHeaderNavigationVerticalUtilityService = inject<DemoAppCmsHeaderNavigationVerticalUtilityService>(DemoAppCmsHeaderNavigationVerticalUtilityService);

    public toggle(): void { }

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
