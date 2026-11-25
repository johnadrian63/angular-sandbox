import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

export type DataCollatorSortDirection = "asc" | "desc";

export interface DataCollatorSort {
    column: string | null;
    direction: DataCollatorSortDirection | null;
}

@Injectable()
export abstract class DataCollatorSortBaseService {

    public get columnKey(): keyof Pick<DataCollatorSort, "column"> {
        return "column";
    }

    public get directionKey(): keyof Pick<DataCollatorSort, "direction"> {
        return "direction";
    }

    public get sortChanged$(): Observable<DataCollatorSort> {
        return this.sortSubject.asObservable();
    }

    public get sort(): DataCollatorSort {
        return this._sort;
    }

    private readonly _sort: DataCollatorSort = {
        [this.columnKey]: null,
        [this.directionKey]: null
    };

    private readonly sortSubject: Subject<DataCollatorSort> = new Subject<DataCollatorSort>();

    public handleSort(sort: DataCollatorSort): void {
        this.setSort(sort[this.columnKey]!, sort[this.directionKey]!);

        this.sortSubject.next(this._sort);
    }

    public setSort(field: string, direction: DataCollatorSortDirection): void {
        this._sort[this.columnKey] = field;
        this._sort[this.directionKey] = direction;
    }

    public abstract init(): void;
    public abstract reset(): void;
}
