import {
    Component,
    Input,
} from "@angular/core";

import { IDataDisplayVisitor } from "../data-display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data-display.abstract.component";

@Component({
    selector: "app-data-display-number-component",
    templateUrl: "./data-display.number.component.html",
    styleUrl: "./data-display.number.component.scss"
})
export class DataDisplayNumberComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public value!: number;

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }

        throw new Error("refactor this visitor.visitNumber");
    }
}
