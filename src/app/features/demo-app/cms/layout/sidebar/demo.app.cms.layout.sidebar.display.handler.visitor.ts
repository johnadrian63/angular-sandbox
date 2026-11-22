import { ICmsMenuItem } from "../demo.app.cms.navigation.data";
import { NavigationCollapsibleDisplayHandlerVisitor, NavigationCollapsibleDisplayMainNestedHandler, NavigationCollapsibleDisplayMainSingleHandler, NavigationCollapsibleDisplaySubNestedHandler, NavigationCollapsibleDisplaySubSingleHandler } from "../../../../shared/navigation/collapsible/navigation.collapsible.display.handler";

export class DemoAppCmsLayoutSidebarMainNestedDisplayHandler extends NavigationCollapsibleDisplayMainNestedHandler {
    constructor(public override readonly menu: ICmsMenuItem) {
        super(menu);
    }
}

export class DemoAppCmsLayoutSidebarMainSingleDisplayHandler extends NavigationCollapsibleDisplayMainSingleHandler {
    constructor(public override readonly menu: ICmsMenuItem) {
        super(menu);
    }
}

export class DemoAppCmsLayoutSidebarSubNestedDisplayHandler extends NavigationCollapsibleDisplaySubNestedHandler {
    constructor(public override readonly menu: ICmsMenuItem) {
        super(menu);
    }
}

export class DemoAppCmsLayoutSidebarSubSingleDisplayHandler extends NavigationCollapsibleDisplaySubSingleHandler {
    constructor(public override readonly menu: ICmsMenuItem) {
        super(menu);
    }
}

export class DemoAppCmsLayoutSidebarDisplayHandlerVisitor extends NavigationCollapsibleDisplayHandlerVisitor {
    public override visitMainNested(handler: DemoAppCmsLayoutSidebarMainNestedDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.index.set(this.index);
        instance.menuClass = "parent-menu";

        if (handler.menu.icon) {
            instance.icon = handler.menu.icon;
        }

        componentRef.changeDetectorRef.detectChanges();
    }

    public override visitMainSingle(handler: DemoAppCmsLayoutSidebarMainSingleDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });
        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.classes = " flex p-2 rounded font-medium";
        instance.menuClass = "parent-menu";

        if (handler.menu.icon) {
            instance.icon = handler.menu.icon;
        }

        componentRef.changeDetectorRef.detectChanges();
    }

    public override visitSubNested(handler: DemoAppCmsLayoutSidebarSubNestedDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });
        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.index.set(this.index);
        instance.menuClass = "children-menu";
        instance.classes = "flex p-2 rounded font-medium";

        if (handler.menu.icon) {
            instance.icon = handler.menu.icon;
        }

        componentRef.changeDetectorRef.detectChanges();
    }

    public override visitSubSingle(handler: DemoAppCmsLayoutSidebarSubSingleDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });
        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.menuClass = "children-menu";
        instance.classes = "flex p-2 rounded font-medium";

        if (handler.menu.icon) {
            instance.icon = handler.menu.icon;
        }

        componentRef.changeDetectorRef.detectChanges();
    }
}
