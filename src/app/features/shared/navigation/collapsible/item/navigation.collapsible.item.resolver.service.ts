import { Injectable, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../navigation.model";
import { NavigationCollapsibleResolverVisitor } from "../resolver/navigation.collapsible.resolver.visitor";
import { NavigationCollapsibleBaseResolverService } from "../resolver/navigation.collapsible.base.resolver.service";
import { NavigationMenuResolver, NavigationMenuSubNested, NavigationMenuSubSingle } from "../../navigation.menu.resolver.visitor";

@Injectable()
export class NavigationCollapsibleItemResolverService extends NavigationCollapsibleBaseResolverService {
    public override handle(vcr: ViewContainerRef, item: IMenuItem, index: number): void {
        let resolver: NavigationMenuResolver;

        if (item.children?.length) {
            resolver = new NavigationMenuSubNested();
        } else {
            resolver = new NavigationMenuSubSingle();
        }

        const handler = resolver.accept(new NavigationCollapsibleResolverVisitor(item));

        this.navigationCollapsibleService.handle(vcr, handler, index);
    }
}
