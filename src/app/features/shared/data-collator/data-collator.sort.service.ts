import { Injectable } from "@angular/core";
import {
    Observable,
    Subject
} from "rxjs";

import { IDataCollatorService } from "./data-collator.interface";

export type SortDirection = "asc" | "desc";

export interface Sort {
    columnKey: string | null;
    direction: SortDirection | null;
}

interface IDataCollatorSort extends IDataCollatorService {
    handleSort(sort: Sort): void;
}

@Injectable()
export abstract class DataCollatorSortService implements IDataCollatorSort {

    public get sortChanged$(): Observable<Sort> {
        return this.sortSubject.asObservable();
    }

    public get sort(): Sort {
        return this._sort;
    }

    // FIMXE refactor this!
    public _sort: Sort = {
        columnKey: null,
        direction: null
    };

    private readonly sortSubject: Subject<Sort> = new Subject<Sort>();

    public handleSort(sort: Sort): void {
        // FIMXE refactor this!
        this.setSort(sort.columnKey!, sort.direction!)

        this.sortSubject.next(this._sort);
    }

    public setSort(field: string, direction: SortDirection): void {
        this._sort.columnKey = field;
        this._sort.direction = direction;
    }

    public abstract reset(): void;
}
