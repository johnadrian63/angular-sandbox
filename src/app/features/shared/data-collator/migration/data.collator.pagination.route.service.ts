import { inject, Injectable } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { map } from "rxjs";

import { NumberUtil } from "../../util/number.util";
import { DataCollatorPaginationService } from "./data.collator.pagination.service";
import { PageSizeOptions } from "../../ui/paginator/ui.paginator.component";

/**
 * @deprecated
 * @description move to /shared
 */
@Injectable()
export abstract class DataCollatorPaginationRouteService extends DataCollatorPaginationService {
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly router: Router = inject<Router>(Router);

    private readonly pageOptionSignal = toSignal(
        this.activatedRoute
            .queryParams
            .pipe(map((params: Params) => {
                return {
                    page: this.validatePage(+params["page"]),
                    pageSize: this.validatePageSize(+params["pageSize"]),
                }
            })),
        {
            initialValue: {
                page: 0,
                pageSize: PageSizeOptions.SIZE_100
            }
        });

    public override get page() {
        return this.pageOptionSignal().page;
    }

    public override get pageSize(): number {
        return this.pageOptionSignal().pageSize;
    }

    public override setPaging(page: number, pageSize: number): void {
        this.router.navigate([], {
            queryParams: {
                page: this.validatePage(page),
                pageSize: this.validatePageSize(pageSize),
            },
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute
        });
    }

    private validatePage(page: number): number {
        return NumberUtil.isPositive(page) ? page : 0;
    }

    private validatePageSize(pageSize: number): number {
        return NumberUtil.isPositive(pageSize) && this.pageSizeOptions.includes(pageSize) ? pageSize : PageSizeOptions.SIZE_25;
    }
}
