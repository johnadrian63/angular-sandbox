import { Injectable } from "@angular/core";

import { ITableBuilderRowData } from "../model";

interface ITableBuilderRow {
    handleClick(row: ITableBuilderRowData, columnKey: string): void;
    handleClass(row: ITableBuilderRowData): string;
}

@Injectable()
export abstract class TableBuilderRowService implements ITableBuilderRow {
    protected readonly unclickableColumnSet: Set<string> = new Set<string>();

    public rowClick(row: ITableBuilderRowData, columnKey: string): void {
        if (!this.unclickableColumnSet.has(columnKey)) {
            this.handleClick(row, columnKey);
        }
    }

    public abstract handleClick(row: ITableBuilderRowData, columnKey: string): void;
    public abstract handleClass(row: ITableBuilderRowData): string;
}
