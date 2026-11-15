import { Component, inject } from "@angular/core";

import { IMyMenuItem } from "../my.menu.model";
import { PocNestedHandlerNavigationBaseService } from "./poc.nested.handler.navigation.base.service";
import { PocNestedHandlerNavigationResolver } from "./resolver/poc.nested.handler.navigation.resolver";
import { PocNestedHandlerNavigationResolverService } from "./poc.nested.handler.navigation.resolver.service";
import { PocNestedHandlerNavigationResolverBaseService } from "./resolver/poc.nested.handler.navigation.resolver.base.service";

@Component({
    selector: "app-poc-nested-handler-navigation",
    styleUrl: "./poc.nested.handler.navigation.css",
    templateUrl: "./poc.nested.handler.navigation.html",
    imports: [PocNestedHandlerNavigationResolver],
    providers: [
        PocNestedHandlerNavigationResolverService,
        {
            provide: PocNestedHandlerNavigationResolverBaseService,
            useExisting: PocNestedHandlerNavigationResolverService
        }
    ]
})
export class PocNestedHandlerNavigation {

    public get menus(): IMyMenuItem[] {
        return this.navigationService.menus();
    }

    private readonly navigationService: PocNestedHandlerNavigationBaseService = inject<PocNestedHandlerNavigationBaseService>(PocNestedHandlerNavigationBaseService);
}
