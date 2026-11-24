import { Component } from "@angular/core";
import { EmbedTableBuilderService } from "./table-builder/embed.table.builder.demo.service";
import { TABLE_BUILDER_REFRESHER_PROVIDER } from "../../shared/table-builder/table.builder.token";
import { EmbedTableBuilderSortService } from "./table-builder/embed.table.builder.demo.sort.service";
import { EmbedTableBuilderColumnService } from "./table-builder/embed.table.builder.demo.column.service";
import { EmbedTableBuilderSelectionService } from "./table-builder/embed.table.builder.demo.selection.service";
import { EmbedTableBuilderPaginationService } from "./table-builder/embed.table.builder.demo.pagination.service";
import { EmbedTableBuilderColumnHeaderService } from "./table-builder/embed.table.builder.demo.column.header.service";
import { TableBuilderPaginationBaseService } from "../../shared/table-builder/service/table.builder.pagination.base.service";
import { TableBuilderComponent, TableBuilderService, TableBuilderColumnHeaderService, TableBuilderSortService, TableBuilderSelectionService, TableBuilderColumnService } from "../../shared/table-builder";

@Component({
    selector: "app-embed-table-builder-demo",
    styleUrl: "./embed.table.builder.demo.css",
    templateUrl: "./embed.table.builder.demo.html",
    imports: [
        TableBuilderComponent
    ],
    providers: [
        EmbedTableBuilderService,
        {
            provide: TableBuilderService,
            useExisting: EmbedTableBuilderService
        },
        EmbedTableBuilderPaginationService,
        {
            provide: TableBuilderPaginationBaseService,
            useExisting: EmbedTableBuilderPaginationService
        },
        EmbedTableBuilderColumnHeaderService,
        {
            provide: TableBuilderColumnHeaderService,
            useExisting: EmbedTableBuilderColumnHeaderService
        },
        EmbedTableBuilderSortService,
        {
            provide: TableBuilderSortService,
            useExisting: EmbedTableBuilderSortService
        },
        EmbedTableBuilderSelectionService,
        {
            provide: TableBuilderSelectionService,
            useExisting: EmbedTableBuilderSelectionService,
        },
        EmbedTableBuilderColumnService,
        {
            provide: TableBuilderColumnService,
            useExisting: EmbedTableBuilderColumnService,
        },
        TABLE_BUILDER_REFRESHER_PROVIDER
    ]
})
export class EmbedTableBuilderDemo { }
