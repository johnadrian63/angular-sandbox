import { Component } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { SearchForm } from "../../../../shared/search-form/search.form";
import { DemoAppCmsPostListView } from "./view/demo.app.cms.post.list.view";
import { SearchFormService } from "../../../../shared/search-form/search.form.service";
import { TableBuilderService, TableBuilderSortService } from "../../../../shared/table-builder";
import { TABLE_BUILDER_REFRESHER_PROVIDER } from "../../../../shared/table-builder/table.builder.token";
import { DemoAppCmsPostListFilterSearchService } from "./filter/demo.app.cms.post.list.filter.search.service";
import { DemoAppCmsPostListTableBuilderService } from "./table-builder/demo.app.cms.post.list.table.builder.service";
import { DemoAppCmsPostListTableBuilderSortService } from "./table-builder/demo.app.cms.post.list.table.builder.sort.service";
import { TableBuilderPaginationBaseService } from "../../../../shared/table-builder/service/table.builder.pagination.base.service";
import { DemoAppCmsPostListTableBuilderPaginationService } from "./table-builder/demo.app.cms.post.list.table.builder.pagination.service";

@Component({
    selector: "app-demo-app-cms-post-list",
    templateUrl: "./demo.app.cms.post.list.html",
    imports: [
        FaIconComponent,
        DemoAppCmsPostListView,
        SearchForm
    ],
    providers: [
        DemoAppCmsPostListFilterSearchService,
        {
            provide: SearchFormService,
            useExisting: DemoAppCmsPostListFilterSearchService
        },
        DemoAppCmsPostListTableBuilderService,
        {
            provide: TableBuilderService,
            useExisting: DemoAppCmsPostListTableBuilderService
        },
        DemoAppCmsPostListTableBuilderPaginationService,
        {
            provide: TableBuilderPaginationBaseService,
            useExisting: DemoAppCmsPostListTableBuilderPaginationService
        },
        DemoAppCmsPostListTableBuilderSortService,
        {
            provide: TableBuilderSortService,
            useExisting: DemoAppCmsPostListTableBuilderSortService
        },
        TABLE_BUILDER_REFRESHER_PROVIDER
    ]
})
export class DemoAppCmsPostList {
    public readonly faPlus = faPlus;
}
