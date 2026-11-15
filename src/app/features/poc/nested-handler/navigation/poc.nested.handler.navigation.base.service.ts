import { ComponentRef, Injectable, signal } from "@angular/core";

import { IMyMenuItem } from "../my.menu.model";
import { PocNestedHandlerDisplay } from "../display/poc.nested.handler.display";
import { PocNestedHandlerDisplayVisitor } from "../display/poc.nested.handler.display.visitor";

@Injectable()
export abstract class PocNestedHandlerNavigationBaseService {
    public readonly menus = signal<IMyMenuItem[]>([]);

    public handle(menu: IMyMenuItem, component: ComponentRef<PocNestedHandlerDisplay>): void {
        const handler = new PocNestedHandlerDisplayVisitor(menu);

        component.instance.accept(handler);

        component.changeDetectorRef.detectChanges();
    }
}
