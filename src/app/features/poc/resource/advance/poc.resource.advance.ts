import { Component, inject } from "@angular/core";

import { ITodoAdapter } from "../model.adapter";
import { PocResourceAdvanceCollatorService } from "./poc.resource.advance.collator.service";
import { PocResourceCollatorPaginationService } from "./poc.resource.advance.collator.pagination.service";

@Component({
    selector: "app-poc-resource-advance",
    templateUrl: "./poc.resource.advance.html",
    providers: [
        PocResourceAdvanceCollatorService,
        PocResourceCollatorPaginationService,
    ]
})
export class PocResourceAdvance {
    private readonly collatorService = inject<PocResourceAdvanceCollatorService>(PocResourceAdvanceCollatorService);
    private readonly paginationService = inject<PocResourceCollatorPaginationService>(PocResourceCollatorPaginationService);

    public get dataSource(): ITodoAdapter[] | undefined {
        return this.collatorService.dataSource;
    }

    public get isLoading(): boolean {
        return this.collatorService.isLoading();
    }

    public get hasPrevious(): boolean {
        return this.paginationService.hasPrevious;
    }

    public get hasNext(): boolean {
        return this.paginationService.hasNext;
    }

    public getPreviousPage(): void {
        const page = this.paginationService.page;
        const pageSize = this.paginationService.pageSize;

        this.paginationService.setPaging(page - 1, pageSize);
    }
    public getNextPage(): void {
        const page = this.paginationService.page;
        const pageSize = this.paginationService.pageSize;

        this.paginationService.setPaging(page + 1, pageSize);
    }
}
