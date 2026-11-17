import {
    Component,
    OnInit
} from "@angular/core";

import { TableBuilderResetService } from "../../service/table-builder.reset.service";

@Component({
    selector: "app-table-builder-reset-component",
    templateUrl: "./table-builder.reset.component.html",
    styleUrl: "./table-builder.reset.component.css"
})
export class TableBuilderResetComponent implements OnInit {

    constructor(
        private readonly tableBuilderResetService: TableBuilderResetService
    ) { }

    public ngOnInit(): void {
    }

    public reset(): void {
        this.tableBuilderResetService.reset();
    }
}
