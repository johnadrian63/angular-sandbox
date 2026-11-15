import { Component, effect, inject, input, ViewContainerRef } from "@angular/core";

import { IMyMenuItem } from "../../my.menu.model";
import { PocNestedHandlerNavigationResolverBaseService } from "./poc.nested.handler.navigation.resolver.base.service";

@Component({
    selector: "app-poc-nested-handler-navigation-resolver",
    template: "",
    imports: [],
})
export class PocNestedHandlerNavigationResolver {
    public readonly menu = input.required<IMyMenuItem>();

    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);
    private readonly resolverService: PocNestedHandlerNavigationResolverBaseService = inject<PocNestedHandlerNavigationResolverBaseService>(PocNestedHandlerNavigationResolverBaseService);

    constructor() {
        effect(() => {
            this.resolverService.handle(this.vcr, this.menu());
        });
    }
}
