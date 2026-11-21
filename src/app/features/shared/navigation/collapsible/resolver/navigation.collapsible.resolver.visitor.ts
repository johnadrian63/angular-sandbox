import { IMenuItem } from "../../navigation.model";
import { INavigationMenuResolverVisitor } from "../../navigation.menu.resolver.visitor";
import { NavigationDisplayHandler, NavigationDisplayLinkHandler } from "../../navigation.display.handler";
import { NavigationCollapsibleDisplayMainNestedMenuHandler, NavigationCollapsibleDisplayMainSingleMenuHandler, NavigationCollapsibleDisplaySubMenuHandler } from "../navigation.collapsible.display.handler";

export class NavigationCollapsibleResolverVisitor implements INavigationMenuResolverVisitor<NavigationDisplayHandler> {
    constructor(private readonly menu: IMenuItem) { }

    public visitNested(): NavigationDisplayHandler {
        return new NavigationCollapsibleDisplayMainNestedMenuHandler(this.menu);
    }

    public visitSingle(): NavigationDisplayHandler {
        return new NavigationCollapsibleDisplayMainSingleMenuHandler(this.menu);
    }

    public visitSubNested(): NavigationDisplayHandler {
        return new NavigationCollapsibleDisplaySubMenuHandler(this.menu);
    }

    public visitSubSingle(): NavigationDisplayHandler {
        return new NavigationDisplayLinkHandler(this.menu);
    }

    public visitCustom(): NavigationDisplayHandler {
        return new this.menu.handler!(this.menu);
    }
}
