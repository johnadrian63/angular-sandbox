import {
    Component,
    EventEmitter,
    model,
    ModelSignal,
    Output
} from "@angular/core";
import {
    MatRadioChange,
    MatRadioModule
} from "@angular/material/radio";

import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-radio-button",
    templateUrl: "./data.display.radio.button.component.html",
    imports: [
        MatRadioModule
    ]
})
export class DataDisplayRadioButtonComponent extends DataDisplayAbstractComponent {
    public readonly name: ModelSignal<string> = model<string>("");
    public readonly value: ModelSignal<string> = model<string>("");
    public readonly checked: ModelSignal<boolean> = model<boolean>(false);

    @Output() public handleChange: EventEmitter<MatRadioChange> = new EventEmitter<MatRadioChange>();

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitRadioButton(this);
    }
}
