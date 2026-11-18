import { ITableBuilderHeaderCellData } from "./interface";

export class TableBuilderHeaderCellData implements ITableBuilderHeaderCellData {
    constructor(
        public readonly key: string,
        public readonly label: string,
        public readonly sortable: boolean,
        public readonly movable: boolean,
        public readonly freeze: boolean,
        public readonly width: string
    ) { }
}
