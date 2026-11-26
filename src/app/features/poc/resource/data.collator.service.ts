import { Injectable, ResourceRef } from "@angular/core";

export interface IDataCollatorRow {
    rowId: string | number;
}


@Injectable()
export abstract class DataCollatorService<T> {

    public abstract get dataSource(): T;

    public abstract createResource(): ResourceRef<T | undefined>;
}
