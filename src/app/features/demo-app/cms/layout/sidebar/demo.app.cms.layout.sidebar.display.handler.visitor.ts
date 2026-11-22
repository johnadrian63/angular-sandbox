import { ICmsMenuItem } from "../demo.app.cms.navigation.data";
import { NavigationCollapsibleDisplayHandlerVisitor, NavigationCollapsibleDisplayMainNestedMenuHandler, NavigationCollapsibleDisplayMainSingleMenuHandler } from "../../../../shared/navigation/collapsible/navigation.collapsible.display.handler";

export class DemoAppCmsLayoutSidebarDisplayMainNestedDisplayHandler extends NavigationCollapsibleDisplayMainNestedMenuHandler {
    constructor(public override readonly menu: ICmsMenuItem) {
        super(menu);
    }
}

export class DemoAppCmsLayoutSidebarDisplayMainSingleDisplayHandler extends NavigationCollapsibleDisplayMainSingleMenuHandler {
    constructor(public override readonly menu: ICmsMenuItem) {
        super(menu);
    }
}

export class DmoAppCmsLayoutSidebarDisplayHandlerVisitor extends NavigationCollapsibleDisplayHandlerVisitor {
    public override visitMainNestedMenu(handler: DemoAppCmsLayoutSidebarDisplayMainNestedDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.index.set(this.index);

        if (handler.menu.icon) {
            instance.icon = handler.menu.icon;
        }

        componentRef.changeDetectorRef.detectChanges();
    }

    public override visitMainSingleMenu(handler: DemoAppCmsLayoutSidebarDisplayMainSingleDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.classes = "nav-head flex p-2 rounded font-medium";

        if (handler.menu.icon) {
            instance.iconLeft = handler.menu.icon;
        }

        componentRef.changeDetectorRef.detectChanges();
    }
}