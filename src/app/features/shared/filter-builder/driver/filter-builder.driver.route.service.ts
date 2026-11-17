import {
    ActivatedRoute,
    NavigationEnd,
    Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import {
    filter,
    map,
    Observable
} from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { ValueOf } from "../../util/ValueOf";
import { FilterBuilderDriverService } from "./filter-builder.driver.service";

@Injectable()
export class FilterBuilderDriverRouteService<T> extends FilterBuilderDriverService<T> {

    public override get filterData(): T {
        // FIXME refactor this. This is weird man.....
        const filters = Object.create({});

        for (let index = 0; index < this.filterKeys.length; index++) {
            const filterKey = this.filterKeys[index];
            const filterKeyString = filterKey.toString();
            const queryValue = this.activatedRoute.snapshot.queryParamMap.get(filterKeyString);

            if (queryValue) {
                filters[filterKeyString] = queryValue;
            }
        }

        return filters;
    }

    public get routeChange(): Observable<void> {
        return this.router.events
            .pipe(
                takeUntilDestroyed(),
                filter((event) => event instanceof NavigationEnd),
                map(() => void null)
            );
    }

    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) {
        super();

        this.routeChange.subscribe(() => {
            // FIXME refactor this. This is weird
            if (Object.keys(this.filterData!).length === 0) {
                this.filterBuilderService.clearValue();
            }
        });
    }

    public override applyFilter(key: keyof T, value: ValueOf<T>): void {
        this.router.navigate([], {
            queryParams: {
                [key]: value || undefined,
                page: undefined,
                pageSize: undefined
            },
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute
        });

        this.applyFilterSubject.next(this.filterData);
    }

    public override reset(): void {
        this.router.navigate([], {
            queryParams: {},
            relativeTo: this.activatedRoute
        });

        this.applyFilterSubject.next(this.filterData);
    }
}
