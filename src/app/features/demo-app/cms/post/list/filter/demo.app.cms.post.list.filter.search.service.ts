import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { SearchFormService } from "../../../../../shared/search-form/search.form.service";
import { DemoAppCmsPostListTableBuilderPaginationService } from "../table-builder/demo.app.cms.post.list.table.builder.pagination.service";

@Injectable()
export class DemoAppCmsPostListFilterSearchService extends SearchFormService {
    private readonly router: Router = inject<Router>(Router);
    private readonly tableBuilderPaginationRouteService: DemoAppCmsPostListTableBuilderPaginationService = inject<DemoAppCmsPostListTableBuilderPaginationService>(DemoAppCmsPostListTableBuilderPaginationService);

    public override handleSearch(searchText: string): void {
        this.router.navigate([], {
            queryParams: {
                q: searchText ? searchText : undefined,
                [this.tableBuilderPaginationRouteService.pageKey]: undefined
            },
            queryParamsHandling: "merge",
        });
    }
}
