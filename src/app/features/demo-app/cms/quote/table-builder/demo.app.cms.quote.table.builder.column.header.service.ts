import { Injectable } from "@angular/core";

import { IQuoteAdapter } from "../demo.app.cms.quote.adapter";
import { demoAppCmsQuoteTableBuilderHeaderMapper } from "./demo.app.cms.quote.table.builder.config";
import { TableBuilderColumnHeaderService, TableBuilderHeaderCellData } from "../../../../shared/table-builder";

@Injectable()
export class DemoAppCmsQuoteTableBuilderColumnHeaderService extends TableBuilderColumnHeaderService<IQuoteAdapter> {
    public override headers: Map<keyof IQuoteAdapter, TableBuilderHeaderCellData> = new Map<keyof IQuoteAdapter, TableBuilderHeaderCellData>([]);

    public override register(): void {
        for (const header of demoAppCmsQuoteTableBuilderHeaderMapper.entries()) {
            const key = header[0];
            const label = header[1].label;

            let sortable = true;
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
        // do nothing
    }

    public override handleColumnOrder(columns: (keyof IQuoteAdapter)[]): void {
        // do nothing
    }
}