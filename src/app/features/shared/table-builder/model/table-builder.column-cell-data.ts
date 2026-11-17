import { ITableBuilderRowData } from "./interface";

export class TableBuilderColumnCellData implements ITableBuilderRowData {
    // FIXME refactor this!
    public rowId!: string | number;
}
