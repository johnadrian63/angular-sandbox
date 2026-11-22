import { Type, ViewContainerRef } from "@angular/core";

import { NavigationCollapsibleMainDisplaySingle } from "./display/single/navigation.collapsible.main.display.single";
import { NavigationCollapsibleMainDisplayNested } from "./display/nested/navigation.collapsible.main.display.nested";
import { INavigationDisplayHandlerVisitor, NavigationDisplayButtonHandler, NavigationDisplayExpandHandler, NavigationDisplayHandler, NavigationDisplayLinkHandler, NavigationDisplayMenuDropdownHandler, NavigationDisplayTextHandler } from "../navigation.display.handler";

export interface INavigationCollapsibleDisplayHandlerVisitor<T> extends INavigationDisplayHandlerVisitor<T> {
    visitMainNested(handler: NavigationCollapsibleDisplayMainNestedHandler): T;
    visitMainSingle(handler: NavigationCollapsibleDisplayMainSingleHandler): T;
    visitSubNested(handler: NavigationCollapsibleDisplaySubNestedHandler): T;
    visitSubSingle(handler: NavigationCollapsibleDisplaySubSingleHandler): T;
}

export class NavigationCollapsibleDisplayMainNestedHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationCollapsibleMainDisplayNested> = NavigationCollapsibleMainDisplayNested;

    public override accept<T>(visitor: INavigationCollapsibleDisplayHandlerVisitor<T>): T {
        return visitor.visitMainNested(this);
    }
}

export class NavigationCollapsibleDisplayMainSingleHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationCollapsibleMainDisplaySingle> = NavigationCollapsibleMainDisplaySingle;

    public override accept<T>(visitor: INavigationCollapsibleDisplayHandlerVisitor<T>): T {
        return visitor.visitMainSingle(this);
    }
}

export class NavigationCollapsibleDisplaySubNestedHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationCollapsibleMainDisplayNested> = NavigationCollapsibleMainDisplayNested;

    public override accept<T>(visitor: INavigationCollapsibleDisplayHandlerVisitor<T>): T {
        return visitor.visitSubNested(this);
    }
}

export class NavigationCollapsibleDisplaySubSingleHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationCollapsibleMainDisplaySingle> = NavigationCollapsibleMainDisplaySingle;

    public override accept<T>(visitor: INavigationCollapsibleDisplayHandlerVisitor<T>): T {
        return visitor.visitSubSingle(this);
    }
}

export class NavigationCollapsibleDisplayHandlerVisitor implements INavigationCollapsibleDisplayHandlerVisitor<void> {
    constructor(protected readonly vcr: ViewContainerRef, protected readonly index: number) { }

    public visitMainNested(handler: NavigationCollapsibleDisplayMainNestedHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.index.set(this.index);
        instance.menuClass = "parent-menu";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitMainSingle(handler: NavigationCollapsibleDisplayMainSingleHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });
        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.classes = " flex p-2 rounded font-medium";
        instance.menuClass = "parent-menu";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitSubNested(handler: NavigationCollapsibleDisplaySubNestedHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });
        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.index.set(this.index);
        instance.menuClass = "children-menu";
        instance.classes = "flex p-2 rounded font-medium";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitSubSingle(handler: NavigationCollapsibleDisplaySubSingleHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });
        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.menuClass = "children-menu";
        instance.classes = "flex p-2 rounded font-medium";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitLink(handler: NavigationDisplayLinkHandler): void {
        // do nothing
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
