import { Provider } from "@angular/core";

import { DemoAppCmsPostTagsTableBuilderService } from "./demo.app.cms.post.tags.table.builder.service.";
import { DemoAppCmsPostTagsTableBuilderSortService } from "./demo.app.cms.post.tags.table.builder.sort.service";
import { DemoAppCmsPostTagsTableBuilderColumnService } from "./demo.app.cms.post.tags.table.builder.column.service";
import { DemoAppCmsPostTagsTableBuilderSelectionService } from "./demo.app.cms.post.tags.table.builder.selection.service";
import { DemoAppCmsPostTagsTableBuilderPaginationService } from "./demo.app.cms.post.tags.table.builder.pagination.service";
import { DemoAppCmsPostTagsTableBuilderColumnHeaderService } from "./demo.app.cms.post.tags.table.builder.column.header.service";
import { TableBuilderPaginationBaseService } from "../../../../../shared/table-builder/service/table.builder.pagination.base.service";
import { TableBuilderService, TableBuilderColumnHeaderService, TableBuilderColumnService, TableBuilderSelectionService, TableBuilderSortBaseService } from "../../../../../shared/table-builder";

export function getDemoAppCmsPostTagsTableBuilderProviders(): Provider[] {
    return [
        DemoAppCmsPostTagsTableBuilderService,
        {
            provide: TableBuilderService,
            useExisting: DemoAppCmsPostTagsTableBuilderService,
        },
        DemoAppCmsPostTagsTableBuilderColumnHeaderService,
        {
            provide: TableBuilderColumnHeaderService,
            useExisting: DemoAppCmsPostTagsTableBuilderColumnHeaderService
        },
        DemoAppCmsPostTagsTableBuilderColumnService,
        {
            provide: TableBuilderColumnService,
            useExisting: DemoAppCmsPostTagsTableBuilderColumnService
        },
        DemoAppCmsPostTagsTableBuilderPaginationService,
        {
            provide: TableBuilderPaginationBaseService,
            useExisting: DemoAppCmsPostTagsTableBuilderPaginationService
        },
        DemoAppCmsPostTagsTableBuilderSelectionService,
        {
            provide: TableBuilderSelectionService,
            useExisting: DemoAppCmsPostTagsTableBuilderSelectionService
        },
        DemoAppCmsPostTagsTableBuilderSortService,
        {
            provide: TableBuilderSortBaseService,
            useExisting: DemoAppCmsPostTagsTableBuilderSortService
        }
    ];
}