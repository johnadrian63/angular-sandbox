import {
    Component,
    inject,
    model,
    ModelSignal,
    OnInit,
    ViewContainerRef
} from "@angular/core";

import { ITableBuilderRowData } from "../../model";
import { TableBuilderColumnService } from "../../service";
import { DataDisplayResolverAbstractComponent } from "../../../data-display/data-display.resolver.abstract.component";

@Component({
    selector: "app-table-builder-data-display-renderer",
    template: "",
    styles: [
        `
            :host {
                display: none;
            }
        `
    ]
})
export class TableBuilderDataDisplayRendererComponent extends DataDisplayResolverAbstractComponent implements OnInit {
    public readonly rowData: ModelSignal<ITableBuilderRowData> = model.required<ITableBuilderRowData>();
    public readonly rowIndex: ModelSignal<number> = model.required<number>();
    public readonly columnKey: ModelSignal<string> = model.required<string>();

    private readonly columnService: TableBuilderColumnService = inject<TableBuilderColumnService>(TableBuilderColumnService);
    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);

    public ngOnInit(): void {
        this.columnService.handle(this.vcr, this.columnKey(), this.rowData(), this.rowIndex());
    }
}
