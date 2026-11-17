import {
    Component,
    Input,
    OnInit,
    ViewContainerRef
} from "@angular/core";

import { ITableBuilderHeaderCellData } from "../../model";
import { TableBuilderColumnHeaderService } from "../../service";
import { DataDisplayResolverAbstractComponent } from "../../../data-display/data-display.resolver.abstract.component";

@Component({
    selector: "app-table-builder-data-display-header-resolver",
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
