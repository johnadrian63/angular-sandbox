import {
    Injectable,
    ViewContainerRef,
} from "@angular/core";

import { ITableBuilderHeaderCellData, ITableBuilderRowData } from "../model";
import { TableBuilderHeaderCellData } from "../model/table.builder.header.cell.data";
import { TableBuilderDataDisplayHeaderComponent } from "../component/data-display/header";

interface ITableBuilderColumnHeader {
    register(): void;
    handle(vcr: ViewContainerRef, column: TableBuilderHeaderCellData): void;
    reset(): void;
}

@Injectable()
export abstract class TableBuilderColumnHeaderService<T extends ITableBuilderRowData> implements ITableBuilderColumnHeader {
    public columnsToDisplay: (keyof T)[] = [];

    public abstract headers: Map<keyof T, TableBuilderHeaderCellData>;
    public abstract register(): void;
    public abstract reset(): void;

    public init(): void {
        this.register();

        if (!this.headers) {
            throw new Error("column headers are not defined");
        }

        this.resolveColumnKeys([...this.headers.keys()]);

        if (!this.columnsToDisplay.length) {
            throw new Error("columns should not be empty.");
        }
    }

    public handle(vcr: ViewContainerRef, column: ITableBuilderHeaderCellData): void {
        const componentRef = vcr.createComponent(TableBuilderDataDisplayHeaderComponent);

        componentRef.instance.column.set(column);

        componentRef.changeDetectorRef.detectChanges();
    }

    protected resolveColumnKeys(columnKeys: (keyof T)[]): void {
        this.columnsToDisplay = columnKeys;
    }

    public abstract handleColumnOrder(columns: (keyof T)[]): void;
}
