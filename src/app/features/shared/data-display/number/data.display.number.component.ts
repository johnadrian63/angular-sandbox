import {
    Component,
    Input,
} from "@angular/core";

import { IDataDisplayVisitor } from "../data-display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data-display.abstract.component";

@Component({
    selector: "app-data-display-number",
    templateUrl: "./data-display.number.component.html"
})
export class DataDisplayNumberComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public value!: number;

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitNumber(this);
    }
}
