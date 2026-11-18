import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

export type SortDirection = "asc" | "desc";

export interface Sort {
    columnKey: string | null;
    direction: SortDirection | null;
}

@Injectable()
export abstract class TableBuilderSortService {

    public get sortChanged$(): Observable<Sort> {
        return this.sortSubject.asObservable();
    }

    public get sort(): Sort {
        return this._sort;
    }

    // FIXME refactor this!
    public _sort: Sort = {
        columnKey: null,
        direction: null
    };

    private readonly sortSubject: Subject<Sort> = new Subject<Sort>();

    public handleSort(sort: Sort): void {
        // FIXME refactor this!
        this.setSort(sort.columnKey!, sort.direction!)

        this.sortSubject.next(this._sort);
    }

    public setSort(field: string, direction: SortDirection): void {
        this._sort.columnKey = field;
        this._sort.direction = direction;
    }

    public abstract reset(): void;
}
