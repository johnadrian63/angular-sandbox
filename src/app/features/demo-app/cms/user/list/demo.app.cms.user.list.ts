import { Component } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { TableBuilderComponent } from "../../../../shared/table-builder";
import { SearchForm } from "../../../../shared/search-form/search.form";
import { DemoAppCmsUserListFilter } from "./filter/demo.app.cms.user.list.filter";
import { SearchFormService } from "../../../../shared/search-form/search.form.service";
import { DemoAppCmsUserListFilterSearchService } from "./filter/demo.app.cms.user.list.filter.search.service";
import { getDemoAppCmsUserListTableBuilderProviders } from "./table-builder/demo.app.cms.user.list.table.builder.providers";

@Component({
    selector: "app-demo-app-cms-user-list",
    templateUrl: "./demo.app.cms.user.list.html",
    imports: [
        FaIconComponent,
        TableBuilderComponent,
        SearchForm,
        DemoAppCmsUserListFilter
    ],
    providers: [
        DemoAppCmsUserListFilterSearchService,
        {
            provide: SearchFormService,
            useExisting: DemoAppCmsUserListFilterSearchService
        },
        ...getDemoAppCmsUserListTableBuilderProviders()
    ]
})
export class DemoAppCmsUserList {
    public faPlus = faPlus;
}
