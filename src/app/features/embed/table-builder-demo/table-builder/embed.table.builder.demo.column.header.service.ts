import { Injectable } from "@angular/core";

import { embedTableBuilderHeaderMapper } from "./embed.table.builder.demo.config";
import { IUserAdapter } from "../../../poc/table-builder/poc.table.builder.model";
import { TableBuilderColumnHeaderService, TableBuilderHeaderCellData } from "../../../shared/table-builder";

@Injectable()
export class EmbedTableBuilderColumnHeaderService extends TableBuilderColumnHeaderService<IUserAdapter> {
    public override headers: Map<keyof IUserAdapter, TableBuilderHeaderCellData> = new Map<keyof IUserAdapter, TableBuilderHeaderCellData>();

    public override register(): void {
        for (const header of embedTableBuilderHeaderMapper.entries()) {
            const key = header[0];
            const label = header[1].label;

            let sortable = false;
            let movable = false;
            let freezed = false;
            let width = "";

            this.headers.set(key, new TableBuilderHeaderCellData(
                key,
                label,
                sortable,
                movable,
                freezed,
                width
            ));
        }
    }

    public override reset(): void {
        // reset logic here
    }
}
