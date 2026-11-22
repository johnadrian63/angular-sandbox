import { Component } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { TableBuilderComponent } from "../../../../shared/table-builder";
import { SearchForm } from "../../../../shared/search-form/search.form";
import { SearchFormService } from "../../../../shared/search-form/search.form.service";
import { DemoAppCmsUserListSearchFormService } from "./demo.app.cms.user.list.search.form.service";
import { getDemoAppCmsUserListTableBuilderProviders } from "./table-builder/demo.app.cms.user.list.table.builder.providers";

@Component({
    selector: "app-demo-app-cms-user-list",
    templateUrl: "./demo.app.cms.user.list.html",
    imports: [
        FaIconComponent,
        TableBuilderComponent,
        SearchForm
    ],
    providers: [
        DemoAppCmsUserListSearchFormService,
        {
            provide: SearchFormService,
            useExisting: DemoAppCmsUserListSearchFormService
        },
        ...getDemoAppCmsUserListTableBuilderProviders()
    ]
})
export class DemoAppCmsUserList {
    public faPlus = faPlus;
}
