import { Injectable, ViewContainerRef } from "@angular/core";

import { NavigationDisplayHandler } from "../../shared/navigation/navigation.display.handler";
import { PocDynamicNavigationDisplayHandlerVisitor } from "./poc.dynamic.navigation.horizontal.display.handler";
import { NavigationHorizontalCdkService } from "../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
@Injectable()
export class PocDynamicNavigationHorizontalCdkService extends NavigationHorizontalCdkService {

    public override handle(vcr: ViewContainerRef, handler: NavigationDisplayHandler): void {
        const visitor = new PocDynamicNavigationDisplayHandlerVisitor(vcr);

        handler.accept(visitor);
    }
}