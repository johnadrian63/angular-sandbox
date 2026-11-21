import { Type, ViewContainerRef } from "@angular/core";

import { NavigationDisplayLink } from "../display/link/navigation.display.link";
import { NavigationCollapsibleMainDisplay } from "./main/display/navigation.collapsible.main.display";
import { NavigationCollapsibleItemDisplay } from "./item/display/navigation.collapsible.item.display";
import { INavigationDisplayHandlerVisitor, NavigationDisplayButtonHandler, NavigationDisplayExpandHandler, NavigationDisplayHandler, NavigationDisplayLinkHandler, NavigationDisplayMenuDropdownHandler, NavigationDisplayTextHandler } from "../navigation.display.handler";

export interface INavigationCollapsibleDisplayHandlerVisitor<T> extends INavigationDisplayHandlerVisitor<T> {
    visitMainNestedMenu(handler: NavigationCollapsibleDisplayMainNestedMenuHandler): T;
    visitMainSingleMenu(handler: NavigationCollapsibleDisplayMainSingleMenuHandler): T;
    visitSubMenu(handler: NavigationCollapsibleDisplaySubMenuHandler): T;
}

export class NavigationCollapsibleDisplayMainNestedMenuHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationCollapsibleMainDisplay> = NavigationCollapsibleMainDisplay;

    public override accept<T>(visitor: INavigationCollapsibleDisplayHandlerVisitor<T>): T {
        return visitor.visitMainNestedMenu(this);
    }
}

export class NavigationCollapsibleDisplayMainSingleMenuHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationDisplayLink> = NavigationDisplayLink;

    public override accept<T>(visitor: INavigationCollapsibleDisplayHandlerVisitor<T>): T {
        return visitor.visitMainSingleMenu(this);
    }
}

export class NavigationCollapsibleDisplaySubMenuHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationCollapsibleItemDisplay> = NavigationCollapsibleItemDisplay;

    public override accept<T>(visitor: INavigationCollapsibleDisplayHandlerVisitor<T>): T {
        return visitor.visitSubMenu(this);
    }
}

export class NavigationCollapsibleDisplayHandlerVisitor implements INavigationCollapsibleDisplayHandlerVisitor<void> {
    constructor(protected readonly vcr: ViewContainerRef, private readonly index: number) { }

    public visitMainNestedMenu(handler: NavigationCollapsibleDisplayMainNestedMenuHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.index.set(this.index);

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitMainSingleMenu(handler: NavigationCollapsibleDisplayMainSingleMenuHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "nav-head flex p-2 rounded font-medium";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitSubMenu(handler: NavigationCollapsibleDisplaySubMenuHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.index.set(this.index);

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitLink(handler: NavigationDisplayLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "flex p-2 rounded";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitButton(handler: NavigationDisplayButtonHandler): void {
        // do nothing
    }

    public visitExpand(handler: NavigationDisplayExpandHandler): void {
        // do nothing
    }

    public visitMenuDropdown(handler: NavigationDisplayMenuDropdownHandler): void {
        // do nothing
    }

    public visitText(handler: NavigationDisplayTextHandler): void {
        // do nothing
    }
}