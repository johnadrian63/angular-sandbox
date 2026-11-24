import { Provider } from "@angular/core";

import { TableBuilderColumnHeaderService, TableBuilderSelectionService } from "../../../../../shared/table-builder";
import { DemoAppCmsPostListTableBuilderSelectionService } from "./demo.app.cms.post.list.table.builder.selection.service";
import { DemoAppCmsPostListTableBuilderColumnHeaderService } from "./demo.app.cms.post.list.table.builder.column.header.service";

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
        }
    ];
}