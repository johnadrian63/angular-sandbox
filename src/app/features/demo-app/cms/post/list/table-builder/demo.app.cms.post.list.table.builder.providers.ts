import { Provider } from "@angular/core";

import { DemoAppCmsPostListTableBuilderService } from "./demo.app.cms.post.list.table.builder.service";
import { DemoAppCmsPostListTableBuilderSortService } from "./demo.app.cms.post.list.table.builder.sort.service";
import { DemoAppCmsPostListTableBuilderColumnService } from "./demo.app.cms.post.list.table.builder.column.service";
import { DemoAppCmsPostListTableBuilderPaginationService } from "./demo.app.cms.post.list.table.builder.pagination.service";
import { DemoAppCmsPostListTableBuilderSelectionService } from "./demo.app.cms.post.list.table.builder.selection.service";
import { DemoAppCmsPostListTableBuilderColumnHeaderService } from "./demo.app.cms.post.list.table.builder.column.header.service";
import { TableBuilderPaginationBaseService } from "../../../../../shared/table-builder/service/table.builder.pagination.base.service";
import { TableBuilderService, TableBuilderColumnHeaderService, TableBuilderSortService, TableBuilderSelectionService, TableBuilderColumnService } from "../../../../../shared/table-builder";

export function getDemoAppCmsPostListTableBuilderProviders(): Provider[] {
    return [
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
        DemoAppCmsPostListTableBuilderColumnHeaderService,
        {
            provide: TableBuilderColumnHeaderService,
            useExisting: DemoAppCmsPostListTableBuilderColumnHeaderService
        },
        DemoAppCmsPostListTableBuilderSortService,
        {
            provide: TableBuilderSortService,
            useExisting: DemoAppCmsPostListTableBuilderSortService
        },
        DemoAppCmsPostListTableBuilderSelectionService,
        {
            provide: TableBuilderSelectionService,
            useExisting: DemoAppCmsPostListTableBuilderSelectionService,
        },
        DemoAppCmsPostListTableBuilderColumnService,
        {
            provide: TableBuilderColumnService,
            useExisting: DemoAppCmsPostListTableBuilderColumnService,
        }
    ];
}