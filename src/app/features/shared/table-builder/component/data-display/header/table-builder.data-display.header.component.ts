import {
    Component,
    Input
} from "@angular/core";

import { ITableBuilderHeaderCellData } from "../../../model";
import { IDataDisplayVisitor } from "../../../../data-display/data-display.visitor.interface";
import { DataDisplayAbstractComponent } from "../../../../data-display/data-display.abstract.component";

@Component({
    selector: "app-data-display-header",
    templateUrl: "./table-builder.data-display.header.component.html"
})
export class TableBuilderDataDisplayHeaderComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public column!: ITableBuilderHeaderCellData;

    public override accept<T>(visitor: ITableBuilderDataDisplayHeaderVisitor<T>): T {
        return visitor.visitHeader(this);
    }
}

export interface ITableBuilderDataDisplayHeaderVisitor<T> extends IDataDisplayVisitor<T> {
    visitHeader(component: TableBuilderDataDisplayHeaderComponent): T;
}
