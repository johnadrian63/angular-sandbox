import { inject, Injectable, ViewContainerRef } from "@angular/core";

import { IMyMenuItem } from "../../my.menu.model";
import { PocNestedHandlerNavigationBaseService } from "../poc.nested.handler.navigation.base.service";
import { IPocNestedHandlerNavigation, PocNestedHandlerNavigationCustom, PocNestedHandlerNavigationNested, PocNestedHandlerNavigationSingle, PocNestedHandlerNavigationVisitor } from "../poc.nested.handler.navigation.model";

@Injectable()
export abstract class PocNestedHandlerNavigationResolverBaseService {
    private readonly navigationService: PocNestedHandlerNavigationBaseService = inject<PocNestedHandlerNavigationBaseService>(PocNestedHandlerNavigationBaseService);

    public handle(vcr: ViewContainerRef, menu: IMyMenuItem): void {
        let resolver: IPocNestedHandlerNavigation;

        if (menu?.resolver) {
            resolver = new PocNestedHandlerNavigationCustom()
        } else {
            if (menu?.children) {
                resolver = new PocNestedHandlerNavigationNested()
            } else {
                resolver = new PocNestedHandlerNavigationSingle();
            }
        }

        const handler = resolver.accept(new PocNestedHandlerNavigationVisitor(menu));

        const componentRef = vcr.createComponent(handler, {
            injector: vcr.injector,
        });

        this.navigationService.handle(menu, componentRef);
    }
}
