import {
    Component,
    EventEmitter,
    Input,
    Output
} from "@angular/core";
import {
    MatCheckboxChange,
    MatCheckboxModule
} from "@angular/material/checkbox";

import { IDataDisplayVisitor } from "../data-display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data-display.abstract.component";

@Component({
    selector: "app-data-display-checkbox",
    templateUrl: "./data.display.checkbox.component.html",
    imports: [
        MatCheckboxModule
    ]
})
export class DataDisplayCheckboxComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public id!: string;
    @Input() public checked: boolean = false;
    @Input() public indeterminate: boolean = false;

    @Output() public handleSelect: EventEmitter<MatCheckboxChange> = new EventEmitter<MatCheckboxChange>();

    public select(event: MatCheckboxChange): void {
        this.handleSelect.emit(event);
    }

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitCheckbox(this);
    }
}
