export interface IDataCollatorService {
    reset(): void;
}

export interface IDataCollatorSelection {
    selected: string[];
    unselected: string[];
}

export interface IDataCollatorRowData {
    rowId: string | number;
}
