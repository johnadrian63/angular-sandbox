import {
    Injectable,
    signal,
    ViewContainerRef,
    WritableSignal
} from "@angular/core";

import { ITableBuilderHeaderCellData } from "../model";
import { TableBuilderHeaderCellData } from "../model/table.builder.header.cell.data";
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

    public readonly columnsToDisplay: WritableSignal<string[]> = signal<string[]>([]);

    public abstract register(): void;
    public abstract reset(): void;

    public init(): void {
        this.register();

        if (!this.headers) {
            throw new Error("column headers are not defined");
        }

        const columnsToDisplay = this.headers.map((column: TableBuilderHeaderCellData) => column.key);

        this.columnsToDisplay.set(columnsToDisplay);
    }

    public handle(vcr: ViewContainerRef, column: ITableBuilderHeaderCellData): void {
        const componentRef = vcr.createComponent(TableBuilderDataDisplayHeaderComponent);

        componentRef.instance.column.set(column);

        componentRef.changeDetectorRef.detectChanges();
    }
}
