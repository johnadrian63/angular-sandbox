import { Component, inject, OnInit } from "@angular/core";

import { pocNestedHandlerNavigation } from "./poc.nested.handler.navigation.data";
import { PocNestedHandlerNavigation } from "./navigation/poc.nested.handler.navigation";
import { PocNestedHandlerNavigationService } from "./poc.nested.handler.navigation.service";
import { PocNestedHandlerNavigationBaseService } from "./navigation/poc.nested.handler.navigation.base.service";

@Component({
    selector: "app-poc-nested-handler",
    templateUrl: "./poc.nested.handler.html",
    imports: [PocNestedHandlerNavigation],
    providers: [
        PocNestedHandlerNavigationService,
        {
            provide: PocNestedHandlerNavigationBaseService,
            useExisting: PocNestedHandlerNavigationService,
        }
    ]
})
export class PocNestedHandler implements OnInit {
    private readonly navigationService: PocNestedHandlerNavigationService = inject<PocNestedHandlerNavigationService>(PocNestedHandlerNavigationService);

    public ngOnInit(): void {
        this.navigationService.menus.set(pocNestedHandlerNavigation);
    }
}
