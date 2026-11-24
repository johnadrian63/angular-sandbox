import { Provider } from "@angular/core";

import { DemoAppCmsPostListTableBuilderSortService } from "./demo.app.cms.post.list.table.builder.sort.service";
import { DemoAppCmsPostListTableBuilderColumnService } from "./demo.app.cms.post.list.table.builder.column.service";
import { DemoAppCmsPostListTableBuilderSelectionService } from "./demo.app.cms.post.list.table.builder.selection.service";
import { DemoAppCmsPostListTableBuilderColumnHeaderService } from "./demo.app.cms.post.list.table.builder.column.header.service";
import { TableBuilderColumnHeaderService, TableBuilderSortService, TableBuilderSelectionService, TableBuilderColumnService } from "../../../../../shared/table-builder";

export function getDemoAppCmsPostListTableBuilderProviders(): Provider[] {
    return [
        DemoAppCmsPostListTableBuilderColumnHeaderService,
        {
            provide: TableBuilderColumnHeaderService,
            useExisting: DemoAppCmsPostListTableBuilderColumnHeaderService
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