import {
    inject,
    Injectable
} from "@angular/core";
import { Observable, Subject } from "rxjs";

import { TableBuilderSortService } from "./table-builder.sort.service";
import { TableBuilderSearchService } from "./table-builder.search.service";
import { TableBuilderPaginationService } from "./table-builder.pagination.service";

@Injectable()
export abstract class TableBuilderResetService {

    public get reset$(): Observable<boolean> {
        return this.resetSubject.asObservable();
    }

    private readonly resetSubject: Subject<boolean> = new Subject<boolean>();

    protected readonly tableBuilderPaginationService: TableBuilderPaginationService = inject<TableBuilderPaginationService>(TableBuilderPaginationService);
    protected readonly tableBuilderSortService: TableBuilderSortService = inject<TableBuilderSortService>(TableBuilderSortService);
    protected readonly tableBuilderSearchService: TableBuilderSearchService | null = inject<TableBuilderSearchService>(TableBuilderSearchService, {
        optional: true
    });

    public reset(): void {
        this.tableBuilderSearchService?.reset();
        this.tableBuilderPaginationService.reset();
        this.tableBuilderSortService.reset();

        this.resetSubject.next(true);
    }
}
