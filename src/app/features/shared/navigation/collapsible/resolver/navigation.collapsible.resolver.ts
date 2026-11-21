import { Component, effect, inject, input, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../navigation.model";
import { NavigationCollapsibleBaseResolverService } from "./navigation.collapsible.base.resolver.service";

@Component({
    selector: "app-navigation-collapsible-resolver",
    template: ""
})
export class NavigationCollapsibleResolver {
    public readonly menu = input.required<IMenuItem>();
    public readonly index = input.required<number>();
    public readonly resolverService: NavigationCollapsibleBaseResolverService = inject<NavigationCollapsibleBaseResolverService>(NavigationCollapsibleBaseResolverService);

    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);

    constructor() {
        effect(() => {
            this.resolverService.handle(this.vcr, this.menu(), this.index());
        });
    }
}
