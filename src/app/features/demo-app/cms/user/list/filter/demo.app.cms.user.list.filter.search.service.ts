import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { SearchFormService } from "../../../../../shared/search-form/search.form.service";
import { DemoAppCmsUserListTableBuilderPaginationService } from "../table-builder/demo.app.cms.user.list.table.builder.pagination.service";

@Injectable()
export class DemoAppCmsUserListFilterSearchService extends SearchFormService {
    private readonly router: Router = inject<Router>(Router);
    private readonly tableBuilderPaginationRouteService: DemoAppCmsUserListTableBuilderPaginationService = inject<DemoAppCmsUserListTableBuilderPaginationService>(DemoAppCmsUserListTableBuilderPaginationService);

    public override handleSearch(searchText: string): void {
        this.router.navigate([], {
            queryParams: {
                search: searchText,
                [this.tableBuilderPaginationRouteService.pageKey]: undefined,
                key: undefined,
                value: undefined
            },
            queryParamsHandling: "merge",
        });
    }
}
