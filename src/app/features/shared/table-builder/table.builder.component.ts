import {
    Component,
    inject,
    OnDestroy,
    OnInit,
    Optional,
    signal,
    Signal,
    ViewChild,
    ViewContainerRef,
    WritableSignal
} from "@angular/core";
import { NgClass } from "@angular/common";
import { PageEvent } from "@angular/material/paginator";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ReactiveFormsModule } from "@angular/forms";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSortModule, Sort } from "@angular/material/sort";
import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray
} from "@angular/cdk/drag-drop";

import {
    ITableBuilderRowData,
    TableBuilderHeaderCellData,
} from "./model";
import {
    TableBuilderService,
    TableBuilderColumnHeaderService,
    TableBuilderPaginationService,
    TableBuilderRowService,
    TableBuilderSortService,
    TableBuilderSelectionService,
    SortDirection
} from "./service";
import { UiPaginatorComponent } from "../ui/paginator/ui.paginator.component";
import { TableBuilderMasterSelectionComponent } from "./component/selection/table.builder.master.selection.component";
import { TableBuilderDataDisplayHeaderRendererComponent } from "./component/data-display/table-builder.data-display.header.renderer.component";
import { TableBuilderDataDisplayRendererComponent } from "./component/data-display/table-builder.data-display.renderer.component";

@Component({
    selector: "app-table-builder",
    templateUrl: "./table.builder.component.html",
    styleUrl: "./table.builder.component.css",
    imports: [
        ReactiveFormsModule,
        MatTableModule,
        MatRadioModule,
        MatProgressBarModule,
        MatSortModule,
        MatTooltipModule,
        DragDropModule,
        NgClass,
        UiPaginatorComponent,
        TableBuilderMasterSelectionComponent,
        TableBuilderDataDisplayRendererComponent,
        TableBuilderDataDisplayHeaderRendererComponent,
    ]
})
export class TableBuilderComponent implements OnInit, OnDestroy {

    public get columns(): TableBuilderHeaderCellData[] {
        return this.tableBuilderColumnHeaderService.headers;
    }

    public get columnsToDisplay(): string[] {
        return this.tableBuilderColumnHeaderService.columnsToDisplay();
    }

    public get pageSizeOptions(): number[] {
        return this.tableBuilderPaginationService.pageSizeOptions;
    }

    public get page(): number {
        return this.tableBuilderPaginationService.page;
    }

    public get pageSize(): number {
        return this.tableBuilderPaginationService.pageSize;
    }

    public get count(): number {
        return this.tableBuilderPaginationService.count;
    }

    public get firstAndLastButtonsEnabled(): boolean {
        return this.tableBuilderPaginationService.firstAndLastButtonsEnabled;
    }

    public get paginationEnabled(): boolean {
        return this.tableBuilderPaginationService.paginationEnabled;
    }

    public get masterSelectionEnabled(): boolean {
        return this.tableBuilderSelectionService.masterSelectionEnabled;
    }

    public get loading(): Signal<boolean> {
        return this.tableBuilderService.loading;
    }

    public readonly dataSource: WritableSignal<ITableBuilderRowData[]> = signal<ITableBuilderRowData[]>([]);

    private readonly tableBuilderService: TableBuilderService = inject<TableBuilderService>(TableBuilderService);
    private readonly tableBuilderPaginationService: TableBuilderPaginationService = inject<TableBuilderPaginationService>(TableBuilderPaginationService);
    private readonly tableBuilderColumnHeaderService: TableBuilderColumnHeaderService = inject<TableBuilderColumnHeaderService>(TableBuilderColumnHeaderService);
    private readonly tableBuilderSortService: TableBuilderSortService = inject<TableBuilderSortService>(TableBuilderSortService);
    private readonly tableBuilderSelectionService: TableBuilderSelectionService = inject<TableBuilderSelectionService>(TableBuilderSelectionService);
    private readonly tableBuilderRowService: TableBuilderRowService | null = inject<TableBuilderRowService>(TableBuilderRowService, {
        optional: true
    });

    constructor() {
        this.tableBuilderService.onRefresh
            .pipe(takeUntilDestroyed())
            .subscribe(() => {
                this.updateSource();
            });
    }

    public async ngOnInit(): Promise<void> {
        this.tableBuilderService.init();

        await this.updateSource();

        this.tableBuilderColumnHeaderService.init();
    }

    public ngOnDestroy(): void {
        this.tableBuilderService.reset();
    }

    public handRowClick(rowData: ITableBuilderRowData, columnKey: string): void {
        this.tableBuilderRowService?.rowClick(rowData, columnKey);
    }

    public handleRowClass(rowData: ITableBuilderRowData): string {
        return this.tableBuilderRowService?.handleClass(rowData) ?? "";
    }

    public handlePageChanged(pageEvent: PageEvent): void {
        this.tableBuilderPaginationService.setPaging(pageEvent.pageIndex, pageEvent.pageSize);
        this.tableBuilderPaginationService.handlePageChange(pageEvent.pageIndex, pageEvent.pageSize);
        this.tableBuilderSelectionService.reset();
    }

    public handleSort(sort: Sort): void {
        this.tableBuilderSortService.handleSort({
            columnKey: sort.active,
            direction: <SortDirection>sort.direction
        });
    }

    public handleColumnDrop(event: CdkDragDrop<TableBuilderHeaderCellData[]>): void {
        const targetColumnKey = this.columnsToDisplay[event.currentIndex];
        const targetColumn = this.columns.find((column: TableBuilderHeaderCellData) => column.key === targetColumnKey);
        // FIXME refactor this!
        if (targetColumn?.movable === true) {
            moveItemInArray(this.columnsToDisplay, event.previousIndex, event.currentIndex);
        }
    }

    private async updateSource(): Promise<void> {
        const dataSource = await this.tableBuilderService.getData();

        this.dataSource.set(dataSource);
    }
}
