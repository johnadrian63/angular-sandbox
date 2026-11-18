import { Type } from "@angular/core";

import { NavigationDisplayHandler } from "../../../../shared/navigation/navigation.display.handler";
import { LayoutDefaultThemeSwitcher } from "../../../../../layout/default/display/theme-switcher/layout.default.theme.switcher";
import { INavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDropdownDisplayHandler } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";

export interface IExampleResponsiveDisplayHandlerVisitor<T> extends INavigationHorizontalCdkDisplayHandlerVisitor<T> {
    visitThemeSwitcher(handler: LayoutDisplayThemeSwitcherHandler): T;
}

export class LayoutDisplayThemeSwitcherHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<LayoutDefaultThemeSwitcher> = LayoutDefaultThemeSwitcher;

    public override accept<T>(visitor: IExampleResponsiveDisplayHandlerVisitor<T>): T {
        return visitor.visitThemeSwitcher(this);
    }
}


export class ExampleResponsiveNavigationHorizontalMenuDisplayHandlerVisitor extends NavigationHorizontalCdkDisplayHandlerVisitor implements IExampleResponsiveDisplayHandlerVisitor<void> {
    public override visitCdkDropdown(handler: NavigationHorizontalCdkDropdownDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.menuClass = "mt-2.5";

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