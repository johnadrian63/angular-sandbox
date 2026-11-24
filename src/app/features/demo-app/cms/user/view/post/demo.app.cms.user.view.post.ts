import { Component, effect, inject, input, InputSignal } from "@angular/core";

import { DemoAppCmsPostListView } from "../../../post/list/view/demo.app.cms.post.list.view";
import { TableBuilderService, TableBuilderSortService } from "../../../../../shared/table-builder";
import { TABLE_BUILDER_REFRESHER_PROVIDER } from "../../../../../shared/table-builder/table.builder.token";
import { DemoAppCmsUserViewPostTableBuilderService } from "./table-builder/demo.app.cms.user.post.view.table.builder.service";
import { TableBuilderPaginationBaseService } from "../../../../../shared/table-builder/service/table.builder.pagination.base.service";
import { DemoAppCmsUserViewPostTableBuilderSortService } from "./table-builder/demo.app.cms.user.post.view.table.builder.sort.service";
import { DemoAppCmsUserViewPostTableBuilderPaginationService } from "./table-builder/demo.app.cms.user.post.view.table.builder.pagination.service";

@Component({
    selector: "app-demo-app-cms-user-view-post",
    templateUrl: "./demo.app.cms.user.view.post.html",
    providers: [
        DemoAppCmsUserViewPostTableBuilderService,
        {
            provide: TableBuilderService,
            useExisting: DemoAppCmsUserViewPostTableBuilderService
        },
        DemoAppCmsUserViewPostTableBuilderPaginationService,
        {
            provide: TableBuilderPaginationBaseService,
            useExisting: DemoAppCmsUserViewPostTableBuilderPaginationService
        },
        DemoAppCmsUserViewPostTableBuilderSortService,
        {
            provide: TableBuilderSortService,
            useExisting: DemoAppCmsUserViewPostTableBuilderSortService
        },
        TABLE_BUILDER_REFRESHER_PROVIDER
    ],
    imports: [DemoAppCmsPostListView]
})
export class DemoAppCmsUserViewPost {
    public readonly userId: InputSignal<number> = input.required<number>();

    private readonly tableBuilderService: DemoAppCmsUserViewPostTableBuilderService = inject<DemoAppCmsUserViewPostTableBuilderService>(DemoAppCmsUserViewPostTableBuilderService);

    constructor() {
        effect(() => {
            this.tableBuilderService.userId.set(this.userId());
        });
    }
}