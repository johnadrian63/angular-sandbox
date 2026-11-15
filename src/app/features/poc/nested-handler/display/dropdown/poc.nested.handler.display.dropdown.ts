import { Component } from "@angular/core";

import { PocNestedHandlerDisplay } from "../poc.nested.handler.display";
import { IPocNestedHandlerDisplayVisitor } from "../poc.nested.handler.display.visitor";

@Component({
    selector: "app-poc-nested-handler-display-dropdown",
    styleUrl: "./poc.nested.handler.display.dropdown.css",
    templateUrl: "./poc.nested.handler.display.dropdown.html",
})
export class PocNestedHandlerDisplayDropdown extends PocNestedHandlerDisplay {
    public override accept<T>(visitor: IPocNestedHandlerDisplayVisitor<T>): T {
        return visitor.visitDropdown(this);
    }
}
