import {
    Injectable,
    ViewContainerRef
} from "@angular/core";

import { ITableBuilderHeaderCellData } from "../model";
import { TableBuilderHeaderCellData } from "../model/table-builder.header-cell-data";
import { TableBuilderDataDisplayHeaderComponent } from "../component/data-display/header";

interface ITableBuilderColumnHeader {
    headers: TableBuilderHeaderCellData[];

    register(): void;
    handle(vcr: ViewContainerRef, column: TableBuilderHeaderCellData): void;
    reset(): void;
}

@Injectable()
export abstract class TableBuilderColumnHeaderService implements ITableBuilderColumnHeader {
    public abstract headers: TableBuilderHeaderCellData[];
    // FIXME convert this to signal()
    public columnsToDisplay: string[] = [];

    public abstract register(): void;
    public abstract reset(): void;

    public init(): void {
        this.register();

        if (!this.headers) {
            throw new Error("column headers are not defined");
        }

        this.columnsToDisplay = this.headers.map((column: TableBuilderHeaderCellData) => column.key);
    }

    public handle(vcr: ViewContainerRef, column: ITableBuilderHeaderCellData): void {
        const componentRef = vcr.createComponent(TableBuilderDataDisplayHeaderComponent);

        componentRef.instance.column = column;

        componentRef.changeDetectorRef.detectChanges();
    }
}
