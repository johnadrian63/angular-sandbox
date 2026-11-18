import {
    Component,
    model,
    ModelSignal,
    OnInit,
    ViewContainerRef
} from "@angular/core";

import { ITableBuilderHeaderCellData } from "../../model";
import { TableBuilderColumnHeaderService } from "../../service";
import { DataDisplayResolverAbstractComponent } from "../../../data-display/data-display.resolver.abstract.component";

@Component({
    selector: "app-table-builder-data-display-header-renderer",
    template: ""
})
export class TableBuilderDataDisplayHeaderRendererComponent extends DataDisplayResolverAbstractComponent implements OnInit {
    public readonly column: ModelSignal<ITableBuilderHeaderCellData> = model.required<ITableBuilderHeaderCellData>();

    constructor(
        private readonly columnHeaderService: TableBuilderColumnHeaderService,
        private readonly vcr: ViewContainerRef
    ) {
        super();
    }

    public ngOnInit(): void {
        this.columnHeaderService.handle(this.vcr, this.column());
    }
}
