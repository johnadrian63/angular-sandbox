import { ViewContainerRef } from "@angular/core";

import { NavigationVerticalService } from "./navigation.vertical.service";
import { INavigationDisplayHandlerVisitor, NavigationDisplayButtonHandler, NavigationDisplayExpandHandler, NavigationDisplayLinkHandler, NavigationDisplayMenuDropdownHandler, NavigationDisplayTextHandler } from "../navigation.display.handler";

export class NavigationVerticalDisplayHandler implements INavigationDisplayHandlerVisitor<void> {
    constructor(
        private readonly vcr: ViewContainerRef,
        private readonly navigationVerticalService: NavigationVerticalService
    ) { }

    public visitExpand(handler: NavigationDisplayExpandHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "p-2 flex cursor-pointer";

        componentRef.instance
            .onClick
            .subscribe(() => {
                this.navigationVerticalService.setMenu(handler.menu);
            });

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitLink(handler: NavigationDisplayLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "p-2 flex cursor-pointer";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitMenuDropdown(handler: NavigationDisplayMenuDropdownHandler): void {
        // do nothing
    }

    public visitButton(handler: NavigationDisplayButtonHandler): void {
        // do nothing
    }

    public visitText(handler: NavigationDisplayTextHandler): void {
        // do nothing
    }
}
