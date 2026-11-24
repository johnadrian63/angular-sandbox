import { Component } from "@angular/core";

import { TableBuilderComponent } from "../../../../shared/table-builder";
import { getDemoAppCmsPostTagsTableBuilderProviders } from "./table-builder/demo.app.cms.post.tags.table.builder.providers";

@Component({
    selector: "app-demo-app-cms-post-tags",
    templateUrl: "./demo.app.cms.post.tags.html",
    imports: [TableBuilderComponent],
    providers: [
        ...getDemoAppCmsPostTagsTableBuilderProviders()
    ]
})
export class DemoAppCmsPostTags { }