import { Component } from "@angular/core";

import { TableBuilderComponent } from "../../../../../shared/table-builder";
import { getDemoAppCmsPostListTableBuilderProviders } from "../table-builder/demo.app.cms.post.list.table.builder.providers";

@Component({
    selector: "app-demo-app-cms-post-list-view",
    templateUrl: "./demo.app.cms.post.list.view.html",
    imports: [
        TableBuilderComponent
    ],
    providers: [
        ...getDemoAppCmsPostListTableBuilderProviders()
    ]
})
export class DemoAppCmsPostListView { }