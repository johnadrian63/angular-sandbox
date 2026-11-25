import { DestroyRef, inject, Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { lastValueFrom, skip } from "rxjs";

import { IQuoteFilter } from "../model/quote.filter.model";
import { DemoAppCmsQuoteService } from "../demo.app.cms.quote.service";
import { TableBuilderService } from "../../../../shared/table-builder";
import { IQuoteAdapter, QuoteAdapter } from "../demo.app.cms.quote.adapter";
import { DemoAppCmsQuoteTableBuilderSortService } from "./demo.app.cms.quote.table.builder.sort.service";
import { DemoAppCmsQuoteTableBuilderPaginationService } from "./demo.app.cms.quote.table.builder.pagination.service";
import { TableBuilderRefresher, TABLE_BUILDER_REFRESH_TOKEN } from "../../../../shared/table-builder/table.builder.token";

@Injectable()
export class DemoAppCmsQuoteTableBuilderService extends TableBuilderService {
    private readonly quoteService: DemoAppCmsQuoteService = inject<DemoAppCmsQuoteService>(DemoAppCmsQuoteService);
    private readonly tableBuilderPaginationService: DemoAppCmsQuoteTableBuilderPaginationService = inject<DemoAppCmsQuoteTableBuilderPaginationService>(DemoAppCmsQuoteTableBuilderPaginationService);
    private readonly tableBuilderSortService: DemoAppCmsQuoteTableBuilderSortService = inject<DemoAppCmsQuoteTableBuilderSortService>(DemoAppCmsQuoteTableBuilderSortService);
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly refresher = inject<TableBuilderRefresher>(TABLE_BUILDER_REFRESH_TOKEN);

    public override init(): void {
        this.activatedRoute.queryParams
            .pipe(
                skip(1),
                takeUntilDestroyed(this.destroyRef)
            ).subscribe(async () => {
                this.refresher.refresh();
            });
    }

    public override async getData(): Promise<IQuoteAdapter[]> {
        try {
            this.setLoading(true);

            const limit = this.tableBuilderPaginationService.pageSize;
            const skip = limit * this.tableBuilderPaginationService.page;
            const sortBy = this.tableBuilderSortService.sort.column;
            const order = this.tableBuilderSortService.sort.direction;

            const filter: IQuoteFilter = {
                skip,
                limit
            };

            if (sortBy && order) {
                filter.sortBy = sortBy;
                filter.order = order;
            }

            const request = this.quoteService.getList(filter);
            const result = await lastValueFrom(request);

            this.tableBuilderPaginationService.setCount(result.total);

            const tags: IQuoteAdapter[] = [];

            for (let quote of result.quotes) {
                tags.push(new QuoteAdapter(quote));
            }

            return tags;
        } catch (error) {
            console.error("error", error);
            return []
        } finally {
            this.setLoading(false);
        }
    }

    public override reset(): void {
        // cleanup logic here
    }
}