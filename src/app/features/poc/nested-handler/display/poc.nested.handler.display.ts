import { Component, model } from "@angular/core";

import { IMyMenuItem } from "../my.menu.model";
import { IPocNestedHandlerDisplayVisitor } from "./poc.nested.handler.display.visitor";

@Component({
    template: ""
})
export abstract class PocNestedHandlerDisplay {
    public readonly menu = model.required<IMyMenuItem>();

    public abstract accept<T>(visitor: IPocNestedHandlerDisplayVisitor<T>): T;
}
