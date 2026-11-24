import { Component } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { TableBuilderComponent } from "../../../../shared/table-builder";
import { SearchForm } from "../../../../shared/search-form/search.form";
import { SearchFormService } from "../../../../shared/search-form/search.form.service";
import { DemoAppCmsPostListFilterSearchService } from "./filter/demo.app.cms.post.list.filter.search.service";
import { getDemoAppCmsPostListTableBuilderProviders } from "./table-builder/demo.app.cms.post.list.table.builder.providers";

@Component({
    selector: "app-demo-app-cms-post-list",
    templateUrl: "./demo.app.cms.post.list.html",
    imports: [
        FaIconComponent,
        TableBuilderComponent,
        SearchForm
    ],
    providers: [
        DemoAppCmsPostListFilterSearchService,
        {
            provide: SearchFormService,
            useExisting: DemoAppCmsPostListFilterSearchService
        },
        ...getDemoAppCmsPostListTableBuilderProviders()
    ]
})
export class DemoAppCmsPostList {
    public faPlus = faPlus;
}
