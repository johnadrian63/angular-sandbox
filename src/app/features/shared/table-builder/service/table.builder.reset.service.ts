import {
    inject,
    Injectable
} from "@angular/core";
import { Observable, Subject } from "rxjs";

import { TableBuilderSortBaseService } from "./table.builder.sort.base.service";
import { TableBuilderPaginationBaseService } from "./table.builder.pagination.base.service";

@Injectable()
export abstract class TableBuilderResetService {

    public get reset$(): Observable<boolean> {
        return this.resetSubject.asObservable();
    }

    private readonly resetSubject: Subject<boolean> = new Subject<boolean>();

    protected readonly tableBuilderPaginationService: TableBuilderPaginationBaseService = inject<TableBuilderPaginationBaseService>(TableBuilderPaginationBaseService);
    protected readonly tableBuilderSortService: TableBuilderSortBaseService = inject<TableBuilderSortBaseService>(TableBuilderSortBaseService);

    public reset(): void {
        this.tableBuilderPaginationService.reset();
        this.tableBuilderSortService.reset();

        this.resetSubject.next(true);
    }
}
