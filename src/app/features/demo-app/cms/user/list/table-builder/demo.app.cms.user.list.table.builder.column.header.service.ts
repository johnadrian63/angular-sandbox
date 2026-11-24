import { Injectable } from "@angular/core";

import { IUserAdapter } from "../../demo.app.cms.user.model.adapter";
import { demoAppCmsUserListTableBuilderHeaderMapper } from "./demo.app.cms.user.list.table.builder.config";
import { TableBuilderColumnHeaderService, TableBuilderHeaderCellData } from "../../../../../shared/table-builder";

@Injectable()
export class DemoAppCmsUserListTableBuilderColumnHeaderService extends TableBuilderColumnHeaderService<IUserAdapter> {
    public override headers: Map<keyof IUserAdapter, TableBuilderHeaderCellData> = new Map<keyof IUserAdapter, TableBuilderHeaderCellData>();

    private readonly userListColumnKeys = "userListColumnKey";

    public override register(): void {
        for (const header of demoAppCmsUserListTableBuilderHeaderMapper.entries()) {
            const key = header[0];
            const label = header[1].label;

            let sortable = true;
            let movable = true;
            let freezed = false;
            let width = "";

            if (["firstName", "email", "university", "companyName"].includes(key)) {
                width = "250px";
            } else {
                width = "170px";
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

    protected override resolveColumnKeys(columnKeys: (keyof IUserAdapter)[]): void {
        const cachedColumns = localStorage.getItem(this.userListColumnKeys);

        if (cachedColumns) {
            this.columnsToDisplay = JSON.parse(cachedColumns);
        } else {
            this.columnsToDisplay = columnKeys;
        }
    }

    public override handleColumnOrder(columns: (keyof IUserAdapter)[]): void {
        localStorage.setItem(this.userListColumnKeys, JSON.stringify(columns));
    }

    public override reset(): void {
        // cleanup logic here
    }
}
