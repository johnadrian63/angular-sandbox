import {
    Component,
    Input
} from "@angular/core";

import { IDataDisplayVisitor } from "../data-display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data-display.abstract.component";

@Component({
    selector: "app-data-display-date-time",
    templateUrl: "./data.display.date.time.component.html",
})
export class DataDisplayDateTimeComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public value!: string;

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitDateTime(this);
    }
}
