import {
    Component,
    model,
    ModelSignal,
} from "@angular/core";

import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-text",
    templateUrl: "./data.display.text.component.html",
    styleUrl: "./data.display.text.component.css"
})
export class DataDisplayTextComponent extends DataDisplayAbstractComponent {
    public readonly text: ModelSignal<string> = model<string>("");

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitText(this);
    }
}
