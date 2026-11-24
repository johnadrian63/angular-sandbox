import { inject, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Sort, TableBuilderSortService } from "../../../../../shared/table-builder";

@Injectable()
export class DemoAppCmsUserListTableBuilderSortService extends TableBuilderSortService {
    private readonly router: Router = inject<Router>(Router);
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    public override handleSort(sort: Sort): void {
        this.router.navigate([], {
            queryParams: {
                sortBy: sort.columnKey,
                order: sort.direction
            },
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute
        });
    }

    public override reset(): void {
        // cleanup logic here
    }
}
