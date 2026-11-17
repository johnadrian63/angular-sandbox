import {
    Component,
    Input,
} from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";

import { IDataDisplayVisitor } from "../data-display.visitor.interface";
import { TableBuilderSelectionService } from "../../table-builder/service";
import { DataDisplayAbstractComponent } from "../data-display.abstract.component";
import { DataDisplayCheckboxComponent } from "../checkbox/data-display.checkbox.component";

@Component({
    selector: "app-data-display-selection-component",
    templateUrl: "./data-display.selection.component.html",
    styleUrl: "./data-display.selection.component.css",
    imports: [
        DataDisplayCheckboxComponent
    ]
})
export class DataDisplaySelectionComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public id!: string;

    public get checked(): boolean {
        return this.tableBuilderSelectionService.isSelected(this.id);
    }

    constructor(
        private readonly tableBuilderSelectionService: TableBuilderSelectionService
    ) {
        super();
    }

    public select(selected: boolean): void {
        this.tableBuilderSelectionService.select([this.id], selected);
    }

    public handleSelect(checkbox: MatCheckboxChange): void {
        this.select(checkbox.checked);
    }

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        if (visitor.visitSelection) {
            return visitor.visitSelection(this);
        }

        throw new Error("refactor this visitor.visitSelection");
    }
}
