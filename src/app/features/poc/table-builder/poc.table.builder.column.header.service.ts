import { Injectable } from "@angular/core";

import { TableBuilderColumnHeaderService, TableBuilderHeaderCellData } from "../../shared/table-builder";
import { pocTableBuilderHeaderMapper } from "./poc.table.builder.config";

@Injectable()
export class PocTableBuilderColumnHeaderService extends TableBuilderColumnHeaderService {
    public override headers: TableBuilderHeaderCellData[] = [];

    public override register(): void {
        for (const header of pocTableBuilderHeaderMapper.entries()) {
            const key = header[0];
            const label = header[1].label;

            let sortable = false;
            let movable = false;
            let freezed = false;
            let width = "";

            this.headers.push(
                new TableBuilderHeaderCellData(
                    key,
                    label,
                    sortable,
                    movable,
                    freezed,
                    width
                )
            );
        }
    }

    public override reset(): void {
        // reset logic here
    }
}