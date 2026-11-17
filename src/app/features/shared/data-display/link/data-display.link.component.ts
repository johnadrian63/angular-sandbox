import {
    Component,
    Input
} from "@angular/core";

import { IDataDisplayVisitor } from "../data-display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data-display.abstract.component";

@Component({
    selector: "app-data-display-link-component",
    templateUrl: "./data-display.link.component.html",
    styleUrl: "./data-display.link.component.css"
})
export class DataDisplayLinkComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public text!: string;

    // FIXME refactor this!
    @Input() public url!: string;

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        if (visitor.visitLink) {
            return visitor.visitLink(this);
        }

        throw new Error("refactor this visitor.visitLink");
    }
}
