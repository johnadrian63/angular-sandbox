import { Component } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { TableBuilderComponent } from "../../../../shared/table-builder";
import { SearchForm } from "../../../../shared/search-form/search.form";
import { SearchFormService } from "../../../../shared/search-form/search.form.service";
import { DemoAppCmsPostListSearchFormService } from "./demo.app.cms.post.list.search.form.service";
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
        DemoAppCmsPostListSearchFormService,
        {
            provide: SearchFormService,
            useExisting: DemoAppCmsPostListSearchFormService
        },
        ...getDemoAppCmsPostListTableBuilderProviders()
    ]
})
export class DemoAppCmsPostList {
    public faPlus = faPlus;
}
