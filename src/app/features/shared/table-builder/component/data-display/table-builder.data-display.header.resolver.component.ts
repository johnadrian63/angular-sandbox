import {
    Component,
    Input,
    OnInit,
    ViewContainerRef
} from "@angular/core";

import { TableBuilderColumnHeaderService } from "../../service";
import { ITableBuilderHeaderCellData } from "../../model";
import { DataDisplayResolverAbstractComponent } from "../../../data-display/data-display.resolver.abstract.component";

@Component({
    selector: "app-table-builder-data-display-header-resolver-component",
    template: ""
})
export class TableBuilderDataDisplayHeaderResolverComponent extends DataDisplayResolverAbstractComponent implements OnInit {
    // FIXME refactor this and use signal!
    @Input() public column!: ITableBuilderHeaderCellData;

    constructor(
        private readonly columnHeaderService: TableBuilderColumnHeaderService,
        private readonly vcr: ViewContainerRef
    ) {
        super();
    }

    public ngOnInit(): void {
        this.columnHeaderService.handle(this.vcr, this.column);
    }
}
