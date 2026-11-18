import {
    Component,
    model,
    ModelSignal,
} from "@angular/core";

import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-number",
    templateUrl: "./data.display.number.component.html"
})
export class DataDisplayNumberComponent extends DataDisplayAbstractComponent {
    public readonly value: ModelSignal<number> = model<number>(0);

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitNumber(this);
    }
}
