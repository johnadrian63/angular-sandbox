import { Injectable } from "@angular/core";

import { ValueOf } from "../../util/ValueOf";
import { FilterBuilderDriverService } from "./filter-builder.driver.service";

@Injectable()
export class FilterBuilderDriverDefaultService<T> extends FilterBuilderDriverService<T> {

    public get filterData(): T {
        const filters: T = Object.create({});

        this.filterDataMapper.forEach((filterValue: ValueOf<T>, filterKey: keyof T) => {
            if (filterValue) {
                filters[filterKey] = filterValue;
            }
        });

        return filters;
    }

    public readonly filterDataMapper: Map<keyof T, ValueOf<T>> = new Map<keyof T, ValueOf<T>>();

    public applyFilter(key: keyof T, value: ValueOf<T>): void {
        this.filterDataMapper.set(key, value);

        this.applyFilterSubject.next(this.filterData);
    }

    public override reset(): void {
        this.filterDataMapper.clear();
        this.filterBuilderService.clearValue();

        this.applyFilterSubject.next(this.filterData);
    }
}
