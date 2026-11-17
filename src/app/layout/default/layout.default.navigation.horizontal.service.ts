import { inject, Injectable, ViewContainerRef } from "@angular/core";

import { LayoutDefaultDisplayHandlerVisitor } from "./layout.default.display.handler";
import { NavigationDisplayHandler } from "../../features/shared/navigation/navigation.display.handler";
import { NavigationHorizontalCdkService } from "../../features/shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";

@Injectable()
export class LayoutDefaultNavigationHorizontalCdkService extends NavigationHorizontalCdkService {
    public override handle(vcr: ViewContainerRef, handler: NavigationDisplayHandler): void {
        const visitor = new LayoutDefaultDisplayHandlerVisitor(vcr);

        handler.accept(visitor);
    }
}
