import { Component, inject, OnInit } from "@angular/core";

import { DataCollatorService } from "./data.collator.service";
import { IDataCollatorRowData } from "./data-collator.interface";
import { DataCollatorPaginationService } from "./data.collator.pagination.service";

@Component({
    selector: "app-data-collator",
    template: "<ng-content />"
})
export class DataCollator implements OnInit {
    public readonly service: DataCollatorService<IDataCollatorRowData> = inject<DataCollatorService<IDataCollatorRowData>>(DataCollatorService);
    public readonly paginationService: DataCollatorPaginationService = inject<DataCollatorPaginationService>(DataCollatorPaginationService);

    public async ngOnInit(): Promise<void> {
        this.service.init();
        this.paginationService.init();

        const result = await this.service.loadRequest();

        this.service.dataSource.set(result);
    }
}