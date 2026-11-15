import { IMyMenuItem } from "../my.menu.model";
import { PocNestedHandlerDisplayLink } from "./link/poc.nested.handler.display.link";
import { PocNestedHandlerDisplayDropdown } from "./dropdown/poc.nested.handler.display.dropdown";

export interface IPocNestedHandlerDisplayVisitor<T> {
    visitDropdown(component: PocNestedHandlerDisplayDropdown): T;
    visitLink(component: PocNestedHandlerDisplayLink): T;
}

export class PocNestedHandlerDisplayVisitor implements IPocNestedHandlerDisplayVisitor<void> {
    constructor(private readonly menu: IMyMenuItem) { }

    public visitDropdown(component: PocNestedHandlerDisplayDropdown): void {
        component.menu.set(this.menu);
    }

    public visitLink(component: PocNestedHandlerDisplayLink): void {
        component.menu.set(this.menu);
    }
}
