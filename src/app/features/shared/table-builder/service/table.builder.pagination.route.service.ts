import { inject, Injectable } from "@angular/core";
import {
    ActivatedRoute,
    Router
} from "@angular/router";

import { TableBuilderPaginationBaseService } from "./table.builder.pagination.base.service";

@Injectable()
export abstract class TableBuilderPaginationRouteService extends TableBuilderPaginationBaseService {

    public get pageKey(): string {
        return "page";
    }

    public get pageSizeKey(): string {
        return "pageSize";
    }

    protected readonly router: Router = inject<Router>(Router);

    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    public init(): void {
        const currentPage = this.activatedRoute.snapshot.queryParamMap.get(this.pageKey)!;
        const currentPageSize = this.activatedRoute.snapshot.queryParamMap.get(this.pageSizeKey)!;

        super.setPaging(parseInt(currentPage), parseInt(currentPageSize));
    }

    public override handlePageChange(page: number, pageSize: number): void {
        this.router.navigate([], {
            queryParams: {
                page,
                pageSize
            },
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute
        });
    }
}
