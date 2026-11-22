import { inject, Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenuItem } from "../../navigation.model";
import { NavigationCollapsibleService } from "../navigation.collapsible.service";
import { NavigationCollapsibleResolverVisitor } from "./navigation.collapsible.resolver.visitor";
import { NavigationMenuResolver, NavigationMenuNested, NavigationMenuSingle } from "../../navigation.menu.resolver.visitor";

@Injectable()
export abstract class NavigationCollapsibleBaseResolverService {
    public readonly menus: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);
    public readonly toggled: WritableSignal<boolean> = signal<boolean>(false);

    protected readonly navigationCollapsibleService: NavigationCollapsibleService = inject<NavigationCollapsibleService>(NavigationCollapsibleService);

    public handle(vcr: ViewContainerRef, item: IMenuItem, index: number): void {
        let resolver: NavigationMenuResolver;

        if (item.children?.length) {
            resolver = new NavigationMenuNested();
        } else {
            resolver = new NavigationMenuSingle();
        }

        const handler = resolver.accept(new NavigationCollapsibleResolverVisitor(item));

        this.navigationCollapsibleService.handle(vcr, handler, index);
    }
}
