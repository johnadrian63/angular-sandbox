import { Injectable, ViewContainerRef } from "@angular/core";

import { NavigationDisplayHandler } from "../../../../shared/navigation/navigation.display.handler";
import { DemoAppCmsLayoutSidebarDisplayHandlerVisitor } from "./demo.app.cms.layout.sidebar.display.handler.visitor";
import { NavigationCollapsibleService } from "../../../../shared/navigation/collapsible/navigation.collapsible.service";

@Injectable()
export class DemoAppCmsLayoutSidebarNavigationService extends NavigationCollapsibleService {
    public override  handle(vcr: ViewContainerRef, handler: NavigationDisplayHandler, index: number): void {
        const visitor = new DemoAppCmsLayoutSidebarDisplayHandlerVisitor(vcr, index);

        handler.accept(visitor);
    }
}
