import { Injectable, ViewContainerRef } from "@angular/core";

import { TableBuilderColumnService } from "../../../shared/table-builder";
import { IPostAdapter } from "../poc.table.builder.model";
import { pocTableBuilderMapper } from "../poc.table.builder.config";
import { TableBuilderColumnCellDataVisitor } from "../../../shared/table-builder/model/table-builder.column-cell-data.visitor";
import { DataDisplayTextComponent } from "../../../shared/data-display/text";

@Injectable()
export class PocTableBuilderColumnService extends TableBuilderColumnService {
    public handle(vcr: ViewContainerRef, columnKey: keyof IPostAdapter, row: IPostAdapter): void {
        const mapper = pocTableBuilderMapper.get(columnKey);

        this.render(
            vcr,
            mapper!,
            new BadgeManagerListTableBuilderColumnDataVisitor(
                columnKey,
                row
            )
        );
    }
}

class BadgeManagerListTableBuilderColumnDataVisitor extends TableBuilderColumnCellDataVisitor {
    constructor(
        private readonly columnKey: keyof IPostAdapter,
        private readonly row: IPostAdapter
    ) {
        super();
    }

    public override visitText(component: DataDisplayTextComponent): void {
        component.text = <string>this.row[this.columnKey];
    }
}
