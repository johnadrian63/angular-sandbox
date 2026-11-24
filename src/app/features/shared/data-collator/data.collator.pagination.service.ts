import { Injectable, signal, WritableSignal } from "@angular/core";

import { NumberUtil } from "../util/number.util";
import { IDataCollatorService } from "./data-collator.interface";
import { PageSizeOptions } from "../ui/paginator/ui.paginator.component";

@Injectable()
export abstract class DataCollatorPaginationService implements IDataCollatorService {

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

    public get pageSizeOptions(): Array<PageSizeOptions> {
        return [
            PageSizeOptions.SIZE_25,
            PageSizeOptions.SIZE_50,
            PageSizeOptions.SIZE_100,
            PageSizeOptions.SIZE_250
        ];
    }

    /**
     *  @usageNotes
     *  override this to enable/disable first and list button
     */
    public get firstAndLastButtonsEnabled(): boolean {
        return true;
    }

    /**
     *  @usageNotes
     *  override this to enable/disable pagination
     */
    public get paginationEnabled(): boolean {
        return true;
    }

    private _pageSize: WritableSignal<number> = signal<number>(PageSizeOptions.SIZE_25);
    private _page: WritableSignal<number> = signal<number>(0);
    private _totalPages: WritableSignal<number> = signal<number>(0);
    private _count: WritableSignal<number> = signal<number>(0);

    public abstract reset(): void;
    public abstract handlePageChange(page: number, pageSize: number): void;

    public init(): void { }

    public setPaging(page: number, pageSize: number): void {
        this._page.set(NumberUtil.isPositive(page) ? page : 0);
        this._pageSize.set(NumberUtil.isPositive(pageSize) && this.pageSizeOptions.includes(pageSize) ? pageSize : PageSizeOptions.SIZE_25);
    }

    public resetPage(): void {
        this.setPaging(0, this.pageSize);
    }

    public setCount(count: number): void {
        this._count.set(NumberUtil.isPositive(count) ? count : 0);
        this._totalPages.set(Math.ceil(this._count() / this.pageSize));
    }
}
