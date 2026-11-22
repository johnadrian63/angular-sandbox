import { Type, ViewContainerRef } from "@angular/core";

import { DemoAppCmsHeaderNavigationHorizontalUtilityDropdown } from "./dropdown/demo.app.cms.header.navigation.horizontal.utility.dropdown";
import { ILayoutDisplayThemeSwitcherDisplayHandlerVisitor, LayoutDisplayThemeSwitcherHandler } from "../../../../../../../layout/shared/display/theme-switcher/layout.display.theme.switcher.handler";
import { INavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDropdownDisplayHandler, NavigationHorizontalCdkDisplayHandlerVisitor } from "../../../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";

export interface IDemoAppCmsHeaderNavigationHorizontalMenuDisplayHandlerVisitor<T> extends INavigationHorizontalCdkDisplayHandlerVisitor<T>, ILayoutDisplayThemeSwitcherDisplayHandlerVisitor<T> {
    visitProfileDropdown(handler: DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler): T;
    visitThemeSwitcher(handler: LayoutDisplayThemeSwitcherHandler): T;
}

export class DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler extends NavigationHorizontalCdkDropdownDisplayHandler {
    public override readonly renderer: Type<DemoAppCmsHeaderNavigationHorizontalUtilityDropdown> = DemoAppCmsHeaderNavigationHorizontalUtilityDropdown;

    public override accept<T>(visitor: IDemoAppCmsHeaderNavigationHorizontalMenuDisplayHandlerVisitor<T>): T {
        return visitor.visitProfileDropdown(this);
    }
}

export class DemoAppCmsHeaderNavigationHorizontalMenuDisplayHandlerVisitor extends NavigationHorizontalCdkDisplayHandlerVisitor implements IDemoAppCmsHeaderNavigationHorizontalMenuDisplayHandlerVisitor<void> {
    constructor(vcr: ViewContainerRef) {
        super(vcr);
    }

    public visitProfileDropdown(handler: DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler): void {
        let componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);

        componentRef.instance.menuClass = "mt-2.5";
        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");
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
