import { Component } from "@angular/core";
import { PocTableBuilderService } from "./table-builder/poc.table.builder.service";
import { PocTableBuilderSortService } from "./table-builder/poc.table.builder.sort.service";
import { PocTableBuilderColumnService } from "./table-builder/poc.table.builder.column.service";
import { PocTableBuilderSelectionService } from "./table-builder/poc.table.builder.selection.service";
import { PocTableBuilderPaginationService } from "./table-builder/poc.table.builder.pagination.service";
import { PocTableBuilderColumnHeaderService } from "./table-builder/poc.table.builder.column.header.service";
import { TableBuilderPaginationBaseService } from "../../../shared/table-builder/service/table.builder.pagination.base.service";
import { TableBuilderComponent, TableBuilderService, TableBuilderColumnHeaderService, TableBuilderSortService, TableBuilderSelectionService, TableBuilderColumnService } from "../../../shared/table-builder";

@Component({
    selector: "app-poc-table-builder-basic",
    styleUrl: "./poc.table.builder.basic.css",
    templateUrl: "./poc.table.builder.basic.html",
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
export class PocTableBuilderBasic { }
