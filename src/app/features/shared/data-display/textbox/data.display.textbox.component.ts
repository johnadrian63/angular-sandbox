import {
    Component,
    model,
    ModelSignal
} from "@angular/core";

import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-textbox-component",
    templateUrl: "./data.display.textbox.component.html"
})
export class DataDisplayTextboxComponent extends DataDisplayAbstractComponent {
    public readonly value: ModelSignal<string> = model<string>("");

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitTextbox(this);
    }
}
