import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { SearchFormService } from "../../../../../shared/search-form/search.form.service";
import { DemoAppCmsUserListTableBuilderPaginationService } from "./demo.app.cms.user.list.table.builder.pagination.service";

export interface ISearchForm {
    searchText: string;
}

@Injectable()
export class DemoAppCmsUserListSearchFormService extends SearchFormService {
    private readonly router: Router = inject<Router>(Router);
    private readonly tableBuilderPaginationRouteService: DemoAppCmsUserListTableBuilderPaginationService = inject<DemoAppCmsUserListTableBuilderPaginationService>(DemoAppCmsUserListTableBuilderPaginationService);

    public override handleSearch(searchText: string): void {
        this.router.navigate([], {
            queryParams: {
                search: searchText,
                [this.tableBuilderPaginationRouteService.pageKey]: 0,
            },
            queryParamsHandling: "merge",
        });
    }
}