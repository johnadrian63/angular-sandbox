import { inject, Injectable, Optional } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { DataCollatorSearchService } from "./data.collator.search.service";
import { DataCollatorSortBaseService } from "./data.collator.sort.base.service";
import { DataCollatorPaginationService } from "./data.collator.pagination.service";

@Injectable()
export abstract class DataCollatorResetService {

    public get reset$(): Observable<boolean> {
        return this.resetSubject.asObservable();
    }

    private readonly resetSubject: Subject<boolean> = new Subject<boolean>();

    protected readonly dataCollatorPaginationService: DataCollatorPaginationService = inject<DataCollatorPaginationService>(DataCollatorPaginationService);
    protected readonly dataCollatorSortService: DataCollatorSortBaseService = inject<DataCollatorSortBaseService>(DataCollatorSortBaseService);
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
