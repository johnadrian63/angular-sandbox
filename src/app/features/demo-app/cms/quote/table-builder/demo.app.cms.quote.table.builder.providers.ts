import { Provider } from "@angular/core";

import { DemoAppCmsQuoteTableBuilderService } from "./demo.app.cms.quote.table.builder.service";
import { TABLE_BUILDER_REFRESHER_PROVIDER } from "../../../../shared/table-builder/table.builder.token";
import { DemoAppCmsQuoteTableBuilderSortService } from "./demo.app.cms.quote.table.builder.sort.service";
import { DemoAppCmsQuoteTableBuilderColumnService } from "./demo.app.cms.quote.table.builder.column.service";
import { DemoAppCmsQuoteTableBuilderSelectionService } from "./demo.app.cms.quote.table.builder.selection.service";
import { DemoAppCmsQuoteTableBuilderPaginationService } from "./demo.app.cms.quote.table.builder.pagination.service";
import { DemoAppCmsQuoteTableBuilderColumnHeaderService } from "./demo.app.cms.quote.table.builder.column.header.service";
import { TableBuilderPaginationBaseService } from "../../../../shared/table-builder/service/table.builder.pagination.base.service";
import { TableBuilderService, TableBuilderColumnHeaderService, TableBuilderColumnService, TableBuilderSelectionService, TableBuilderSortBaseService } from "../../../../shared/table-builder";

export function getDemoAppCmsQuoteTableBuilderProviders(): Provider[] {
    return [
        DemoAppCmsQuoteTableBuilderService,
        {
            provide: TableBuilderService,
            useExisting: DemoAppCmsQuoteTableBuilderService,
        },
        DemoAppCmsQuoteTableBuilderColumnHeaderService,
        {
            provide: TableBuilderColumnHeaderService,
            useExisting: DemoAppCmsQuoteTableBuilderColumnHeaderService
        },
        DemoAppCmsQuoteTableBuilderColumnService,
        {
            provide: TableBuilderColumnService,
            useExisting: DemoAppCmsQuoteTableBuilderColumnService
        },
        DemoAppCmsQuoteTableBuilderPaginationService,
        {
            provide: TableBuilderPaginationBaseService,
            useExisting: DemoAppCmsQuoteTableBuilderPaginationService
        },
        DemoAppCmsQuoteTableBuilderSelectionService,
        {
            provide: TableBuilderSelectionService,
            useExisting: DemoAppCmsQuoteTableBuilderSelectionService
        },
        DemoAppCmsQuoteTableBuilderSortService,
        {
            provide: TableBuilderSortBaseService,
            useExisting: DemoAppCmsQuoteTableBuilderSortService
        },
        TABLE_BUILDER_REFRESHER_PROVIDER
    ];
}