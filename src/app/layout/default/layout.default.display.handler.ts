import { Type } from "@angular/core";

import { LayoutDefaultThemeSwitcher } from "./display/theme-switcher/layout.default.theme.switcher";
import { NavigationHorizontalCdkDisplayHandlerVisitor } from "../../features/shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";
import { INavigationDisplayHandlerVisitor, NavigationDisplayHandler, NavigationDisplayLinkHandler } from "../../features/shared/navigation/navigation.display.handler";

export interface ILayoutDefaultDisplayHandlerVisitor<T> extends INavigationDisplayHandlerVisitor<T> {
    visitThemeSwitcher(handler: LayoutDisplayThemeSwitcherHandler): T;
}

export class LayoutDisplayThemeSwitcherHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<LayoutDefaultThemeSwitcher> = LayoutDefaultThemeSwitcher;

    public override accept<T>(visitor: ILayoutDefaultDisplayHandlerVisitor<T>): T {
        return visitor.visitThemeSwitcher(this);
    }
}

export class LayoutDefaultDisplayHandlerVisitor extends NavigationHorizontalCdkDisplayHandlerVisitor implements ILayoutDefaultDisplayHandlerVisitor<void> {

    public override visitLink(handler: NavigationDisplayLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        const menu = handler.menu;

        componentRef.instance.menu.set(menu);
        componentRef.instance.classes = "flex font-semibold";
        componentRef.location.nativeElement.classList.add("mr-2");

        if (menu.target) {
            componentRef.instance.target.set(menu.target);
        }

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitThemeSwitcher(handler: LayoutDisplayThemeSwitcherHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.classes = "font-semibold";

        componentRef.changeDetectorRef.detectChanges();
    }
}