import { Injectable, ViewContainerRef } from "@angular/core";

import { NavigationHorizontalCdkService } from "../../../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler, DemoAppCmsHeaderNavigationHorizontalMenuDisplayHandlerVisitor } from "./demo.app.cms.header.navigation.horizontal.utility.display.handler";

@Injectable()
export class DemoAppCmsHeaderNavigationHorizontalUtilityService extends NavigationHorizontalCdkService {
    public override handle(vcr: ViewContainerRef, handler: DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler): void {
        handler.accept(new DemoAppCmsHeaderNavigationHorizontalMenuDisplayHandlerVisitor(vcr));
    }
}
