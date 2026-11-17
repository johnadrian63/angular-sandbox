import {
    Component,
    EventEmitter,
    Input,
    Output
} from "@angular/core";
import {
    MatRadioChange,
    MatRadioModule
} from "@angular/material/radio";

import { IDataDisplayVisitor } from "../data-display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data-display.abstract.component";

@Component({
    selector: "app-data-display-radio-button-component",
    templateUrl: "./data-display.radio-button.component.html",
    styleUrl: "./data-display.radio-button.component.css",
    imports: [
        MatRadioModule
    ]
})
export class DataDisplayRadioButtonComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public name!: string;

    // FIXME refactor this!
    @Input() public value!: string;
    @Input() public checked: boolean = false;

    @Output() public handleChange: EventEmitter<MatRadioChange> = new EventEmitter<MatRadioChange>();

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        if (visitor.visitRadioButton) {
            return visitor.visitRadioButton(this);
        }

        throw new Error("refactor this visitor.visitRadioButton");
    }
}
