import {
    Component,
    OnInit
} from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";

import { TableBuilderSelectionService } from "../../../service";
import { IDataDisplayVisitor } from "../../../../data-display/data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../../../../data-display/data.display.abstract.component";
import { DataDisplayCheckboxComponent } from "../../../../data-display/checkbox/data.display.checkbox.component";

@Component({
    selector: "app-table-builder-data-display-selection",
    templateUrl: "./table.builder.data.display.selection.component.html",
    imports: [
        DataDisplayCheckboxComponent
    ]
})
export class TableBuilderDataDisplaySelectionComponent extends DataDisplayAbstractComponent implements OnInit {

    public get checked(): boolean {
        return this.tableBuilderSelectionService.isSelected(this.id);
    }

    public id!: string;

    constructor(
        private readonly tableBuilderSelectionService: TableBuilderSelectionService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.tableBuilderSelectionService.register(this.id, this);
    }

    public select(checked: boolean, emitValue: boolean = true): void {
        this.tableBuilderSelectionService.select([this.id], checked, emitValue);
    }

    public handleSelect(checkbox: MatCheckboxChange): void {
        this.select(checkbox.checked);
    }

    public override accept<T>(visitor: ITableBuilderDataDisplaySelectionVisitor<T>): T {
        return visitor.visitTableSelection(this);
    }
}

export interface ITableBuilderDataDisplaySelectionVisitor<T> extends IDataDisplayVisitor<T> {
    visitTableSelection(component: TableBuilderDataDisplaySelectionComponent): T;
}
