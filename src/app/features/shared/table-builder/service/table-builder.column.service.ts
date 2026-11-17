import {
    Injectable,
    ViewContainerRef
} from "@angular/core";

import {
    ITableBuilderRowData,
    ITableBuilderColumnConfig
} from "../model";
import { TableBuilderColumnCellDataVisitor } from "../model/table-builder.column-cell-data.visitor";

interface ITableBuilderColumn {
    handle(
        vcr: ViewContainerRef,
        columnKey: string,
        row: ITableBuilderRowData,
        rowIndex?: number
    ): void;
}

@Injectable()
export abstract class TableBuilderColumnService implements ITableBuilderColumn {
    public abstract handle(
        vcr: ViewContainerRef,
        columnKey: string,
        row: ITableBuilderRowData,
        rowIndex?: number
    ): void;

    protected render(
        vcr: ViewContainerRef,
        mapper: ITableBuilderColumnConfig,
        visitor: TableBuilderColumnCellDataVisitor
    ): void {
        if (mapper === undefined) {
            throw new Error(
                "please provide display component for this property."
            );
        }

        const componentRef = vcr.createComponent(mapper.renderer);

        componentRef.instance.accept(visitor);
    }
}
