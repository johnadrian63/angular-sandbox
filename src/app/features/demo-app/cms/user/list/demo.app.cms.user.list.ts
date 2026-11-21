import { Component } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { TableBuilderComponent } from "../../../../shared/table-builder";
import { getDemoAppCmsUserListTableBuilderProviders } from "./table-builder/demo.app.cms.user.list.table.builder.providers";

@Component({
    selector: "app-demo-app-cms-user-list",
    templateUrl: "./demo.app.cms.user.list.html",
    imports: [FaIconComponent, TableBuilderComponent],
    providers: [
        ...getDemoAppCmsUserListTableBuilderProviders()
    ]
})
export class DemoAppCmsUserList {
    public faPlus = faPlus;
}
