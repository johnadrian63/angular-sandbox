import { ChangeDetectorRef, Component } from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { TableBuilderPaginationService, TableBuilderSelectionService } from "../../service";
import { DataDisplayCheckboxComponent } from "../../../data-display/checkbox/data-display.checkbox.component";

@Component({
    selector: "app-table-builder-master-selection",
    templateUrl: "./table.builder.master.selection.component.html",
    imports: [
        DataDisplayCheckboxComponent
    ]
})
export class TableBuilderMasterSelectionComponent {

    public get checked(): boolean {
        return this.tableBuilderSelectionService.allSelected;
    }

    public get totalCount(): number {
        return this.tableBuilderPaginationService.count;
    }

    public get selectedCount(): number {
        return this.tableBuilderSelectionService.selectedCount;
    }

    public get partiallySelected(): boolean {
        return this.tableBuilderSelectionService.partiallySelected;
    }

    constructor(
        private readonly tableBuilderSelectionService: TableBuilderSelectionService,
        private readonly tableBuilderPaginationService: TableBuilderPaginationService,
        private readonly cdr: ChangeDetectorRef
    ) {
        this.tableBuilderSelectionService.selection$
            .pipe(takeUntilDestroyed())
            .subscribe(() => {
                this.cdr.detectChanges();
            });
    }

    public handleSelect(checkbox: MatCheckboxChange): void {
        this.tableBuilderSelectionService.selectAll(checkbox.checked);
    }
}
