import { Component, effect, inject, model, ModelSignal, Signal } from "@angular/core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { NavigationDisplay } from "../display/navigation.display";
import { NavigationCollapsibleService } from "./navigation.collapsible.service";
import { NavigationCollapsibleBaseResolverService } from "./resolver/navigation.collapsible.base.resolver.service";

@Component({
    template: ""
})
export abstract class NavigationCollapsibleBase extends NavigationDisplay {
    public readonly index: ModelSignal<number> = model.required<number>();
    public readonly dropdownIcon = faAngleRight;

    private readonly navigationCollapsibleService: NavigationCollapsibleService = inject<NavigationCollapsibleService>(NavigationCollapsibleService);
    private readonly resolverService: NavigationCollapsibleBaseResolverService = inject<NavigationCollapsibleBaseResolverService>(NavigationCollapsibleBaseResolverService);

    constructor() {
        super();

        effect(() => {
            const cacheKey = this.getCacheKey();
            const toggled = this.navigationCollapsibleService.getToggleCache(cacheKey);

            this.resolverService.toggled.set(toggled);
        });
    }

    public get isExpanded(): Signal<boolean> {
        return this.resolverService.toggled.asReadonly();
    }

    public toggle(): void {
        this.resolverService.toggled.update((toggled) => !toggled)

        this.navigationCollapsibleService.setToggleCache(this.getCacheKey(), this.isExpanded());
    }

    private getCacheKey(): string {
        const menu = this.menu();

        return `${menu.label}_${this.index()}`;
    }
}