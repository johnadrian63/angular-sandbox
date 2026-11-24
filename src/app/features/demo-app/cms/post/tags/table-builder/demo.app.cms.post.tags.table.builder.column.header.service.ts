import { Injectable } from "@angular/core";

import { IPostTagAdapter } from "../demo.app.cms.post.tags.adapter";
import { demoAppCmsPostTagsTableBuilderHeaderMapper } from "./demo.app.cms.post.tags.table.builder.config";
import { TableBuilderColumnHeaderService, TableBuilderHeaderCellData } from "../../../../../shared/table-builder";

@Injectable()
export class DemoAppCmsPostTagsTableBuilderColumnHeaderService extends TableBuilderColumnHeaderService<IPostTagAdapter> {
    public override headers: Map<keyof IPostTagAdapter, TableBuilderHeaderCellData> = new Map<keyof IPostTagAdapter, TableBuilderHeaderCellData>([]);

    public override register(): void {
        for (const header of demoAppCmsPostTagsTableBuilderHeaderMapper.entries()) {
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
        // throw new Error("Method not implemented.");
    }

    public override handleColumnOrder(columns: (keyof IPostTagAdapter)[]): void {
        throw new Error("Method not implemented.");
    }
}