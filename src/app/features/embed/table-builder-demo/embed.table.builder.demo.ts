import { Component } from "@angular/core";
import { TableBuilderComponent, TableBuilderService, TableBuilderColumnHeaderService, TableBuilderSortService, TableBuilderSelectionService, TableBuilderColumnService } from "../../shared/table-builder";
import { TableBuilderPaginationBaseService } from "../../shared/table-builder/service/table.builder.pagination.base.service";
import { PocTableBuilderColumnHeaderService } from "./table-builder/embed.table.builder.demo.column.header.service";
import { PocTableBuilderColumnService } from "./table-builder/embed.table.builder.demo.column.service";
import { PocTableBuilderPaginationService } from "./table-builder/embed.table.builder.demo.pagination.service";
import { PocTableBuilderSelectionService } from "./table-builder/embed.table.builder.demo.selection.service";
import { PocTableBuilderService } from "./table-builder/embed.table.builder.demo.service";
import { PocTableBuilderSortService } from "./table-builder/embed.table.builder.demo.sort.service";

@Component({
    selector: "app-embed-table-builder-demo",
    styleUrl: "./embed.table.builder.demo.css",
    templateUrl: "./embed.table.builder.demo.html",
    imports: [
        TableBuilderComponent
    ],
    providers: [
        PocTableBuilderService,
        {
            provide: TableBuilderService,
            useExisting: PocTableBuilderService
        },
        PocTableBuilderPaginationService,
        {
            provide: TableBuilderPaginationBaseService,
            useExisting: PocTableBuilderPaginationService
        },
        PocTableBuilderColumnHeaderService,
        {
            provide: TableBuilderColumnHeaderService,
            useExisting: PocTableBuilderColumnHeaderService
        },
        PocTableBuilderSortService,
        {
            provide: TableBuilderSortService,
            useExisting: PocTableBuilderSortService
        },
        PocTableBuilderSelectionService,
        {
            provide: TableBuilderSelectionService,
            useExisting: PocTableBuilderSelectionService,
        },
        PocTableBuilderColumnService,
        {
            provide: TableBuilderColumnService,
            useExisting: PocTableBuilderColumnService,
        }
    ]
})
export class EmbedTableBuilderDemo { }
