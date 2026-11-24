import { inject, Injectable, Optional } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { DataCollatorSortService } from "./data.collator.sort.service";
import { DataCollatorSearchService } from "./data.collator.search.service";
import { DataCollatorPaginationService } from "./data.collator.pagination.service";

@Injectable()
export abstract class DataCollatorResetService {

    public get reset$(): Observable<boolean> {
        return this.resetSubject.asObservable();
    }

    private readonly resetSubject: Subject<boolean> = new Subject<boolean>();

    protected readonly dataCollatorPaginationService: DataCollatorPaginationService = inject<DataCollatorPaginationService>(DataCollatorPaginationService);
    protected readonly dataCollatorSortService: DataCollatorSortService = inject<DataCollatorSortService>(DataCollatorSortService);
    protected readonly dataCollatorSearchService: DataCollatorSearchService | null = inject<DataCollatorSearchService>(DataCollatorSearchService, {
        optional: true
    });

    public reset(): void {
        this.dataCollatorSearchService?.reset();
        this.dataCollatorPaginationService.reset();
        this.dataCollatorSortService.reset();

        this.resetSubject.next(true);
    }
}
