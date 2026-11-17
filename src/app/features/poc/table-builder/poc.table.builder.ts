import { Component } from "@angular/core";

import { PocTableBuilderService } from "./poc.table.builder.service";
import { PocTableBuilderSortService } from "./poc.table.builder.sort.service";
import { PocTableBuilderColumnService } from "./poc.table.builder.column.service";
import { PocTableBuilderSelectionService } from "./poc.table.builder.selection.service";
import { PocTableBuilderPaginationService } from "./poc.table.builder.pagination.service";
import { PocTableBuilderColumnHeaderService } from "./poc.table.builder.column.header.service";
import { TableBuilderColumnHeaderService, TableBuilderColumnService, TableBuilderComponent, TableBuilderPaginationService, TableBuilderSelectionService, TableBuilderService, TableBuilderSortService } from "../../shared/table-builder";

@Component({
    selector: "app-poc-table-builder",
    styleUrl: "./poc.table.builder.css",
    templateUrl: "./poc.table.builder.html",
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
            provide: TableBuilderPaginationService,
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
export class PocTableBuilder { }
