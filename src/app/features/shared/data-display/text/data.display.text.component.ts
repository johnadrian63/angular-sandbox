import { Component, model, ModelSignal } from "@angular/core";
import { NgClass } from "@angular/common";

import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-text",
    templateUrl: "./data.display.text.component.html",
    styleUrl: "./data.display.text.component.css",
    imports: [NgClass]
})
export class DataDisplayTextComponent extends DataDisplayAbstractComponent {
    public readonly text: ModelSignal<string | number> = model<string | number>("");

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitText(this);
    }
}
