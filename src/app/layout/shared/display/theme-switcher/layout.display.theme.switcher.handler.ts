import { Type } from "@angular/core";

import { LayoutDisplayThemeSwitcher } from "./layout.display.theme.switcher";
import { INavigationDisplayHandlerVisitor, NavigationDisplayHandler } from "../../../../features/shared/navigation/navigation.display.handler";

export interface ILayoutDisplayThemeSwitcherDisplayHandlerVisitor<T> extends INavigationDisplayHandlerVisitor<T> {
    visitThemeSwitcher(handler: LayoutDisplayThemeSwitcherHandler): T;
}

export class LayoutDisplayThemeSwitcherHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<LayoutDisplayThemeSwitcher> = LayoutDisplayThemeSwitcher;

    public override accept<T>(visitor: ILayoutDisplayThemeSwitcherDisplayHandlerVisitor<T>): T {
        return visitor.visitThemeSwitcher(this);
    }
}
