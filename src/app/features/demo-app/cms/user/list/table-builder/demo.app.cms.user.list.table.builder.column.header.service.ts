import { Injectable } from "@angular/core";

import { IUserAdapter } from "../../demo.app.user.model";
import { demoAppCmsUserListTableBuilderHeaderMapper } from "./demo.app.cms.user.list.table.builder.config";
import { TableBuilderColumnHeaderService, TableBuilderHeaderCellData } from "../../../../../shared/table-builder";

@Injectable()
export class DemoAppCmsUserListTableBuilderColumnHeaderService extends TableBuilderColumnHeaderService<IUserAdapter> {
    public override headers: Map<keyof IUserAdapter, TableBuilderHeaderCellData> = new Map<keyof IUserAdapter, TableBuilderHeaderCellData>();

    public override register(): void {
        for (const header of demoAppCmsUserListTableBuilderHeaderMapper.entries()) {
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
        // cleanup logic here
    }
}
