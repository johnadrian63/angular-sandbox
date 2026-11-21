import { Component } from "@angular/core";

import { NavigationCollapsibleBase } from "../navigation.collapsible.base";
import { NavigationCollapsibleResolver } from "../resolver/navigation.collapsible.resolver";
import { NavigationCollapsibleItemResolverService } from "./navigation.collapsible.item.resolver.service";
import { NavigationCollapsibleBaseResolverService } from "../resolver/navigation.collapsible.base.resolver.service";

@Component({
    selector: "app-navigation-collapsible-item",
    templateUrl: "./navigation.collapsible.item.html",
    imports: [
        NavigationCollapsibleResolver
    ],
    providers: [
        NavigationCollapsibleItemResolverService,
        {
            provide: NavigationCollapsibleBaseResolverService,
            useExisting: NavigationCollapsibleItemResolverService
        }
    ]
})
export class NavigationCollapsibleItem extends NavigationCollapsibleBase { }