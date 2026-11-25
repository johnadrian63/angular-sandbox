import { inject, Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { TableBuilderSort, TableBuilderSortDirection, TableBuilderSortBaseService } from "./table.builder.sort.base.service";

@Injectable()
export abstract class TableBuilderSortRouteService extends TableBuilderSortBaseService {
    private readonly router: Router = inject<Router>(Router);
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    public init(): void {
        this.activatedRoute
            .queryParams
            .subscribe(() => {
                const columnKey = this.activatedRoute.snapshot.queryParamMap.get(this.columnKey)!;
                const order = <TableBuilderSortDirection>this.activatedRoute.snapshot.queryParamMap.get(this.directionKey)!;

                super.setSort(columnKey, order);
            });
    }

    public override handleSort(sort: TableBuilderSort): void {
        this.router.navigate([], {
            queryParams: {
                [this.columnKey]: sort.column,
                [this.directionKey]: sort.direction
            },
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute
        });
    }
}
