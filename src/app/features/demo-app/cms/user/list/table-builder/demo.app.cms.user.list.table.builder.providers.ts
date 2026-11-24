import { Provider } from "@angular/core";

import { DemoAppCmsUserListTableBuilderService } from "./demo.app.cms.user.list.table.builder.service";
import { TABLE_BUILDER_REFRESHER_PROVIDER } from "../../../../../shared/table-builder/table.builder.token";
import { DemoAppCmsUserListTableBuilderSortService } from "./demo.app.cms.user.list.table.builder.sort.service";
import { DemoAppCmsUserListTableBuilderColumnService } from "./demo.app.cms.user.list.table.builder.column.service";
import { DemoAppCmsUserListTableBuilderPaginationService } from "./demo.app.cms.user.list.table.builder.pagination.service";
import { DemoAppCmsUserListTableBuilderSelectionService } from "./demo.app.cms.user.list.table.builder.selection.service";
import { DemoAppCmsUserListTableBuilderColumnHeaderService } from "./demo.app.cms.user.list.table.builder.column.header.service";
import { TableBuilderPaginationBaseService } from "../../../../../shared/table-builder/service/table.builder.pagination.base.service";
import { TableBuilderService, TableBuilderColumnHeaderService, TableBuilderSortService, TableBuilderSelectionService, TableBuilderColumnService } from "../../../../../shared/table-builder";

export function getDemoAppCmsUserListTableBuilderProviders(): Provider[] {
    return [
        DemoAppCmsUserListTableBuilderService,
        {
            provide: TableBuilderService,
            useExisting: DemoAppCmsUserListTableBuilderService
        },
        DemoAppCmsUserListTableBuilderPaginationService,
        {
            provide: TableBuilderPaginationBaseService,
            useExisting: DemoAppCmsUserListTableBuilderPaginationService
        },
        DemoAppCmsUserListTableBuilderColumnHeaderService,
        {
            provide: TableBuilderColumnHeaderService,
            useExisting: DemoAppCmsUserListTableBuilderColumnHeaderService
        },
        DemoAppCmsUserListTableBuilderSortService,
        {
            provide: TableBuilderSortService,
            useExisting: DemoAppCmsUserListTableBuilderSortService
        },
        DemoAppCmsUserListTableBuilderSelectionService,
        {
            provide: TableBuilderSelectionService,
            useExisting: DemoAppCmsUserListTableBuilderSelectionService,
        },
        DemoAppCmsUserListTableBuilderColumnService,
        {
            provide: TableBuilderColumnService,
            useExisting: DemoAppCmsUserListTableBuilderColumnService,
        },
        TABLE_BUILDER_REFRESHER_PROVIDER
    ];
}