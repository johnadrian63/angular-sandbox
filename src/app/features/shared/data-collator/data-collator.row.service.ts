import { Injectable } from "@angular/core";

import { IDataCollatorRowData } from "./data-collator.interface";

interface IDataCollatorRow {
    handleClick(row: IDataCollatorRowData): void;
    handleClass(row: IDataCollatorRowData): string;
}

@Injectable()
export abstract class DataCollatorRowService implements IDataCollatorRow {
    public abstract handleClick(row: IDataCollatorRowData): void;
    public abstract handleClass(row: IDataCollatorRowData): string;
}
