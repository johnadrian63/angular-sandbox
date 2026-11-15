import { Component } from "@angular/core";

import { PocNestedHandlerDisplay } from "../poc.nested.handler.display";
import { IPocNestedHandlerDisplayVisitor } from "../poc.nested.handler.display.visitor";

@Component({
    selector: "app-poc-nested-handler-display-link",
    styleUrl: "./poc.nested.handler.display.link.css",
    templateUrl: "./poc.nested.handler.display.link.html",
    imports: [],
})
export class PocNestedHandlerDisplayLink extends PocNestedHandlerDisplay {
    public override accept<T>(visitor: IPocNestedHandlerDisplayVisitor<T>): T {
        return visitor.visitLink(this);
    }
}
