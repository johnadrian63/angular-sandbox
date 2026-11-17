import { IFilterBuilderLoader } from "../filter-builder";

export interface IDataCollatorService {
    reset(): void;
}

export interface IDataCollatorSelection {
    selected: string[];
    unselected: string[];
}

export interface IDataCollatorFilterLoader extends IFilterBuilderLoader {
    section: string;
}

export interface IDataCollatorRowData {
    rowId: string | number;
}
