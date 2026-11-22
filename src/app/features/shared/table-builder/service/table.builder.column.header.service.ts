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
    public abstract headers: Map<keyof T, TableBuilderHeaderCellData>;

    public get columnsToDisplay(): (keyof T)[] {
        return [...this.headers.keys()];
    }

    public abstract register(): void;
    public abstract reset(): void;

    public init(): void {
        this.register();

        if (!this.headers) {
            throw new Error("column headers are not defined");
        }
    }

    public handle(vcr: ViewContainerRef, column: ITableBuilderHeaderCellData): void {
        const componentRef = vcr.createComponent(TableBuilderDataDisplayHeaderComponent);

        componentRef.instance.column.set(column);

        componentRef.changeDetectorRef.detectChanges();
    }
}
