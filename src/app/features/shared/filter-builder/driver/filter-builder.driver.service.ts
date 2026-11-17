import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { ValueOf } from "../../util/ValueOf";
import { FilterBuilderService } from "../filter-builder.service";

@Injectable()
export abstract class FilterBuilderDriverService<T> {

    public abstract get filterData(): T;

    public get filterKeys(): Array<keyof T> {
        return Array.from(this.filterBuilderService.filterComponentsMapper.keys());
    }

    public get applyFilterSubject(): Subject<T> {
        return this.filterBuilderService.applyFilterSubject;
    }

    public get filterBuilderService(): FilterBuilderService<T> {
        this.ASSERT();

        return this._filterBuilderService;
    }

    private _filterBuilderService!: FilterBuilderService<T>;

    public abstract applyFilter(key: keyof T, value: ValueOf<T>): void;
    public abstract reset(): void;

    public setBuilder(filterBuilderService: FilterBuilderService<T>): void {
        this._filterBuilderService = filterBuilderService;
    }

    private ASSERT(): void {
        if (!this._filterBuilderService) {
            throw new Error("FilterBuilderDriverService is not provided");
        }
    }
}
