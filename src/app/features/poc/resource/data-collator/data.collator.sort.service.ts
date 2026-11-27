import { DestroyRef, inject, Injectable, signal, WritableSignal } from "@angular/core";

/**
 * @deprecated
 * @description move to /shared
 */
export type DataCollatorSortOrder = "asc" | "desc";

/**
 * @deprecated
 * @description move to /shared
 */
export interface IDataCollatorSort {
    sortBy: string;
    order: string;
}

/**
 * @deprecated
 * @description move to /shared
 */
@Injectable()
export abstract class DataCollatorSortService {
    protected abstract sortableKeys: string[];

    public get sortBy(): string {
        return this._sortSignal()[this.sortByKey];
    }

    public get order(): string {
        return this._sortSignal()[this.orderKey];
    }

    public get sortByKey(): keyof Pick<IDataCollatorSort, "sortBy"> {
        return "sortBy";
    }

    public get orderKey(): keyof Pick<IDataCollatorSort, "order"> {
        return "order";
    }

    private readonly _sortSignal: WritableSignal<IDataCollatorSort> = signal<IDataCollatorSort>({
        [this.sortByKey]: "",
        [this.orderKey]: "",
    });
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);

    constructor() {
        this.destroyRef.onDestroy(() => {
            this.reset();
        });
    }

    public abstract init(): void;
    public abstract reset(): void;

    public handleSort(sort: IDataCollatorSort): void {
        this.setSort(sort[this.sortByKey], sort[this.orderKey]);
    }

    public setSort(sortBy: string, order: string): void {
        const sort: IDataCollatorSort = {
            sortBy: "",
            order: ""
        };

        if (this.isValidSortBy(sortBy) && this.isValidSortOrder(order)) {
            sort.sortBy = sortBy;
            sort.order = order;
        }

        this._sortSignal.update(() => sort);
    }

    public value(): IDataCollatorSort | undefined {
        if (this.isValidSortBy(this.sortBy) && this.isValidSortOrder(this.order)) {
            return {
                sortBy: this.sortBy,
                order: this.order
            } satisfies IDataCollatorSort;
        }

        return undefined;
    }

    protected isValidSortBy(sortBy: string): boolean {
        if (!sortBy) {
            return false;
        }

        this.ASSERT_SORTABLE_KEYS();

        return this.sortableKeys.includes(sortBy);
    }

    protected isValidSortOrder(order: string): boolean {
        if (!order) {
            return false;
        }

        return order === "asc" || order === "desc";
    }

    private ASSERT_SORTABLE_KEYS(): void {
        if (!this.sortableKeys) {
            throw new Error("sortable keys must be set.");
        }
    }
}
