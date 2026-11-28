import { DestroyRef, inject, Injectable, signal, WritableSignal } from "@angular/core";

import { NumberUtil } from "../util/number.util";
import { PageSizeOptions } from "../ui/paginator/ui.paginator.component";

@Injectable()
export abstract class DataCollatorPaginationService {

    public get page(): number {
        return this._page();
    }

    public get pageSize(): number {
        return this._pageSize();
    }

    public get count(): number {
        return this._count();
    }

    public get totalPages(): number {
        return this._totalPages();
    }

    public get hasNext(): boolean {
        return this.page < this.totalPages - 1;
    }

    public get hasPrevious(): boolean {
        return this.page > 0;
    }

    public get pageSizeOptions(): Array<PageSizeOptions> {
        return [
            // PageSizeOptions.SIZE_1,
            PageSizeOptions.SIZE_25,
            PageSizeOptions.SIZE_50,
            PageSizeOptions.SIZE_100,
            PageSizeOptions.SIZE_250
        ];
    }

    private _pageSize: WritableSignal<number> = signal<number>(PageSizeOptions.SIZE_25);
    private _page: WritableSignal<number> = signal<number>(0);
    private _totalPages: WritableSignal<number> = signal<number>(0);
    private _count: WritableSignal<number> = signal<number>(0);
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);

    constructor() {
        this.destroyRef.onDestroy(() => {
            this.reset();
        });
    }

    public abstract reset(): void;

    public setPaging(page: number, pageSize: number): void {
        const currentPage = NumberUtil.isPositive(page) ? page : 0;
        this._page.set(currentPage);

        const currentPageSize = NumberUtil.isPositive(pageSize) && this.pageSizeOptions.includes(pageSize) ? pageSize : PageSizeOptions.SIZE_25;
        this._pageSize.set(currentPageSize);
    }

    public resetPage(): void {
        this.setPaging(0, this.pageSize);
    }

    public setCount(count: number): void {
        this._count.set(NumberUtil.isPositive(count) ? count : 0);
        this._totalPages.set(Math.ceil(this._count() / this.pageSize));
    }
}
