import { ViewContainerRef } from "@angular/core";

import { INavigationDisplayHandlerVisitor, NavigationDisplayButtonHandler, NavigationDisplayExpandHandler, NavigationDisplayLinkHandler, NavigationDisplayMenuDropdownHandler, NavigationDisplayTextHandler } from "../../navigation.display.handler";

export class NavigationHorizontalMenuDisplayHandlerVisitor implements INavigationDisplayHandlerVisitor<void> {
    constructor(private readonly vcr: ViewContainerRef) { }

    public visitButton(handler: NavigationDisplayButtonHandler): void {
        throw new Error("Method not implemented.");
    }

    public visitExpand(handler: NavigationDisplayExpandHandler): void {
        throw new Error("Method not implemented.");
    }

    public visitLink(handler: NavigationDisplayLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitMenuDropdown(handler: NavigationDisplayMenuDropdownHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitText(handler: NavigationDisplayTextHandler): void {
        throw new Error("Method not implemented.");
    }
}