import { Injectable } from "@angular/core";

import { IPostAdapter } from "../../demo.app.cms.post.model";
import { demoAppCmsPostListTableBuilderHeaderMapper } from "./demo.app.cms.post.list.table.builder.config";
import { TableBuilderColumnHeaderService, TableBuilderHeaderCellData } from "../../../../../shared/table-builder";

@Injectable()
export class DemoAppCmsPostListTableBuilderColumnHeaderService extends TableBuilderColumnHeaderService<IPostAdapter> {
    public override headers: Map<keyof IPostAdapter, TableBuilderHeaderCellData> = new Map<keyof IPostAdapter, TableBuilderHeaderCellData>();

    public override register(): void {
        for (const header of demoAppCmsPostListTableBuilderHeaderMapper.entries()) {
            const key = header[0];
            const label = header[1].label;

            let sortable = false;
            let movable = false;
            let freezed = false;
            let width = "";

            if (["title", "body"].includes(key)) {
                width = "320px";
            } else {
                width = "100px";
            }

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

    public override handleColumnOrder(columns: (keyof IPostAdapter)[]): void {
        // do nothing
    }

    public override reset(): void {
        // cleanup logic here
    }
}
