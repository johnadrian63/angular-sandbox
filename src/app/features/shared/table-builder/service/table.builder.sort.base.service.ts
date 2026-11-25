import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

export type TableBuilderSortDirection = "asc" | "desc";

export interface TableBuilderSort {
    column: string | null;
    direction: TableBuilderSortDirection | null;
}

@Injectable()
export abstract class TableBuilderSortBaseService {

    public get columnKey(): keyof Pick<TableBuilderSort, "column"> {
        return "column";
    }

    public get directionKey(): keyof Pick<TableBuilderSort, "direction"> {
        return "direction";
    }

    public get sortChanged$(): Observable<TableBuilderSort> {
        return this.sortSubject.asObservable();
    }

    public get sort(): TableBuilderSort {
        return this._sort;
    }

    private readonly _sort: TableBuilderSort = {
        [this.columnKey]: null,
        [this.directionKey]: null
    };

    private readonly sortSubject: Subject<TableBuilderSort> = new Subject<TableBuilderSort>();

    public handleSort(sort: TableBuilderSort): void {
        // FIXME refactor this!
        this.setSort(sort[this.columnKey]!, sort[this.directionKey]!);

        this.sortSubject.next(this._sort);
    }

    public setSort(field: string, direction: TableBuilderSortDirection): void {
        this._sort[this.columnKey] = field;
        this._sort[this.directionKey] = direction;
    }

    public abstract init(): void;
    public abstract reset(): void;
}
