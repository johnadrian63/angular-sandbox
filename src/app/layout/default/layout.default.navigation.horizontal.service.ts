import { Injectable, ViewContainerRef } from "@angular/core";

import { NavigationDisplayHandler } from "../../features/shared/navigation/navigation.display.handler";
import { LayoutDefaultDisplayHandlerVisitor } from "./layout.default.navigation.horizontal.display.handler";
import { NavigationHorizontalCdkService } from "../../features/shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";

@Injectable()
export class LayoutDefaultNavigationHorizontalCdkService extends NavigationHorizontalCdkService {
    public override handle(vcr: ViewContainerRef, handler: NavigationDisplayHandler): void {
        const visitor = new LayoutDefaultDisplayHandlerVisitor(vcr);

        handler.accept(visitor);
    }
}
