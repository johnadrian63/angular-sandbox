import {
    Component,
    inject,
    model,
    ModelSignal,
    OnInit,
    ViewContainerRef
} from "@angular/core";

import { ITableBuilderHeaderCellData } from "../../model";
import { TableBuilderColumnHeaderService } from "../../service";

@Component({
    selector: "app-table-builder-data-display-header-renderer",
    template: ""
})
export class TableBuilderDataDisplayHeaderRendererComponent implements OnInit {
    public readonly column: ModelSignal<ITableBuilderHeaderCellData> = model.required<ITableBuilderHeaderCellData>();

    private readonly columnHeaderService: TableBuilderColumnHeaderService = inject<TableBuilderColumnHeaderService>(TableBuilderColumnHeaderService);
    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);

    public ngOnInit(): void {
        this.columnHeaderService.handle(this.vcr, this.column());
    }
}
