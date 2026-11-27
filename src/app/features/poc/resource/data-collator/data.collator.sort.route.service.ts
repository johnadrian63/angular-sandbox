import { computed, inject, Injectable } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

import { DataCollatorSortService, IDataCollatorSort } from "./data.collator.sort.service";

/**
 * @deprecated
 * @description move to /shared
 */
@Injectable()
export abstract class DataCollatorSortRouteService extends DataCollatorSortService {

    public override get sortBy(): string {
        return this.sortSignal()[this.sortByKey];
    }

    public override get order(): string {
        return this.sortSignal()[this.orderKey];
    }

    private readonly router: Router = inject<Router>(Router);
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly paramsSignal = toSignal(
        this.activatedRoute
            .queryParams
            .pipe(map((params: Params) => {
                const sortBy = params[this.sortByKey];
                const order = params[this.orderKey];

                return { sortBy, order } satisfies IDataCollatorSort;
            })),
        {
            initialValue: {
                [this.sortByKey]: "",
                [this.orderKey]: "",
            }
        });
    private readonly sortSignal = computed(() => {
        const paramsSignal = this.paramsSignal();
        const sortBy = paramsSignal[this.sortByKey];
        const order = paramsSignal[this.orderKey];
        const filter: IDataCollatorSort = {
            sortBy: "",
            order: ""
        };

        if (this.isValidSortBy(sortBy)) {
            filter.sortBy = sortBy;
        }

        if (this.isValidSortOrder(order)) {
            filter.order = order;
        }

        return filter;
    });

    public override handleSort(sort: IDataCollatorSort): void {
        this.router.navigate([], {
            queryParams: {
                [this.sortByKey]: sort.sortBy || undefined,
                [this.orderKey]: sort.order || undefined
            },
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute
        });
    }
}
