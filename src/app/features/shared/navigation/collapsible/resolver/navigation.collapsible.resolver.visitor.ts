import { IMenuItem } from "../../navigation.model";
import { INavigationMenuResolverVisitor } from "../../navigation.menu.resolver.visitor";
import { NavigationDisplayHandler } from "../../navigation.display.handler";
import { NavigationCollapsibleDisplayMainNestedHandler, NavigationCollapsibleDisplayMainSingleHandler, NavigationCollapsibleDisplaySubNestedHandler, NavigationCollapsibleDisplaySubSingleHandler } from "../navigation.collapsible.display.handler";

export class NavigationCollapsibleResolverVisitor implements INavigationMenuResolverVisitor<NavigationDisplayHandler> {
    constructor(private readonly menu: IMenuItem) { }

    public visitNested(): NavigationDisplayHandler {
        return new NavigationCollapsibleDisplayMainNestedHandler(this.menu);
    }

    public visitSingle(): NavigationDisplayHandler {
        return new NavigationCollapsibleDisplayMainSingleHandler(this.menu);
    }

    public visitSubNested(): NavigationDisplayHandler {
        return new NavigationCollapsibleDisplaySubNestedHandler(this.menu);
    }

    public visitSubSingle(): NavigationDisplayHandler {
        return new NavigationCollapsibleDisplaySubSingleHandler(this.menu);
    }

    public visitCustom(): NavigationDisplayHandler {
        throw new Error("method not supported.");
    }
}
