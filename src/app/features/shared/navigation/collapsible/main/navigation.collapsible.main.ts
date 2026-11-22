import { Component } from "@angular/core";

import { NavigationCollapsibleNestedBase } from "../navigation.collapsible.base";
import { NavigationCollapsibleItem } from "../item/navigation.collapsible.item";
import { NavigationCollapsibleResolver } from "../resolver/navigation.collapsible.resolver";
import { NavigationCollapsibleMainResolverService } from "./navigation.collapsible.main.resolver.service";
import { NavigationCollapsibleBaseResolverService } from "../resolver/navigation.collapsible.base.resolver.service";

@Component({
    selector: "app-navigation-collapsible-main",
    templateUrl: "./navigation.collapsible.main.html",
    imports: [
        NavigationCollapsibleItem,
        NavigationCollapsibleResolver
    ],
    providers: [
        NavigationCollapsibleMainResolverService,
        {
            provide: NavigationCollapsibleBaseResolverService,
            useExisting: NavigationCollapsibleMainResolverService
        }
    ]
})
export class NavigationCollapsibleMain extends NavigationCollapsibleNestedBase { }
