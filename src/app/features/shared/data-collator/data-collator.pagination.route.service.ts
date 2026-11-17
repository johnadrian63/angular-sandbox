import { Injectable } from "@angular/core";
import {
    ActivatedRoute,
    Router
} from "@angular/router";

import { DataCollatorPaginationService } from "./data-collator.pagination.service";

@Injectable()
export abstract class DataCollatorPaginationRouteService extends DataCollatorPaginationService {

    public get pageKey(): string {
        return "page";
    }

    public get pageSizeKey(): string {
        return "pageSize";
    }

    constructor(
        protected readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) {
        super();
    }

    public override init(): void {
        // FIXME: Bypass error temporarily
        const currentPage = +this.activatedRoute.snapshot.queryParamMap.get(this.pageKey)!;
        // FIXME: Bypass error temporarily
        const currentPageSize = +this.activatedRoute.snapshot.queryParamMap.get(this.pageSizeKey)!;

        super.setPaging(currentPage, currentPageSize);
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
