import { IDataCollatorFilterLoader } from "../../data-collator";

export enum TableBuilderFilterSection {
    MAIN = "MAIN",
    ACTION = "ACTION"
}

export interface ITableBuilderFilterLoader extends IDataCollatorFilterLoader {
    section: TableBuilderFilterSection;
}
