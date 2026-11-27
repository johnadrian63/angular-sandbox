import { Component, inject, signal } from "@angular/core";
import { form, FormField, FormRoot } from "@angular/forms/signals";

import { ITodoAdapter } from "../model.adapter";
import { PocResourceAdvanceCollatorService } from "./poc.resource.advance.collator.service";
import { PocResourceCollatorSortService } from "./poc.resource.advance.collator.sort.service";
import { PocResourceCollatorPaginationService } from "./poc.resource.advance.collator.pagination.service";

interface ITodoSort {
    sortBy: string;
    order: string;
}

@Component({
    selector: "app-poc-resource-advance",
    templateUrl: "./poc.resource.advance.html",
    imports: [FormRoot, FormField],
    providers: [
        PocResourceAdvanceCollatorService,
        PocResourceCollatorPaginationService,
        PocResourceCollatorSortService,
    ]
})
export class PocResourceAdvance {

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

    private readonly collatorService = inject<PocResourceAdvanceCollatorService>(PocResourceAdvanceCollatorService);
    private readonly paginationService = inject<PocResourceCollatorPaginationService>(PocResourceCollatorPaginationService);
    private readonly sortService = inject<PocResourceCollatorSortService>(PocResourceCollatorSortService);

    public readonly sortModel = signal<ITodoSort>({
        sortBy: this.sortService.sortBy,
        order: this.sortService.order,
    });
    public readonly formModel = form<ITodoSort>(this.sortModel);

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

    public handleSort(): void {
        const sort = this.sortModel();

        if (sort.sortBy && sort.order) {
            this.sortService.handleSort(sort);
        }

        if (!sort.sortBy && !sort.order) {
            this.sortService.handleSort({
                sortBy: "",
                order: ""
            });
        }
    }
}
