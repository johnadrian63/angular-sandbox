import {
    Component,
    OnInit
} from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import {
    TableBuilderPaginationService,
    TableBuilderSearchService
} from "../../service";

@Component({
    selector: "app-table-builder-search-component",
    templateUrl: "./table-builder.search.component.html",
    styleUrl: "./table-builder.search.component.css",
    imports: [
        ReactiveFormsModule
    ]
})
export class TableBuilderSearchComponent implements OnInit {

    public get placeholder(): string {
        return this.tableBuilderSearchService.placeholder;
    }

    public get formGroup(): FormGroup {
        return this.tableBuilderSearchService.formGroup;
    }

    constructor(
        private readonly tableBuilderPaginationService: TableBuilderPaginationService,
        private readonly tableBuilderSearchService: TableBuilderSearchService
    ) { }

    public ngOnInit(): void {
        // FIXME refactor this!
        this.tableBuilderSearchService.formGroup.get("searchText")?.setValue(this.tableBuilderSearchService.searchText);
    }

    public apply(): void {
        this.tableBuilderPaginationService.setPaging(0, this.tableBuilderPaginationService.pageSize);

        this.tableBuilderSearchService.search();
    }

    public clear(): void {
        this.tableBuilderSearchService.clear();

        this.apply();
    }
}
