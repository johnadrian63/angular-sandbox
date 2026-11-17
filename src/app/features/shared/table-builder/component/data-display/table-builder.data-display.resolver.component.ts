import {
    Component,
    Input,
    OnInit,
    ViewContainerRef
} from "@angular/core";

import { ITableBuilderRowData } from "../../model";
import { TableBuilderColumnService } from "../../service";
import { DataDisplayResolverAbstractComponent } from "../../../data-display/data-display.resolver.abstract.component";

@Component({
    selector: "app-table-builder-data-display-resolver",
    template: "",
    styles: [
        `
            :host {
                display: none;
            }
        `
    ]
})
export class TableBuilderDataDisplayResolverComponent extends DataDisplayResolverAbstractComponent implements OnInit {
    // FIXME refactor this!
    @Input() public rowIndex!: number;
    // FIXME refactor this!
    @Input() public columnKey!: string;
    // FIXME refactor this!
    @Input() public rowData!: ITableBuilderRowData;

    constructor(
        private readonly columnService: TableBuilderColumnService,
        private readonly vcr: ViewContainerRef
    ) {
        super();
    }

    public ngOnInit(): void {
        this.columnService.handle(this.vcr, this.columnKey, this.rowData, this.rowIndex);
    }
}
